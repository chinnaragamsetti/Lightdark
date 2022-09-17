// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode:'Lightmode'}
    
   modechange= () => {
    
      
    if (mode === 'Lightmode') {
        
       
      return (
        this.setState({mode:'Darkmode'})
      )
    

    }
    return( this.setState({mode:'Lightmode'}))

}
    render(){
        const{mode}=this.state;
        if(mode==='Lightmode'){
            const changed='Darkmode';
        }
        else{
            const changed="Lightmode";
        }
         return(<div className="bg">
         <div className={changed}>
                 <h1 className={}>click to change mode</h1>
                 <button className="butt" onClick={this.modechange} type='button'>{mode}</button>
         </div>
   
    </div>)
    }
   
  }
}

export default LightDarkMode 
