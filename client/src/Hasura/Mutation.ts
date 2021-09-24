export const CreateSave_Mutation = `mutation InsertSaveByUser($idUser:uuid!,$received:Int,$saveScript:String) {
  insert_gql_owe_Save(objects: {id_user: $idUser, received: $received, save_script: $saveScript}) {
    returning {
      id_save
      id_user
      received
      save_date
      save_script
    }
  }
}
`;
//DEMO VARIABLES
//{ "idUser": "7d6fb629-5b71-4c23-a77b-4fda09da578a",
//	"received": 992000,
//  "saveScript": "Ahii,so good today!!!"}
export const CreateUser_Mutation = `mutation CreateUser($username:String!,$password:String) {
  insert_gql_owe_Users(objects: {username: $username, password: $password}) {
    returning {
      id
      password
      username
    }
  }
}`;
//DEMO VARIABLES
// {
//   "Username": "test1",
//   "Password": "1234"
// }
//THIS MUTATION DOING 2 ACTIONS FOR UPDATE WHEN DRAW AND UPDATE WHEN TRANSFER
export const UpdateBalance_Mutation = `mutation UpdateBalance_Mutation($id: uuid!, $draw: Int!) {
  update_gql_owe_Users(where: {id: {_eq: $id}}, _set: {balances: $draw}) {
    returning {
       id
    username
    password
    balances
    Saves {
      id_save
      received
      save_date
      save_script
    }
    Owes {
      id_owe
      date_get
      date_back
      money_owed
      script_owe
    }
    draws {
      id_draw
      total_draw
      date_draw
      before_balance
      after_balance
      script_draw
    }
  }
  }
}`;
// DEMO VARIABLES
// {
//  "id": "7d6fb629-5b71-4c23-a77b-4fda09da578a",
//   "draw": 20000
// }
export const AddDrawHistory_Mutation = `mutation AddDrawHistory_Mutation($id:uuid!,$total:Int,$script:String,$before:Int,$after:Int){
  insert_gql_owe_draw(objects: {id_user: $id, total_draw: $total, script_draw: $script,before_balance:$before,after_balance:$after}){
    returning{
      id_user
      total_draw
      script_draw
      before_balance
      after_balance
    }
  }
}`;
// DEMO VARIABLES
// {
//  "id": "7d6fb629-5b71-4c23-a77b-4fda09da578a",
//  "total": 23000,
//   "script": "Sorry!",
//   "before": 320000,
//   "after": 300000

// }
