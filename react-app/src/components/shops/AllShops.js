import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllShopsThunk } from '../../store/shop'


const AllShops = () => {
    const dispatch = useDispatch()
    const shops = useSelector(state => state.shops)

    useEffect(() => {
        dispatch(getAllShopsThunk())
    }, [dispatch])


    console.log('shops***********', shops)
    return (
        <div>
            <h1>Shops</h1>
        </div>
    )
}

export default AllShops;
