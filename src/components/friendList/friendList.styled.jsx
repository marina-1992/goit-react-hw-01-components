import styled from 'styled-components';

const FriendsListStyled = styled.div`
	background-color: #231E39;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding: 30px;
	width: 300px;
  min-height: 350px;
	text-align: center;
  align-items: center;
`

const List = styled.ul`
 list-style: none;
  padding: 0;`

const ListItem = styled.li`
 display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
  &:last-child {
    border-bottom: none;
  }

`

const StatusSpan = styled.span`
font-weight: bold;
border-radius: 50%;
font-size: 16px;
color: ${props=>(props.$isOnline ? '#008000' : '#ff3300')};
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 10px;`;
const Name = styled.p`
font-weight: bold;
  font-size: 20px;`;

export { FriendsListStyled, List, ListItem, StatusSpan, Avatar, Name };