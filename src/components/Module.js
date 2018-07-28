// title - also as a link in sidebar?
// description
// thumbnail
// group?

import React, {Component} from 'react';
import Action from '../components/Action'
import '../styles/_module.css';





class Module extends Component {

    

    handleShowProperties = (value) => {
        if(value) {
            return(
                <div  id="properties">
                    <h1>This one works</h1>
                    Value is True:
                </div>
            )
        } else {
            return null
        }
    }

    render(props) {
        return(
            <div id="module">
                
                 <div id="iconBox">
                 <a href="/single">
                    <Action 
                        height={this.props.height} 
                        width={this.props.width}
                        type={this.props.type}
                    />
                    </a>
                    {/* <div id="properties"> */}
                        <div>
                        {this.handleShowProperties(this.props.showProps)}
                        </div>
                    {/* </div> */}
                 </div>
                
                <h2>Module {this.props.name}</h2>
                <h3 id="desc">{this.props.desc}</h3>
            </div>
        );
    }
}

export default Module;