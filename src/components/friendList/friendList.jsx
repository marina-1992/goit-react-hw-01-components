import PropTypes from 'prop-types';
import { FriendsListStyled, List, ListItem, StatusSpan, Avatar, Name } from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListStyled>
      <List>
        {friends.map(({ id, avatar, name, isOnline }) => (
               <ListItem key={id}>
            <StatusSpan $isOnline={isOnline}>
              {isOnline ? "Online" : "Offline"}           
  </StatusSpan>
  <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
</ListItem>
        ))}  
    </List>
    </FriendsListStyled>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  })).isRequired
};
