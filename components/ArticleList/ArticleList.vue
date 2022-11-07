<template>
	<swiper
		:current="activeIndex"
		@change="activeChange">
		<swiper-item
			v-for="(item, index) in labelList"
			:key="index">
			<view class="swiper-item">
				{{ item.name }}
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

<style>

</style>