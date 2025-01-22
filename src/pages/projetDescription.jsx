
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projetData from '../data/data.json';
import { FaStar } from 'react-icons/fa';
import Carousel from '../components/carousel.jsx';
import Collapse from '../components/collapse.jsx';
import "../style/projetDescription.scss";
import "../style/collapse.scss";

const ProjetDescription = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const projet = projetData.find((apt) => apt.id === id);


    useEffect(() => {
        if (!projet) {
            navigate('/not-found');
        }
    }, [projet, navigate]);
    const rating = parseInt(projet?.rating, 10);


    return (
        projet ?
            <div className="carousel-container">
                <Carousel images={projet.pictures} />
                <div className="infoCarousel">
                    <div className="title-location-tags">
                        <h2>{projet.title}</h2>
                        <h4>{projet.location}</h4>
                        <div className="tags">
                            {projet.tags.map((tag, index) => (
                                <span key={index} className="tag-bubble">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="host-ratings">
                        <div className="hostName-hostPicture">
                            <p className="hostName">
                            <a href={projet.host.name} target="_blank" rel="noopener noreferrer">
                                Code GitHub 
                                </a>
                            </p>
                            <img className="hostPicture" src={projet.host.picture}></img>
                        </div>
                        <div className="rating">
                            <p>Difficulté :</p>
                            {[...Array(5)].map((star, index) => {
                                if (index < rating) {
                                    return <FaStar key={index} className="star star-filled" />;
                                } else {
                                    return <FaStar key={index} className="star star-empty" />;
                                }
                            })}
                        </div>
                    </div>
                </div>
                <div className="homeCollapse">
                    <div className="homeCollapseLeft">
                        <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Description">
                            {projet.description}
                        </Collapse>
                    </div>
                    <div className="homeCollapseRight">
                        <Collapse headerClassName="collapse-home-header" contentClassName="collapse-home-content" title="Compétences">
                            <ul> {projet.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}

                            </ul>
                        </Collapse>
                    </div>
                </div>
            </div>
            : null
    );
};

export default ProjetDescription;
