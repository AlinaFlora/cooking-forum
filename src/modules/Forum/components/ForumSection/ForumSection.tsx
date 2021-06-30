import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../store/actions";
import { getForumDataLoading, getForumIsDataFetched, getPosts } from "../../store/selectors";
import NoResults from "../../../../shared/components/NoResults/NoResults";
import PostComponent from "../PostComponent/PostComponent";
import { PostItem } from "../../../../shared/types";
import Loader from "../../../../shared/components/Loader/Loader";
import { Container } from "./ForumSection.style";

const ForumSection: React.FC = () => {

  const dispatch = useDispatch()
  const isDataLoading = useSelector(getForumDataLoading)
  const isDataFetched = useSelector(getForumIsDataFetched)
  const posts = useSelector(getPosts)

  useEffect(() => {
      const payload = {}
      dispatch(fetchPosts(payload))
    }, []
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
