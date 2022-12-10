

export const TarjetaProducto = ({ datos: { clave, producto, precio, descripcion, promocion, estatus, imagen } }) => {
    return (
        <div className="tarjeta-producto card shadow px-4">
            <div className="text-center">
                <img src={ imagen } className="foto-producto rounded-circle shadow border" alt="Cargando..." />
            </div>
            <div className="card-body">
                <div className="mt-5">
                    <h6 className="card-title fw-bold text-center">{ producto }</h6>
                    <small className="d-block my-3">{ descripcion }</small>
                    <div className="text-center text-muted">
                        <small className="d-block">Clave: { clave }</small>
                        <small className="d-block">Estatus: { estatus }</small>
                    </div>
                </div>
                <div className="text-center my-4">
                    <span className="fw-bold fs-2">${ precio }</span>
                </div>
            </div>
        </div>
    )
}