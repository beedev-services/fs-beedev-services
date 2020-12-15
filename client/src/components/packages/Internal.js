import React, { isValidElement, useEffect, useState } from 'react'
import axios from 'axios'
// import Package from './Package'

// const url = 'https://beedev-services-help-guide-api.herokuapp.com/api/tips/1'

const url = 'http://localhost:5000/api/packages/Internal'

function Internal(props) {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data)
            console.log(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <>
        {/* <Package /> */}
        <p>{data.packageName}</p>
        </>
    )
}
export default Internal