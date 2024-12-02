
import DStorage from '../abis/DStorage.json'
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Files from './Files';
import Web3 from 'web3';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'
import Footer from './Footer';
import Loader from './Loader.js'
 const ipfsClient = new Web3Storage({token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU4RDcxMjI3YTdiN0Y4MTQ4NWRkNjUxOTFmNTdBMDFlQjM1QzliNDQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Nzk3NDE1NDE1MjMsIm5hbWUiOiJEc3RvcmFnZSJ9.CXvBXpyBkmXf5DYC10hi1TC31wzozSkfvsnTvNhVfb4'});
let file;
const files = [];

function App() {
  const [account, setAccount] = useState('');
  const [dstorage, setDStorage] = useState(null);
  const [filesCount, setFilesCount] = useState(0);
  const [filesData, setFilesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = DStorage.networks[networkId];
    if (networkData) {
      const dstorage = new web3.eth.Contract(DStorage.abi, networkData.address);
      setDStorage(dstorage);

      const filesCount = await dstorage.methods.fileCount().call();
      setFilesCount(filesCount);

      const filesData = [];
      for (let i = 1; i <=filesCount ; i++) {
        const file = await dstorage.methods.files(i).call();
        filesData.push(file);
      }
      setFilesData(filesData);
    } else {
      window.alert('DStorage contract not deployed to detected network.');
    }
  }

  function captureFile(event) {
    if (event && event.preventDefault) { // add?
      event.preventDefault();
      event.persist();
  }
    file = event.target.files[0];
    files.push(file);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!",files)

    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
      setType(file.type);
    setName(file.name);
    console.log('buffer', Buffer(reader.result));

  }
  }
  const uploadFile = async description => {
    try {
      setLoading(true);
      let rootCid = await ipfsClient.put(files);

      if (type === '') {
        setType('none');
      }
      console.log('File Size:', files[0].size);
      console.log('Type:', type);
      console.log('Name:', name);
      console.log('Description:', description);
      console.log('FilesCount',filesCount);
      console.log('Buffer',buffer);
      dstorage.methods
        .uploadFile(rootCid, files[0].size, type, name, description)
        .send({ from: account })
        .on('transactionHash', hash => {
          setLoading(false);
          setType(null);
          setName(null);
          loadBlockchainData();
          setUploadSuccess(true)
          // navigate('/homepage/files')
        })
        .on('error', e => {
          window.alert('Upload Failed');
          setLoading(false);
          setUploadSuccess(false)
        });
    } catch (e) {
      console.log(file);
      console.log(e);
    }
  };

  return (
    <div className='app-container'> 
      <Navbar account={account} isFile={uploadSuccess}/>
      <div className='app-content'>
      {loading ? (
        <Loader/>
      ) : (
        <>
        {
         !uploadSuccess? 
        <Main files={filesData} captureFile={captureFile} uploadFile={uploadFile} loading={loading} isFile={uploadSuccess} account={account} />
        :
      
        <Files account={account} files={filesData} isFile={uploadSuccess} />
        
        }
      </>
      )}
      </div>
      <Footer/>
    </div>
  );
}

export default App;