import React from 'react';
import style from './styles.module.css';
import Image from 'next/image';


type propsData = {
    data :{
        image: any,
        link: string,
        title:string,
        description:string,
        stack:string[]
    }
}

const ProjectItem = ({data}:propsData) => {
    return (
            <div className={style.projectItem}>
            <aside  className={style.aside}>
                <Image src={'/'+data.image} alt={data.title} width={200} height={200} />
            </aside>
            <section className={style.section}>
            <a href={data.link}>
                <h1 className={style.title}>{data.title}</h1>
            </a>

                <p className={style.description}>{data.description}</p>
                <ul className={style.stackList}>
                    {data.stack.map((item, index) => (
                        <li className={style.stackItem} key={index}><p>{item}</p></li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default ProjectItem;

