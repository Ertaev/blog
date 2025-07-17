import type { Post } from "@/types/post";
import { API_URL } from "@/composables/config";

export const usePosts = async () => {
	const { data, pending, error } = await useFetch<Post[]>(`${API_URL}/posts`);

	return { data, pending, error };
};
