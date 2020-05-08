import React from 'react';
import { Button, TextField, Grid, Typography } from '@material-ui/core';
import Display from './Display';

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
                <Grid>
                    <Typography container variant="h3" justify="center" alignItems="center" alignContent="center">Test Steps</Typography>
                </Grid>
                <Grid container spacing={1}>
                    <Grid container item lg={6}>
                        <TextField required id="standard-required" label="Required" variant="filled" fullWidth="true" value={this.state.assumptions} onChange={this.handleChange('assumptions')} />
                    </Grid>
                    <Grid container item lg={6}>
                        <TextField required id="standard-required" label="Required" variant="filled" fullWidth="true" value={this.state.data} onChange={this.handleChange('data')} />
                    </Grid>
                    <Grid container item lg={6}>
                        <TextField required id="standard-required" label="Required" variant="filled" fullWidth="true" value={this.state.precondition} onChange={this.handleChange('precondition')} />
                    </Grid>
                    <Grid container item lg={6}>
                        <TextField required id="standard-required" label="Required" variant="filled" fullWidth="true" value={this.state.test_steps} onChange={this.handleChange('test_steps')} />
                    </Grid>
                    <Grid container item lg={6}>
                        <TextField required id="standard-required" label="Required" variant="filled" fullWidth="true" value={this.state.results} onChange={this.handleChange('results')} />
                    </Grid>
                    <Grid container item lg={6}>
                        <TextField variant="filled" fullWidth="true" value={this.state.comments} onChange={this.handleChange('comments')} />
                    </Grid>
                    <Grid container item xl={12}>
                        <Button variant="contained" color="primary" onClick={this.handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
                <Display 
                    assumptions={this.state.assumptions}
                    data={this.state.data}
                    precondition={this.state.precondition}
                    test_steps={this.state.test_steps}
                    results={this.state.results}
                    comments={this.state.comments}
                />
            </div>
        );
    }
}

export default TestStepsForm;