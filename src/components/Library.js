import React, {Component} from 'react';
import Module from '../components/Module';
import '../styles/_library.css'

class Library extends Component {
    state = {
        modules: [
            {
            title: 'Module 1',
            desc: 'This is a short desc from an array'
            },
            {
                title: 'Module 2',
                desc: 'This is a  2 short desc from an array'
            }
    ]
    }

    render() {
        return(
            <div id="libraryMain">
                Library
                <div id="librarySub">
                {/* need to generate these via an array of modules -- evently from JSON */}
                <p class="item"><Module 
                    name="num 1"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 2"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 3"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 4"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 5"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 6"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                <p class="item"><Module 
                    name="num 7"
                    desc="This here is a short description of what this thing does."
                    />
                </p>
                </div>
            </div>
        );
    }
}

export default Library;