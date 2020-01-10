import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Content.css'
import { useSpring, animated } from 'react-spring'


const Content = () => {
    const props = useSpring({  to: { opacity: 1, marginBottom: 0 }, from: { opacity: 0, marginBottom: -500 } , delay : 200})
    return (
        <animated.div style={props}>

            <Jumbotron className="Jumbo">
                <Container>

                    <h1 className="ch1">TERROR PREDICTION SYSTEM</h1>
                    <p>Making Military Solutions For All</p>


                </Container>
            </Jumbotron>
        </animated.div>



    );

}

export default Content;