import cl from "./welcomeSection.module.scss";

interface WelcomeSectionProps {}

const WelcomeSection: React.FC<WelcomeSectionProps> = () => {
  return (
    <section className={cl.welcome}>

    <div className={cl.text}>
        
    </div>


      <div className={cl.scroller__wrapper}>
        <div className={cl.scroller}>
          <div className={cl.scroller__point}></div>
        </div>
        <div className={cl.scroller__arrows}>
          <div className={cl.scroller__arrow}></div>
          <div className={cl.scroller__arrow}></div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
