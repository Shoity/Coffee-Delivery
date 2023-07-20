import styled from 'styled-components'

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
	margin: 5.875rem 10rem;
`

export const HomeInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8.75rem;
`;

export const InfoContainer = styled.div`
	width:clamp(588px, 36.75rem,36.75rem);

	p{
		margin-top:1rem;
		font-size: 1.25rem;
	}

	h1{
		font-family: 'Baloo 2';
		font-weight: 800;
		font-size:3rem;
		line-height: 130%;
		color: ${props => props.theme['base-title']};
    }   
	margin-bottom: 2.5rem;
`
export const AdvantagesInfoGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	margin-top: 1.25rem;
	grid-row-gap: 1.25rem;
	`

export const AdvantegesInfoGridItem = styled.span`
	display: flex;
	align-items: center;
	gap: 0.75rem;

	span{
		color: ${props => props.theme['base-text']};
	}
`

const Circle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	padding: 8px;
	border-radius: 50%;
	color: ${props => props.theme.white};
`

export const Cartcircle = styled(Circle)`
	background-color: ${props => props.theme['yellow-dark']};
`

export const PackageCircle = styled(Circle)`
	background-color: ${props => props.theme['base-text']}
`

export const ClockCircle = styled(Circle)`
	background-color: ${props => props.theme.yellow};
`

export const CoffeeCircle = styled(Circle)`
	background-color: ${props => props.theme.purple};
`

export const SubTitle = styled.h2`
	font-family: 'Baloo 2';
	font-weight: 800;
	font-size: 2rem;
	line-height: 130%;
	margin-bottom: 3.375rem;
`

export const CoffeeListContainer = styled.div`
	display: flex;
	flex-direction: column;
	`
export const CoffeeList = styled.ul`
	display: flex;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;
	`