import s from './menu.module.scss';
import { NavLink } from 'react-router-dom';
import { CalendarIcon, HeartIcon, ProfileIcon, TrophyIcon } from '../../assets/icons';

const menuLinks = [
    { name: 'Календарь', path: '/calendar', icon: <CalendarIcon /> },
    { name: 'Тренировки', path: '/workout', icon: <HeartIcon /> },
    { name: 'Достижения', path: '/progress', icon: <TrophyIcon /> },
    { name: 'Профиль', path: '/profile', icon: <ProfileIcon /> },
];

// type MenuProps = {
//     closeMenu: () => void;
// };
export const Menu = () => {
    return (
        <nav className={s.menu__body}>
            <ul className={s.menu__list}>
                {menuLinks.map((link) => (
                    <li className={s.menu__item} key={link.name}>
                        <NavLink
                            className={s.menu__link}
                            // onClick={closeMenu}
                            to={link.path}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
