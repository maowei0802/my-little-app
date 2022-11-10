<template>
	<view class="save-incons" @click.stop="collect">
		<uni-icons color="#ff6600" :type="isLike ? 'heart-filled':'heart'" size="20"></uni-icons>
	</view>
</template>

<script>
	export default {
		name:"SaveLikes",
		data() {
			return {
				
			};
		},
		props: {
			articleId: {
				type: String,
				default: '',
			}
		},
		computed: {
			isLike() {
				return this.userInfo && this.userInfo.article_likes_ids.includes(this.articleId);
			},
		},
		methods: {
			// 收藏或取消收藏的操作
			async collect() {
				await this.checkedIsLogin();
			    const { msg, newUserInfo } = await this.$http.update_save_like({
				    articleId: this.articleId,
				    userId: this.userInfo._id,
			    })
			    uni.showToast({
				    title: msg,
				    icon: 'none'
			    });
			    this.updateUserInfo({ ...this.userInfo, ...newUserInfo });
			}
		}
	}
</script>

<style>

</style>
