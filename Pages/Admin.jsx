import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FcLike } from "react-icons/fc";

function Admin() {
    const [getadmin, setgetadmin] = useState([])
    const [favori, setfavori] = useState([])
    const [search, setsearch] = useState("")
    const [filter, setfilter] = useState("normal")
    useEffect(() => {
        axios.get('http://localhost:8000/shop')
            .then(res => setgetadmin(res.data))
    }, [getadmin])

    const AdminDelete = (id) => {
        axios.delete('http://localhost:8000/shop/' + id)
    }

    const addFavorits = (id) => {
        axios.get('http://localhost:8000/alveer/' + id).then(
            res => axios.post('http://localhost:8000/favorits/', res.data)
        )
    }

    const serachdata = () => {
        let cardFiltered;
        if(filter =='artan'){
            cardFiltered=getadmin.toSorted((a,b)=>Number(a.money)-Number(b.money))
        }else if(filter=='azalan'){
            cardFiltered=getadmin.toSorted((a,b)=>b.money-a.money)
        }else{
            cardFiltered=[...getadmin]
        }
        return cardFiltered.filter(inf => inf.name.toUpperCase().startsWith(search.toUpperCase()))
    }
    let cards=serachdata()

    return (
        <>
            <div className='container'>
                <Link to='/Add' className='btn btn-primary mt-5'>Add</Link>
                <div className='Admin_search mt-3'>
                    <input type="text" placeholder='Search' />
                </div>
                <table className='Admin_table container mt-2'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>img</th>
                            <th>Name</th>
                            <th>Money</th>
                            <th>Favoritler ekle</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(element => {
                            return (
                                <tr key={element.id}>
                                    <td>{element.id}</td>
                                    <td><img src={element.img} alt="" /></td>
                                    <td>{element.name}</td>
                                    <td>{element.money}</td>
                                    <td><button className='btn btn-primary'><FcLike /></button></td>
                                    <td><Link to={'/Edit/'} className='btn btn-primary'onClick={() =>addFavorits(element.id)}>Edit</Link></td>
                                    <td><button className='btn btn-primary' onClick={() => AdminDelete(element.id)}>Delete</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </>

    )
}

export default Admin