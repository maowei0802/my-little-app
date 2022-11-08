<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" :class="{'active':type !=='account'}">
				手机登录 
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="form" ref="form" :modelValue="formData" >
			<view class="" v-if="type !=='account'">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号" v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="password" placeholder="请输入密码" v-model="formData.password" />
				</uni-forms-item>
			</view>
			<view class="" v-else>
				<uni-forms-item label="手机号" name="phone">
					<input placeholder-class="placeholder" class="form-input" type="number" placeholder="请输入手机号" v-model="formData.phone" />
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入密码" v-model="formData.vCode" />
					<SendCode class="code-component"></SendCode>
				</uni-forms-item>
			</view>
			
			<button class="login-btn">立即登录</button>
		</uni-forms>
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
				type:'account',
				formData:{
					loginName:'',
					password:'',
					phone:"",
					vCode:'',
				}
			}
		},
		methods: {

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
