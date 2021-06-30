import createPalette, {
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'
import colors from "../colors";

const palette: PaletteOptions = {
  primary: {
    main: colors.font.white,
  },
  secondary: {
    main: colors.background.secondary,
  },
  text: {
    primary: colors.font.black,
    secondary: colors.font.darkBlue,
  },
  success: {
    main: colors.success,
  },
  error: {
    main: colors.error,
  },
}

export default createPalette(palette)
