export default {
  updateUserInfo(state,userInfo) {
    uni.setStorageSync('userInfo',userInfo);
    state.userInfo = userInfo;
  }
}