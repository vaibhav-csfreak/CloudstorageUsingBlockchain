import React, { Component } from 'react';
import Identicon from 'identicon.js';
import "./navbar.css"
class Navbar extends Component {

  render() {
    console.log('isFile',this.props.isFile)
    
    return (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Decentralized Data Storage System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <form class="form-inline ml-auto">
  <ul className="navbar-nav pr-3">
          <li>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text-white"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {
                this.props.account?
                this.props.account.substring(0,6)+"..."+this.props.account.substring(38,42):
                "Connect to Metamask Wallet"
                }
              </a>
            </small>
            { this.props.account
              ? <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
          </li>
        </ul>
        {this.props.isFile && (
            <button className="logout-button" style={{marginRight:"10px"}}>
            <a class="logout-button" href="/homepage">Upload File</a>  
            </button>
          )}
    <button class="logout-button">
    <a class="logout-button" href="/">Log Out</a>  
    </button>
   
  </form>
</nav>
    );
  }
}

export default Navbar;