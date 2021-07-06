import React from "react";
import clsx from 'clsx';
import { useHistory } from "react-router";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { PostComponentProps } from "./PostComponent.utils";
import { Container, usePostComponentStyles } from "./PostComponent.style";

const PostComponent: React.FC<PostComponentProps> = ({
                                                       post
                                                     }) => {
  const history = useHistory()
  const classes = usePostComponentStyles()

  const [expanded, setExpanded] = React.useState(false);

  const displayAvatar = () => {
    let avatarText = ''
    if (post.authorFirstName || post.authorLastName){
      avatarText  = (post.authorFirstName? post.authorFirstName.charAt(0): '') + (post.authorLastName? post.authorLastName.charAt(0): '')
    }
    return avatarText
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleTitleClick = () => {
    let str = '?' + (post.id ? `topicId=${post.id}&` : '')
    if (str.endsWith('&')) {
      str = str.slice(0, -1)
    }

    const location = {
      pathname: `/topic`,
      search: str
    }
    history.push(location)
  };

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
          title={post.title}
          onClick={handleTitleClick}
          subheader={post.createdAt}
        />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
              <Typography variant="body2"
                          component="p">
                {post.content}
              </Typography>
          </CardContent>
        </Collapse>
      </Card>

    </Container>
  )
}

export default PostComponent
