import React, {Component} from 'react';
import Library from './Library';
import Sidebar from './Sidebar';

import '../styles/_main.css';

class Main extends Component {
    render() {
        return(
            <div id="mainBody">
                <Sidebar />
                <Library />
            </div>
        );
    }
}

export default Main;