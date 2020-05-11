import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function Display({assumptions, data, precondition, test_steps, results, comments}) {
    return (
        <>
        <ListItem button>
            <ListItemText>{assumptions}</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>{data}</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>{precondition}</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>{test_steps}</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>{results}</ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemText>{comments}</ListItemText>
        </ListItem>
        </>
    );
}

export default Display;