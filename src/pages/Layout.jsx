/** @format */

import React from 'react';
import Header from '../components/Header/Header';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 offset-md-1">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
