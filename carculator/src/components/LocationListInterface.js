import React from 'react';
//import LocationList from './LocationList';
import AddressEntryComponent from './AddressEntryComponent';
import { List, ListItem } from 'material-ui/List';

class LocationListInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ["2908 SE Bingham Court", "2901 Oak Street", "124 W Terrace"],
    }
  }
  
  onSubmitAddress = (currentAddressText: String) => {
    const locations = this.state.locations.slice();
    locations.push(currentAddressText);
    this.setState({locations: locations});
    console.log(this.state);
  }
  
  render() {
    let locationListArray = this.state.locations.map( address => <ListItem primaryText={address} key={address}/>)
    return (
      <div>
        <AddressEntryComponent
          onSubmitAddress={this.onSubmitAddress}
        />
        <List>
          {locationListArray}
        </List>
      </div>
    );
  }
}

export default LocationListInterface;