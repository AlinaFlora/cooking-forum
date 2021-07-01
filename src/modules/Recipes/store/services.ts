import { Api } from "../../../shared/services";
import { config } from "../../../config";
import { SearchRecipesPayload } from "../../../shared/types";

export default class RecipesApi extends Api {

  public async searchRecipes(payload: SearchRecipesPayload) {
    const API = `${config.API_URL}/recipes`

    const requestConfig = {
      params: {
        ...payload,
      },
    }

    return this.api.get(API, requestConfig).then(response => {
      return response.data
    })
  }


}
