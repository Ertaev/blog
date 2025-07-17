export const usePagination = <T>(data: Ref<T[] | undefined>, perPage:number = 8) => {
	const currentPage = ref(1);

	const pageCount = computed(() => Math.ceil((data.value?.length || 0) / perPage));

	const pages = computed(() => {
		const result = [];

		for (let i = 0; i < pageCount.value; i++) {
			result.push(i + 1);
		}

		return result;
	});

	const paginatedData = computed(() => { // отфильтронные данные
		const start = (currentPage.value - 1) * perPage;
		const end = start + perPage;

		if (data.value?.length === 0) {
			return data.value?.slice(start, end);
		} else {
			return data.value?.slice(start, end);
		}
	});

	const computedPages = computed(() => {
		const totalPages = pages.value?.length;

		// Если страниц мало — показываем все
		if (totalPages <= 5) return pages.value;
		// Array.from({ length: totalPages }, (_, i) => i + 1)

		// Если currentPage близко к началу
		if (currentPage.value <= 2) {
			return [1, 2, 3, 4, 5];
		} else if (currentPage.value >= totalPages - 1) { // Если currentPage близко к концу
			return [ totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages ];
		} else { // Иначе где-то посередине
			return [ currentPage.value - 2, currentPage.value - 1, currentPage.value, currentPage.value + 1, currentPage.value + 2 ];
		}
	});

	function handlePageClick(page: number) {
		currentPage.value = page;
	}

	return {
		perPage,
		currentPage,
		pageCount,
		pages,
		computedPages,
		paginatedData,
		handlePageClick,
	}
}