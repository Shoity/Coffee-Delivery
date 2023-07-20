import CoffeeImage from "./assets/coffee.png"
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import {
	AdvantagesInfoGrid,
	AdvantegesInfoGridItem,
	Cartcircle,
	ClockCircle,
	CoffeeCircle,
	HomeInfoContainer,
	InfoContainer,
	PackageCircle,
	SubTitle,
	HomeContainer,
	CoffeeListContainer,
	CoffeeList,
} from "./styles"
import { CoffeeCard } from "./components/CoffeeCards"

export function Home() {
	return (
		<HomeContainer>
			<HomeInfoContainer>
				<InfoContainer>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<AdvantagesInfoGrid>
						<AdvantegesInfoGridItem>
							<Cartcircle>
								<ShoppingCart size={16} weight='fill' />
							</Cartcircle>{" "}
							<span>Compra simples e segura</span>
						</AdvantegesInfoGridItem>

						<AdvantegesInfoGridItem>
							<PackageCircle>
								<Package size={16} weight='fill' />
							</PackageCircle>{" "}
							<span>Embalagem mantém o café intacto</span>
						</AdvantegesInfoGridItem>

						<AdvantegesInfoGridItem>
							<ClockCircle>
								<Timer size={16} weight='fill' />
							</ClockCircle>{" "}
							<span>Entrega rápida e rastreada</span>
						</AdvantegesInfoGridItem>

						<AdvantegesInfoGridItem>
							<CoffeeCircle>
								<Coffee size={16} weight='fill' />
							</CoffeeCircle>{" "}
							<span>O café chega fresquinho até você</span>
						</AdvantegesInfoGridItem>
					</AdvantagesInfoGrid>
				</InfoContainer>
				<div>
					<img src={CoffeeImage} alt='Ilustration coffee' />
				</div>
			</HomeInfoContainer>

			<CoffeeListContainer>
				<SubTitle>Nossos cafés</SubTitle>
				<CoffeeList>
					<CoffeeCard />
					<CoffeeCard />
					<CoffeeCard />
				</CoffeeList>
			</CoffeeListContainer>
		</HomeContainer>
	)
}
