import React from 'react'
// MUI
import { 
    Container,
    Typography,
    Box
} from '@mui/material'
// Styles
import { 
    StyledLandingContainer,
    StyledImgContainer
} from '../styles/landingStyles'
// Img
import PorfileImg from '../assets/headshot_nobg.png'

const Landing = () => {
    return (
        <StyledLandingContainer>
            <Box>
                <Typography variant="h2">German Nunez</Typography>
                <Typography variant="h5">Software Engineer</Typography>
            </Box>
            <StyledImgContainer>
                <img src={PorfileImg} alt="german nunez selfie" />
            </StyledImgContainer>
        </StyledLandingContainer>
    )
}

export default Landing
