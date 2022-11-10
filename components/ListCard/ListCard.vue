<template>
	<!-- 根据条件来渲染 -->
	<view class="card-container">
		<!-- 基础模式 -->
		<view class="card-public card-base" v-if="item.mode === 'base'">
			<view class="card-base-img">
				<image :src="item.cover[0]"></image>
			</view>
			<view class="card-base-content">
				<view class="card-base-content-title">
					<text>{{ item.title }}</text>
					<SaveLikes :articleId="item._id"></SaveLikes>
				</view>
				<view class="content-desc">
					<view class="label">{{ item.classify }}</view>
					<view class="desc">{{ item.browse_count }}浏览</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view class="card-public card-column" v-else-if="item.mode === 'column'">
			<view class="card-column-top">
				<text>{{ item.title }}</text>
				<SaveLikes :articleId="item._id"></SaveLikes>
			</view>
			<view class="card-column-middle">
				<view class="image-container" v-for="(ele,index) in item.cover.slice(0,3)" :key="index">
					<image
						:src="ele"
						mode="aspectFill">
					</image>
				</view>
			</view>
			<view class="content-desc">
				<view class="label">{{ item.classify }}</view>
				<view class="desc">{{ item.browse_count }}浏览</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view class="card-public card-image" v-else>
			<view class="card-column-top">
				<view class="image-container">
					<image :src="item.cover[0]"></image>
				</view>
			</view>
			<view class="card-image-middle">
				<text>{{ item.title }}</text>
				<SaveLikes :articleId="item._id"></SaveLikes>
			</view>
			<view class="content-desc">
				<view class="label">{{ item.classify }}</view>
				<view class="desc">{{ item.browse_count }}浏览</view>
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