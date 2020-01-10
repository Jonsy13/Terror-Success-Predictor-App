import React, { Component } from 'react'
import './AboutUs.css'
import Jonsy from '../Assets/Jonsy.jpg'
import Vineet from '../Assets/Vineet.jpg'
import Udit from '../Assets/Udit.jpg'
import Muskan from '../Assets/Muskan5.jpg'
import { Card , CardDeck } from 'react-bootstrap' 
class About extends Component {

    render() {
        return (
            <div className="AboutUs">
                <CardDeck>
                    <Card bg="dark" text="white">
                        <Card.Img variant="top" src={Muskan} />
                        <Card.Body>
                            <Card.Title>Muskan Golus</Card.Title>
                            <Card.Text>
                                Position
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="dark" text="white">
                        <Card.Img variant="top" src={Udit} />
                        <Card.Body>
                            <Card.Title>Udit Mishra</Card.Title>
                            <Card.Text>
                                Position
        content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card bg="dark" text="white">
                        <Card.Img variant="top" src={Vineet} />
                        <Card.Body>
                            <Card.Title>Vineet Gupta</Card.Title>
                            <Card.Text>
                                Position
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    <Card bg="dark" text="white">
                        <Card.Img variant="top" src={Jonsy} />
                        <Card.Body>
                            <Card.Title>Vedant Shrotria</Card.Title>
                            <Card.Text>
                               Position
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>

            </div>



        );
    }
}

export default About;