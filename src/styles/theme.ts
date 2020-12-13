
export const theme: IThemeProps = {
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
  },
  fonts: {
    body: 'Source Sans Pro, -apple-system, system-ui, sans-serif',
    heading: 'Source Serif Pro, -apple-system, system-ui, sans-serif'
  },
  colors: {
    primary: "#A1C9EE", /* light blue */
    secondary: "#696969", /* light gray */
    tertiary: "#020826", /* black */
    text: "#876c6c", /* coffee brown */
    background: "#fafaf2", /* grayish white */
    shadow: "rgba(0, 0, 0, 0.3)"
  }
}

interface IThemeProps {
  breakpoints: object,
  fonts: object,
  colors: object
}
