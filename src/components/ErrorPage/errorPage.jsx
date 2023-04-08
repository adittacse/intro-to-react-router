import React from 'react';
import { useRouteError } from "react-router-dom";

const errorPage = () => {
    const error = useRouteError();
    // console.log(error)

    return (
        <div>
            <h1>404</h1>
            <h3>Not Found</h3>
            <p>
                {/*<i>{error.statusText || error.message}</i>*/}
            </p>
        </div>
    );
};

export default errorPage;
