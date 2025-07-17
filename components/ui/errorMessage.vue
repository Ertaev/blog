<template>
	<div class="error">
		<h2 class="error__title">Ошибка загрузки</h2>
		<p class="error__text">{{ message }}</p>
		<p class="error__text">Попробуйте позже</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	message: string | undefined;
}>();
</script>

<style scoped>
.error__title {
	font-weight: 400;
	font-size: 60px;
	line-height: 100%;
	color: #101010;
	padding: 30px 0;
}

.error__text {
	font-weight: 400;
	font-size: 20px;
	line-height: 100%;
	color: #101010;
	margin-bottom: 10px;
}
</style>