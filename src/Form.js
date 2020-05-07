import React from 'react';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'


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
            <Container>
                <Jumbotron>
                    <h1>Test Steps</h1>
                </Jumbotron>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control required as="textarea" rows="3" value={this.state.assumptions} onChange={this.handleChange('assumptions')} />
                    <Form.Control required as="textarea" rows="3" value={this.state.data} onChange={this.handleChange('data')} />
                    <Form.Control required as="textarea" rows="3" value={this.state.precondition} onChange={this.handleChange('precondition')} />
                    <Form.Control required as="textarea" rows="3" value={this.state.test_steps} onChange={this.handleChange('test_steps')} />
                    <Form.Control required as="textarea" rows="3" value={this.state.results} onChange={this.handleChange('results')} />
                    <Form.Control as="textarea" rows="3" value={this.state.comments} onChange={this.handleChange('comments')} />
                    <Form.Control type="submit" value="Submit" />
                </Form>
            </Container>
        );
    }
}

export default TestStepsForm;