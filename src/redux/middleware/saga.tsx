import { call, all, fork, takeLatest, put } from "redux-saga/effects";
import { AxiosError } from "axios";
import { getFormUserAction, getPostAction, postAction, privatePostAction } from "@redux/actions/post"
import { elementLine } from "@config/const";
import { getMoaFormUser, getPost, updatePost } from "@api/index";

type postData = {
  [type: string]: any;
}


function* updatePostSaga(action: ReturnType<any>) {
  try {
    let data: elementLine[] = action.payload;
    
    console.log("data : ", data)
    
    yield put(privatePostAction.success(data));
  } catch (e) {
    yield put(privatePostAction.failure(e as AxiosError));
  }
}

function* updatePostDataSaga(action: ReturnType<any>) {
  try {
    let data: postData = yield call(updatePost, action.payload);//action.payload;
    
    yield put(postAction.success(data));
  } catch (e) {
    yield put(postAction.failure(e as AxiosError));
  }
}

function* getPostDataSaga(action: ReturnType<any>) {
  try {
    const getData: postData = yield call(getPost, action.payload);
    
    yield put(getPostAction.success(getData.body[0]));
  } catch (e) {
    yield put(getPostAction.failure(e as AxiosError));
  }
}

function* getFormUserSaga(action: ReturnType<any>) {
  try {
    const getData: postData = yield call(getMoaFormUser, action.payload);
  
    // console.log(action);
    // console.log(getData);
    
    yield put(getFormUserAction.success(getData.body));
  } catch (e) {
    yield put(getFormUserAction.failure(e as AxiosError));
  }
}

function* watchLoadAllPosts() {
  // 포스트 데이터
  yield takeLatest(privatePostAction.request, updatePostSaga);
  yield takeLatest(postAction.request, updatePostDataSaga);
  yield takeLatest(getPostAction.request, getPostDataSaga);
  
  // 신청자 데이터
  yield takeLatest(getFormUserAction.request, getFormUserSaga);
}

export default function* postsSaga() {
  yield all([fork(watchLoadAllPosts)]);
}
