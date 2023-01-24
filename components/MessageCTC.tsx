import React from 'react'
import Button from './Button'
import ButtonCTC from './ButtonCTC'

type TMsg = {
    count: number;
    upDate: (count:number) => void
}
const MessageCTC = ({count, upDate}:TMsg) => {
    return (
        <div>
            <h2>Message CTC</h2>
            <h3>{count}</h3>

            <ButtonCTC count={count} upDate={upDate} /> 
        </div>
    )
}

export default MessageCTC