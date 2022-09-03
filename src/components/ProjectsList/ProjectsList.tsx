import cl from "./projectsList.module.scss";
import codeEditorImg from "../../assets/codeEditor.jpg";
import photoSiteImg from "../../assets/photoSite.jpg";
import canvasBGImg from "../../assets/canvasBG.jpg";
import Project from "../Poject/Project";

interface ProjectsListProps {
  loadedImage: () => void
}

const ProjectsList: React.FC<ProjectsListProps> = ({ loadedImage }) => {
  let projects:
    | {
        name: string;
        githubLink: string;
        liveLink: string;
        image: any;
      }[]
    | JSX.Element[] = [
    {
      name: "Code editor",
      githubLink: "https://github.com/no1cthis/code-editor",
      liveLink: "https://no1cthis.github.io/code-editor/",
      image: codeEditorImg,
    },
    {
      name: "Interactive Photo Site",
      githubLink: "https://github.com/no1cthis/gooey",
      liveLink: "https://no1cthis.github.io/gooey/",
      image: photoSiteImg,
    },
    {
      name: "Tunable background",
      githubLink: "https://github.com/no1cthis/canvas-bg",
      liveLink: "https://no1cthis.github.io/canvas-bg/",
      image: canvasBGImg,
    },
  ];

  projects = projects.map((project) => (
    <Project
      key={project.liveLink}
      name={project.name}
      githubLink={project.githubLink}
      liveLink={project.liveLink}
      image={project.image}
      loadedImage={loadedImage}
    />
  ));
  return (
    <section className={cl.wrapper}>
      <div className={cl.title} id='projects'>Some of my works</div>
      {projects}
    </section>
  );
};

export default ProjectsList;
