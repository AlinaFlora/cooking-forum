import { RootState } from "../../../app/App";

export const getPosts = (state: RootState) => state.forum.posts
export const getCategories = (state: RootState) => state.forum.categories

export const getForumDataLoading = (state: RootState) => state.forum.isDataLoading
export const getForumIsDataFetched = (state: RootState) => state.forum.isDataFetched

export const getCurrentUser = () => localStorage.getItem('currentUser')

export const getError = (state: RootState) => state.forum.error
