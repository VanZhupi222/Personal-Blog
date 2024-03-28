import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import JokeInHellCard from './JokeInHellCard';

const JokeInHellPage = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <JokeInHellCard />
            </Carousel.Item>
            <Carousel.Item>
                <JokeInHellCard />
            </Carousel.Item>
            <Carousel.Item>
                <JokeInHellCard />
            </Carousel.Item>
        </Carousel>
    );
};

export default JokeInHellPage;
