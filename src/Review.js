import React from 'react';
import { List, Typography } from '@material-ui/core';
import Display from './Display';

function Review({ assumptions, data, precondition, test_steps, results, comments }) {
    return (
        <>
        <Typography variant="h6">Confirm Your Answers Below</Typography>
        <List>
            <Display assumptions={assumptions} data={data} precondition={precondition} test_steps={test_steps} results={results} comment={comments}/>
        </List>
        </>
    );
}

export default Review;