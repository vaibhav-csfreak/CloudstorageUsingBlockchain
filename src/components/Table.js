import React from "react";
import { convertBytes } from './helpers';
import moment from 'moment';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import './table.css'
const Table=(props)=>{
    const {files}=props;
   return (
        <div>
          {/* Other components and content */}
          <ReactTable
          
            data={files}
            columns={[
              { Header: 'Id', accessor: 'fileId' },
              { Header: 'Name', accessor: 'fileName', className:'name-column' },
              { Header: 'Description', accessor: 'fileDescription',className:'description-column' },
              { Header: 'Type', accessor: 'fileType',className:'type-column' },
              {
                Header: 'Size(KB)',
                accessor: 'fileSize',
                Cell: row => `${convertBytes(row.value)}`,
                className:'size-column'
              },
              {
                Header: 'Date',
                accessor: 'uploadTime',
                Cell: row => moment.unix(row.value).format('h:mm:ss A M/D/Y'),
                className:'date-column'
              },
              {
                Header: 'Uploader/View',
                accessor: 'uploader',
                Cell: row => (
                  <a href={`https://etherscan.io/address/${row.value}`} target="_blank" rel="noopener noreferrer">
                    {row.value.substring(0, 10)}...
                  </a>
                )
              },
              {
                Header: 'Hash/View/Get',
                accessor: 'fileHash',
                Cell: row => (
                  <a href={`https://${row.value}.ipfs.w3s.link`} target="_blank" rel="noopener noreferrer">
                    {row.value.substring(0, 10)}...
                  </a>
                )
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
            
          />
        </div>
      );
      

}

export default Table;