import React, {useState, useEffect} from 'react';
import style from './styles.module.css';
const Header = () => {
    return (
        <div className={style.container}>
            <h1 className={style.name}>Fernand Mesange</h1>
            <h2 className={style.job}>Web / Mobile Developer</h2>
            <p className={style.description}>I build incredible digital experiences </p>
        </div>
    );
}

export default Header;
