// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}
  modestatus = () => {
    const {mode} = this.state
    if (mode === true) {
      return (
        <div className="lightmode">
          <h1 className="h1">Click to change mode</h1>
          <button class="lightmodebtn">Dark Mode</button>
        </div>
      )
    }
    
    return (
    <div className="Darkmode">
      <h1 className="h2">Click to change mode</h1>
      <button class="darkmodebtn">Light Mode</button>
    </div>)
    }
    render(){
         return(<div className="bg">
    {this.modestatus()}
    </div>)
    }
   
  }
}
