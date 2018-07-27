import React, {Component} from 'react';
import image from '../assets/multipleChoice_maze_SML_bkgd.png'
import data from '../modules.json'

// console.log(data.modules[0].background);

// let image = data.modules[0].background;

class Action extends Component {
    render() {
        return(
            <div className="action_box">
                {/* <img src={require(`${image}`)} alt='' /> */}
                <img src={image} alt='' />
                <div id="tween">
                    
                </div>
            </div>
        );
    }
}

export default Action;

// https://codepen.io/anon/pen/yqzOdR?editors=0010