<template>
	<swiper
		class="swiper-container"
		:current="activeIndex"
		@change="activeChange">
		<swiper-item
			v-for="(item, index) in labelList"
			:key="index">
			<view class="swiper-item">
				<ListItem></ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name:"ArticleList",
		data() {
			return {
				
			};
		},
		props: {
			labelList: {
				type: Array,
				default: () => [],
			},
			activeIndex: {
				type: Number,
				default: 0,
			}
		},
		methods: {
			activeChange(e) {
				if (e.detail.current === this.activeIndex) return;
				this.$emit('activeIndexChange', e.detail.current)
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper-container {
		height: 100%;
		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>