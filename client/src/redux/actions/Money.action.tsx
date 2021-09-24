import React from "react"
import { AddDrawHistory_Mutation } from "../../Hasura/Mutation"
import { graphqlRequest } from "../../Utils/Apis"
import { BASE_GQL } from "../../Utils/BaseGraphql"
import { DRAW_USER_REQUEST } from "../Types"
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
    console.log(data)
  } catch (error) {
    console.log(error)

  }
}
