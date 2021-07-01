import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchPosts } from "../../store/actions";
import { getForumDataLoading, getForumIsDataFetched, getPosts } from "../../store/selectors";
import NoResults from "../../../../shared/components/NoResults/NoResults";
import PostComponent from "../PostComponent/PostComponent";
import { PostItem } from "../../../../shared/types";
import { ForumSectionProps } from "./ForumSection.utils";
import Loader from "../../../../shared/components/Loader/Loader";
import { Container } from "./ForumSection.style";


  const ForumSection: React.FC<ForumSectionProps> = ({
                                                       isSubmitted
                                                     }) => {

  const dispatch = useDispatch()
  const isDataLoading = useSelector(getForumDataLoading)
  const isDataFetched = useSelector(getForumIsDataFetched)
  const posts = useSelector(getPosts)

  useEffect(() => {
      const payload = {}
      dispatch(fetchPosts(payload))
    }, [isSubmitted]
  )

  const createRowComponents = () => {
    if (isDataLoading) {
      return <Loader/>
    }
    if (isDataFetched) {
      return posts.map(
        (row: PostItem, index: number) => (
          <div key={`${row.id}-${index}`}>
            <PostComponent
              post={row}/>
          </div>
        )
      )
    }
    return (<NoResults/>)
  }

  return (
    <Container>
      {createRowComponents()}
    </Container>
  )
}

export default ForumSection
