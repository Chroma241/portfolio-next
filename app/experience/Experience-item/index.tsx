import React from 'react';
import style from './styles.module.css';

type propsData = {
    data :{
        date: string,
        title:string,
        company:string
        description:string,
        stack: string[]
    }
}

const ExperienceItem = ({data}:propsData) => {
    return (
        <div className={style.experienceItem}>
            <aside  className={style.aside}>
                <p className={style.date}>{data.date}</p>
            </aside>
            <section className={style.section}>
                <h1 className={style.title} >{data.title} - {data.company}</h1>
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

export default ExperienceItem;
