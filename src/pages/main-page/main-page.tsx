import React from 'react';
import s from './main-page.module.scss';
import { Button } from 'antd';
import { actionItems, listItems } from '@pages/main-page/data.tsx';

export const MainPage: React.FC = () => (
    <div className={s.main}>
        <ul className={s.scope__list}>
            С CleverFit ты сможешь:
            {listItems.map((item) => (
                <li key={item.id} className={s.scope__item}>
                    {item.text}
                </li>
            ))}
        </ul>
        <p className={s.about}>
            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
            Не откладывай на завтра — начни тренироваться уже сегодня!
        </p>
        <div className={s.action__wrapper}>
            {actionItems.map((action) => (
                <div key={action.id} className={s.action__block}>
                    <p className={s.title}>
                        {action.pText} <span>{action.sText}</span>
                    </p>
                    <Button icon={action.icon} className={s.variant__btn}>
                        {action.btn}
                    </Button>
                </div>
            ))}
        </div>
    </div>
);
