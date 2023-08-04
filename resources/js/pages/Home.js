import React from "react";
import ReactDOM from "react-dom";
import { Button, Card } from "@material-ui/core";

function Home() {
    return (
        <div className="container">
            <Card>
                <Button color="primary" variant="contained" href={`/example`}>Exampleに移動</Button>
            </Card>
        </div>
    );
}

export default Home;
