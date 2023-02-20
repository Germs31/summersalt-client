import React from 'react'
// MUI
import { 
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Stepper,
    StepLabel,
    StepContent
} from '@mui/material'
// Styles
import { 
    StyledLandingContainer,
    StyledImgContainer,
    StyledExpertiseContainer,
    StyledTitle,
    StyledLatestActivityContainer
} from '../styles/landingStyles'
// Componenets
import UtilityCard from '../components/UtilityCard'
// Img
import PorfileImg from '../assets/headshot_nobg.png'
import ArchitectureIcon from '@mui/icons-material/Architecture';
import EngineeringIcon from '@mui/icons-material/Engineering';
// Data
import { portfolioWork, employmentList } from '../data'

const Landing = () => {
    return (
        <Container>
            {/* landing */}
            <StyledLandingContainer>
                <Box>
                    <Typography variant="h2">German Nunez</Typography>
                    <Typography variant="h5">Software Engineer</Typography>
                </Box>
                <StyledImgContainer>
                    <img src={PorfileImg} alt="german nunez selfie" />
                </StyledImgContainer>
            </StyledLandingContainer>
            {/* Expertise */}
            <StyledExpertiseContainer>
                <StyledTitle>Expertise</StyledTitle>
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
            <Container>
                <StyledTitle>Employment History</StyledTitle>
                <Stepper activeStep={-1} orientation="vertical">
                    {
                        employmentList.map((emply: any) => (
                            <>
                        
                                <StepLabel>{emply.title}</StepLabel>
                                <StepContent>
                                    <div>{emply.location}</div>
                                    <div>{emply.position}</div>
                                    <div>{emply.dates}</div>
                                </StepContent>
                            </>
                        ))
                    }

                </Stepper>
            </Container>
            {/* Recent work/blogs?  */}
            <Container>
                <StyledTitle>Latest Activity</StyledTitle>
                <StyledLatestActivityContainer>
                    {
                        portfolioWork.map((work: any, index: number) => {
                            if(index < 4) {
                                return <UtilityCard
                                            title={work.title}
                                            description={work.description}
                                            img={work.img}/>
                            }
                        })
                    }
                </StyledLatestActivityContainer>
            </Container>
            {/* footer */}

            <Container sx={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    Made with Love { new Date().getFullYear() } by GRMNZ
            </Container>
        </Container>
    )
}

export default Landing
