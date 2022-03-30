import {
  DRAW_ERROR,
  DRAW_REQUEST,
  DRAW_SUCCESS,
  FETCH_DATA_USER,
  FETCH_DATA_USER_ERROR,
  FETCH_DATA_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_ERROR,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../Types"

const initialValues = {
  isLoading: false,
  isAuthenticated: false,
  inforUser: {},
  errors: null,
}

const UserReducer = (
  state = initialValues,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_DATA_USER:
      return { ...state, isLoading: true }
    case FETCH_DATA_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        inforUser: {
          id: payload.id,
          balances: payload.balances,
          username: payload.username,
          password: payload.password
        },
      }
    case FETCH_DATA_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: payload,
      }
    case LOGIN_USER_REQUEST:
      return { ...state, isLoading: true }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        inforUser: {
          id: payload.id,
          balances: payload.balances,
          username: payload.username,
          password: payload.password
        },
      }
    case LOGIN_USER_ERROR:
      return { ...state, isLoading: false, isAuthenticated: false }
    case REGISTER_USER_REQUEST:
      return { ...state, isLoading: true }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        inforUser: {
          id: payload.id,
          balances: payload.balances,
          username: payload.username,
          password: payload.password
        },
      }
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errors: payload,
      }
    default:
      return state
  }
}
export default UserReducer
