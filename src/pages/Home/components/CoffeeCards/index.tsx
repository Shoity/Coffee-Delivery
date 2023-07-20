import {
	Actions,
	Card,
	MainSubtitleCard,
	MainTitleCard,
	PriceSection,
	TagContainer,
	WrapperForInput,
} from "./styles"
import { ShoppingCart, Plus, Minus } from "phosphor-react"
import cafe from "../../assets/Type=Expresso.svg"

export function CoffeeCard() {
	return (
		<>
			<Card>
				<img src={cafe} />
				<TagContainer>
					<span>Tradicional</span>
					<span>Tradicional</span>
				</TagContainer>
				<MainTitleCard>Expresso Tradicional</MainTitleCard>
				<MainSubtitleCard>
					O tradicional café feito com água quente e grãos moídos
				</MainSubtitleCard>
				<PriceSection>
					<span>9,90</span>
					<Actions>
						<WrapperForInput>
							<Minus size={14} weight='bold' />
							<input type='num' defaultValue={1} disabled />
							<Plus size={14} weight='bold' />
						</WrapperForInput>
						<button>
							<ShoppingCart size={22} weight='fill' />
						</button>
					</Actions>
				</PriceSection>
			</Card>
		</>
	)
}
