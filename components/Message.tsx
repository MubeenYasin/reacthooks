import React from 'react'
import Button from './Button'

type TMsg = {
    count: number
}
const Message = ({count}:TMsg) => {
    return (
        <div>
            <h2>Message</h2>
            <h3>{count}</h3>
        </div>
    )
}

export default Message