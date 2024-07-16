import React from 'react';
import youtube from '../../public/svg/youtube (1).svg';
import github from '../../public/svg/github.svg';
import linkedin from '../../public/svg/linkedin.svg';
import twitter from '../../public/svg/twitter-x (2).svg';
import Image from 'next/image';
import style from './styles.module.css';

const Social = () => {
    return (
        <div>
            <ul className={style.social_list}>
                <li><Image className={style.socialImage} src={github} alt="github" width={25} height={25} /></li>
                <li><Image className={style.socialImage} src={linkedin} alt="linkedin" width={25} height={25} /></li>
                <li><Image className={style.socialImage} src={twitter} alt="twitter - X" width={25} height={25} /></li>
                <li><Image className={style.socialImage} src={youtube} alt="youtube" width={25} height={25} /></li>
            </ul>
        </div>
    );
}

export default Social;
