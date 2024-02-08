import { Menu } from '@components/menu';
import { Button } from 'antd';
import {
    CollapsedCloseIcon,
    CollapsedOpenIcon,
    ExitIcon,
    LogoDesktopIcon,
    LogoMinIcon,
    LogoMobileIcon,
    SubstrateButtonIcon,
} from '../../assets';
import s from './sidebar.module.scss';
import * as classNames from 'classnames';
import { Link } from 'react-router-dom';

type SidebarProps = {
    collapsed: boolean;
    collapsedHandler: () => void;
};

export const Sidebar = ({ collapsed, collapsedHandler }: SidebarProps) => {
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
