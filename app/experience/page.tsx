import React from 'react';
import style from './styles.module.css';
import ExperienceItem from './Experience-item';

type experienceType = {
        date: string,
        title:string,
        company:string
        description:string,
        stack:string[]
}

const Experience = () => {

    const allExperiences: experienceType[] = [
        {
            date: 'Novembre 2020 - Fevrier 2021',
            title: 'Developpeur de jeux video',
            company: 'WE ARE DIGITAL',
            description: "Mon rôle consistait à créer des jeux vidéo généralement publicitaire pour des événements et des clients. Il pouvait s'agir de jeux en 2D ou en 3D en utilisant nottament Unreal Engine 4 et Construct3, j'ai notamment travaillé sur le jeu Covid Invaders pour promouvoir la campagne de vaccination contre la COVID-19 au Gabon en 2021.",
            stack: ['UE4', 'Javascript', 'Gdevelop', 'Firebase']
        },
        {
            date: 'Avril 2021 - Fevrier 2022',
            title: 'Developpeur Web ',
            company: 'STUDIO MB FILMS',
            description: "Mon rôle était de créer le site web de l'entreprise et de faire la gestion de ce dernier, nous utilisions généralement des CMS comme WordPress avec du PHP. Durant la création du site, mon rôle était le design web, le design des interfaces ainsi que le développement et le déploiement du site sur le web. En vue de mes compétences dans divers domaines de l'informatique, j'ai aussi été chargé de faire la maintenance du réseau interne de la boite et des ordinateurs ainsi que la sauvegarde des fichiers ou des travaux en cours en utilisant des NAS Synology ou WD.",
            stack: ['Bootstrap', 'Wordpress','PHP']
        },
        {
            date: 'Juillet 2022 - Present',
            title: 'Developpeur Web / Mobile ',
            company: 'Freelance / MRG CONSULTING',
            description: "Au sein de cette entreprise, mon rôle était de diriger toutes les étapes du développement des solutions internes ou celles des clients, qu'ils s'agissent d'application web, mobile J'ai notamment travaillé sur les sites web de Poly Assistance, TripGabon, Gabon Adventures et l’application STEAM EQUITY de Gabtrotter et de l’Ambassade des Etats-Unis au Gabon",
            stack: ['React','Typescript','Wordpress','PHP','MySQL','Flutter']
        }
    ]
    return (
        <div className={style.experience}>
            <h1 className={style.title}>Experience</h1>
            <div className={style.experiencesList}>
                {allExperiences.map((item,index) => (
                    <ExperienceItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Experience;
