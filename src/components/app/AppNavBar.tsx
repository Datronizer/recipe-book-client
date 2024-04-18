import { NavLink } from "react-router-dom";

export function AppNavBar()
{
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/recipes">Recipes</NavLink>
            <NavLink to="/pantry">Pantry</NavLink>
        </nav>
    )
}