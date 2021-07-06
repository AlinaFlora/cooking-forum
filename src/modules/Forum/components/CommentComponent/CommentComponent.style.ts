import { makeStyles, styled } from "@material-ui/core";
import { colors } from "../../../../config";

export const Container = styled('div')({
  padding: '20 30px',
  '@media (min-width:1741px)': {
    padding: '0 10vw',
  },
})

export const useCommentComponentStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  avatar: {
    backgroundColor: colors.decoration.green,
  },
  cardHeader: {
    '&> div.MuiCardHeader-content > span':{
      fontSize: 18,
      '&.MuiCardHeader-title':{
        fontSize: 12,
      },
      '&:hover': {
        textDecoration: 'none',
        cursor: 'default'
      },
    }
  },

}));