import React from 'react';
import style from './styles.module.css';

const About = () => {
    return (
        <div className={style.about}>
            <h1 className={style.title}>About Me</h1>
            <section className={style.description}>
                <p>Je suis principalement Développeur Web depuis 2 ans maintenant et je suis passionné de tout ce qui touche de près ou de loin à l'informatique et aux nouvelles technologies, je me suis principalement formé en autodidacte et j'ai suivi quelques formations entre temps. J'ai travaillé sur divers projets allant du développement web et mobile, du développement de jeux vidéo et d'expériences en réalité virtuelle et aussi de l'animation en 3D pour un projet de court-métrage.</p>
            </section>
            <div className={style.container}>
            <section style={{width:'50%'}}>
                <h2 className={style.minTitle}>Langues</h2>
                <ul className={style.list}>
                    <li>Francais (Natif)</li>
                    <li>Anglais B1</li>
                </ul>
            </section>
            <section style={{width:'50%'}}>
                <h2 className={style.minTitle}>Formation</h2>
                <div>
                    <h3>2023 - 2024</h3>
                    <p>Integrateur web</p>
                    <p>Educatel</p>
                </div>
                <div>
                    <h3>2024</h3>
                    <p>Software Developer</p>
                    <p>GoMyCode</p>
                </div>
            </section>
            <section>
                <h2 className={style.minTitle} >Compétences</h2>
                <ul className={style.list}>
                    <li>Developpement web Full-Stack</li>
                    <li>Maintenances materiels informatique et logiciel</li>
                    <li>Developpement de jeux video</li>
                    <li>Developpement Mobile ( IOS & ANDROID )</li>
                </ul>
            </section>
            </div>
           
        </div>
    );
}

export default About;
