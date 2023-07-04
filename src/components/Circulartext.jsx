import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import "../styles/circulartext.css";

const Circulartext = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const circleType = new CircleType(textRef.current);
        circleType.dir(1).radius(75);
        circleType.forceWidth(true);
    }, []);

    return (
        <h2 ref={textRef} className="c">
            Est. 2015
        </h2>
    );
};

export default Circulartext;
