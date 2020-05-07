import React from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

class TestStepsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assumptions: 'Please include assumptions for this ticket (i.e. I assume you know how to log in)',
            test_steps: 'Please list your test steps here',
            data: 'Please add any relevant user data that you used to test this feature. If no user is available, please create one in the necessary state',
            results: 'Please list the expected results',
            comments: 'Please add any additional comments',
            precondition: 'Please list what state the user must be in'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = propertyName => (event) => {

        this.setState({
            [propertyName]: event.target.value,
        });
    };

    handleSubmit(event) {
        alert(` Test steps were submitted!`);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <>
                    <Jumbotron>
                        Test Steps
                    </Jumbotron>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <Form.Control required as="textarea" rows="3" value={this.state.assumptions} onChange={this.handleChange('assumptions')} />
                            <Form.Control required as="textarea" rows="3" value={this.state.data} onChange={this.handleChange('data')} />
                            <Form.Control required as="textarea" rows="3" value={this.state.precondition} onChange={this.handleChange('precondition')} />
                            <Form.Control required as="textarea" rows="3" value={this.state.test_steps} onChange={this.handleChange('test_steps')} />
                            <Form.Control required as="textarea" rows="3" value={this.state.results} onChange={this.handleChange('results')} />
                            <Form.Control as="textarea" rows="3" value={this.state.comments} onChange={this.handleChange('comments')} />
                        </InputGroup>
                        <Form.Control variant="primary" type="submit" value="Submit" />
                    </Form>
                </>
                <Card text="success">
                    <ListGroup>
                        <ListGroup.Item>{this.state.assumptions}</ListGroup.Item>
                        <ListGroup.Item>{this.state.data}</ListGroup.Item>
                        <ListGroup.Item>{this.state.precondition}</ListGroup.Item>
                        <ListGroup.Item>{this.state.test_steps}</ListGroup.Item>
                        <ListGroup.Item>{this.state.results}</ListGroup.Item>
                        <ListGroup.Item>{this.state.comments}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

export default TestStepsForm;