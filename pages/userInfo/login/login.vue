<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="cutTab('account')" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="cutTab('mobile')" :class="{'active':type !=='account'}">
				手机登录 
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="form" ref="form" :modelValue="formData">
			<view class="" v-if="type ==='account'">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号" v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<input placeholder-class="placeholder" class="form-input" type="password" placeholder="请输入密码" v-model="formData.password" />
				</uni-forms-item>
			</view>
			<view class="" v-else>
				<uni-forms-item label="手机号" name="phone">
					<input maxlength="11" placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号" v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入验证码" v-model="formData.vCode" />
					<SendCode @getCode="getCode" :time="time" :codeState="codeState" class="code-component"></SendCode>
				</uni-forms-item>
			</view>
		</uni-forms>
		<button class="login-btn" @click="userLoginSubmit" :disabled="loading" :loading="loading">立即登录</button>
		<view class="footer-select-container">
			<text>注册</text>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: null,
				time: 60,
				codeTimeId: null,
				codeState: false,
				loading: false,
				type:'account',
				formData:{
					loginName: undefined,
					password: undefined,
					phone: undefined,
					vCode: undefined,
				}
			}
		},
		onReady() {
			this.$refs.form.setRules(this.userRules);
		},
		beforeDestroy() {
			clearInterval(this.codeTimeId);
		},
		methods: {
			// 获取验证码
			async getCode() {
				this.$refs.form.validateField(['phone'], async (res) => {
					if(res === null) {
						let result = await this.$http.get_code();
						this.code = result.data;
						this.codeState = true;
						uni.showToast({
							title: result.msg,
							icon: 'none',
							duration: 2000
						});
						this.startTimer();
					}
				});
			},
			// 启动定时器
			startTimer() {
				this.codeTimeId = setInterval(() => {
					if(this.time === 1) {
						this.codeState = false;
						this.time = 60;
						clearInterval(this.codeTimeId);
					}
					this.time--;
				}, 1000);
			},
			// 用户登录验证
			async userLoginSubmit() {
				this.loading = true;
				let validateArr = this.type === 'account' ? ['loginName', 'password'] : ['phone', 'vCode'];
				this.$refs.form.validateField(validateArr, (val, data) => {
					if(val === null) {
						if(this.type !== 'account' && this.code === null) {
							uni.showToast({
								title: '请先获取验证码!',
								icon: "none",
							});
							this.loading = false
							return;
						} else if(this.type !== 'account' && this.formData.vCode !== this.code) {
							uni.showToast({
								title: '验证码输入错误，请重新核对后填写!',
								icon: "none",
							});
							this.loading = false
							return;
						}
						let sendData = {
							type: this.type,
							loginName: this.formData.loginName,
							password: this.formData.password
						}
						this.$http.user_login(sendData).then((res) => {
							uni.showToast({
								title: '登录成功!',
								icon: "none",
							});
							this.code = null;
							this.updateUserInfo(res);
							let timeId = setTimeout(() => { 
								uni.navigateBack();
								this.loading = false;
								clearTimeout(timeId); 
							}, 1500);
						}).catch(() => {
							this.loading = false;
						});
					} else {
						this.loading = false;
					}
				});
			},
			// tab切换
			cutTab(type) {
				this.type = type;
				this.$refs.form.clearValidate([]); // 清空验证规则
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}
</style>

<style lang="scss" scoped>
	@import  './css/login.scss'
</style>
