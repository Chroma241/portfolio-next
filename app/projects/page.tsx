import React from 'react';
import style from './styles.module.css';
import ProjectItem from './Project-item';

type projectType = {
        image: any,
        link: string,
        title:string,
        description:string,
        client:string,
        stack:string[]
}

const Projects = () => {

    const allProject: projectType[] = [
        {
            image: '2021 - Present',
            link: '',
            title: 'App STEAM EQUITY  ( ANDROID )',
            client: 'GABTROTTER - AMBASSADE DES ETATS UNIS DU GABON',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, nulla sed tincidunt tincidunt, ante elit fermentum elit, et auctor turpis orci sit amet sem. Nulla facilisi. Vivamus non orci ut justo sodales tincidunt. Vivamus euismod, turpis nec cursus efficitur, augue turpis malesuada dui, nec pellentesque risus velit at massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tincidunt, ante in gravida efficitur, velit nisi sodales ex, nec ornare velit orci nec lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec et velit euismod, feugiat nunc sit amet, maximus nisl. Donec auctor, metus a tincidunt efficitur, magna ligula efficitur nisi, sit amet tincidunt justo diam eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor, tellus sit amet effic',
            stack: ['Flutter', 'SQL']
        },
        {
            image: '2021 - Present',
            link: '',
            title: 'Site Web',
            client:'',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, nulla sed tincidunt tincidunt, ante elit fermentum elit, et auctor turpis orci sit amet sem. Nulla facilisi. Vivamus non orci ut justo sodales tincidunt. Vivamus euismod, turpis nec cursus efficitur, augue turpis malesuada dui, nec pellentesque risus velit at massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tincidunt, ante in gravida efficitur, velit nisi sodales ex, nec ornare velit orci nec lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec et velit euismod, feugiat nunc sit amet, maximus nisl. Donec auctor, metus a tincidunt efficitur, magna ligula efficitur nisi, sit amet tincidunt justo diam eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor, tellus sit amet effic',
            stack: ['React', 'Node', 'MongoDB', 'Express', 'TypeScript', 'GraphQL', 'Apollo']
        },
        {
            image: '2021 - Present',
            link: '',
            title: 'Full Stack Developer',
            client:'',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, nulla sed tincidunt tincidunt, ante elit fermentum elit, et auctor turpis orci sit amet sem. Nulla facilisi. Vivamus non orci ut justo sodales tincidunt. Vivamus euismod, turpis nec cursus efficitur, augue turpis malesuada dui, nec pellentesque risus velit at massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tincidunt, ante in gravida efficitur, velit nisi sodales ex, nec ornare velit orci nec lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec et velit euismod, feugiat nunc sit amet, maximus nisl. Donec auctor, metus a tincidunt efficitur, magna ligula efficitur nisi, sit amet tincidunt justo diam eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor, tellus sit amet effic',
            stack: ['React', 'Node', 'MongoDB', 'Express', 'TypeScript', 'GraphQL', 'Apollo']
        },
        {
            image: '2021 - Present',
            link: '',
            title: 'Full Stack Developer',
            client: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, nulla sed tincidunt tincidunt, ante elit fermentum elit, et auctor turpis orci sit amet sem. Nulla facilisi. Vivamus non orci ut justo sodales tincidunt. Vivamus euismod, turpis nec cursus efficitur, augue turpis malesuada dui, nec pellentesque risus velit at massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut tincidunt, ante in gravida efficitur, velit nisi sodales ex, nec ornare velit orci nec lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Donec et velit euismod, feugiat nunc sit amet, maximus nisl. Donec auctor, metus a tincidunt efficitur, magna ligula efficitur nisi, sit amet tincidunt justo diam eu massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent auctor, tellus sit amet effic',
            stack: ['React', 'Node', 'MongoDB', 'Express', 'TypeScript', 'GraphQL', 'Apollo']
        },
        
    ]
    return (
        <div className={style.project}>
            <h1 className={style.title}>Projects</h1>
            <div className={style.experiencesList}>
                {allProject.map((item,index) => (
                    <ProjectItem key={index} data={item} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
