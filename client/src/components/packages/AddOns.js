import React, { useEffect, useState } from 'react'
import Package from './Package'
import withListLoading from './withListLoading'

const url = 'http://localhost:5000/api/packages/addons'

const AddOns = (props) => {

    const ListLoading = withListLoading(Package)
    const [appState, setAppState] = useState ({
        loading: false,
        packages: null,
    })

    useEffect(() => {
        setAppState({ loading: true })
        fetch(url)
        .then((res) => res.json())
        .then((packages) => {
            setAppState({ loading: false, packages: packages.data})
        })
    }, [setAppState])

    return (
        <>
        <ListLoading isLoading={appState.loading} packages={appState.packages} />
        </>
    )
}
export default AddOns