<template>
	<view class="code-container">
		<view class="vCode-btn" @click="getCode">
			{{ codeState ? `${time}秒后重新获取` : '获取验证码' }}
		</view>
	</view>
</template>

<script>
	export default {
		name:"SendCode",
		data() {
			return {
				
			};
		},
		props: {
			codeState: {
				type: Boolean,
				default: false
			},
			time: {
				type: Number,
				default: 60,
			}
		},
		methods: {
			// 获取验证码
			getCode() {
				if(this.codeState) return;
				this.$emit('getCode');
			},
		},
	}
</script>

<style lang="scss">
	.code-container {
		flex-shrink: 0;
		margin-right: 20rpx;
		.vCode-btn {
			background-color: $base-color;
			color: #FFFFFF;
			padding: 20rpx;
			border-radius: 10rpx;
			opacity: .8;
		}
	}
</style>
