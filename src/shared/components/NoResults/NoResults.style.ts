import { makeStyles, styled } from '@material-ui/core'
import { colors } from "../../../config";

export const Container = styled('div')({
  width: '100%',
  '@media (min-width: 1741px)': {
    margin: '0 1vw',
  },
})

export const TabContentWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})

export const useStyles = makeStyles({
  text: {
    marginTop: '15vh',
    fontSize: 16,
    fontWeight: 400,
    color: colors.font.black,
  },
  errorMsg: {
    marginTop: 0,
  },
})
