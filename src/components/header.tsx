import { Cart, HeaderContainer, Location } from "./styles"
import { MapPin, ShoppingCart } from "phosphor-react"

import LogoCoffee from "../assets/logo-coffee-delivery.svg"
export default function Header() {
	return (
		<HeaderContainer>
			<img src={LogoCoffee} alt="" />
			<nav>
				<Location>
					<MapPin weight="fill" size={22} />
					Localização
				</Location>
				<Cart>
					<ShoppingCart weight="fill" size={22} />
				</Cart>
			</nav>
		</HeaderContainer>
	)
}
