import React, { useState } from 'react';
export default function App() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [emp, setEmp] = useState([{
        id: 1, name: "John"
    }]);

    const handleAdd = () => {
        setEmp([...emp, { id: id, name: name }])
        setId('')
        setName('')
    }
    function delIndividual(id) {
        setEmp(emp.filter((e) => e.id !== id))
    }
    const handleDel = () => {
        setEmp([])
    }
    
    return (
        <>
            <div className='flex mx-auto flex-col text-center w-80'>
                <div className='my-3 p-3 bg-slate-950 text-white'>
                    <h1 className='font-bold'>CRUD APP</h1>
                </div>
                <div className='flex flex-col'>
                    <input type='text' className='inputEl my-3' placeholder='Enter ID' value={id}
                        onChange={(e) => { setId(e.target.value) }} />
                    <input type='text' className='inputEl' placeholder='Enter Name' value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                    <button className='btnEl' onClick={handleAdd}>Add User</button>
                    <button className='btnEl' onClick={handleDel}>Clear List</button>

                    {/* Display Items */}

                    {
                        emp.map((e) => {
                            return <div className='flex justify-between'>
                                <li className='my-1 p-1 font-bold list-none'>
                                    {e.id} {e.name}
                                </li>
                                <div className='my-1'>
                                    <button className='mr-2' >🖍</button>
                                    <button onClick={() => delIndividual(e.id)}>❌</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}