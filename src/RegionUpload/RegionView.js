import React, { useState, useEffect } from 'react'
import RegionApi from '../api/RegionApi'
import FormikRegionCreate from './FormikRegionCreate'
import FormikRegionEdit from './FormikRegionEdit'

export default function RegionView() {
    const [region, setRegion] = useState([])
    const [refresh, setRefresh] = useState(false)
    const [display, setDisplay] = useState(false)
    const [displayEdit, setDisplayEdit] = useState(false)
    const [id, setId] = useState()
    useEffect(() => {
        RegionApi.list().then(data => {
            setRegion(data)
        })
        setRefresh(false)
    }, [refresh])
    const onDelete = async (id) => {
        RegionApi.deleted(id).then(() => {
            window.alert('Data Successfully Delete')
            setRefresh(true)
        })
    }
    const onClick = (id) => {
        setDisplayEdit(true)
        setId(id)
    }
    return (
        <div>
            {displayEdit ? <FormikRegionEdit
                setRefresh={setRefresh}
                setDisplay={setDisplayEdit}
                id={id} /> :
                display ? <FormikRegionCreate
                    setRefresh={setRefresh}
                    setDisplay={setDisplay} /> :
                    <>
                        <h2>List Region</h2>
                        <button onClick={() => setDisplay(true)}>Add region</button>
                        <table>
                            <th>Region ID</th>
                            <th>Region Name</th>
                            <th>Region Photo</th>
                            <th>Action</th>
                            <tbody>
                                {
                                    region && region.map(reg => (
                                        <tr key={reg.regionId}>
                                            <td>{reg.regionId}</td>
                                            <td>{reg.regionName}</td>
                                            <td>{reg.regionPhoto}</td>
                                            <td>
                                                <button onClick={() => onDelete(reg.regionId)}> Delete Region </button>
                                                <button onClick={() => onClick(reg.regionId)}> Edit Region </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </>
            }
        </div>
    )
}
