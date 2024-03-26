import { Col } from 'react-bootstrap';
import './index.css';
import GITHUB_IMAGE from "./source/github.svg"
import GMAIL_IMAGE from "./source/gmail.svg"
import HEART_IMAGE from "./source/heart.svg"
import PersonalInfoCard from './PersonalInfoCard';

const PERSONAL_INFO = 'Personal Info';
const HOME_CARD_TEXT = "A Salesforce | React Developer.";
const buttons = [
    {
        id: 1,
        text: "Github",
        image: GITHUB_IMAGE
    },
    {
        id: 2,
        text: "Gmail",
        image: GMAIL_IMAGE
    },
    {
        id: 3,
        text: "Heart",
        image: HEART_IMAGE
    }
]

const Home = () => {
    return (
        <div className="home-page">
            <div className="card-background">
                <div className="card-wrapper">
                    <Col xs={8} md={12} lg={20}>
                        <PersonalInfoCard
                            title={PERSONAL_INFO}
                            text={HOME_CARD_TEXT}
                            buttons={buttons}
                        />
                    </Col>
                </div>
            </div>
            <div className="something">Something</div>
        </div>
    );
};

export default Home;
