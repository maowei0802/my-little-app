<template>
	<view class="tab">
		<!-- 滚动区域 -->
		<scroll-view
			scroll-x="true"
			class="tab-scroll"
			:scroll-into-view="nowIndex"
			:scroll-with-animation="true">
			<view class="tab-scroll-box">
				<view
					:id="`item${index}`"
					:class="{active: activeIndex === index}"
					class="tab-scroll-box-item" v-for="(item, index) in labelList"
					:key="item.id"
					@click="activeClick(index)">
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
				nowIndex: ''
			};
		},
		watch: {
			activeIndex(index) {
				this.nowIndex = `item${index}`;
			}
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
			activeClick(index) {
				if(index === this.activeIndex) return;
				this.$emit('activeIndexChange', index);
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./css/TabBar.scss"
</style>