export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					mobileReg: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
					userRulesAccount: {
						loginName: {
							rules: [
								{required: true, errorMessage: '账户名不能为空'},
								{validateFunction: this.validateLoginName}
							]
						},
						password: {
							rules: [
								{required: true, errorMessage: '密码不能为空'},
							]
						},
					},
					userRulesPhone: {
						phone: {
						    rules: [
							    { required: true, errorMessage: "电话号码不能为空" },
							    { validateFunction: this.validatePhone }   // 自定义验证规则
						    ]
						},
						vCode: {
						    rules: [
							    { required: true, errorMessage: "验证码不能为空" },
						    ]
						},
					}
				}
			},
			methods: {
				// 验证用户名
				validateLoginName(rule, val, data, callback) {
					if(val.length < 5) {
						callback('用户名长度不正确')
					}
					return true;
				},
				/* 验证手机号码 */
				validatePhone (rule, val, data, callback) {
					if(this.mobileReg.test(val)) {
						callback('手机号码格式不正确');
					}
					return true
				}
			}
		});
	}
}