import { Card } from 'react-bootstrap';

const JokeInHellCard = () => {
    return (
        <Card style={{width: "40vw"}}>
            <Card.Header>地狱笑话</Card.Header>
            <Card.Body className="bg-dark text-white">
                <blockquote className="blockquote mb-0">
                    <p>Mamba Out!</p>
                    <footer className="blockquote-footer">
                        Someone famous in{' '}
                        <cite title="Source Title">地狱笑话吧</cite>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default JokeInHellCard;
