import { Link, NavLink } from 'react-router-dom'
import { routes } from "../../../modules"
import logo from '../../assets/images/logo.png'
import {
  Container,
  Logo,
  Nav,
  NavLi,
  NavUl,
  NavWrapper,
  activeStyle,
} from './Navigation.style'
import { useNavStyles } from './Navigation.style'


const Navigation: React.FC = () => {
  const classes = useNavStyles()

  const routesNav = routes.map(({ path, title, label, navDisplay = true }) => {

    return (
      navDisplay && (
        <NavLi key={label}>
          <NavLink
            activeStyle={activeStyle}
            className={classes.navLink}
            to={path}
            exact={true}
          >
            {title}
          </NavLink>
        </NavLi>
      )
    )
  })

  return (
    <Container>
      <NavWrapper>
        <Link to="/">
          <Logo src={logo} alt="logo"/>
        </Link>
        <Nav>
          <NavUl>{routesNav}</NavUl>
        </Nav>
      </NavWrapper>
    </Container>
  )
}
export default Navigation
