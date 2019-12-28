interface IBaseTheme {
  bg: string;
  fg: string;
}

interface IMenuTheme extends IBaseTheme {}

interface IButton extends IBaseTheme {}

interface IColor extends IBaseTheme {}

export interface ITheme extends IBaseTheme {
  success: IColor;
  danger: IColor;
  warning: IColor;
  primary: IColor;
  default: IColor;
  info: IColor;
}

export const light: ITheme = {
  bg: "#FFFFFFE5",
  fg: "#7874f2",
  success: {
    bg: "#FFFFFFE5",
    fg: "#7874f2"
  },
  danger: {
    bg: "#FFFFFFE5",
    fg: "#7874f2"
  },
  warning: {
    bg: "#FFFFFFE5",
    fg: "#7874f2"
  },
  primary: {
    bg: "#FFFFFFE5",
    fg: "#7874f2"
  },
  default: {
    bg: "#FFFFFFE5",
    fg: "#7874f2"
  },
  info: {
    bg: "#7884f2",
    fg: "#F5F5F5"
  }
};
