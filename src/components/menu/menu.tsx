import s from './menu.module.scss';
import { NavLink } from 'react-router-dom';
import { CalendarIcon, HeartIcon, ProfileIcon, TrophyIcon } from '../../assets/icons';
import * as classNames from 'classnames';

const menuLinks = [
    {
        name: 'Календарь',
        path: '/calendar',
        icon: <CalendarIcon className={s.icon} />,
    },
    { name: 'Тренировки', path: '/workout', icon: <HeartIcon className={s.icon} /> },
    { name: 'Достижения', path: '/progress', icon: <TrophyIcon className={s.icon} /> },
    { name: 'Профиль', path: '/profile', icon: <ProfileIcon className={s.icon} /> },
];

type MenuProps = {
    collapsed: boolean;
};
export const Menu = ({ collapsed }: MenuProps) => {
    return (
        <nav className={s.menu__body}>
            <ul className={s.menu__list}>
                {menuLinks.map((link) => (
                    <li className={s.menu__item} key={link.name}>
                        <NavLink className={s.menu__link} to={link.path}>
                            {link.icon}
                            <span className={classNames({ collapsed: collapsed })}>
                                {link.name}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
