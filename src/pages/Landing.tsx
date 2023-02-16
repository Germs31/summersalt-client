import React from 'react'
// MUI
import { 
    Container,
    Typography,
    Box
} from '@mui/material'
// Styles
import { StyledLandingContainer } from '../styles/landingStyles'

const Landing = () => {
    return (
        <StyledLandingContainer>
            <Box>
                <Typography variant="h2">German Nunez</Typography>
                <Typography variant="h5">Software Engineer</Typography>
            </Box>
            <Box>
                
            </Box>
        </StyledLandingContainer>
    )
}

export default Landing
