import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';
//import ReactSelect from 'react-select';

// Make a request for a user with a given ID
Axios.get('http://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json?app_id=cACsVCKIDtHsxRqPbgWp&app_code=R4N1785oKp8kX3jbsWxzaQ&query=Pariser')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

class AddressEntryComponent extends React.Component {
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