import { call, all, fork, takeLatest, put } from "redux-saga/effects";
// import {
//   isLoginAction,
//   loginAction,
//   logoutAction,
//   addCategoryAction,
//   getCategoryAction,
//   updateCategoryAction,
//   deleteCategoryAction,
// } from "@actions/user";
// import { getMapMarkerList, getProductData } from "@actions/products";
// import {
//   getSearchData,
//   setSearchData,
//   addInterestAction,
//   updateInterestAction,
//   deleteInterestAction,
//   getInterestAction,
//   getVisitAction,
// } from "@actions/search";
// import { product_Data, LoginState, searchListData } from "@src/types";
// import {
//   getDataSearchAPI,
//   loginAPI,
//   isLoginAPI,
//   getProductDataAPI,
//   logoutAPI,
//   addCategoryAPI,
//   getCategoryAPI,
//   updateCategoryAPI,
//   deleteCategoryAPI,
//   addInterestAPI,
//   updateInterestAPI,
//   deleteInterestAPI,
//   getInterestListAPI,
//   getVisitAPI,
// } from "@src/api";
// import { AxiosError } from "axios";
// import { setCookie } from "@src/utils";
//
// const goLoginPage = (returnUrl?: string) => {
//   let url = "/login";
//
//   if (returnUrl) {
//     url += `?returnUrl=${returnUrl}`;
//   }
//
//   window.location.href = url;
// };
//
// function* getDataSearchSaga(action: ReturnType<any>) {
//   try {
//     const getData: searchListData = yield call(getDataSearchAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     switch (action.type) {
//       case "GET_SEARCH_DATA":
//         yield put(getSearchData.success(getData));
//         break;
//       case "GET_PRODUCTS_DATA":
//         yield put(getMapMarkerList.success(getData));
//         break;
//       // no default
//     }
//   } catch (e) {
//     yield put(getSearchData.failure(e as AxiosError));
//   }
// }
//
// // function* setDataSearchSaga(action: ReturnType<any>) {
// //   try {
// //     // const getData: searchListData = yield call(getDataSearchAPI, action.payload);
// //
// //     yield put(setSearchData(getData));
// //   } catch (e) {
// //     yield put(getSearchData.failure(e as AxiosError));
// //   }
// // }
//
// function* getProductDataSaga(action: ReturnType<any>) {
//   try {
//     const getData: product_Data = yield call(getProductDataAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(getProductData.success(getData));
//   } catch (e) {
//     yield put(getProductData.failure(e as AxiosError));
//   }
// }
//
// function* loginSaga(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(loginAPI, action.payload, action.meta);
//
//     if (getData == undefined) {
//       return;
//     }
//
//     const now = new Date();
//     const age = 60 * 60 * 8;
//     now.setHours(now.getHours() + 8);
//     const option = { path: "/", maxAge: age, expires: now };
//
//     setCookie("AIMYPIE", getData.result.token, option);
//
//     yield put(loginAction.success(getData));
//   } catch (e) {
//     yield put(loginAction.failure(e as AxiosError));
//   }
// }
//
// function* logoutSaga(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(logoutAPI);
//
//     if (getData == undefined) {
//       return;
//     }
//
//     yield put(logoutAction.success(getData));
//   } catch (e) {
//     yield put(logoutAction.failure(e as AxiosError));
//   }
// }
//
// function* isLoginSaga(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(isLoginAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(isLoginAction.success(getData));
//   } catch (e) {
//     yield put(isLoginAction.failure(e as AxiosError));
//   }
// }
//
// function* addCategory(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(addCategoryAPI, action.payload, action.meta);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(addCategoryAction.success(getData));
//
//     if (getData.info.code == 200) {
//       const getData2: LoginState = yield call(getCategoryAPI);
//       yield put(getCategoryAction.success(getData2));
//     }
//   } catch (e) {
//     yield put(addCategoryAction.failure(e as AxiosError));
//   }
// }
//
// function* updateCategory(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(updateCategoryAPI, action.payload, action.meta);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(updateCategoryAction.success(getData));
//
//     if (getData.info.code == 200) {
//       const getData2: LoginState = yield call(getCategoryAPI);
//       yield put(getCategoryAction.success(getData2));
//     }
//   } catch (e) {
//     yield put(updateCategoryAction.failure(e as AxiosError));
//   }
// }
//
// function* deleteCategory(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(deleteCategoryAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(updateCategoryAction.success(getData));
//
//     if (getData.info.code == 200) {
//       const getData2: LoginState = yield call(getCategoryAPI);
//       yield put(getCategoryAction.success(getData2));
//     }
//   } catch (e) {
//     yield put(updateCategoryAction.failure(e as AxiosError));
//   }
// }
//
// function* getCategory(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(getCategoryAPI);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(getCategoryAction.success(getData));
//   } catch (e) {
//     yield put(getCategoryAction.failure(e as AxiosError));
//   }
// }
//
// function* getInterest(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(getInterestListAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(getInterestAction.success(getData));
//   } catch (e) {
//     yield put(getInterestAction.failure(e as AxiosError));
//   }
// }
//
// function* addInterest(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(addInterestAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(addInterestAction.success(getData));
//   } catch (e) {
//     yield put(addInterestAction.failure(e as AxiosError));
//   }
// }
//
// function* updateInterest(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(updateInterestAPI, action.payload);
//
//     // if (getData == undefined) {
//     //   if (typeof window == "object") {
//     //     goLoginPage(history.state.as);
//     //   }
//     //   return;
//     // }
//
//     yield put(updateInterestAction.success(getData));
//   } catch (e) {
//     yield put(updateInterestAction.failure(e as AxiosError));
//   }
// }
//
// function* deleteInterest(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(deleteInterestAPI, action.payload);
//
//     // if (getData == undefined) {
//     //   if (typeof window == "object") {
//     //     goLoginPage(history.state.as);
//     //   }
//     //   return;
//     // }
//
//     yield put(deleteInterestAction.success(getData));
//   } catch (e) {
//     yield put(deleteInterestAction.failure(e as AxiosError));
//   }
// }
//
// function* getVisit(action: ReturnType<any>) {
//   try {
//     const getData: LoginState = yield call(getVisitAPI, action.payload);
//
//     if (getData == undefined) {
//       if (typeof window == "object") {
//         goLoginPage(history.state.as);
//       }
//       return;
//     }
//
//     yield put(getVisitAction.success(getData));
//   } catch (e) {
//     yield put(getVisitAction.failure(e as AxiosError));
//   }
// }

function* watchLoadAllPosts() {
  // // 필터데이터 가져오기
  // // yield takeLatest(getFilterDataAction.request, getFilterDataSaga);
  // // 매물 데이터 갱신
  // // yield takeLatest(setSearchData, setDataSearchSaga);
  // // 매물 검색
  // yield takeLatest(getSearchData.request, getDataSearchSaga);
  // // 지도 영역내 매물 검색
  // yield takeLatest(getMapMarkerList.request, getDataSearchSaga);
  // // 매물 데이터
  // yield takeLatest(getProductData.request, getProductDataSaga);
  // // 로그인
  // yield takeLatest(loginAction.request, loginSaga);
  // // 로그아웃
  // yield takeLatest(logoutAction.request, logoutSaga);
  // // 로그인 체크
  // yield takeLatest(isLoginAction.request, isLoginSaga);
  // // 관심물건 카테고리 추가
  // yield takeLatest(addCategoryAction.request, addCategory);
  // // 관심물건 카테고리 수정
  // yield takeLatest(updateCategoryAction.request, updateCategory);
  // // 관심물건 카테고리 삭제
  // yield takeLatest(deleteCategoryAction.request, deleteCategory);
  // // 관심물건 카테고리 가져오기
  // yield takeLatest(getCategoryAction.request, getCategory);
  // // 관심물건 목록
  // yield takeLatest(getInterestAction.request, getInterest);
  // // 관심물건 추가
  // yield takeLatest(addInterestAction.request, addInterest);
  // // 관심물건 수정
  // yield takeLatest(updateInterestAction.request, updateInterest);
  // // 관심물건 삭제
  // yield takeLatest(deleteInterestAction.request, deleteInterest);
  // // 최근 열람 물건
  // yield takeLatest(getVisitAction.request, getVisit);
}

export default function* postsSaga() {
  yield all([fork(watchLoadAllPosts)]);
}
