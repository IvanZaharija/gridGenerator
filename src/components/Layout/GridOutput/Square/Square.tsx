import React from 'react';

import './Square.less';

interface Props {
    squareNumber: number;
    size: string;
    
}

const square: React.SFC<Props> = (props) => {

    let attachedClasses = ["Square", "Small"]

    return(
    <p className={attachedClasses.join(' ')} >{props.squareNumber}</p>
    )
}

export default square