import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { IUISA } from '../pages/IUISA'
import { Cremas } from '../pages/Cremas'
import { BQPharma } from '../pages/BQPharma'
import { Desodorantes } from '../pages/Desodorantes'
import { Shampoos } from '../pages/Shampoos'
import { GelAntibacterial } from '../pages/GelAntibacterial'
import { ArticulosVarios } from '../pages/ArticulosVarios'

export const Enrutador = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <MainLayout /> }>
                    <Route index element={ <IUISA /> } />
                    <Route path="cremas" element={ <Cremas /> } />
                    <Route path="bqpharma" element={ <BQPharma /> } />
                    <Route path="desodorantes" element={ <Desodorantes /> } />
                    <Route path="shampoos" element={ <Shampoos /> } />
                    <Route path="gelantibacterial" element={ <GelAntibacterial /> } />
                    <Route path="articulosvarios" element={ <ArticulosVarios /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
