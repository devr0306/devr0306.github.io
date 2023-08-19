import "../styles/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import ProjectCard from "./ProjectCard";

function Homepage() {
  return (
    <body>
      <div class="intro">
        <div class="name_container">
          <h1 class="name">Dev Randalpura</h1>
        </div>

        <div id="social_links">
          <a
            href="https://www.linkedin.com/in/dev-randalpura-8533a81b7"
            target="_blank"
            class="social"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/devr0306" target="_blank" class="social">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
          <a
            href="https://stackoverflow.com/users/14106179/dev-randalpura"
            target="_blank"
            class="social"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </div>

        <FontAwesomeIcon icon={faAngleDoubleDown} id="down-arrow" />
      </div>

      <div class="second_part">
        <h1>About Me</h1>

        <p class="intro_para">
          I am a rising Junior at the University of Texas at Austin majoring in
          Computer Science with a minor in Entrepreneurship and have five years
          of experience in the field which includes full stack development,
          cloud computing, and artificial intelligence.
          {/* <a
            href="https://play.google.com/store/apps/details?id=com.emotext.chatapp"
            target="blank"
          >
            EmoText
          </a>{" "}
          and{" "}
          <a href="http://futureducate.com" target="blank">
            FuturEdu
          </a>
          . */}
        </p>
        <p class="intro_para">
          I have created the following projects in my free time:
        </p>
        <div class="project-cards-container">
          <ProjectCard
            name="Thrive Education"
            link="https://play.google.com/store/apps/details?id=com.thethriveeducation.thrive&hl=en_US&gl=US"
          />
          <ProjectCard
            name="EmoText"
            link="https://github.com/devr0306/EmoText"
          />
          <ProjectCard
            name="FuturEdu"
            link="https://github.com/devr0306/FuturEdu"
          />
        </div>
      </div>
    </body>
  );
}

export default Homepage;
