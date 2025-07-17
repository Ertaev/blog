<template>
	<NuxtLink class="posts__item" :to="`/post/${post.id}`">
		<div class="posts__item-img">
			<img :src="post.image" :alt="post.title">
		</div>

		<h4 class="posts__item-title">
			{{ post.preview }}
		</h4>

		<button class="posts__item-button">Read more</button>
	</NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from "@/types/post";

defineProps<{
	post: Post;
}>();
</script>

<style>
.posts__item {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.posts__item:hover {
	-webkit-transform: translateY(-20px);
	    -ms-transform: translateY(-20px);
	        transform: translateY(-20px);
}

.posts__item-img {
	height: 280px;
	margin-bottom: 24px;
}

.posts__item-img img {
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	   object-fit: cover;
}

.posts__item-title {
	font-weight: 400;
	font-size: 20px;
	line-height: 120%;
	color: #101010;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-o-text-overflow: ellipsis;
	   text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 3;
	margin-bottom: 12px;
}

.posts__item-button {
	font-weight: 400;
	font-size: 20px;
	line-height: 120%;
	color: #e2beff;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
	background: transparent;
	text-align: left;
}

.posts__item:hover .posts__item-button {
	opacity: 1;
	visibility: visible;
}
</style>
