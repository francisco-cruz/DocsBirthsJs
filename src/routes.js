import React from 'react'
import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'
import  Index  from './pages/Index'
import  Docs  from './pages/Docs/Docs'
import  Examples  from './pages/Examples' 
import Components from './pages/Docs/Components'
import HowUse from './pages/Docs/HowUse'
import Instalation from './pages/Docs/Instalation'

export default function Routes() {
    return (
      <BrowserRouter>
        <RoutesDom>
            <Route path="/" element={< Index />}/>
            <Route path="/docs" element={< Docs />}/>
            <Route path="/docs/components" element={< Components />}/>
            <Route path="/docs/howuse" element={< HowUse />}/>
            <Route path="/docs/instalation" element={< Instalation />}/>
            <Route path="/examples" element={< Examples />}/>
        </RoutesDom>
      </BrowserRouter>
       
    )
}
