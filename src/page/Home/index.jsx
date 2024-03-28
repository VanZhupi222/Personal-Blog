import { useState } from 'react';
import { Col } from 'react-bootstrap';
import './index.css';
import JokeInHellPage from './JokeInHellPage';
import GITHUB_IMAGE from './source/github.svg';
import GITHUB_DECORATION_IMAGE from "./source/github-decoration.svg";
import GMAIL_IMAGE from './source/gmail.svg';
import GMAIL_DECORATION_IMAGE from "./source/gmail-decoration.svg";
import HEART_IMAGE from './source/heart.svg';
import HEART_DECORATION_IMAGE from './source/heart-decoration.svg';
import PersonalInfoCard from './PersonalInfoCard';

const PERSONAL_INFO = 'Personal Info';
const HOME_CARD_TEXT = 'A Salesforce | React Developer.';
const buttonsData = [
    {
        id: 1,
        text: 'Github',
        isClicked: false,
        image: GITHUB_IMAGE,
        clickedImage: GITHUB_DECORATION_IMAGE
    },
    {
        id: 2,
        text: 'Gmail',
        isClicked: false,
        image: GMAIL_IMAGE,
        clickedImage: GMAIL_DECORATION_IMAGE
    },
    {
        id: 3,
        text: 'Like',
        isClicked: false,
        image: HEART_IMAGE,
        clickedImage: HEART_DECORATION_IMAGE
    },
];


const Home = () => {
    const [buttons, setButtons] = useState(buttonsData);
    return (
        <div className="home-page">
            <div className="card-background">
                <div className="card-wrapper">
                    <Col xs={8} md={12} lg={20}>
                        <PersonalInfoCard
                            title={PERSONAL_INFO}
                            text={HOME_CARD_TEXT}
                            buttons={buttons}
                            setButtons={setButtons}
                        />
                    </Col>
                </div>
            </div>
            <div className="something">
                <JokeInHellPage style={{display: "flex"}}/>
            </div>
        </div>
    );
};

export default Home;
