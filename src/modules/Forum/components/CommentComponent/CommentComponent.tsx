import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { CommentComponentProps } from "./CommentComponent.utils";
import { Container, useCommentComponentStyles } from "./CommentComponent.style";

const CommentComponent: React.FC<CommentComponentProps> = ({
                                                       comment
                                                     }) => {
  const classes = useCommentComponentStyles()

  const displayAvatar = () => {
    let avatarText = ''
    if (comment.authorFirstName || comment.authorLastName){
      avatarText  = (comment.authorFirstName? comment.authorFirstName.charAt(0): '') + (comment.authorLastName? comment.authorLastName.charAt(0): '')
    }
    return avatarText
  };

  const authorInfo = comment.authorFirstName+' '+comment.authorLastName+' '+comment.createdAt

  return (
    <Container >
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar className={classes.avatar}>
              {displayAvatar()}
            </Avatar>
          }
          title={authorInfo}
          subheader={comment.body}
        />
      </Card>

    </Container>
  )
}

export default CommentComponent
