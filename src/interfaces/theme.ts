export interface Theme {
  COLORS: Colors
  FONT_FAMILY: FontFamily
  FONT_SIZE: FontSize
}

export interface Colors {
  WHITE: string
  GREEN_700: string
  GREEN_500: string
  RED: string
  RED_DARK: string
  GRAY_700: string
  GRAY_600: string
  GRAY_500: string
  GRAY_400: string
  GRAY_300: string
  GRAY_200: string
  GRAY_100: string
}

export interface FontFamily {
  REGULAR: string
  BOLD: string
}

export interface FontSize {
  SM: number
  MD: number
  LG: number
  XL: number
}
