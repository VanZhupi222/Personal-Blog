import { Card } from 'react-bootstrap';
import TypeIt from 'typeit-react';
import "./PersonalInfoCard.css"

const PersonalInfoCard = (props) => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    <TypeIt>
                        This is <span className="signature">Zhupi222</span>
                    </TypeIt>
                </Card.Text>
                <Card.Text>{props.text}</Card.Text>
                {props.buttons.map((button) => (
                    <button key={button.id} style={{border: "none", outline: "none", background: "none"}}>
                        <img src={button.image} alt={button.text}></img>
                    </button>
                ))}
            </Card.Body>
        </Card>
    );
};

export default PersonalInfoCard;
