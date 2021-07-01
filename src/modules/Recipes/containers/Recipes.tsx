import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import Navigation from "../../../shared/components/Navigation/Navigation"
import Header from "../../../shared/components/Header/Header"
import { getRecipes, getRecipesDataLoading, getRecipesIsDataFetched } from "../store/selectors"
import { fetchRecipes } from "../store/actions"
import { RecipeItem } from "../../../shared/types";
import Loader from "../../../shared/components/Loader/Loader";
import NoResults from "../../../shared/components/NoResults/NoResults";
import RecipesItemComponent from "../components/RecipesItemComponent/RecipesItemComponent"
import backgroundImg from "../../../shared/assets/images/header-background.jpg"
import { Container, Main, Wrapper } from '../../../shared/styles/Page.style'

const Recipes: React.FC = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const params = new URLSearchParams(location.search);
  const searchString = params.get('searchString')

  const isDataLoading = useSelector(getRecipesDataLoading)
  const isDataFetched = useSelector(getRecipesIsDataFetched)
  const recipes = useSelector(getRecipes)

  useEffect(() => {
    let payload = {}

    if (location.search){
       payload = {
        title: searchString
      }
    }
      dispatch(fetchRecipes(payload))
    }, [location, searchString]
  )

  const recipesItemDisplay = () => {
    if (isDataLoading) {
      return <Loader/>
    }
    if (isDataFetched) {
      if (recipes.length){
        return  recipes.map(
          (item: RecipeItem) => (
            <RecipesItemComponent
              key={item.id}
              recipesItem={item}
            />
          )
        )
      }
      else return (
          <p>Unfortunately there is no recipes for your search</p>)
    }
    return (<NoResults/>)
  }

  return (
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
