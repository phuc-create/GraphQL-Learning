import { AddDrawHistory_Mutation, UpdateBalance_Mutation } from "../../Hasura/Mutation"
import { graphqlRequest } from "../../Utils/Apis"
import { BASE_GQL } from "../../Utils/BaseGraphql"
import { DRAW_USER_ERROR, DRAW_USER_REQUEST, DRAW_USER_SUCCESS } from "../Types"
const graphqlApiOptions = {
  method: "POST",
  url: `${BASE_GQL.base}`,
}
export const drawMoneyAction = (inforDraw: any) => async (dispatch: any) => {
  dispatch({ type: DRAW_USER_REQUEST })
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
          type: DRAW_USER_SUCCESS,
          payload: data.data.update_gql_owe_Users.returning[0],
        });
        console.log(data.data.update_gql_owe_Users.returning[0]);
        setTimeout(() => {
          window.location.href = "/"
        }, 1000);
      } else {
        dispatch({
          type: DRAW_USER_ERROR,
          payload: "Somthing wrong",
        })
      }
    } else {
      dispatch({
        type: DRAW_USER_ERROR,
        payload: "Somthing wrong",
      })
    }
  } catch (error) {
    dispatch({
      type: DRAW_USER_ERROR,
      payload: error,
    })
  }
}
