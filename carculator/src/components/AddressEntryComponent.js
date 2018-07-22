import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Axios from 'axios';
import {Async} from 'react-select';
import 'react-select/dist/react-select.css';

class AddressEntryComponent extends React.Component {
  handleClick() {
    const currentAddressText = document.getElementById('addressTextField').value;
    this.props.onSubmitAddress(currentAddressText);
  }
  
  render() {
      
      const getOptions = function(input, callback){
      var url = "https://autocomplete.geocoder.cit.api.here.com/6.2/suggest.json" +
         "?app_id=cACsVCKIDtHsxRqPbgWp" +
         "&app_code=R4N1785oKp8kX3jbsWxzaQ" +
         "&query=" + input;

        Axios.get(url).then(function (response) {
          console.log(response);
            if (Object.keys(response).length === 0 && response.constructor === Object){
                throw "empty response";
            }
            var data = response.data;
            var firstKey = '';
            //get first property to see if error
            for (var prop in data){
                firstKey = prop;
                break;
            }
            if (firstKey == "error"){
                callback(data.error_description, null);
            }
            else {
                var responseObject = {
                    options: []
                }
                data.suggestions.forEach(x => {
                    responseObject.options.push({"label": x.label, "value": x.locationId})
                });
                callback(null, responseObject)
            }
        }).catch(function (error) {
            console.log(error);
        });
  }
      
    return(
      <div>
        <Async
            name="form-field-name"
            loadOptions={getOptions}
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