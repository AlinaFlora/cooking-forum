import { Api } from "../../../shared/services";
import { config } from "../../../config";
import {
  AddNewCommentPayload,
  AddNewPostsPayload,
  SearchCommentsPayload, SearchPostByIdPayload,
  SearchPostsPayload
} from "../../../shared/types";

export default class ForumApi extends Api {

  public async searchPosts(payload: SearchPostsPayload) {
    const API = `${config.API_URL}/posts`
    const requestConfig = {
      params: {
        ...payload,
      },
    }
    return this.api.get(API, requestConfig).then(response => {
      return response.data
    })
  }

  public async searchPostById(payload: SearchPostByIdPayload) {
    const API = `${config.API_URL}/one_post/${payload.id}`
    const requestConfig = {
      params: {
        ...payload,
      },
    }
    return this.api.get(API, requestConfig).then(response => {
      return response.data
    })
  }

  public async searchComments(payload: SearchCommentsPayload) {
    const API = `${config.API_URL}/comments/${payload.postId}`
    return this.api.get(API).then(response => {
      return response.data
    })
  }

  public async searchCategories() {
    const API = `${config.API_URL}/categories`
    const requestConfig = {
      params: {},
    }

    return this.api.get(API, requestConfig).then(response => {
      return response.data
    })
  }

  public async addPost(payload: AddNewPostsPayload) {
    const API = `${config.API_URL}/posts`
    const requestConfig = {
      params: {
        ...payload,
      },
    }
    return this.api.post(API, requestConfig.params).then(response => {
      return response.data
    })
  }

  public async addComment(payload: AddNewCommentPayload) {
    const API = `${config.API_URL}/comments`
    const requestConfig = {
      params: {
        ...payload,
      },
    }
    return this.api.post(API, requestConfig.params).then(response => {
      return response.data
    })
  }

}
