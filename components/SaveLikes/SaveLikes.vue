<template>
	<view class="save-incons" @click.stop="collect">
		<uni-icons color="#ff6600" type="heart" size="20"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		data() {
			return {
				
			};
		},
		methods: {
			// 收藏或取消收藏的操作
			collect() {
				uni.navigateTo({
					url: '/pages/userInfo/login/login'
				})
			}
		}
	}
</script>

<style>

</style>
