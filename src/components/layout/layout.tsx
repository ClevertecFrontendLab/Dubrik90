import { Outlet } from 'react-router-dom';
import * as classNames from 'classnames';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { Sidebar } from '@components/sidebar';

export const Layout = () => {
    return (
        <div className={classNames('wrapper', 'container')}>
            <Sidebar />
            <div className={'content'}>
                <Header />
                <main className={'main'}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};
