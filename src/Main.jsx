import React from 'react'
import {reduxActionTemplate} from './actions/userActions'
import {useDispatch, useSelector} from 'react-redux'

function Main() {
    const dispatch = useDispatch()
    dispatch(reduxActionTemplate(5))
    const reduxSelector = useSelector(state => state.reduxTemplate)
    console.log(reduxSelector)

    return (
        <div>
            Main page
        </div>
    )
}

export default Main
