import '../App.css';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {Card} from "@mui/material";

export default function PinnedSubheaderList() {
    return (
        <List
            sx={{
                width: 400,
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 600,
                '& ul': {padding: 0},
            }}
            subheader={<li/>}
        >
            {['Кирилл', 'Антон', 'Степан', 'Иван', 'Мария', 'Александр'].map((sectionName) => (
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