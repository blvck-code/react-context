import React, {createContext, useReducer, useState} from 'react'
import {bookReducer} from "../reducers/bookReducer";

export const BookContext = createContext()
const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [
        { title: 'the name of the wild', id: 1},
        { title: 'the name of the wild', id: 2},
        { title: 'the name of the wild', id: 3},
    ])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children}
        </BookContext.Provider>
    )


}


export default BookContextProvider
