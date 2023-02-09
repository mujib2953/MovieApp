import { Button, Form } from "react-bootstrap";

const ReviewForm = ({ labelText, revText, defaultValue, handleSubmit }) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="someControlId">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control
                    as={"textarea"}
                    rows="3"
                    ref={revText}
                    defaultValue={defaultValue}
                />
            </Form.Group>

            <Button variant="outline-info" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
};

export default ReviewForm;
