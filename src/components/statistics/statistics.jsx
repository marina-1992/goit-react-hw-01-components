import PropTypes from 'prop-types';
import {Section, Title, StatList, Item, Label, Percentage} from './statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
<Section>
 {title && <Title>{title}</Title>} 
      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
          <Item key={id}>
      <Label>{label} </Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
          )} 
         ) }
  </StatList>
</Section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
};