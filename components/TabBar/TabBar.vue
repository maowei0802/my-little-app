<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view scroll-x="true" class="tab-scroll">
			<view class="tab-scroll-box">
				<view :class="{active: activeIndex === index}" class="tab-scroll-box-item" v-for="(item, index) in labelList" :key="item.id">
					{{ item.name }}
				</view>
			</view>
		</scroll-view>
		<!--  图标部分  -->
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name:"TabBar",
		data() {
			return {
				activeIndex: 0,
			};
		},
		props: {
			labelList: {
				type: Array,
				default: () => [],
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/TabBar.scss"
</style>