<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar
			:activeIndex="activeIndex"
			:labelList="labelList"
			@activeIndexChange="activeIndexChange">
		</TabBar>
		<ArticleList
			:activeIndex="activeIndex"
			class="list-container"
			:labelList="labelList"
			@activeIndexChange="activeIndexChange">
		  </ArticleList>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				activeIndex: 0,
				labelList: []
			}
		},
		methods: {
			// 初始化获取标签
			async _initLabelList() {
				let res = await this.$http.get_label_list();
				this.labelList = res || [];
			},
			activeIndexChange(index) {
				this.activeIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
		display: flex;
	}
	.home-container {
		overflow: hidden;
		flex:1;
		box-sizing: border-box;
		@include flex(flex-start,column);
		align-items: inherit;
	}
	.list-container {
		flex: 1;
		box-sizing: border-box;
	}
</style>