import React from "react";
import HomeAdm from '../admin/pages/Home'

import { BrowserRouter, Routes as RoutesDOM, Route } from "react-router-dom";

const Routes=()=>{
    return (
        <BrowserRouter>
            <RoutesDOM>

                <Route index element={<HomeAdm />} />
                

            </RoutesDOM>
        </BrowserRouter>
    );
};
export default Routes;