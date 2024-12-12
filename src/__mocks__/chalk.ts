const chalk = {
  red: (text: string) => text,
  green: (text: string) => text,
  yellow: (text: string) => text,
  blue: (text: string) => text,
  magenta: (text: string) => text,
  cyan: (text: string) => text,
  white: (text: string) => text,
  gray: (text: string) => text,
  hex: (color: string) => (text: string) => text,
};

export default chalk;
