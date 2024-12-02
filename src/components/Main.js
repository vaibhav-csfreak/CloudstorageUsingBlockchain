import React, { Component } from "react";
// import { convertBytes } from "./helpers";
// import moment from "moment";

import "./Main.css";
import Files from './Files'
class Main extends Component {
  state = {
    droppedFileName: "",// State to hold the dropped file name
    filesTab:false 
  };
  constructor(props) {
    super(props);
    this.changeToFileTab = this.changeToFileTab.bind(this);
  }

  changeToFileTab = () => {
    this.setState({ filesTab: true});
    console.log("inside",this.state.filesTab);
  };

  handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0] || event.target.files[0];

    this.props.captureFile({ target: { files: [file] } });
    const fileInput = document.getElementById('fileUpload');
  if (fileInput) {
    fileInput.files = event.dataTransfer.files;
    fileInput.dispatchEvent(new Event('change', { bubbles: true }));
  }

    this.setState({ droppedFileName: file.name });
    console.log("drop", this.state.droppedFileName); // Update the state with the dropped file name
  };

  handleFileChange = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.target.files[0];

    this.props.captureFile({ target: { files: [file] } });

    this.setState({ droppedFileName: file.name });
    console.log("filechange", this.droppedFileName); // Update the state with the selected file name
  };
  

  render() {
    const { droppedFileName } = this.state;
     const isFileSelected = !!droppedFileName;

    return (
      <div>     
        { !this.state.filesTab ?
      <div className="bg-img-main">
        <div className="container-fluid mt-5 text-center">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto">
              <div className="content">
                <p>&nbsp;</p>
                <div className="card mb-3 mx-auto bg-dark">
                  <h2 className="text-white text-monospace bg-dark">
                    <b>
                      <ins>Share File</ins>
                    </b>
                  </h2>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const description = this.fileDescription.value;
                      this.props.uploadFile(description);
                    }}
                  >
                    <div className="form-group">
                      <br></br>
                      <input
                        id="fileDescription"
                        type="text"
                        ref={(input) => {
                          this.fileDescription = input;
                        }}
                        className="form-control text-monospace"
                        placeholder="description..."
                        required
                      />
                    </div>
                    <div
                      className="dropzone"
                      onDragOver={this.handleDragOver}
                      onDragLeave={this.handleDragLeave}
                      onDrop={this.handleDrop}
                    >
                      {this.state.droppedFileName ? (
                        <p style={{ color: "white" }}>
                          File: {this.state.droppedFileName}
                        </p>
                      ) : (
                        <p>Drag and drop a file here or click to browse</p>
                      )}
                    </div>

                    <div className="form-group">
                      <br></br>
                      <input
                        id="fileUpload"
                        type="file"
                        onChange={this.handleFileChange} // Handle file selection from the browse button
                        accept=".txt,.pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="form-control-file text-white text-monospace"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-upload btn-block upload-button"
                    >
                     <b>Upload!</b> 
                    </button>
                    
                  </form>
                  <button
                    onClick={this.changeToFileTab}
                    className="btn-upload btn-block upload-button"
                    >
                     <b>View Uploaded Files!</b>
                    </button>
                </div>
                <p>&nbsp;</p>
              </div>
            </main>
          </div>
        </div>
      </div>
      :
         <Files account={this.props.account} files={this.props.files} isFile={true}/>   }
          </div>

    );
  }
}

export default Main;
