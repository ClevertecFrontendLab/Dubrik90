import { Menu } from '@components/menu';
import { Button } from 'antd';
import {
    CollapsedCloseIcon,
    CollapsedOpenIcon,
    ExitIcon,
    LogoDesktopIcon,
    LogoMinIcon,
    SubstrateButtonIcon,
    LogoMobileIcon,
} from '../../assets';
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
                {collapsed ? (
                    <LogoMinIcon className={s.logo__desktop} />
                ) : (
                    <LogoDesktopIcon className={s.logo__desktop} />
                )}
                <LogoMobileIcon className={s.logo__mobile} />
            </Link>
            <Menu collapsed={collapsed} />
            <Button className={s.button} icon={<ExitIcon />}>
                Выход
            </Button>
            <Button onClick={collapsedHandler} className={s.collapsed__button}>
                <SubstrateButtonIcon />
                {collapsed ? (
                    <CollapsedOpenIcon className={s.CollapsedOpenIcon} />
                ) : (
                    <CollapsedCloseIcon className={s.CollapsedOpenIcon} />
                )}
            </Button>
        </div>
    );
};
