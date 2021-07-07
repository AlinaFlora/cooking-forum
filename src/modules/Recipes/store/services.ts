import { Api } from "../../../shared/services";
import { config } from "../../../config";
import { SearchRecipesPayload } from "../../../shared/types";

export default class RecipesApi extends Api {

  public async searchRecipes(payload: SearchRecipesPayload) {
    let API = `${config.API_URL}/recipes`

    if (payload.title){
      API = `${config.API_URL}/recipes/${payload.title}`
    }

    return this.api.get(API).then(response => {
      return response.data
    })
  }

}
