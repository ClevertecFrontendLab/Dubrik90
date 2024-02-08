import { Button } from 'antd';
import s from './header.module.scss';
import { SettingOutlined } from '@ant-design/icons';
import * as classNames from 'classnames';

type HeaderProps = {
    collapsed: boolean;
};

export const Header = ({ collapsed }: HeaderProps) => {
    return (
        <header className={s.wrapper}>
            <div className={s.bread__crumbs}>Главная</div>
            <div className={s.content}>
                <h1 className={classNames(s.title, !collapsed && 'collapsed')}>
                    {/* eslint-disable-next-line no-irregular-whitespace */}
                    Приветствуем тебя в CleverFit — <span>приложении, </span> которое поможет тебе
                    добиться своей мечты!
                </h1>
                <Button icon={<SettingOutlined />} className={s.settings}>
                    Настройки{' '}
                </Button>
            </div>
        </header>
    );
};
