import React from "react"

type Props = {}
type State = {}
export class AllRecipes extends React.Component<Props, State>
{
    public constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        return (
            <div>
                <h1>All recipes</h1>
                <p>This is normal text</p>
            </div>
        )
    }
}