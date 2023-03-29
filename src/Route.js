import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import Dashboard from './Dashboard'
import CounterHook from './CounterHook'
import RegionViewApi from './RegionView/RegionViewApi'
import RegionView from './RegionUpload/RegionView'
import EmployeeRedux from './ViewRedux/EmployeeREdux'
import EmployeeReduxTool from './ViewRedux/EmployeeReduxTool'
import RegionSaga from './SagaView/RegionSaga'
export default function Route() {
    return useRoutes([
        {
            path: '/',
            element: <Dashboard />,
            children: [
                { path: 'counter', element: <CounterHook /> },
                { path: 'region', element: <RegionViewApi /> },
                { path: 'upload', element: <RegionView /> },
                { path: 'EmpRedux', element: <EmployeeRedux /> },
                { path: 'EmpTool', element: <EmployeeReduxTool /> },
                { path: 'Saga', element: <RegionSaga /> }
            ]
        },
        {
            path: '*', element: <Navigate to='/404' replace />
        }
    ]
    )
}
