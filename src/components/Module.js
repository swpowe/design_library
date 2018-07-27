// title - also as a link in sidebar?
// description
// thumbnail
// group?

import React, {Component} from 'react';
import Action from '../components/Action'
import '../styles/_module.css';

class Module extends Component {
    render(props) {
        return(
            <div id="module">
                <a href="/single">
                 <div id="iconBox">
                    <Action 
                        height={this.props.height} 
                        width={this.props.width}
                        type={this.props.type}
                    />
                 </div>
                </a>
                <h2>Module {this.props.name}</h2>
                <h3 id="desc">{this.props.desc}</h3>
            </div>
        );
    }
}

export default Module;