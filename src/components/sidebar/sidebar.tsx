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
import { Routs } from '../../router/routTypes.ts';

type SidebarProps = {
    collapsed: boolean;
    collapsedHandler: () => void;
};

export const Sidebar = ({ collapsed, collapsedHandler }: SidebarProps) => {
    const dataTest = window.innerWidth >= 834 ? 'sider-switch' : 'sider-switch-mobile';

    return (
        <div className={classNames(s.wrapper)}>
            <Link className={s.logo} to={Routs.MAIN}>
                {collapsed ? (
                    <LogoMinIcon className={s.logo__desktop} />
                ) : (
                    <LogoDesktopIcon className={s.logo__desktop} />
                )}
                <LogoMobileIcon className={s.logo__mobile} />
            </Link>
            <Menu />
            <Button className={s.button} icon={<ExitIcon />}>
                Выход
            </Button>
            <Button
                data-test-id={dataTest}
                onClick={collapsedHandler}
                className={s.collapsed__button}
            >
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
