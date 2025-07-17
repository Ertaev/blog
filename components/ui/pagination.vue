<template>
	<div class="pagination">
		<div
			v-if="currentPage > 1 || pages?.length === 1"
			@click="emit('click', currentPage - 1)"
			class="button button-prev button-arrow"
		>
			<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>

		<div 
			v-for="(page, index) in computedPages" 
			:key="index" 
			:class="['button', { active: page === currentPage }]"
			@click="emit('click', page)"
		>
			{{ page }}
		</div>

		<div
			v-if="currentPage < pages?.length || pages?.length === 1"
			@click="emit('click', currentPage + 1)"
			:class="{disable: pages.length === 1}"
			class="button button-next button-arrow"
		>
			<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#494949" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click', value: number): void;
}>();

defineProps<{
	currentPage: number; 
	computedPages: number[]; 
	pages: number[];
}>();
</script>

<style setup>
.pagination {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	gap: 8px;
}

.pagination .button {
	width: 44px;
	height: 44px;
	background: #F3F3F3;
	border-radius: 12px;
	color: #101010;
	-webkit-user-select: none;
	   -moz-user-select: none;
	    -ms-user-select: none;
	        user-select: none;
}

.pagination .button:hover {
	background: #E8E8E8;
}

.pagination .button.active {
	color: #FFFFFF;
	background: #101010;
}

.button-prev svg {
	-webkit-transform: rotate(180deg);
	    -ms-transform: rotate(180deg);
	        transform: rotate(180deg);
}

.button.button-arrow {
	border: 1px solid #E8E8E8;
	background: #FFFFFF;
}

@media screen and (max-width: 480px) {
	.pagination {
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		gap: 4px;
	}

	.pagination .button {
		font-size: 14px;
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}

	.pagination .button.active {
		width: 36px;
		height: 36px;
	}
}
</style>