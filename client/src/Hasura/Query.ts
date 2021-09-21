export const User_Query = `query UserInfor($id: uuid!) {
  gql_owe_Users_by_pk(id: $id) {
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
}`;
export const FetchOweByUser = `query FecthData($idUser: uuid!) {
  gql_owe_Owe(where: {id_user: {_eq: $idUser}}) {
    id_user
    date_back
    id_owe
    date_get
    money_owed
    script_owe
  }
}
`;
export const CheckUserExist_Query = `query FindUser($username:String!){
  gql_owe_Users(where:{username:{_eq:$username}}){
    id
    username
  }
}`;
//DEMO VARIABLES
// {
//   "username": "tesst1"
// }
export const CheckLoginUser_Query = `query CheckingLoginUser($username:String!,$password:String!){
  gql_owe_Users(where:{username:{_eq:$username},password:{_eq:$password}}){
    id
    username
    password
  }
}`;
// DEMO VARIABLES
// {
//   "username": "tesst1",
//   "password": "asdasd"
// }
