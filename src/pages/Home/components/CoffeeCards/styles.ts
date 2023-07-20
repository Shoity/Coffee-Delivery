import styled from 'styled-components'

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 256px;
	border-top-right-radius: 36px;
	border-bottom-left-radius: 36px;
	background-color: ${props => props.theme['base-card']};
	padding: 1.25rem;

	img{
			position: relative;
			top: -13%;
	}
`
export const MainTitleCard = styled.h1`
	font-family: 'Baloo 2';
	font-size:1.25rem;
	font-weight: 700;
	line-height: 130%;
	text-align: center;
	margin-bottom: 8px;
	color: ${props => props.theme['base-subtitle']};
`
export const MainSubtitleCard = styled.span`
	font-size: 0.875rem;
	font-weight: 400;
	line-height: 130%;
	color:${props => props.theme['base-label']};
	text-align: center;
	margin-bottom: 2.0625rem;
`

export const TagContainer = styled.div`
	display: flex;
	gap:0.25rem;

	span{
		font-size:0.625rem;
		font-weight: 700;
		padding:0.25rem 0.5rem;
		border-radius: 6px;
		background-color: ${props => props.theme['yellow-light']};
		color: ${props => props.theme['yellow-dark']};
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
`

export const PriceSection = styled.div`
	display: flex;
	justify-content: space-around;
	gap: 1.4375rem;

	>span{
		font-family: 'Baloo 2';
		font-size: 24px;
		font-weight: 800px;
		line-height: 130%;
		color: ${props => props.theme['base-text']};

		&::before{
			content: 'R$';
			font-family: 'Roboto';
			font-size:14px;
			margin-right: 4px;
		}
	}
`

export const Actions = styled.div`
	display: flex;
	justify-content: center;
	gap:8px;

	button{
		display: flex;
		justify-content: center;
		align-items: center;
		
		padding: 6px;
		width: 32px;
		height: 32px;
		border-radius:6px ;
		border:0;

		background-color: ${props => props.theme['purple-dark']};
		color: ${props => props.theme['white']};
		cursor: pointer;
	}
`

export const WrapperForInput = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 4.5rem;
	height: 32px;
	border-radius: 6px;
	padding: 0 0.5rem;

	background-color: ${props => props.theme['purple-light']};
	
	input{
		background: transparent;
		border: 0;
		width: 2rem;
		height: 32px;
		padding: 0.5rem;
		text-align: center;
		color: ${props => props.theme['base-title']};
	}

	textarea:focus, input:focus{
		outline: none;
	}
	svg{
		height: 32px;
		color: ${props => props.theme['purple']};
		cursor: pointer;
	} 
`