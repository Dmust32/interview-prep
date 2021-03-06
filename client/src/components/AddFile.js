import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

class DragAndDropPic extends Component {
    // constructor(props){
    //     super(props);
    // }

  _onDrop = (files) => {
    var file = files[0];

    axios.post(`/api/aws`, {
        filename: file.name, 
        filetype: file.type
    })
    .then(function (result) {
      var signedUrl = result.data;
      var options = {
        headers: {
          'Content-Type': file.type
       }

      };
      
      return axios.put(signedUrl, file, options);
    })
    .then(res => {
        this.props.updateTestFile(res.config.url)
    })
    .catch(function (err) {
      console.log(2, err);
    });
  }

  render () {
    return (
      <Dropzone onDrop={ this._onDrop } >
        <div>
          Click to upload file!
        </div>
        
      </Dropzone>
    )
  }
}

export default DragAndDropPic