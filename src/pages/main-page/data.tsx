import { CalendarIcon, HeartIcon, ProfileIcon } from '../../assets';
import s from '@pages/main-page/main-page.module.scss';

export const listItems = [
    {
        id: '0',
        text: '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки; ',
    },
    {
        id: '1',
        text: '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами; ',
    },
    {
        id: '2',
        text: '— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках; ',
    },
    {
        id: '3',
        text: '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.',
    },
];

export const actionItems = [
    {
        id: '0',
        pText: 'Расписать',
        sText: 'тренировки',
        btn: 'Тренировки',
        icon: <HeartIcon className={s.btn__icon} />,
    },
    {
        id: '1',
        pText: 'Назначить',
        sText: 'календарь',
        btn: 'Календарь',
        icon: <CalendarIcon className={s.btn__icon} />,
    },
    {
        id: '2',
        pText: 'Заполнить',
        sText: 'профиль',
        btn: 'Профиль',
        icon: <ProfileIcon className={s.btn__icon} />,
    },
];
