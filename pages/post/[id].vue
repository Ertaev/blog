<template>
	<NuxtLayout name="default">
		<section class="post">
			<div class="container">
				<h1 class="section__title post__title">{{ post?.title }}</h1>

				<div class="post__img">
					<!-- <img :src="post?.image" :alt="post?.title"> -->
					<img src="https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?_gl=1*1oo3t62*_ga*NzkxODcwNjExLjE3NTI0Njk4NTk.*_ga_8JE65Q40S6*czE3NTI2ODA0OTQkbzIkZzEkdDE3NTI2ODA0OTYkajU4JGwwJGgw" alt="А ты купи слона">
				</div>

				<div class="post__description">
					<h4>About</h4>

					<p>{{ post?.description }}</p>
				</div>
			</div>
		</section>
	</NuxtLayout>
</template>

<script setup lang="ts">
import { usePost } from "@/composables/posts/usePost";

const route = useRoute()

const { data: post, pending, error } = await usePost(Number(route.params.id));
</script>

<style scoped>
.post {
	padding: 120px 0 80px;
}

.post__title {
	margin-bottom: 72px;
}

.post__img {
	width: 100%;
	height: 700px;
	margin-bottom: 80px;
}

.post__img img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	   object-fit: cover;
}

.post__description {
	max-width: 695px;
}

.post__description h4 {
	font-weight: 400;
	font-size: 16px;
	line-height: 100%;
	color: #101010;
	margin-bottom: 32px;
}

.post__description p {
	font-weight: 400;
	font-size: 36px;
	line-height: 124%;
	color: #101010;
}

@media screen and (max-width: 992px) {
	.post__img {
		height: 480px;
	}
}

@media screen and (max-width: 768px) {
	.post {
		padding: 50px 0;
	}

	.post__title {
		margin-bottom: 40px;
	}

	.post__img {
		height: auto;
		margin-bottom: 40px;
	}
	
	.post__description p {
		font-size: 20px;
	}
}
</style>