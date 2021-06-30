import { Theme, createMuiTheme } from '@material-ui/core'
import { enUS } from '@material-ui/core/locale'
import props from './props'
import palette from './palette'
import typography from './typography'

const theme: Theme = createMuiTheme(
  {
    props,
    palette,
    typography,
  },
  enUS,
)

export default theme
