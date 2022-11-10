/**
 * 封装Promise接口对象
 */
export default ({name,data={}}) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({});
		uniCloud.callFunction({
			name,
			data,
			success({result}) {
				if(+result.code === 0) {
					console.log(result);
					resolve(result.data);
				} else {
					uni.showToast({
						icon: "none",
						title: result.msg
					});
					reject(result)
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