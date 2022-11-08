<template>
	<swiper class="swiper-container" :current="activeIndex" @change="activeChange">
		<swiper-item v-for="(item, index) in labelList" :key="index">
			<view class="swiper-item uni-bg-red">
				<ListItem
					:articleData="articleData[activeIndex]"
					:articleList="articleList[activeIndex]"
					@loadMore="loadMore">
				</ListItem>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		name: "ArticleList",
		data() {
			return {
				articleList: {},
				articleData: {},
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
		watch: {
			labelList(val) {
				if(val.length !== 0) {
					this.initArticle();
					this.getArticleList();
				}
			},
			activeIndex(val) {
				if(!this.articleList[this.activeIndex] || this.articleList[this.activeIndex].length === 0) {
					this.initArticle();
					this.getArticleList();
				}
			},
		},
		methods: {
			activeChange(e) {
				if (e.detail.current === this.activeIndex) return;
				this.$emit('activeIndexChange', e.detail.current);
			},
			async getArticleList() {
				let sendData = {
					classify: this.labelList[this.activeIndex].name,
					page: this.articleData[this.activeIndex].page,
					pageSize: this.articleData[this.activeIndex].pageSize,
				}
				let { data, total } = await this.$http.get_article_list(sendData);
				this.articleData[this.activeIndex].total = total;
				let old = this.articleList[this.activeIndex] || [];
				old.push(...data);
				this.$set(this.articleList, this.activeIndex, old);
				this.touch();
			},
			// 触底事件判断
			touch() {
				if(this.articleData[this.activeIndex].total === this.articleList[this.activeIndex].length) {
					let obj = {
						...this.articleData[this.activeIndex],
						loading: 'noMore'
					}
					this.articleData[this.activeIndex] = obj;
					this.$forceUpdate();
					return true;
				}
				return false;
			},
			// 触底事件
			loadMore() {
				let result = this.touch();
				if(result) {
					this.articleData[this.activeIndex].page++;
					this.getArticleList();
				}
			},
			// 初始化articleData的数据
			initArticle() {
				if(!this.articleData[this.activeIndex]) {
					this.articleData[this.activeIndex] = {
						page: 1,
						pageSize: 6,
						loading: 'loading',
						total: 0
					}
				}
			},
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
