export const Mutation = `
################################CREATE USER
    mutation {
  insert_gql_owe_Users_one(object: {password: "phuc", username: "phuc"}) {
    id
    password
    username
  }
}
################################CREATE OWE
mutation {
  insert_gql_owe_Owe(objects: {id_user: "7d6fb629-5b71-4c23-a77b-4fda09da578a", money_owed: 15000, script_owe: "Test owe", date_back: "2021-09-28", date_get: "2021-09-17"}) {
    returning {
      date_back
      date_get
      id_owe
      id_user
      money_owed
      script_owe
    }
  }
}
`