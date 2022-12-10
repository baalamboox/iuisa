import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="container-fluid my-5">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
