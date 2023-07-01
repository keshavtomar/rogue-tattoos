import React, { useEffect, useRef } from 'react';
import CircleType from 'circletype';

const CurvedTextComponent = () => {
    const textRef = useRef(null);

    useEffect(() => {
        const circleType = new CircleType(textRef.current);
        circleType.dir(-1).radius(384);
    }, []);

    return (
        <h2 ref={textRef}>
            ESTD. 2015
        </h2>
    );
};

export default CurvedTextComponent;
