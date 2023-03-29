import { takeEvery,all, take } from "redux-saga/effects";
import * as ActionRegion from '../Constant/RegionConstant'
import { EditRegion, FindRegion, createRegion, handleRegion } from "./RegionSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_REGION_REQUEST,handleRegion),
        takeEvery(ActionRegion.ADD_REGION_REQUEST,createRegion),
        takeEvery(ActionRegion.FIND_REGION_REQUEST,FindRegion),
        takeEvery(ActionRegion.EDIT_REGION_REQUEST,EditRegion)
    ])
}

export default watchAll