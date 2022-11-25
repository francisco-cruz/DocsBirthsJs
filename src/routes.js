import React from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Index from "./pages/Index";
import Docs from "./pages/Docs/Docs";
import Examples from "./pages/Examples";
import Components from "./pages/Docs/Components";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Index />} />
        <Route path="/docs/installation" element={<Docs />} />
        <Route path="/docs/components" element={<Components />} />
        <Route path="/examples" element={<Examples />} />
      </RoutesDom>
    </BrowserRouter>
  );
}
