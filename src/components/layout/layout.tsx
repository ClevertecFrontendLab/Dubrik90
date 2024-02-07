import { Outlet } from 'react-router-dom';
import { NavigateMenu } from '@components/navigate-menu';
import * as classNames from 'classnames';

export const Layout = () => {
    return (
        <div className={classNames('wrapper', 'container')}>
            <NavigateMenu />
            <main className={'main'}>
                <Outlet />
            </main>
        </div>
    );
};
