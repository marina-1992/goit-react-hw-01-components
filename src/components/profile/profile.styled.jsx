import styled from 'styled-components';

const Container = styled.div`
 	background-color: #231E39;
	border-top-left-radius: 5px;
  border-top-right-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding: 30px;
	width: 300px;
	text-align: center;
  align-items: center;
`;
const Photo = styled.img`
	padding: 7px;
   width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 2px solid #cddc39;
  filter: drop-shadow(0 0 8px #ff5722);
  margin-bottom: 10px;
`;
const Name = styled.p`
   color: #cddc39;
      font-size: 18px;
    font-weight: bold;
     margin-bottom: 10px;
`;
const TagName = styled.p`
  font-size: 14px;
    font-weight: 600;
     margin-bottom: 10px;
`;
const Location = styled.p`
   margin-bottom: 10px;
`;
const List = styled.ul`
padding: 0;
`;
const Items = styled.li`
 margin: 10px 0;
`;
const ItemsText = styled.span`
  font-weight: bold;
 	color: #c5c7cc;
`;
const ItemsSpan = styled.span`
  font-weight: bold;
  color: #cddc39;
`;
export { Container, Photo, Name, TagName, Location, List, Items, ItemsText, ItemsSpan };