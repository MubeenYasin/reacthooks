import React, { useState } from 'react'

const State = () => {
    type TUsers = {
        name:string,
        age: number,
        active: boolean
    }
    const [num, setNum] = useState(0)
    const increment = () => {
        setNum(num + 1)
    }
    const decrement = () => {
        setNum(num - 1)
    }

    const [users, setUsers] = useState<TUsers[]>([
        {
            name: 'mubeen',
            age: 45,
            active: true
        }
    ])
    const addUser = () => {
        const user = {
            name:'mateen',
            age: 10,
            active: false
        }
        setUsers([...users, user])
    }


    return (
        <div className='w-10/12 mx-auto '>
            <div className='text-center text-4xl'>useState</div>
            <div className='border-2 rounded-xl p-5 mt-3'>
                <p>{num}</p>
                <button onClick={increment} className='border rounded-lg w-28 mt-4 bg-green-800'>Increment</button><br />
                <button onClick={decrement} className='border rounded-lg w-28 mt-4 bg-red-800'>Decrement</button>
            </div>
            <div className='border-2 rounded-xl p-5 mt-3'>
                <button onClick={addUser} className='border rounded-lg w-28 mt-4 bg-yellow-800'>Add User</button>
                <div>
                    {users.map((user, index) => {
                        return (
                            <div key={index}>
                                <p>user={index}</p>
                                <p>{user.name}</p>
                                <p>{user.age}</p>
                                <p>{user.active?'Available':'Not Available'}</p>
                                <hr/>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    )
}

export default State