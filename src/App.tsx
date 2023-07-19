import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import Header from "./components/header"
import { GlobalStyle } from "./global"

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
			<GlobalStyle />
		</ThemeProvider>
	)
}
