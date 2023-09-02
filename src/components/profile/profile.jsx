import PropTypes from 'prop-types';
import {ItemsSpan, ItemsText, Items, List, Location, TagName, Name, Photo, Container} from './profile.styled'

export const Profile = ({
  username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div>
        <Photo
          src={avatar}
          alt={username}
          width="300"
        />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </div>
      <List>
        <Items>
          <ItemsText>Followers: </ItemsText>
          <ItemsSpan>{stats.followers}</ItemsSpan>
        </Items>
        <Items>
          <ItemsText>Views: </ItemsText>
          <ItemsSpan>{stats.views}</ItemsSpan>
        </Items>
        <Items>
          <ItemsText>Likes: </ItemsText>
          <ItemsSpan>{stats.likes}</ItemsSpan>
        </Items>
      </List>
    </Container >
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
};