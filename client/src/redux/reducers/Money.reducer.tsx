import { DELETE_DRAW_ERROR, DELETE_DRAW_REQUEST, DELETE_DRAW_SUCCESS, DRAW_ERROR, DRAW_REQUEST, DRAW_SUCCESS, GET_INFOR_MONEY_USER_ERROR, GET_INFOR_MONEY_USER_REQUEST, GET_INFOR_MONEY_USER_SUCCESS } from "../Types"

const initialValues = {
  isLoading: false,
  isAuthenticated: false,
  drawList: [],
  oweList: [],
  saveList: [],
  errors: null,
}

const MoneyReducer = (
  state = initialValues,
  action: { type: any; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case DRAW_REQUEST:
      return { ...state, isLoading: true }
    case DRAW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drawList: [...state.drawList, payload],
      }
    case DRAW_ERROR:
      return {
        ...state,
        errors: payload,
      }
    case GET_INFOR_MONEY_USER_REQUEST:
      return { ...state, isLoading: true }
    case GET_INFOR_MONEY_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drawList: payload.draws,
        saveList: payload.Saves,
        oweList: payload.Owes,
      }
    case GET_INFOR_MONEY_USER_ERROR:
      return {
        ...state,
        errors: payload,
      }
    case DELETE_DRAW_REQUEST:
      return { ...state, isLoading: true }
    case DELETE_DRAW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        drawList: state.drawList.filter((newlist: { id_draw: any }) => newlist.id_draw !== payload),
      }
    case DELETE_DRAW_ERROR:
      return {
        ...state,
        errors: payload,
      }
    default:
      return state;
  }
};
export default MoneyReducer
