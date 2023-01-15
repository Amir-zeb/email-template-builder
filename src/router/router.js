import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { myRoutes } from './my-routes';
import { Page404 } from '../screens';
import { SplashScreen } from '../components';

export default function Router() {
    const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {
                isLoading ?
                    <SplashScreen />
                    :
                    <>
                        <Routes>
                            {myRoutes.map((_v, _i) => {
                                return (
                                    <Route
                                        key={_i}
                                        path={_v.path}
                                        exact
                                        element={_v.element}
                                    />
                                );
                            })}
                            <Route
                                path="*"
                                element={
                                    <Page404 />
                                }
                            />
                        </Routes>
                    </>
            }
        </>
    );
}