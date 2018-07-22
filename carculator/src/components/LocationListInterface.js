import React from 'react';
import AddressEntryComponent from './AddressEntryComponent';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

class LocationListInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    }
  }
  
  onSubmitAddress = (currentAddressText: String) => {
    const locations = this.state.locations.slice();
    locations.push(currentAddressText);
    this.setState({locations: locations});
    console.log(this.state);
  }
  
  render() {
    let locationButtonArray = this.state.locations.map( address => 
      <RadioButton value={address} label={address} style={styles.radioButton} />
    )
    return (
      <div>
        <AddressEntryComponent
          onSubmitAddress={this.onSubmitAddress}
        />
        <RadioButtonGroup name="locationsList" labelPosition="left" style={styles.block}>
          {locationButtonArray}
        </RadioButtonGroup>
      </div>
    );
  }
}

export default LocationListInterface;