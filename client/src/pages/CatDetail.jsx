import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import {url, port} from '../../../app'

function catDetail({ setcatToEdit }) {

    const [cat, setcat] = useState([])

    const { catId } = useParams()

    const getcat = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/cats/${catId}`)
            // const data = await response.json()
            // if (response.status === 200) {
            //     setcat(data)
            //     setcatToEdit(data)
            // }

            /* AXIOS */
            const response = await axios.get(`${url}:${port}/cats/${catId}`)
            if (response.status === 200) {
                setcat(response.data)
                setcatToEdit(response.data)
            }
            
        } catch (error) {
            console.error('error', error)
        }
    }
  
    useEffect(() => { getcat() }, [])

    const deletecat = async () => {
        try {
            /* FETCH */
            // const response = await fetch(`http://localhost:3000/cats/${catId}`, {
            //     method: 'DELETE'
            // })
            
            /* AXIOS */
            const response = await axios.delete(`${url}:${port}/cats/${catId}`)

            if (response.status === 200) window.location.href = '/'
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>cat Detail</h2>

            {cat && (
                <>
                    <p>cat name: {cat.name}</p>
                    <p>cat type: {cat.type}</p>
                    <p>cat age: {cat.age}</p>
                    <p>cat breed: {cat.breed}</p>

                    <div style={{ display: 'flex', justifyContent: 'center', aligniItems: 'center' }}>
                        
                        <Link to={`/${cat?.id}/edit`}>
                            <button style={{ marginRight: 10 }}>Edit cat</button>
                        </Link>

                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => deletecat()}
                        >
                            Delete cat
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default catDetail
