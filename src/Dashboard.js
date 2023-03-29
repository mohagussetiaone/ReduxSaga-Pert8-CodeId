import React from 'react'
import { Outlet } from 'react-router-dom'

const navigate = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'Counter Arrow', href: 'counter', current: false },
    { name: 'Region Api', href: 'region', current: false },
    { name: 'Region Api Upload', href: 'upload', current: false },
    { name: 'Employee Redux', href: 'EmpRedux', current: false },
    { name: 'Employee Redux Tool', href: 'EmpTool', current: false },
    { name: 'Employee Redux Saga', href: 'Saga', current: false }
]
export default function Dashboard() {
    return (
        <div>
            {navigate.map((item) => {
                return (
                    <a key={item.name} href={item.href}>{item.name}</a>
                )
            })}
            <header>
                <h1>{navigate.name}</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}
