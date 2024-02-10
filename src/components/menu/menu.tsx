import s from './menu.module.scss';
import { NavLink } from 'react-router-dom';
import { CalendarIcon, HeartIcon, ProfileIcon, TrophyIcon } from '../../assets/icons';
import { Routs } from '../../router/routTypes.ts';

const menuLinks = [
    {
        name: 'Календарь',
        path: Routs.CALENDAR,
        icon: <CalendarIcon className={s.icon} />,
    },
    { name: 'Тренировки', path: Routs.WORKOUT, icon: <HeartIcon className={s.icon} /> },
    { name: 'Достижения', path: Routs.PROGRESS, icon: <TrophyIcon className={s.icon} /> },
    { name: 'Профиль', path: Routs.PROFILE, icon: <ProfileIcon className={s.icon} /> },
];

export const Menu = () => (
    <nav className={s.menu__body}>
        <ul className={s.menu__list}>
            {menuLinks.map((link) => (
                <li className={s.menu__item} key={link.name}>
                    <NavLink className={s.menu__link} to={link.path}>
                        {link.icon}
                        <span>{link.name}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);
