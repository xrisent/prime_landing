import React from 'react';
import styles from '../burger/burger.module.scss';
import { PropsMenu } from '@/shared/types/types';

export const NavigationMenu: React.FC<PropsMenu> = ({ isOpen, onClose }) => {
    return (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <nav>
                <ul>
                    <li><a href="#h" onClick={onClose}>О нас</a></li>
                    <li><a href="#" onClick={onClose}>Услуги</a></li>
                    <li><a href="#" onClick={onClose}>Блог</a></li>
                    <li><a href="#" onClick={onClose}>FAQ</a></li>
                    <li><a href="#" onClick={onClose}>Контакты</a></li>
                </ul>
            </nav>
        </div>
    );
};
