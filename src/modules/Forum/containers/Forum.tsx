import { useSelector } from "react-redux";
import { Typography } from '@material-ui/core'
import { getCurrentUser } from "../store/selectors";
import AddCurrentUserSection from "../components/AddTopicSection/AddCurrentUserSection";
import Navigation from '../../../shared/components/Navigation/Navigation'
import Header from "../../../shared/components/Header/Header"
import SearchForm from "../components/SearchForm/SearchForm"
import ForumSection from "../components/ForumSection/ForumSection";
import backgroundImg from '../../../shared/assets/images/header-background.jpg'
import { Container, InformationSection, Main, Wrapper } from '../../../shared/styles/Page.style'


const Forum: React.FC = () => {
  const currentUser = useSelector(getCurrentUser)

  return (
    <Container>
      <Wrapper>
        <Navigation />
        <Main>
          <Header
            image={backgroundImg}
            mainTitle={'Cooking'}
            secondTitle={'Discussion forum'}
          />

          <SearchForm/>
          {!currentUser && (
            <InformationSection>
              <Typography
              >
              To be able to add new topic please add your first and last name
              </Typography>
            <AddCurrentUserSection/>
            </InformationSection>
            )}
          <ForumSection/>
        </Main>
      </Wrapper>
    </Container>
  )
}

export default Forum
