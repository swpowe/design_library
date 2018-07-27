import React, { Component } from 'react';
import '../styles/_sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div id="Sidebar">
                Sidebar
                <p>
                    <a href="/"><button>Home</button></a>
                </p>
                <p>
                    <a href="/Single"><button>Single</button></a>
                </p>
            </div>
        );
    }
}

export default Sidebar;