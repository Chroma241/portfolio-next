import React from 'react';
import Social from '../social/page';
import Image from 'next/image';
import style from './styles.module.css';
import profile_picture from '../../public/images/picture.jpeg';

const AboutItem = () => {
    return (
        <div className={style.about}>
            <section className={style.full_description}>
                <h2 className={style.title}>About me</h2>
                <p className={style.text}>
                Je suis principalement Développeur Web depuis 2 ans maintenant et je suis passionné de tout ce qui touche de près ou de loin à l'informatique et aux nouvelles technologies, je me suis principalement formé en autodidacte et j'ai suivi quelques formations entre temps. J'ai travaillé sur divers projets allant du développement web et mobile, du développement de jeux vidéo et d'expériences en réalité virtuelle et aussi de l'animation en 3D pour un projet de court-métrage.
                </p>
                <Social/>
            </section>
            <section className='profile'>
                <div className="picture">
                    <Image src={profile_picture} className={style.profile_picture} alt="<Fernand Mesange>" width={250} height={250} />
                </div>
            </section>
        </div>
    );
}

export default AboutItem;
