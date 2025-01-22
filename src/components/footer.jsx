import React from "react";
import cv from "../assets/homePicture/monCV.pdf";
import "../style/footer.scss";

function Footer() {
    return (
        <div className="footer">
            <p>
                Vous pouvez retrouver mes coordonnées et mon parcours
                </p>
                    <p className="pFooter"> en cliquant sur :
                </p>
                <a href={cv} target="_blank" rel="noopener noreferrer">
                    Mon CV
                    </a>
        </div>
    )
}

export default Footer;