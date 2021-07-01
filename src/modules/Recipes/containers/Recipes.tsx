import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import * as queryString from "querystring"
import { useLocation } from 'react-router-dom'
import Navigation from "../../../shared/components/Navigation/Navigation"
import Header from "../../../shared/components/Header/Header"
import { getRecipes, getRecipesDataLoading, getRecipesIsDataFetched } from "../store/selectors"
import { fetchRecipes } from "../store/actions"
import RecipesItemComponent from "../components/RecipesItemComponent/RecipesItemComponent"
import backgroundImg from "../../../shared/assets/images/header-background.jpg"
import { Container, Main, Wrapper } from '../../../shared/styles/Page.style'
import { RecipeItem } from "../../../shared/types";
import Loader from "../../../shared/components/Loader/Loader";
import NoResults from "../../../shared/components/NoResults/NoResults";

const Recipes: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const { title = '' } = queryString.parse(
    location.search
  )

  const isDataLoading = useSelector(getRecipesDataLoading)
  const isDataFetched = useSelector(getRecipesIsDataFetched)
  const recipes = useSelector(getRecipes)

  useEffect(() => {
      const payload = {
        title: title? title : ''
      }
      dispatch(fetchRecipes(payload))
    }, [location, title]
  )

  const recipesItemDisplay = () => {
    if (isDataLoading) {
      return <Loader/>
    }
    if (isDataFetched) {
      return  recipes.map(
        (item: RecipeItem) => (
          <RecipesItemComponent
            key={item.id}
            recipesItem={item}
          />
        )
      )
    }
    return (<NoResults/>)
  }

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
          {recipesItemDisplay()}
        </Main>
      </Wrapper>
    </Container>

    </>
  )
}

export default Recipes
