import React from "react";
import { Route, Routes } from "react-router-dom";

export function AppRouter()
{
    return (
        <Routes>
            <Route path="/test" element={<h1>Testing</h1>}/>
        </Routes>
    )
}