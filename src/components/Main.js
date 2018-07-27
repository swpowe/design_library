import React, {Component} from 'react';
import Library from './Library';
import Sidebar from './Sidebar';

import '../styles/_main.css';

class Main extends Component {
    render() {
        return(
            <div id="mainBody">
                <div class="sidebar">
                    <Sidebar />
                </div>
                <div class="library">
                    <Library />
                </div>
            </div>
        );
    }
}

export default Main;