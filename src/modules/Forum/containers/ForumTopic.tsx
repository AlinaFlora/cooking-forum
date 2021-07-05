import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Typography } from '@material-ui/core'
import { getCurrentUser, getPosts } from "../store/selectors";
import Header from "../../../shared/components/Header/Header";
import AddCurrentUserSection from "../components/AddCurrentUserSection/AddCurrentUserSection";
import Navigation from '../../../shared/components/Navigation/Navigation'
import { fetchPosts } from "../store/actions";
import AddCommentForm from "../components/AddCommentForm/AddCommentForm";
import CommentsSection from "../components/CommentsSection/CommentsSection";
import backgroundImg from '../../../shared/assets/images/header-background.jpg'
import { Container, InformationSection, Main, Wrapper } from '../../../shared/styles/Page.style'


const ForumTopic: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isCurrentUserExist, setIsCurrentUserExist] = React.useState(false);

  const currentUser = useSelector(getCurrentUser)
  const currentTopic = useSelector(getPosts)

  const location = useLocation()
  const dispatch = useDispatch()

  const params = new URLSearchParams(location.search);
  const topicId = params.get('topicId')

  useEffect(() => {

      if (location.search && topicId){
        const payload = {
          id: topicId
        }
        dispatch(fetchPosts(payload))
      }

    }, [isSubmitted]
  )


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

          {!(isCurrentUserExist || currentUser) && (
            <InformationSection>
              <Typography
              >
                To be able add new comment please add your first and last name
              </Typography>
              <AddCurrentUserSection setIsCurrentUserExist={setIsCurrentUserExist}/>
            </InformationSection>
          )}

          {currentTopic[0] &&
            //todo style
          (
              <InformationSection>
                  <Typography
                  >
                    {currentTopic[0].title}
                  </Typography>
                <Typography>
                  {currentTopic[0].authorFirstName}{' '}{currentTopic[0].authorLastName}{' '}{currentTopic[0].createdAt}
                </Typography>
                <Typography>
                  {currentTopic[0].content}
                </Typography>
              </InformationSection>
          )}

          {
            //todo add some acordion to display form and info aboout current user + reset user functionality

            (topicId && (isCurrentUserExist || currentUser) )&& (
                <AddCommentForm topicId={topicId} setIsSubmitted={setIsSubmitted}/>
            )}
          {topicId &&  <CommentsSection topicId={topicId} isSubmitted={isSubmitted}/>}
        </Main>
      </Wrapper>
    </Container>
  )
}

export default ForumTopic
