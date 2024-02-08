import { Outlet } from 'react-router-dom';
import * as classNames from 'classnames';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Sidebar } from '@components/sidebar';
import { useState } from 'react';

export const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const collapsedHandler = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames('wrapper', 'container')}>
            <Sidebar collapsed={collapsed} collapsedHandler={collapsedHandler} />
            <div className={'content'}>
                <Header collapsed={collapsed} />
                <main className={'main'}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};
