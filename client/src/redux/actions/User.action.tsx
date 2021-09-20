import { graphqlRequest } from "../../Utils/Apis";
import { setLocalStorageUser } from "../../Utils/Auth";
import { BASE_GQL } from "../../Utils/BaseGraphql";
import {
  CheckingLoginUser,
  CheckingUserExist,
  CreateUser,
  FetchAllInforOfSingleUser,
} from "../gql";
import {
  FETCH_DATA_USER,
  FETCH_DATA_USER_ERROR,
  FETCH_DATA_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../Types";

const graphqlApiOptions = {
  method: "POST",
  url: `${BASE_GQL.base}`,
};

export const getAllInforOfUser = (idUser: string) => async (dispatch: any) => {
  const id = { idUser };
  try {
    dispatch({ type: FETCH_DATA_USER });

    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      FetchAllInforOfSingleUser,
      id
    );
    if (data) {
      dispatch({
        type: FETCH_DATA_USER_SUCCESS,
        payload: data.data.gql_owe_Users_by_pk,
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_DATA_USER_ERROR,
      payload: error,
    });
  }
};
export const LoginUser = (loginInfor: any) => async (dispatch: any) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const { username, password } = loginInfor;
    const variables = { username, password };
    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      CheckingLoginUser,
      variables
    );
    if (data.data.gql_owe_Users.length > 0) {
      const { id, username } = data.data.gql_owe_Users[0];
      setLocalStorageUser(id, username);
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: data.data.gql_owe_Users[0],
      });
    } else {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: "User not exist!!!",
      });
    }
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_USER_ERROR,
      payload: "User not exist!!!",
    });
  }
};
export const RegisterUser = (registerInfor: any) => async (dispatch: any) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  const { username, password } = registerInfor;
  try {
    const variables = { username };
    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      CheckingUserExist,
      variables
    );
    if (data.data.gql_owe_Users.length > 0) {
      dispatch({ type: REGISTER_USER_ERROR, payload: "User Already Exist!!!" });
    }
    try {
      const variables = { username, password };
      const { data }: any = await graphqlRequest(
        graphqlApiOptions,
        CreateUser,
        variables
      );
      if (data) {
        dispatch({
          type: REGISTER_USER_SUCCESS,
          payload: data.data.insert_gql_owe_Users.returning[0],
        });
        const { id, username } = data.data.insert_gql_owe_Users.returning[0];
        setLocalStorageUser(id, username);
      } else {
        dispatch({
          type: REGISTER_USER_ERROR,
          payload: "Something error occurred!!!",
        });
      }
      console.log(data.data.insert_gql_owe_Users.returning[0]);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: "Something error occurred!!!",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
