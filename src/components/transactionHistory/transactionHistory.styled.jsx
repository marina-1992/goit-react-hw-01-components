import styled from 'styled-components';

const TransactionHistorySection = styled.table`
width: 100%;
background-color: #231E39;
border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
 	color: #B3B8CD;
  padding: 15px;

`;
const TableHead = styled.thead`
color: #cddc39;
  font-weight: bold;
    filter: drop-shadow(0 0 8px #ff5722);
  ` ;

const TableHeaderCell = styled.th`
    padding: 5px;
  border: 1px solid #ddd;
`;
const TableBody = styled.tbody`
 text-align: center;
 
`;

const TableRow = styled.tr`
  
`;
const TableCell = styled.td`
  padding: 5px;
  border: 1px solid #ddd;


`;

export { TransactionHistorySection, TableHead, TableBody, TableHeaderCell, TableRow, TableCell };