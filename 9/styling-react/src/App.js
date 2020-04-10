import React, {Component} from 'react';
import SassComponent from './1.sass/SassComponent.js';
import CSSModule from "./2.cssModule/CSSModule";
import StyledComponent from "./3.StyledComponent/StyledComponent";
 
class App extends Component {
  render() {
    return (
      <div>
        {/* <SassComponent /> */}
        {/* <CSSModule/> */}
        <StyledComponent/>
      </div>
    );
  }
}
 
export default App;