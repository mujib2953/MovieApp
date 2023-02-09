import { Fragment, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    const revText = useRef();
    const params = useParams();

    const { movieId } = params;

    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;

        try {
            await api.post("/api/v1/review", {
                reviewBody: rev.value,
                imdbId: movieId,
            });

            const updatedReviews = [...reviews, { body: rev.value }];
            rev.value = "";
            setReviews(updatedReviews);    
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovieData(movieId);
    }, [movieId]);

    return (
        <Container>
            <Row className="mt-3">
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img style={{ marginBottom: "2rem" }} src={movie?.poster} alt="" />
                </Col>

                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReview}
                                        revText={revText}
                                        labelText="Write a Review ..."
                                    />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {reviews?.map((item, index) => (
                        <Fragment key={item.body + "_" + index}>
                            <Row>
                                <Col>{item.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </Fragment>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
