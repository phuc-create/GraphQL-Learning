import { AddDrawHistory_Mutation, DeleteDrawHistory_Mutation, UpdateBalance_Mutation } from "../../Hasura/Mutation"
import { MoneyUser_Query } from "../../Hasura/Query"
import { graphqlRequest } from "../../Utils/Apis"
import { BASE_GQL } from "../../Utils/BaseGraphql"
import { DELETE_DRAW_ERROR, DELETE_DRAW_REQUEST, DELETE_DRAW_SUCCESS, DRAW_ERROR, DRAW_REQUEST, DRAW_SUCCESS, GET_INFOR_MONEY_USER_ERROR, GET_INFOR_MONEY_USER_REQUEST, GET_INFOR_MONEY_USER_SUCCESS } from "../Types"
const graphqlApiOptions = {
  method: "POST",
  url: `${BASE_GQL.base}`,
}
export const drawMoneyAction = (inforDraw: any) => async (dispatch: any) => {
  dispatch({ type: DRAW_REQUEST })
  try {
    // const variables = { id, total, script, before, after }
    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      AddDrawHistory_Mutation,
      inforDraw
    )
    if (data) {
      const variables = {
        id: inforDraw.id,
        draw: inforDraw.after
      }
      const { data }: any = await graphqlRequest(
        graphqlApiOptions,
        UpdateBalance_Mutation,
        variables
      )
      if (data) {

        dispatch({
          type: DRAW_SUCCESS,
          payload: data.data.update_gql_owe_Users.returning[0],
        });
        console.log(data.data.update_gql_owe_Users.returning[0]);
        setTimeout(() => {
          window.location.href = "/"
        }, 1000);
      } else {
        dispatch({
          type: DRAW_ERROR,
          payload: "Somthing wrong",
        })
      }
    } else {
      dispatch({
        type: DRAW_ERROR,
        payload: "Somthing wrong",
      })
    }
  } catch (error) {
    dispatch({
      type: DRAW_ERROR,
      payload: error,
    })
  }
}

export const getInforMoneyUser = () => async (dispatch: any) => {
  const idUser = { id: localStorage["user"] }
  try {
    dispatch({ type: GET_INFOR_MONEY_USER_REQUEST });

    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      MoneyUser_Query,
      idUser
    )
    if (data) {
      dispatch({
        type: GET_INFOR_MONEY_USER_SUCCESS,
        payload: data.data.gql_owe_Users_by_pk,
      })
      console.log(data)
    }
  } catch (error) {
    dispatch({
      type: GET_INFOR_MONEY_USER_ERROR,
      payload: error,
    })
  }
}
export const deleteDrawHistory = (id: any) => async (dispatch: any) => {
  dispatch({ type: DELETE_DRAW_REQUEST })
  const deleteVariables = {
    id: localStorage["user"],
    idDraw: id
  }
  try {
    const { data }: any = await graphqlRequest(
      graphqlApiOptions,
      DeleteDrawHistory_Mutation,
      deleteVariables
    )
    if (data) {
      dispatch({
        type: DELETE_DRAW_SUCCESS,
        payload: id
      })
    } else {
      dispatch({
        type: DELETE_DRAW_ERROR,
        payload: "Somthing Wrong"
      })
    }
  } catch (error) {
    dispatch({
      type: DELETE_DRAW_ERROR,
      payload: error
    })
  }
}
