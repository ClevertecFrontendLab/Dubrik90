import { Menu } from '@components/menu';
import { Button } from 'antd';
import { CollapsedIcon, ExitIcon, LogoDesktopIcon, LogoMobileIcon } from '../../assets';
import s from './sidebar.module.scss';
import { useState } from 'react';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const collapsedHandler = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className={classNames(s.wrapper, { collapsed: collapsed })}>
            <Link className={s.logo} to={'/'}>
                {collapsed ? <LogoMobileIcon /> : <LogoDesktopIcon />}
            </Link>

            <Menu collapsed={collapsed} />
            <Button className={s.button} icon={<ExitIcon />}>
                Выход
            </Button>
            <Button
                onClick={collapsedHandler}
                className={s.collapsed__button}
                icon={<CollapsedIcon />}
            ></Button>
        </div>
    );
};
