import React from 'react'
// MUI
import { 
    Container,
    Typography,
    Box,
    Card,
    CardContent
} from '@mui/material'
// Styles
import { 
    StyledLandingContainer,
    StyledImgContainer,
    StyledExpertiseContainer
} from '../styles/landingStyles'
// Img
import PorfileImg from '../assets/headshot_nobg.png'
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
// Style
import { StyledLayoutContainer } from '../styles/layoutStyles'

const Landing = () => {
    return (
        <Container>
            <StyledLandingContainer>
                <Box>
                    <Typography variant="h2">German Nunez</Typography>
                    <Typography variant="h5">Software Engineer</Typography>
                </Box>
                <StyledImgContainer>
                    <img src={PorfileImg} alt="german nunez selfie" />
                </StyledImgContainer>
            </StyledLandingContainer>
            <StyledExpertiseContainer>
                <Card sx={{width: "350px"}}>
                    <CardContent>
                        <ArchitectureIcon fontSize="large"/>
                        <Typography variant="h5" component="div">Design</Typography>
                        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aperiam nam ea quisquam eius reprehenderit maxime, assumenda eligendi laudantium beatae voluptatum distinctio officiis alias recusandae quaerat, at eveniet repellendus repudiandae!</Typography>
                    </CardContent>
                </Card>
                <Card sx={{width: "350px"}}>
                    <CardContent>
                        <EngineeringIcon fontSize="large"/>
                        <Typography variant="h5" component="div">Engieering</Typography>
                        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aperiam nam ea quisquam eius reprehenderit maxime, assumenda eligendi laudantium beatae voluptatum distinctio officiis alias recusandae quaerat, at eveniet repellendus repudiandae!</Typography>
                    </CardContent>
                </Card>
            </StyledExpertiseContainer>
        </Container>
    )
}

export default Landing
