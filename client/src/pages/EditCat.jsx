import React, { useState } from 'react'
import axios from 'axios'
import {url, port} from '../../../app'

function Editcat({ catToEdit }) {

    const [catName, setcatName] = useState(catToEdit?.name)
    const [catType, setcatType] = useState(catToEdit?.type)
    const [catAge, setcatAge] = useState(catToEdit?.age)
    const [catBreed, setcatBreed] = useState(catToEdit?.breed)

    const editcat = async () => {
        try {
            const catData = {
                id: catToEdit.id,
                name: catName,
                type: catType,
                age: catAge,
                breed: catBreed
            }

            /* FETCH */
            // const response = await fetch(`http://localhost:3000/cats/${catToEdit.id}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(catData)
            // })

            /* AXIOS */
            const response = await axios.put(
                `${url}:${port}/cats/${catToEdit.id}`,
                catData,
                { headers: { 'Content-Type': 'application/json' } }
            )
            
            if (response.status === 200) {
                window.location.href = `/${catToEdit.id}`
            }
        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Edit cat</h2>
            
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
                onClick={() => editcat()}
            >
                Save changes
            </button>
        </div>
    )
}

export default Editcat