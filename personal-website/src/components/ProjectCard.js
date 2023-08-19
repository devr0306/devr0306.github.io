import "../styles/project-card.css";

function ProjectCard(props) {
  const name = props.name;
  let image = "";

  switch (name) {
    case "EmoText":
      image = require("../assets/emotext_icon.png");
      break;
    case "FuturEdu":
      image = require("../assets/futuredu_icon.png");
      break;
    case "Thrive Education":
      image = require("../assets/thrive_icon.png");
      break;
  }

  return (
    <a href={props.link} class="project-link-container" target="blank">
      <div class="project-container">
        <img src={image} class="project-image" />
        <p class="project-text">{name}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
