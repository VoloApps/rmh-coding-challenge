'use client'
import '../globals.css';

import React from 'react';
import ReduxProvider from '@/components/redux-provider';

interface AuthenticateLayoutProps {
    children: React.ReactNode;
}

const AuthenticateLayout: React.FC<AuthenticateLayoutProps> = ({ children }) => {

    return (
        <ReduxProvider>
            <div className='pt-layout'>
                <section className="main-content">
                    {children}
                </section>
            </div>
        </ReduxProvider>
    );
}

export default AuthenticateLayout;

