import { FETCH_DATA_USER, FETCH_DATA_USER_ERROR } from "../Types";

const initialValues = {
  isLoading: false,
  isAuthenticated: false,
  inforUser: {},
  errors: null,
};

const UserReducer = (
  state = initialValues,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_USER:
      return { ...state, isLoading: true };
    case FETCH_DATA_USER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
export default UserReducer;
