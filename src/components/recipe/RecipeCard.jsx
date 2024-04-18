import { IngredientsCard } from "./IngredientsCard.jsx";

export function RecipeCard()
{
    return (
        <div>
            This is where the whole recipe card will go
            <div>Servings and Photos</div>
            <div>
                <IngredientsCard />
            </div>
            <div>
                This is where the actual recipe goes
            </div>
        </div>
    );
}