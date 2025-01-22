import React from "react";
import Card from "../components/card.jsx";
import Banner from "../components/banner.jsx";
import Background from "../assets/homePicture/background.webp";
import Data from "../data/data.json";

function MesProjets() {
    return(
        <div className="home-content">
                <Banner img={Background} />
                <div className="card-container">
                    {Data.map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            image={item.cover}
                            subtitle={item.title}
                        />
                    ))}
                </div>
            </div>
    )
}

export default MesProjets;