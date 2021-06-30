import { makeStyles, styled } from '@material-ui/core'
import { colors } from "../../../config";

export const Container = styled('header')({
  overflow: 'hidden',
  height: 520,
  display: 'flex',
  marginBottom: 300,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',

  '&::before': {
    content: '""',
    display: 'block',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    background: colors.imgGradient,
  },
})

export const MessageWrapper = styled('div')({
  position: 'absolute',
  top: '30%',
  left: 85,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 2,
  '@media (min-width:1741px)': {
    left: '10vw',
  },
})

export const useHeaderStyles = makeStyles({
  heightSmall: {
    height: 120,
    marginBottom: 45,
  },
  messageBottom: {
    top: '20%',
  },
})
