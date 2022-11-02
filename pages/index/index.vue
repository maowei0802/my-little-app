<template>
	<view>
		<view class="container">
			<text>left</text>
			<text>center</text>
			<text>right</text>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	.container {
		@include flex(flex-start, column);
		color: $base-color;
	}
</style>