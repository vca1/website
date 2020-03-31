import { buttons, forms, image, layout, styles, text } from "./components"
import {
  breakpoints,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  zIndices,
} from "./lib/tailwind"
import { colors, fonts, fontSizes } from "./variables"

export default {
  styles: {
    ...styles,
    ...layout,
  },

  // Variables: Tailwind
  breakpoints,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  space,
  zIndices,
  sizes,

  // Variables: Own set
  fonts,
  colors,
  fontSizes,

  // Components
  forms,
  layout,
  image,
  buttons,

  text,
}
