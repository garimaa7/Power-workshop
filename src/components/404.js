import React from "react";
import { Link } from "react-router-dom";

const PageNotFound =() => {
    return (
        // Parent banauna empty tag <> use gareko
        <> 
            <h1>Page not Found. </h1>
            <Link to="/">Back to Home</Link>
        </>

    )
}

export default PageNotFound;