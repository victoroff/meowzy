import React, { useState } from 'react'
import axios from 'axios'
import {url, port} from '../../../app'
function Addcat() {

    const [catName, setcatName] = useState()
    const [catType, setcatType] = useState()
    const [catAge, setcatAge] = useState()
    const [catBreed, setcatBreed] = useState()

    const addcat = async () => {
        try {
            const catData = {
                name: catName,
                type: catType,
                age: catAge,
                breed: catBreed
            }

            /* FETCH */
            // const response = await fetch('http://localhost:3000/cats/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(catData)
            // })

            // if (response.status === 200) {
            //     const data = await response.json()
            //     window.location.href = `/${data.id}`
            // }

            /* AXIOS */
            const response = await axios.post(
                `${url}:${port}/cats/`,
                catData,
                { headers: { 'Content-Type': 'application/json' } }
            )
                
            if (response.status === 200) window.location.href = `/${response.data.id}`

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Add cat</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>cat name</label>
                <input type='text' value={catName} onChange={e => setcatName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>cat type</label>
                <input type='text' value={catType} onChange={e => setcatType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>cat age</label>
                <input type='text' value={catAge} onChange={e => setcatAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>cat breed</label>
                <input type='text' value={catBreed} onChange={e => setcatBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => addcat()}
            >
                Add cat
            </button>
        </div>
    )
}

export default Addcat