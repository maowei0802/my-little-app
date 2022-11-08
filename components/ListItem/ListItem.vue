<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll" @scrolltolower="loadMore">
			<view>
				<ListCard v-for="item in articleList" :key="item._id" :item="item"></ListCard>
			</view>
			<uni-load-more :status="articleData.loading || 'loading'"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		data() {
			return {
			};
		},
		props: {
			articleList: {
				type: Array,
				default: () => [],
			},
			articleData: {
				type: Object,
				default: () => {
					loading: 'loading'
				}
			}
		},
		methods: {
			// 触底事件
			loadMore() {
				this.$emit('loadMore')
			}
		},
	}
</script>

<style scoped lang="scss">
	.list-scroll-container {
		height: 100%;
		.list-scroll {
			height: 100%;
			overflow: hidden;
			box-sizing: border-box;
		}
	}
</style>