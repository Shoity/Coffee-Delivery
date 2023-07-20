import { Cart, HeaderContainer, Location } from "./styles"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import LogoCoffee from "../../assets/logo-coffee-delivery.svg"

export function Header() {
	return (
		<HeaderContainer>
			<NavLink to='/' title='Home'>
				<img src={LogoCoffee} alt='' />
			</NavLink>
			<nav>
				<Location>
					<MapPin weight='fill' size={22} />
					Localização
				</Location>
				<NavLink to='/checkout' title='Carrinho'>
					<Cart>
						<ShoppingCart weight='fill' size={22} />
					</Cart>
				</NavLink>
			</nav>
		</HeaderContainer>
	)
}
