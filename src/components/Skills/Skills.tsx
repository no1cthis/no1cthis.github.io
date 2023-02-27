import cl from "./skills.module.scss";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = () => {
  return (
    <section className={cl.wrapper}>
      <div className={cl.title}>My Skills</div>
      <div className={`${cl.text} ${cl.moveLeft}`}>
        HTML5 &nbsp;&nbsp;&nbsp;CSS &nbsp;&nbsp;&nbsp;SASS
        &nbsp;&nbsp;&nbsp;JavaScript &nbsp;&nbsp;&nbsp;TypeScript
        &nbsp;&nbsp;&nbsp;React &nbsp;&nbsp;&nbsp;Redux &nbsp;&nbsp;&nbsp;RTK
        &nbsp;&nbsp;&nbsp;Rest API &nbsp;&nbsp;&nbsp;GraphQL &nbsp;&nbsp;&nbsp;
        Node JS &nbsp;&nbsp;&nbsp;Express &nbsp;&nbsp;&nbsp;SASS
        &nbsp;&nbsp;&nbsp;JavaScript &nbsp;&nbsp;&nbsp;TypeScript
        &nbsp;&nbsp;&nbsp;React &nbsp;&nbsp;&nbsp;Redux &nbsp;&nbsp;&nbsp;RTK
        &nbsp;&nbsp;&nbsp;Rest API &nbsp;&nbsp;&nbsp;GraphQL
      </div>
      <div className={`${cl.text} ${cl.moveRight}`}>
        HTML5 &nbsp;&nbsp;&nbsp;CSS &nbsp;&nbsp;&nbsp;SASS
        &nbsp;&nbsp;&nbsp;JavaScript &nbsp;&nbsp;&nbsp;TypeScript
        &nbsp;&nbsp;&nbsp;React &nbsp;&nbsp;&nbsp;Redux &nbsp;&nbsp;&nbsp;RTK
        &nbsp;&nbsp;&nbsp;Rest API &nbsp;&nbsp;&nbsp;GraphQL &nbsp;&nbsp;&nbsp;
        Node JS &nbsp;&nbsp;&nbsp;Express &nbsp;&nbsp;&nbsp;SASS
        &nbsp;&nbsp;&nbsp;JavaScript &nbsp;&nbsp;&nbsp;TypeScript
        &nbsp;&nbsp;&nbsp;React &nbsp;&nbsp;&nbsp;Redux &nbsp;&nbsp;&nbsp;RTK
        &nbsp;&nbsp;&nbsp;Rest API &nbsp;&nbsp;&nbsp;GraphQL
      </div>
    </section>
  );
};

export default Skills;
