import db from '../../db/db.js'

export const getItem = id => {
    try {
        const cat = db?.cats?.filter(cat => cat?.id === id)[0]
        return cat
    } catch (err) {
        console.log('Error', err)
    }
}

export const listItems = () => {
    try {
        return db?.cats
    } catch (err) {
        console.log('Error', err)
    }
}

export const editItem = (id, data) => {
    try {
        const index = db.cats.findIndex(cat => cat.id === id)

        if (index === -1) throw new Error('cat not found')
        else {
            db.cats[index] = data
            return db.cats[index]
        }        
    } catch (err) {
        console.log('Error', err)
    }
}

export const addItem = data => {
    try {  
        const newcat = { id: db.cats.length + 1, ...data }
        db.cats.push(newcat)
        return newcat

    } catch (err) {
        console.log('Error', err)
    }
}

export const deleteItem = id => {
    try {
        // delete item from db
        const index = db.cats.findIndex(cat => cat.id === id)

        if (index === -1) throw new Error('cat not found')
        else {
            db.cats.splice(index, 1)
            return db.cats
        }
    } catch (error) {
        
    }
}