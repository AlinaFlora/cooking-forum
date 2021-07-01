export type Order = 'asc' | 'desc'


export const validEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export interface CurrentUser {
  createdAt: string
  authorId: string,
  authorFirstName: string
  authorLastName: string
}

export interface PostItem {
  id: string
  title: string
  createdAt: string
  content: string
  category: string
  authorId: string,
  authorFirstName: string
  authorLastName: string
  likesCount: number
}

export interface RecipeItem {
  id: string
  title: string
  createdAt: string
  //todo separate interface for recipes content
  content: string
  category: string
  authorId: string,
  authorFirstName: string
  authorLastName: string
}

export interface  TopicCategory {
  title: string,
  id?: string
}

export interface SearchPostsPayload {
}
export interface SearchRecipesPayload {
}

export interface AddNewPostsPayload {
  title: string
  content: string
  category?: string
  authorId?: string,
  authorFirstName: string
  authorLastName: string
}
