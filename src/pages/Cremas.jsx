import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { TarjetaProducto } from '../components/TarjetaProducto'
import { datos } from '../data/productos'

export const Cremas = () => {
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
                                    <button className="nav-link active text-uppercase" id="nav-nb-380-tab" data-bs-toggle="tab" data-bs-target="#nav-nb-380" type="button" role="tab" aria-controls="nav-nb-380" aria-selected="true">nature & beauty de 380 ml</button>
                                    <button className="nav-link text-uppercase" id="nav-nb-400-tab" data-bs-toggle="tab" data-bs-target="#nav-nb-400" type="button" role="tab" aria-controls="nav-nb-400" aria-selected="false">nature & beauty de 400 ml</button>
                                    <button className="nav-link text-uppercase" id="nav-bexy-tab" data-bs-toggle="tab" data-bs-target="#nav-bexy" type="button" role="tab" aria-controls="nav-bexy" aria-selected="false">bexy</button>
                                    <button className="nav-link text-uppercase" id="nav-savvy-tab" data-bs-toggle="tab" data-bs-target="#nav-savvy" type="button" role="tab" aria-controls="nav-savvy" aria-selected="false">savvy</button>
                                    <button className="nav-link text-uppercase" id="nav-savvy-260-tab" data-bs-toggle="tab" data-bs-target="#nav-savvy-260" type="button" role="tab" aria-controls="nav-savvy-260" aria-selected="false">savvy 260 ml</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active pt-4" id="nav-nb-380" role="tabpanel" aria-labelledby="nav-nb-380-tab" tabIndex="0">
                                    <Carousel responsive={responsive} className="h-100">
                                        {
                                            datos.filter((item) => item.categoria == 'CREMAS NATURE & BEAUTY DE 380 ML').map((item, index) => (
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
                                <div className="tab-pane fade pt-4" id="nav-bexy" role="tabpanel" aria-labelledby="nav-bexy-tab" tabIndex="0">
                                    <Carousel responsive={responsive} className="h-100">
                                        {
                                            datos.filter((item) => item.categoria == 'CREMAS BEXY').map((item, index) => (
                                                <div className='d-flex justify-content-center' key={index}>
                                                    <TarjetaProducto datos={item} />
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                                <div className="tab-pane fade pt-4" id="nav-savvy" role="tabpanel" aria-labelledby="nav-savvy-tab" tabIndex="0">
                                    <Carousel responsive={responsive} className="h-100">
                                        {
                                            datos.filter((item) => item.categoria == 'CREMAS SAVVY').map((item, index) => (
                                                <div className='d-flex justify-content-center' key={index}>
                                                    <TarjetaProducto datos={item} />
                                                </div>
                                            ))
                                        }
                                    </Carousel>
                                </div>
                                <div className="tab-pane fade pt-4" id="nav-savvy-260" role="tabpanel" aria-labelledby="nav-savvy-260-tab" tabIndex="0">
                                    savvy 260
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
