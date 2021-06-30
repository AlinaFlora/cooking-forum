import { Container, Main, Wrapper } from '../../../shared/styles/Page.style'
import Navigation from "../../../shared/components/Navigation/Navigation";
import Header from "../../../shared/components/Header/Header";
import backgroundImg from "../../../shared/assets/images/header-background.jpg";

const Recipes: React.FC = () => {
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
