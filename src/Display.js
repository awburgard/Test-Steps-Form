import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Display(props) {
    const {assumptions, data, precondition, test_steps, results, comments} = props;
    return (
        <List>
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
    </List>
    );
}

export default Display;