import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchComments } from "../../store/actions";
import { getComments, getForumDataLoading, getForumIsDataFetched } from "../../store/selectors";
import NoResults from "../../../../shared/components/NoResults/NoResults";
import { CommentItem } from "../../../../shared/types";
import { CommentsSectionProps } from "./CommentsSection.utils";
import CommentComponent from "../CommentComponent/CommentComponent";
import Loader from "../../../../shared/components/Loader/Loader";
import { Container } from "./CommentsSection.style";


const CommentsSection: React.FC<CommentsSectionProps> = ({
                                                           isSubmitted,
                                                           topicId
                                                         }) => {

  const dispatch = useDispatch()
  const isDataLoading = useSelector(getForumDataLoading)
  const isDataFetched = useSelector(getForumIsDataFetched)
  const comments = useSelector(getComments)

  useEffect(() => {
      if (topicId) {
        const payload = {
          postId: topicId
        }
        dispatch(fetchComments(payload))
      }

    }, [isSubmitted]
  )

  const displayComments = () => {
    if (isDataLoading) {
      return <Loader/>
    }
    if (isDataFetched) {
      return comments.map(
        (comment: CommentItem, index: number) => (
          <div key={`${comment.id}-${index}`}>
            <CommentComponent
              comment={comment}/>
          </div>
        )
      )
    }
    return (<NoResults/>)
  }

  return (
    <Container>
      {displayComments()}
    </Container>
  )
}

export default CommentsSection
