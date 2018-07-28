import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Module from '../components/Module';
import Properties from './Properties';
import data from '../modules.json';
import '../styles/_library.css';



// let modulesData = JSON.stringify(data);
// console.log(data);
// class Library extends Component {
//     render() {
//         return(
//             <Router>
//                 <div id="libraryMain">
//                 Library Main
//                     <div id="librarySub">
//                         {/* <LibrarySingle /> */}
//                         <LibraryMultiple />
//                     </div>
//                 </div>
//                 <Route path="/single" component={LibrarySingle}/>
//             </Router>
//         )
//     }
// }

const Library = () => (
    <Router>
        <div class="library" id="main">
            <Route exact path="/" component={LibraryMultiple} />
            <Route path="/single" component={LibrarySingle} />
        </div>
    </Router>
)

class LibrarySingle extends Component {
    state = {
        modules: data.modules,
        showProps: true
    }

    render() {
        return(
            <div class="library" id="single">
                <p class="item">
                        <Module 
                            name="Single Module Manual 01"
                            desc="Manual 01 desc"
                            height="600"
                            width="800"
                            type="image"
                            showProps={this.state.showProps}
                        />
                        <Properties />
                    </p>
            </div>
        )
    }
}

class LibraryMultiple extends Component {
    state = {
        modules: data.modules,
        showProps: false
    }

    render() {
        return(
            <div class="library" id="multiple">
                {this.state.modules.map((module, index) => (
                    <p class="item">
                        <Module 
                            name={module.title}
                            desc={module.desc}
                            height="150"
                            width="200"
<<<<<<< HEAD
                            type="image"
                            showProps={this.state.showProps}
=======
                            type="anim"
>>>>>>> e7c418e9ce86d628879e12b27c9a87def536b117
                        />
                    </p>
                ))}
            </div>
        );
    }
}

export default Library;