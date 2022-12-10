import { NavLink } from 'react-router-dom'
import icono from '/img/logos/iuisa.png'
import logo from '/img/logos/iuisa_shop.png'

export const Header = () => {
    return (
        <div className="bg-header">
            <div className="text-center">
                <img src={logo} alt="Cargando..." width={210} height={160} />
            </div>
            <nav className="bg-nav navbar navbar-expand-lg">

                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={icono} alt="Cargando..." height={50} className="d-inline-block align-text-top" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="cremas" className="nav-link">Cremas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="bqpharma" className="nav-link">BQ Pharma</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="desodorantes" className="nav-link">Desodorantes</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink to="shampoos" className="nav-link">Shampoos</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="gelantibacterial" className="nav-link">Gel antibacterial</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="articulosvarios" className="nav-link">Articulos varios</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
