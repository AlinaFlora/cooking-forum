import { makeStyles, styled } from "@material-ui/core";
import { colors } from "../../../../config";

export const ItemWrapper = styled('div')({
  padding: '20 30px',
  '@media (min-width:1741px)': {
    padding: '0 10vw',
  },
})

export const useRecipesItemStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  avatar: {
    backgroundColor: colors.decoration.green,
  },
  cardHeader: {
    '&:hover': {
      cursor: 'pointer',
    },
    '&> div.MuiCardHeader-content > span':{
      fontWeight: 500,
      fontSize: 20,
      '&:hover': {
        textDecoration: 'underline'
      },
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));