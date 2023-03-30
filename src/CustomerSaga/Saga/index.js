import { takeEvery, all } from "redux-saga/effects";
import * as ActionCustomer from "../Constant/CustomerConstant";
import { handleCustomer, createCustomer, findCustomer, editCustomer, deleteCustomer } from "./CustomerSaga";
import * as ActionUser from "../Constant/UserConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll() {
  // takeEvery untuk menjalankan semua action
  yield all([
    takeEvery(ActionCustomer.GET_CUSTOMER_REQUEST, handleCustomer),
    takeEvery(ActionCustomer.ADD_CUSTOMER_REQUEST, createCustomer),
    takeEvery(ActionCustomer.FIND_CUSTOMER_REQUEST, findCustomer),
    takeEvery(ActionCustomer.EDIT_CUSTOMER_REQUEST, editCustomer),
    takeEvery(ActionCustomer.DEL_CUSTOMER_REQUEST, deleteCustomer),
    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
