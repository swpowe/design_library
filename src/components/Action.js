import React, {Component} from 'react';
import Image from 'react-image-resizer';
import image from '../assets/multipleChoice_maze_HI_bkgd.png';
import data from '../modules.json';

// console.log(data.modules[0].background);

// let image = data.modules[0].background;

// const style = {
//     image: {
//         border: '10px solid yellow',
//         backgroundColor: 'blue',
//         top: "0px",
//         left: "0px",
//         position: "relative"
        
//     }
// }



class Action extends Component {
    render(props) {
        return(
            <div className="action_box">
                {/* <img src={require(`${image}`)} alt='' /> */}
                {/* <img className="image_resize" src={image} alt='' /> */}
                <Image
                    // src='../assets/multipleChoice_maze_HI_bkgd.png'
                    src={image}
                    height={this.props.height}
                    width={this.props.width}
                    // position="relative"
                    // style={style.image}
                />

                
                {/* <div id="tween">
                    
                </div> */}
            </div>
        );
    }
}

export default Action;

// https://codepen.io/anon/pen/yqzOdR?editors=0010