/**
 * 封装Promise接口对象
 */
export default ({name,data={}}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({});
		uniCloud.callFunction({
			name,
			success({result}) {
				if(+result.code === 0) {
					resolve(result.data);
				} else {
					uni.showToast({
						icon: "none",
						title: result.msg
					})
				}
			},
			fail(err) {
				reject(err)
			},
			complete() {
				uni.hideLoading();
			}
		})
	})
}