import React from 'react'

type TBtn = {
    count: number;
    upDate : (count:number)=> void;
}
const Button = ({count, upDate}:TBtn) => {
    return (
        <div>
            <button onClick={() => upDate(count + 1) }>Up Date</button>
        </div>
    )
}

export default Button