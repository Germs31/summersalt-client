// MUI
import { styled } from '@mui/material/styles';
import { 
    Container, 
    ContainerProps,
    Box,
    BoxProps
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
    display: "flex",
    justifyContent: "space-around"
}))