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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RecipesItemProps } from "./RecipesItemComponent.utils";
import { ItemWrapper, useRecipesItemStyles } from "./RecipesItemComponent.style";
import { formatedDate } from "../../../../shared/utils/helpers";


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


  return (
    <ItemWrapper >
      <Card className={classes.root}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Avatar className={classes.avatar}>
              {displayAvatar()}
            </Avatar>
          }
          title={recipesItem.title}
          subheader={formatedDate(recipesItem.createdAt)}
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
              {recipesItem.content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>

    </ItemWrapper>
  )
}

export default RecipesItemComponent
