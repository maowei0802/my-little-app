<template>
	<!-- 根据条件来渲染 -->
	<view class="card-container">
		<!-- 基础模式 -->
		<view class="card-public card-base" v-if="item.mode === 'base'">
			<view class="card-base-img">
				<image src="https://pc.hyfarsight.com/Fsf4RfIJyetNpvsXUmlGbQkhYoWA" mode="aspectFill"></image>
			</view>
			<view class="card-base-content">
				<view class="card-base-content-title">
					<text>《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）《故宫博物院》集训营直播课开讲啦（4月17号）</text>
					<SaveLikes></SaveLikes>
				</view>
				<view class="content-desc">
					<view class="label">精彩直播</view>
					<view class="desc">125浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="card-public card-column" v-else-if="item.mode === 'column'">
			<view class="card-column-top">
				<text>SSR基本介绍以及API的使用</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="card-column-middle">
				<view class="image-container" v-for="(item,index) in 3" :key="index">
					<image
						src="http://upload-images.jianshu.io/upload_images/1919394-dca940ffa0bd52c7.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp"
						mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="content-desc">
				<view class="label">精彩直播</view>
				<view class="desc">125浏览</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="card-public card-image" v-else>
			<view class="card-column-top">
				<view class="image-container">
					<image src="https://img1.sycdn.imooc.com/5ccfac620001f8d405000344.jpg" mode="aspectFill"></image>
				</view>
			</view>
			<view class="card-image-middle">
				<text>SSR基本介绍以及API的使用</text>
				<SaveLikes></SaveLikes>
			</view>
			<view class="content-desc">
				<view class="label">
					精彩直播
				</view>
				<view class="desc">
					293浏览
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ListCard",
		data() {
			return {
				
			};
		},
		props: {
			item: {
				type: Object,
				default: () => {},
			}
		}
	}
</script>

<style scoped lang="scss">
	@import 'css/ListCard.scss';
</style>