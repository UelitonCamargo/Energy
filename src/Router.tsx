import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { CreateProtocolOrder } from './pages/CreateProtocolOrder'
import { DefaultLayout } from './layout/DefaultLayout'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={ <Login /> } />
            <Route path='/' element={ <DefaultLayout /> }>
                <Route path='/home' element={ <Home /> } />
                <Route path='/createprotocolorder' element={ <CreateProtocolOrder /> } />
            </Route>
        </Route>
    )
)

