import React from 'react';
import Table from './Table';
import './files.css'

const Files=(props)=>{
const {account,files,isFile}=props;
const totalSpaceUsed = files.reduce((total, file) => total + file.fileSize, 0);
  let totalSpaceUsedInMB = totalSpaceUsed/(1024*1024);
  totalSpaceUsedInMB=totalSpaceUsedInMB.toFixed(2);

  const convertBytes = (totalSpaceUsedInMB) => {
    if (totalSpaceUsedInMB === 0) return 0;
    const i = parseInt(Math.floor(Math.log(totalSpaceUsedInMB) / Math.log(1024)), 10);
    if (i === 0) return {totalSpaceUsedInMB} ;
    return (totalSpaceUsedInMB / 1024 ** i).toFixed(2);
  };
console.log(account+"!!!"+isFile+"!!!"+files+"!!!!!!!!!!!!!!!!")
    return (
      <div className="bg">
      <div className="container-fluid mt-5 text-center" >
        <div className="row new-row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Number of Files</h5>
              <p className="card-text">{files.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Total Space Used</h5>
              <p className="card-text">{(convertBytes(totalSpaceUsedInMB))+"MB"}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="table-div"> 
          
       <Table files={files}></Table>

            </div>
          </div>
          </div>
       
    );
}


export default Files;