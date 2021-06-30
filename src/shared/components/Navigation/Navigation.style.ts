import { makeStyles, styled } from '@material-ui/core'
import { colors } from "../../../config";

export const Container = styled('aside')({
  width: 260,
  flexShrink: 0,
  minHeight: '100vh',
  position: 'relative',
  top: 0,
  left: 0,
  boxShadow: ' 10px -10px 25px 0 rgba(0, 0, 0, .25)',
  backgroundColor: colors.background.primary,
})

export const NavWrapper = styled('div')({
  position: 'sticky',
  top: 0,
  left: 0,
  width: '100%',
})

export const Logo = styled('img')({
  maxWidth: 200,
  marginLeft: '8.5%',
  marginRight: '8.5%',
  marginTop: '5%',
  marginBottom: '5%',
  zIndex: 1,
})

export const Nav = styled('nav')({
  marginTop: 70,
})

export const NavUl = styled('ul')({
  listStyle: 'none',
})

export const NavLi = styled('li')({
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  fontSize: '16px',
})

export const useNavStyles = makeStyles({
  navLink: {
    display: 'block',
    height: '100%',
    width: '100%',
    padding: '22px 45px 18px 35px',
    color: colors.font.black,
    textDecoration: 'none',
    fontSize: '16px',
    borderRight: '10px solid transparent',
  },
})

export const activeStyle = {
  color: colors.navActive.font,
  fontWeight: 700,
  borderColor: colors.navActive.border,
  backgroundColor: colors.navActive.background,
}
