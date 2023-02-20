// MUI
import { styled } from '@mui/material/styles';
import { 
    Container, 
    ContainerProps,
    Box,
    BoxProps,
    Typography,
    TypographyProps,
    Card,
    CardProps
} from "@mui/material"

export const StyledLandingContainer = styled(Container)<ContainerProps>(({ theme }) => ({
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 0,
    justifyContent: "space-around"
}));

export const StyledImgContainer = styled(Box)<BoxProps>(({ theme }) => ({
    '& img':{
        height: "250px",
        width: "250px",
    },
    borderRadius: "50%",
    background: theme.palette.common.white
}));

export const StyledExpertiseContainer = styled(Container)<ContainerProps>(({theme}) => ({
    height: "100vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
}))
export const StyledLatestActivityContainer = styled(Container)<ContainerProps>(({theme}) => ({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
}))


// Maybe make a general style component file for this section? 
export const StyledTitle = styled(Typography)<TypographyProps>(({theme}) => ({
    fontSize: "24px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    margin: "0 32px"
}))

export const StyledCard = styled(Card)<CardProps>(({theme}) => ({
    width: "350px",
}))
// End section