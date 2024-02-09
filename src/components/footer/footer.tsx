import s from './footer.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Link to={'#'} className={s.review__link}>
                Смотреть отзывы
            </Link>
            <div className={s.download__block}>
                <div className={s.download__content}>
                    <h3 className={s.title}>Скачать на телефон </h3>
                    <p className={s.text}>Доступно в PRO-тарифе</p>
                </div>
                <div className={s.download__btn_block}>
                    <Button className={s.download__btn} icon={<AndroidOutlined />}>
                        Android OS
                    </Button>
                    <Button className={s.download__btn} icon={<AppleOutlined />}>
                        Apple iOS
                    </Button>
                </div>
            </div>
        </footer>
    );
};
