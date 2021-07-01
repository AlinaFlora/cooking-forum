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
import AddTopicForm from "../components/AddTopicForm/AddTopicForm";
import React from "react";


const Forum: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
          {//todo refresh if add user - hide it and show form
            !currentUser && (
            <InformationSection>
              <Typography
              >
              To be able to add new topic please add your first and last name
              </Typography>
            <AddCurrentUserSection/>
            </InformationSection>
            )}

            {//todo add some acordion to display form and info aboout current user + reset user functionality
              currentUser && (
            <InformationSection>
              <Typography
              >
              To add new topic please fill and submit the form
              </Typography>
            <AddTopicForm setIsSubmitted={setIsSubmitted}/>
            </InformationSection>
            )}
          <ForumSection isSubmitted={isSubmitted}/>
        </Main>
      </Wrapper>
    </Container>
  )
}

export default Forum
