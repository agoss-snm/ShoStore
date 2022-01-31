
import * as React from 'react';
//material
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
//semantic
import { Icon } from 'semantic-ui-react'
//style
import './Contact.css'

export default function Contact(){
    return (
    <>
    <div className='social'>
        <p id='contactText'><u>This app is the final project of the React.js course at Coderhouse. </u></p>
        <p id='contactText'>www.coderhouse.com</p>
        <p id='contactText'> You can find the source code in the following links</p>
        
        <Box sx={{ flexGrow: 1 }} id='boxContact' > 
        <Stack direction="row" spacing={8} >
            <a href="https://github.com/agoss-snm" target="_blank"><Icon name='github' size='huge' id= 'Avatar'/> </a>
            <a href="https://www.linkedin.com/in/agossromero/" target="_blank"><Icon name='linkedin' size='huge' id= 'Avatar2'/></a>
            <a href="https://www.instagram.com/agossromeromontamat/?hl=es-la" target="_blank"> <Icon name='instagram' size='huge' id= 'Avatar3'/></a>
        </Stack>
        </Box>
    </div>
    </>
    )
}