import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { TarjetaProducto } from '../components/TarjetaProducto'
import { datos } from '../data/productos'

export const BQPharma = () => {
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
                            <Carousel responsive={responsive} className="h-100">
                                {
                                    datos.filter((item) => item.categoria == 'BQ PHARMA').map((item, index) => (
                                        <div className='d-flex justify-content-center' key={index}>
                                            <TarjetaProducto datos={item} />
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
