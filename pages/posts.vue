<template>
	<NuxtLayout name="default">
		<section class="posts">
			<div class="container">
				<h1 class="section__title posts__title">Articles</h1>

				<errorMessage v-if="error" :message="error?.message" />

				<template v-else-if="!pending">
					<div class="posts__list">
						<card v-for="post in paginatedData" :key="post.id" :post="post"/>
					</div>

					<pagination :currentPage="currentPage" :computedPages="computedPages" :pages="pages" @click="handlePageClick"/>
				</template>

				<loader v-else></loader>

			</div>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
import card from "@/components/posts/card.vue";
import pagination from "@/components/ui/pagination.vue";
import loader from "@/components/ui/loader.vue";
import errorMessage from "@/components/ui/errorMessage.vue";

import { usePosts } from "@/composables/posts/usePosts";
import { usePagination } from "@/composables/utils/usePagination";

const { data: posts, pending, error } = await usePosts()
const { currentPage, paginatedData, computedPages, pages, handlePageClick } = usePagination(posts, 8);
</script>

<style scoped>
.posts {
	padding: 120px 0 140px;
}

.posts__title {
	margin-bottom: 60px;
}

.main__title {
	font-weight: 400;
	font-size: 40px;
	line-height: 100%;
	color: #101010;
	text-align: center;
}

.posts__list {
	position: relative;
	display: -ms-grid;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	gap: 40px 32px;
	margin-bottom: 50px;
}

@media screen and (max-width: 768px) {
	.posts {
		padding: 50px 0;
	}

	.posts__list {
		margin-bottom: 40px;
	}
}
</style>