import styled from 'styled-components';

const Section = styled.div`
 	background-color: #231E39;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding: 30px;
	width: 300px;
	text-align: center;
  align-items: center;
`;

const Title = styled.h2`
		text-align: center;
		margin-bottom: 3rem;
		box-shadow: 0 7px 2rem #ea5753;
    border-radius:3px;
padding:10px
`;

const StatList = styled.ul`
display: flex;
  		margin: 0;
align-items:center;
		padding: 0;
		list-style: none;
    width: 300px;
`;
const Item = styled.li`
  	width: 40rem;
			text-align: center;
			color: #fff;
			border-radius: 3rem;
			padding: 10px;
      border: 1px solid #cddc39;
      filter: drop-shadow(0 0 8px #ff5722);
`;
const Label = styled.span`
   font-weight: bold;
 `;
const Percentage = styled.span
`font-weight: bold;`

export {Section, Title, StatList, Item, Label, Percentage}