import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(0)

    const ChangeState = () => {
        setNum(num + 1)
    }
    useEffect(() => {
        console.log('i am in useEffect.........', num)
        
    },[num])

    const ChangeState2 = () => {
        setNum2(num2 + 1)
    }

    useEffect(() => {
        console.log('I am in useEffect 2')
        return () => console.log('I am removed')
    }, [num2])
    // console.log('i am out of useEffect.........', new Date())

    return (
        <div className='w-10/12 mx-auto '>
            <div className='text-center text-4xl'>UseEffec</div>

            <div className='border-2 rounded-xl p-5 mt-3'>
                <p>{num}</p>
                <button onClick={ChangeState} className='border rounded-lg w-40 mt-4 bg-green-800'>Press to change state</button>
            </div>
            <div className='border-2 rounded-xl p-5 mt-3'>
                <p>{num2}</p>
                <button onClick={ChangeState2} className='border rounded-lg w-40 mt-4 bg-green-800'>Press to change state 2</button>
            </div>
        </div>
    )
}

export default Effect