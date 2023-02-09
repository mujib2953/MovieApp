import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = ({ movies }) => {

    const navigate = useNavigate();

    return (
        <>
            <Carousel>
                {movies.map((item) => (
                    <Paper key={item.imdbId}>
                        <div className="movie-card-container">
                            <div
                                className="movie-card"
                                style={{ "--img": `url(${item.backdrops[0]})` }}
                            >
                                <div className="movie-detail">
                                    <div className="movie-poster">
                                        <img src={item.poster} alt="" />
                                    </div>

                                    <div className="movie-title">
                                        <h4>{item.title}</h4>
                                    </div>

                                    <div className="movie-buttons-container">
                                        <Link
                                            to={`/Trailer/${item.trailerLink.substring(
                                                item.trailerLink.length - 11
                                            )}`}
                                        >
                                            <div className="play-button-icon-container">
                                                <FontAwesomeIcon
                                                    className="play-button-icon"
                                                    icon={faCirclePlay}
                                                />
                                            </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant="info" onClick={() => navigate(`/Reviews/${item.imdbId}`)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </>
    );
};

export default Hero;
