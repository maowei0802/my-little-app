<template>
	<view class="home-container">
		<NavBar></NavBar>
		<TabBar :labelList="labelList"></TabBar>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this._initLabelList();
		},
		data() {
			return {
				labelList: []
			}
		},
		methods: {
			// 初始化获取标签
			async _initLabelList() {
				let res = await this.$http.get_label_list();
				this.labelList = res || [];
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex(flex-start, column);
		color: $base-color;
	}
</style>