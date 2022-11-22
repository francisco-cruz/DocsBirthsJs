import React from 'react'
import { BrowserRouter, Routes as RoutesDom, Route } from 'react-router-dom'
import  Index  from './pages/Index'
import  Docs  from './pages/Docs'
import  Examples  from './pages/Examples' 


export default function Routes() {
    return (
      <BrowserRouter>
        <RoutesDom>
            <Route path="/" element={< Index />}/>
            <Route path="/docs" element={< Docs />}/>
            <Route path="/examples" element={< Examples />}/>
        </RoutesDom>
      </BrowserRouter>
       
    )
}
