import type { Post } from "@/types/post";
import { API_URL } from "@/composables/config";

export const usePost = async (id: number) => {
	const { data, pending, error } = await useFetch<Post>(`${API_URL}/posts/${id}`);

	return { data, pending, error };
};
