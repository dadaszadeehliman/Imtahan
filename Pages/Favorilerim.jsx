import axios from 'axios'
import React, { useState } from 'react'

function Favorilerim() {
    const [favori, setfavori] = useState(second)

    useEffect((id) => {
        axios.get('http://localhost:8000/favorits/'+id)
    }, [])
    

    return (
        <div className='container'>
            <table className='Admin_table container mt-2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>img</th>
                        <th>Name</th>
                        <th>Money</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr key={element.id}>
                        <td>{element.id}</td>
                        <td><img src={element.img} alt="" /></td>
                        <td>{element.name}</td>
                        <td>{element.money}</td>
                        <td><button className='btn btn-primary'>Delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Favorilerim