import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Navigation from "../../../shared/components/Navigation/Navigation";
import Header from "../../../shared/components/Header/Header";
import { getRecipes, getRecipesDataLoading, getRecipesIsDataFetched } from "../store/selectors";
import { fetchRecipes } from "../store/actions";
import backgroundImg from "../../../shared/assets/images/header-background.jpg";
import { Container, Main, Wrapper } from '../../../shared/styles/Page.style'

const Recipes: React.FC = () => {

  const dispatch = useDispatch()
  const isDataLoading = useSelector(getRecipesDataLoading)
  const isDataFetched = useSelector(getRecipesIsDataFetched)
  const recipes = useSelector(getRecipes)

  useEffect(() => {
      const payload = {}
      dispatch(fetchRecipes(payload))
    }, []
  )

  return (
    //todo useEffect to load list of recipes (ger search values from search string)
    <>
    <Container>
      <Wrapper>
        <Navigation />
        <Main>
          <Header
            image={backgroundImg}
            mainTitle={'Cooking'}
            secondTitle={'Recipes'}
          />
          Recipes
        </Main>
      </Wrapper>
    </Container>

    </>
  )
}

export default Recipes
