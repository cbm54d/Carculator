import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddressEntryComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick() {
    const currentAddressText = document.getElementById('addressTextField').value;
    this.props.onSubmitAddress(currentAddressText);
  }
  
  render() {
    return(
      <div>
        <TextField 
          hintText="Enter Address"
          id="addressTextField"
        /><br /><br />
        <RaisedButton
          label="Add Address"
          onClick={() => this.handleClick()}
        />
        <br /><br />
      </div>
    );
  }
}
        
export default AddressEntryComponent;