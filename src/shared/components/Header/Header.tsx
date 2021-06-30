import { Typography } from '@material-ui/core'
import { HeaderPropTypes } from "./Header.utils";
import { Container, MessageWrapper, useHeaderStyles } from './Header.style'

const Header: React.FC<HeaderPropTypes> = ({
  image = '',
  mainTitle = '',
  secondTitle = '',
}) => {
  const classes = useHeaderStyles()

  const backgroundStyleImage = { backgroundImage: `url(${image})` }

  return (
    <Container className={ classes.heightSmall} style={backgroundStyleImage}>
      <MessageWrapper className={classes.messageBottom}>
        <Typography variant="h1" color="primary" data-cy="header_title--text">
          {mainTitle}
        </Typography>
        <Typography
          variant="h2"
          color="secondary"
          paragraph
        >
          {secondTitle}
        </Typography>
      </MessageWrapper>
    </Container>
  )
}

export default Header
