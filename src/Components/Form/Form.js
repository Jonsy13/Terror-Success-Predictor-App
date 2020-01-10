import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Spinner from '../Spinner/Spinner.js';
import { Row, Col, Button, Form, Image } from 'react-bootstrap'
import Modal from '../Modal/Modal.js';
import balidan from '../../Assets/4.png'
import './Form.css'
import { Spring } from 'react-spring/renderprops'


class Former extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Month: '',
            Day: '',
            Extended: '',
            Latitude: '',
            Longtitude: '',
            Multiple: '',
            Suicide: '',
            Atype: '',
            Ttype: '',
            Individual: '',
            Wtype: '',
            Output: '',
            clicked: 'nc',



        }
    }

    MonthChange = event => {
        this.setState({ Month: event.target.value });
        console.log(this.state.Month);
    }

    DayChange = event => {
        this.setState({ Day: event.target.value });
    }

    ExtendedChange = event => {
        this.setState({ Extended: event.target.value });
    }

    LatChange = event => {
        this.setState({ Latitude: event.target.value });
    }

    LongChange = event => {
        this.setState({ Longtitude: event.target.value });
    }

    MulChange = event => {
        this.setState({ Multiple: event.target.value });
    }

    SuiChange = event => {
        this.setState({ Suicide: event.target.value });
    }

    AtkChange = event => {
        this.setState({ Atype: event.target.value });
    }

    TtChange = event => {
        this.setState({ Ttype: event.target.value });
    }

    IndChange = event => {
        this.setState({ Individual: event.target.value });
    }

    WtChange = event => {
        this.setState({ Wtype: event.target.value });
    }


    onSubmit = (event) => {

        this.setState({ clicked: 'p' });
        console.log(this.state);
        event.preventDefault();
        this.forceUpdate();

        fetch("https://frozen-refuge-43608.herokuapp.com/Predict", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                Month: this.state.Month,
                Day: this.state.Day,
                Extended: this.state.Extended,
                Latitude: this.state.Latitude,
                Longtitude: this.state.Longtitude,
                Multiple: this.state.Multiple,
                Suicide: this.state.Suicide,
                Atype: this.state.Atype,
                Ttype: this.state.Ttype,
                Individual: this.state.Individual,
                Wtype: this.state.Wtype
            })
        }).then(response => response.json())
            .then(user => {
                this.setState({ clicked: 'd' })
                this.setState({ Output: user[0] });
                console.log(this.state.Output);
                console.log(user[0]);
                this.forceUpdate();
            });

    }




    render() {


        let OutputShow = null;
        if (this.state.clicked === 'p') {
            OutputShow = <Spinner />
        }


        if (this.state.clicked === 'd') {
            OutputShow = <Modal title={this.state.Output} content="Thanks for Using Our Services" />
        }


        return (

            <Spring
                from={{ opacity: 0 ,marginBottom: -500}}
                to={{ opacity: 1 ,marginBottom: 0}}
                config={{delay:1000}}>
                {props => <div style={props}>
                    <Jumbotron className="Jumbo2">
                        <Container>
                            <Row>
                                <Col>
                                    <Image className="logo" src={balidan} fluid />
                                </Col>
                                <Col>
                                    <Form actions="#">
                                        <Form.Group controlId="Month">
                                            <Form.Label>Month of Attack</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Month Here" onChange={this.MonthChange} />
                                        </Form.Group>

                                        <Form.Group controlId="Day">
                                            <Form.Label>Day of Attack</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Day Of Attack" onChange={this.DayChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Extended">
                                            <Form.Label>Extended</Form.Label>
                                            <Form.Control type="text" placeholder="Extended Here" onChange={this.ExtendedChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Latitude">
                                            <Form.Label>Latitude Of Place</Form.Label>
                                            <Form.Control type="text" placeholder="Latitude of place" onChange={this.LatChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Longtitude">
                                            <Form.Label>Longtitude Of Place</Form.Label>
                                            <Form.Control type="text" placeholder="Longtitude of place" onChange={this.LongChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Multiple">
                                            <Form.Label>Multiple</Form.Label>
                                            <Form.Control type="text" placeholder="Multiple" onChange={this.MulChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Suicide">
                                            <Form.Label>Suicide</Form.Label>
                                            <Form.Control type="text" placeholder="Suicide" onChange={this.SuiChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Atype">
                                            <Form.Label>Attack Type</Form.Label>
                                            <Form.Control type="text" placeholder="Attack Type" onChange={this.AtkChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Ttype">
                                            <Form.Label>Target Type</Form.Label>
                                            <Form.Control type="text" placeholder="Target Type" onChange={this.TtChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Individual">
                                            <Form.Label>Individual</Form.Label>
                                            <Form.Control type="text" placeholder="Individual Here" onChange={this.IndChange} />
                                        </Form.Group>
                                        <Form.Group controlId="Weapon Type">
                                            <Form.Label>Weapon Type</Form.Label>
                                            <Form.Control type="text" placeholder="Weapon Type" onChange={this.WtChange} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.onSubmit} >
                                            Submit
                                    </Button>
                                    </Form>
                                    <br></br>
                                    <h1>{OutputShow}</h1>
                                </Col>

                            </Row>

                        </Container>
                    </Jumbotron>

                </div>}
            </Spring>

        );

    }

}

export default Former;