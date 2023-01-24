import React from 'react'

type TBtn = {
    count: number;
    upDate : (count:number)=> void;
}
const ButtonCTC = ({count, upDate}:TBtn) => {
    return (
        <div>
            <button onClick={() => upDate(count + 1) }>Up Date ButtonCTC</button>
        </div>
    )
}

export default ButtonCTC