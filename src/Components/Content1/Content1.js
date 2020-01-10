import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import './Content1.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSpring, animated } from 'react-spring'


const Content1 = () => {
    const props = useSpring({ to: { opacity: 1, marginBottom: 0 }, from: { opacity: 0, marginBottom: -500 } ,  delay: 600 })
    return (
        <animated.div style={props}>
            <Jumbotron className="Jumbo1" fluid>
                <Container>
                   <Row>
                       <Col><h1 className="left ch2">WELCOME TO THE PREDICTION SYSTEM...</h1></Col>
                       <Col><h4 className="ch3">This is a military module which works over the pattern modelling and a sequential prediction.Where officials are going to predict the success rate of terrorist attack with the help of certain dependent factors that are going uphold the percentage occurence of terrorist Act.</h4></Col>
                   </Row>

                </Container>
            </Jumbotron>
        </animated.div>
    );

}

export default Content1;