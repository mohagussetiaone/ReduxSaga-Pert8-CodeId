// call untuk progres, put untuk ambil data
import { call, put } from "redux-saga/effects";
import CustomerApi from "../../api/CustomerApi";
import { GetCustomerSuccess, GetCustomerFailed, AddCustomerSuccess, AddCustomerFailed, FindCustomerSuccess, FindCustomerFailed, EditCustomerSuccess, EditCustomerFailed } from "../Action/CustomerAction.js";

function* handleCustomer() {
  try {
    const result = yield call(CustomerApi.list);
    console.log(result);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}
// fungsi yield tidak akan menghentikan proses sebelum selesai
function* createCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.create, payload);
    yield put(AddCustomerSuccess(result.data));
  } catch (error) {
    yield put(AddCustomerFailed(error));
  }
}
function* findCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.findOne, payload);
    yield put(FindCustomerSuccess(result));
  } catch (error) {
    yield put(FindCustomerFailed(error));
  }
}
function* editCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.update, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

function* deleteCustomer(action) {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.deleted, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

export { handleCustomer, createCustomer, findCustomer, editCustomer, deleteCustomer };
