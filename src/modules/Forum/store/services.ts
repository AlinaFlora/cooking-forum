import { nanoid } from "@reduxjs/toolkit";
import { Api } from "../../../shared/services";
import { config } from "../../../config";
import { AddNewPostsPayload, SearchPostsPayload } from "../../../shared/types";

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
    const createdAt = new Date().toDateString()
    const id = nanoid(8)

    const requestConfig = {
      params: {
        createdAt,
        id,

        ...payload,

      },
    }
    return this.api.post(API, requestConfig.params).then(response => {
      return response.data
    })
  }


}
