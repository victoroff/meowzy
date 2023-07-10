import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {url, port} from '../../../app'

function catList() {
    const [cats, setcats] = useState([])

    const getcats = async () => {
        try {
            /* FETCH */
            // const response = await fetch('http://localhost:3000/cats')
            // const data = await response.json()
            // if (response.status === 200) setcats(data)

            /* AXIOS */
            const response = await axios.get(`${url}:${port}/cats`)
            if (response.status === 200) setcats(response.data)
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getcats() }, [])

    return (
        <>
            <h2>cat List</h2>

            {cats?.map((cat) => {
                return (
                    <div key={cat?.id}>
                        <p>{cat?.name} - {cat?.type} - {cat?.breed}</p>

                        <Link to={`/${cat?.id}`}>
                            <button>cat detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default catList
