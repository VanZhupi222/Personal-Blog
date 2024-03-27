import { Card, CardFooter } from 'react-bootstrap';
import TypeIt from 'typeit-react';
import './PersonalInfoCard.css';

const PersonalInfoCard = (props) => {
    const handleClickButton = (buttonId) => {
        props.setButtons((prevButtons) =>
            prevButtons.map((button) =>
                button.id === buttonId
                    ? { ...button, isClicked: !button.isClicked }
                    : button
            )
        );
    };
    return (
        <Card className="bg-dark text-white">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    <TypeIt>
                        This is <span className="signature">Zhupi222</span>
                    </TypeIt>
                </Card.Text>
                <Card.Text>{props.text}</Card.Text>
                <CardFooter className="img-wrapper">
                    {props.buttons.map((button) => (
                        <button
                            key={button.id}
                            className="card-buttons"
                            onClick={() => handleClickButton(button.id)}>
                            <img
                                src={button.image}
                                alt={button.text}
                                className="image"
                                style={
                                    button.isClicked
                                        ? { opacity: 0 }
                                        : { opacity: 1 }
                                }></img>
                            <img
                                src={button.clickedImage}
                                alt={button.text}
                                className="image-clicked"
                                style={
                                    button.isClicked
                                        ? { opacity: 1 }
                                        : { opacity: 0 }
                                }></img>
                        </button>
                    ))}
                </CardFooter>
            </Card.Body>
        </Card>
    );
};

export default PersonalInfoCard;
