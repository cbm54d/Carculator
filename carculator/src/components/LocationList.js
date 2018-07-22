import React from 'react';
import { List, ListItem } from 'material-ui/List';

class LocationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: props.locations,
    }
  }
  render() {
    let locationListArray = this.state.locations.map( address => <ListItem primaryText={address} key={address}/>)
    return (
      <List>
        {locationListArray}
      </List>
    );
  }
}

export default LocationsList;