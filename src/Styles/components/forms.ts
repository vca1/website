import { SxStyleProp } from "theme-ui"

const inputMarginWrapper: SxStyleProp = {
  my: 4,
}

const inputWrapper: SxStyleProp = {
  maxWidth: ["100%", "10/12", "9/12"],

  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "moonBase",

  borderRadius: "xxxl",
  backgroundColor: "underBase",

  transition: "0.15s ease all",

  svg: {
    stroke: "starWhite",
    width: "1.3em",
    height: "1.3em",
  },
}

const inputWrapperPosition: SxStyleProp = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",

  px: 3,
}

const input = {
  border: "none",
  color: "starWhite",
  fontWeight: 500,
  fontSize: 3,

  pl: 3,

  "&:focus": {
    outline: "none",
  },

  "&::placeholder": {
    color: "starBase",
  },
}

const forms: SxStyleProp = {
  inputWrapperPosition,
  inputMarginWrapper,
  inputWrapper,
  input,
}

export default forms
