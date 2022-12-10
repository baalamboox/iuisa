import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { TarjetaProducto } from '../components/TarjetaProducto'
import { datos } from '../data/productos'

export const Desodorantes = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        table: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <>
            <div className="row py-5">
                <div className="col">
                    <div className="card shadow p-3">
                        <div className="card-body">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active text-uppercase" id="nav-nb-380-tab" data-bs-toggle="tab" data-bs-target="#nav-nb-380" type="button" role="tab" aria-controls="nav-nb-380" aria-selected="true">dama 65 ml</button>
                                    <button className="nav-link text-uppercase" id="nav-nb-400-tab" data-bs-toggle="tab" data-bs-target="#nav-nb-400" type="button" role="tab" aria-controls="nav-nb-400" aria-selected="false">caballero 65 ml</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active pt-4" id="nav-nb-380" role="tabpanel" aria-labelledby="nav-nb-380-tab" tabIndex="0">
                                    <Carousel responsive={responsive} className="h-100">
                                        {
                                            datos.filter((item) => item.categoria == 'DESODORANTE PARA DAMA 65 ML').map((item, index) => (
                                                <div className='d-flex justify-content-center' key={index}>
                                                    <TarjetaProducto datos={item} />
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                                <div className="tab-pane fade pt-4" id="nav-nb-400" role="tabpanel" aria-labelledby="nav-nb-400-tab" tabIndex="0">
                                    nature & beauty de 400 ml
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
