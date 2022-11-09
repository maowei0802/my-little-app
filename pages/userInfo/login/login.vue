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
		<uni-forms v-if="type ==='account'" class="form" ref="form" :modelValue="formData" :rules="userRulesAccount">
			<view class="">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号" v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<input placeholder-class="placeholder" class="form-input" type="password" placeholder="请输入密码" v-model="formData.password" />
				</uni-forms-item>
			</view>
		</uni-forms>
		
		<uni-forms v-else class="form" ref="form" :modelValue="formData" :rules="userRulesPhone">
			<view class="">
				<uni-forms-item label="手机号" name="phone">
					<input maxlength="11" placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号" v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入验证码" v-model="formData.vCode" />
					<SendCode class="code-component"></SendCode>
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
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
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
		methods: {
			...mapMutations(['updateUserInfo']),
			// 用户登录验证
			async userLoginSubmit() {
				this.loading = true;
				this.$refs.form.validate((val, data) => {
					if(val === null) {
						let sendData = {
							type: this.type,
							loginName: this.formData.loginName,
							password: this.formData.password
						}
						this.$http.user_login(sendData).then((res) => {
							uni.showLoading({
								title: '登录成功!',
								icon: "none",
							});
							this.updateUserInfo(res);
							let timeId = setTimeout(() => { 
								uni.navigateBack();
								this.loading = false;
								console.log(this);
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
