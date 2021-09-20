export const FetchAllInforOfSingleUser = `query MyQuery($idUser: uuid!) {
  gql_owe_Users_by_pk(id: $idUser) {
    id
    username
  }
  gql_owe_Save( where: {id_user: {_eq: $idUser}}) {
    id_save
    received
    save_date
    save_script
  }
  gql_owe_Owe(where: {id_user: {_eq: $idUser}}) {
    id_owe
    date_get
    date_back
    money_owed
    script_owe
  }
}
`;
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

export const CreateSaveByUser = `mutation InsertSaveByUser($idUser:uuid!,$received:Int,$saveScript:String) {
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
export const CreateUser = `mutation CreateUser($username:String!,$password:String) {
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
export const CheckingUserExist = `query FindUser($username:String!){
  gql_owe_Users(where:{username:{_eq:$username}}){
    id
    username
  }
}`;
//DEMO VARIABLES
// {
//   "username": "tesst1"
// }
export const CheckingLoginUser = `query CheckingLoginUser($username:String!,$password:String!){
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
