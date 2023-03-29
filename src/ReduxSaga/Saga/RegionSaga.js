import { call, put } from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import { GetRegionSuccess, GetRegionFailed, AddRegionSuccess, AddRegionFailed, FindRegionSuccess, FindRegionFailed, EditRegionSuccess, EditRegionFailed } from '../Action/RegionAction'

function* handleRegion() {
    try {
        const result = yield call(RegionApi.list)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}
function* createRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.upload, payload)
        yield put(AddRegionSuccess(result.data))
        
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}
function* FindRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.findOne, payload)
        yield put(FindRegionSuccess(result))
    } catch (error) {
        yield put(FindRegionFailed(error))
    }
}
function* EditRegion(action) {
    const {payload} = action
    try {
        const result = yield call(RegionApi.updatePhoto,payload)
        yield put(EditRegionSuccess(result.data))
    } catch (error) {
       yield put (EditRegionFailed(error)) 
    }
}

export {
    handleRegion,
    createRegion,
    FindRegion,
    EditRegion
}