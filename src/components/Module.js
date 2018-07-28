// title - also as a link in sidebar?
// description
// thumbnail
// group?

import React, {Component} from 'react';
import Action from '../components/Action'
import '../styles/_module.css';
import Properties from './Properties';





class Module extends Component {

    

    handleShowProperties = (props) => {
        console.log(props);
        let value = props.showProps;
        if(value) {
            return(
                <div  id="properties">
                    <h1>This one works</h1>
                    <Properties />
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
                 <a href={this.props.index}>
                    <Action 
                        height={this.props.height} 
                        width={this.props.width}
                        type={this.props.type}
                    />
                    </a>
                    {/* <div id="properties"> */}
                        <div>
                        {this.handleShowProperties(this.props)}
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