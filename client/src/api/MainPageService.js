import { apiClient } from './ApiClient';

export const RetrieveAllPostsForPostApi = () => apiClient.get(`/boards`);
