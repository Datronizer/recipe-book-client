import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard.tsx";
import { AllRecipes } from "../recipe/AllRecipes.tsx";
import { AppNavBar } from "./AppNavBar.tsx";

export function AppRouter()
{
    return (
        <BrowserRouter>
            <AppNavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/recipes">
                    <Route path="" element={<AllRecipes />} />
                    <Route path=":id" element={<h1>Specific recipe</h1>} />
                    <Route path="add-recipe" element={<h1>Add recipe</h1>} />
                </Route>
                <Route path="/pantry" element={<h1>My Pantry</h1>} />
                <Route path="/account" element={<h1>My account</h1>} />
            </Routes>
        </BrowserRouter>
    )
}