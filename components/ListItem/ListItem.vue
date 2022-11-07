<template>
	<view class="list-scroll-container">
		<scroll-view scroll-y="true" class="list-scroll">
			<view>
				<ListCard v-for="(item, index) in itemList" :key="index" :item="item"></ListCard>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"ListItem",
		data() {
			return {
				itemList:[
					{mode:'base'},
					{mode:'column'},
					{mode:'image'},
					{mode:'base'},
					{mode:'base'},
				]
			};
		}
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