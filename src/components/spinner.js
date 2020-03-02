import React from "react";
import {useSpring, animated} from "react-spring";
import "../style/components/animations.scss"

function Spinner(props) {
    const initial = 0;
    const destination = 360;
    const spring = useSpring({
        from: {
            rotate: initial,
            transform: `rotateZ(${initial}deg)`
        },
        to: {
            rotate: destination,
            transform: `rotateZ(${destination}deg)`
        },
        config: {
            mass: 1,
            tension: 10,
            friction: 5
        }
    });

    return (
        <div>
            <animated.div className="spinner" style={spring}>
                <div
                    style={{
                    width: `10px`,
                    height: `10px`,
                    marginLeft: `45px`,
                    marginTop: `35px`,
                    backgroundImage: 'url("../../../content/assets/d20-blank-transparent.png")',
                    backgroundSize: `100px 100px`,
                }}>1</div>
            </animated.div>
        </div>
    );
}

export default Spinner;