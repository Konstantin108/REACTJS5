import '../App.css';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Card, Typography} from "@mui/material";

export default function PinnedSubheaderList() {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 600,
                '& ul': {padding: 0},
            }}
            subheader={<li/>}
        >
            <Typography variant="h3" component="h3">Чаты</Typography>
            {['Кирилл', 'Антон', 'Степан', 'Иван', 'Мария'].map((sectionName) => (
                <li key={`section-${sectionName}`}>
                    <ul>
                        <ListItem key={`${sectionName}`}>
                            <Card variant="outlined"
                                  sx={{
                                      width: '100%',
                                      maxWidth: 360,
                                      bgcolor: 'background.paper',
                                      position: 'relative',
                                      overflow: 'auto',
                                      minHeight: 100,
                                      '& ul': {padding: 0},
                                  }}> {sectionName} </Card>
                        </ListItem>
                    </ul>
                </li>
            ))}
        </List>
    );
}