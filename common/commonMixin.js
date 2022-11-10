import {
	mapState,
	mapMutations
} from 'vuex'
export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {}
			},
			methods: {
				...mapMutations(['updateUserInfo']),
				// 验证用户是否登录
				checkedIsLogin() {
					return new Promise(resolve => {
						if(this.userInfo) {
							resolve();
						} else {
							uni.navigateTo({
								url: '/pages/userInfo/login/login'
							});
						}
					});
				},
			},
			computed: {
				...mapState(['userInfo']),
			}
		})
	}
}
