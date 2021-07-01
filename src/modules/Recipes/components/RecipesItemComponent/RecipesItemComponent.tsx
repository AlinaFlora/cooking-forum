import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import React from "react";
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RecipesItemProps } from "./RecipesItemComponent.utils";
import { Container, useRecipesItemStyles } from "./RecipesItemComponent.style";


const RecipesItemComponent: React.FC<RecipesItemProps> = ({
                                                       recipesItem
                                                     }) => {
  const classes = useRecipesItemStyles()
  const [expanded, setExpanded] = React.useState(false);

  const displayAvatar = () => {
    let avatarText = ''
    if (recipesItem.authorFirstName || recipesItem.authorLastName){
      avatarText  = (recipesItem.authorFirstName? recipesItem.authorFirstName.charAt(0): '') + (recipesItem.authorLastName? recipesItem.authorLastName.charAt(0): '')
    }
    return avatarText
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLikeClick = () => {
    //todo post.likes ++ and save
    //use some user id ro know is current user already liked this //maybe maki it only for logged in users
    //make color red if liked
  };

  const handleTitleClick = () => {
    //todo  display comments and form to add new comment
  };

  //todo add diplay and add new comments, add style, add like functionality

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
          title={recipesItem.title}
          onClick={handleTitleClick}
          subheader={recipesItem.createdAt}
        />

        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon  onClick={handleLikeClick} />
          </IconButton>
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
              {recipesItem.content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

    </Container>
  )
}

export default RecipesItemComponent
