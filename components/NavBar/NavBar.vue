<template>
	<view class="nav-bar">
		<view class="nav-bar-top">
			<!-- 顶部的垫片 处理我们app以及小程序的导航栏 -->
			<view :style="{height: statusHeight + 'rpx'}"></view>
			<view @click="goSearchPage" class="nav-bar-content" :style="{marginRight: marginRight + 'rpx' }">
				<uni-icons type="search" color="#999"></uni-icons>
				<view class="nav-bar-search-text">
					输入文章标题进行搜索
				</view>
			</view>
		</view>
		<!-- 底部的垫片 处理文字被折叠的问题 -->
		<view :style="{height: statusHeight + 80 + 'rpx'}">
		</view>
	</view>
</template>

<script>
	export default {
		name:"NavBar",
		data() {
			return {
				statusHeight: 20,
				marginRight: 0,
			};
		},
		created() {
			this.getSystemInfo();
		},
		methods: {
			// 获取用户屏幕的信息
			getSystemInfo() {
				const systemInfo = uni.getSystemInfoSync();
				systemInfo.statusBarHeight && (this.statusHeight = systemInfo.statusBarHeight * 2);
				// 如果是微信小程序
				// #ifdef MP-WEIXIN 
					const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
					this.statusHeight = menuButtonInfo.top * 2;
					this.marginRight = menuButtonInfo.width * 2;
				// #endif
			},
			/**
			 * 跳转到搜索界面
			 */
			goSearchPage() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/NavBar.scss"
</style>