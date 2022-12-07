import { createContext } from "react";
interface ThemeData {
  isDark: boolean;
  toggleTheme: (value: boolean) => void;
}
const ThemeContext = createContext<ThemeData>({
  isDark: false,
  toggleTheme: (value: boolean) => {},
});
ThemeContext.displayName = "ThemeProvider";
export default ThemeContext;
