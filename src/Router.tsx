import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { CreateProtocolOrder } from './pages/CreateProtocolOrder'
import { DefaultLayout } from './layout/DefaultLayout'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={ <DefaultLayout /> }>
                <Route path='/' element={ <Login /> } />
                <Route path='/home' element={ <Home /> }/>
                <Route path='/createprotocolorder' element={ <CreateProtocolOrder /> }/>
            </Route>
        </Routes>
    )
}