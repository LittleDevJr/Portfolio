import React from "react";
import asideImg1 from "../assets/homePicture/asideImg1.jpeg";
import "../style/home.scss";
import asideImg2 from "../assets/homePicture/logoOCR.webp";
import Feature from "../components/feature.jsx";
import LogoLang1 from "../assets/homePicture/logoHTML5.png";
import LogoLang2 from "../assets/homePicture/logoCSS3.png";
import LogoLang3 from "../assets/homePicture/logoJavaScript.png";
import LogoLang4 from "../assets/homePicture/logoReact+Vite.jpeg";
import LogoTool from "../assets/homePicture/logoTerminak.png";
import LogoTool2 from "../assets/homePicture/logoGitHub.png";
import LogoTool3 from "../assets/homePicture/logoSass.jpeg";
import LogoTool4 from "../assets/homePicture/logoNodeJs.png";


function Home() {
  return (
    <div>
      <aside className="aside-container grey">
        <article className="aside-text">
          <h1 className="title1">"Hello, je m'appelle Ludwig"</h1>
          <p className="p1">Développeur web frontend junior</p>
        </article>
        <article className="aside-img">
          <img src={asideImg1} alt="codePicture" />
        </article>
      </aside>
      <aside className="aside-container2 black">
        <article className="aside-img2 black">
          <img src={asideImg2} alt="logo openclassroom" />
        </article>
        <article className="aside-text2">
          <h2 className="title2">En pleine reconversion!</h2>
          <p className="p2">
            J'ai opté pour la formation Intégrateur Web de chez Openclassrooms!
          </p>
        </article>
      </aside>
      <article className="language grey">
        <h3 className="title3">
            Mes langages :
        </h3>
        <div className="featureContent">
            <Feature imageSrc={LogoLang1} description="HTML5" />
            <Feature imageSrc={LogoLang2} description="CSS3" />
            <Feature imageSrc={LogoLang3} description="JavaScript" />
            <Feature imageSrc={LogoLang4} description="React+Vite" />
        </div>
      </article>
      <article className="language black">
        <h3 className="title3">
         Mes outils : 
        </h3>
        <div className="featureContent">
          <Feature imageSrc={LogoTool} description="Terminal" />
          <Feature imageSrc={LogoTool2} description="GitHub" />
          <Feature imageSrc={LogoTool3} description="Sass" />
          <Feature imageSrc={LogoTool4} description="NodeJS"/>
        </div>
      </article>
      <article className="contact">
      <h3>Me Contacter :</h3>
       <form action="mailto:hollowpuf@hotmail.fr" method="post" encType="text/plain">
        <label> Email: <input type="email" name="email" required /> </label>
         <label> Message: <textarea name="message" required></textarea> </label>
          <button type="submit">Envoyer</button> 
          </form>
      </article>
    </div>
  );
}

export default Home;
