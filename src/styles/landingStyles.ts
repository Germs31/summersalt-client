// MUI
import { styled } from '@mui/material/styles';
import { 
    Container, 
    ContainerProps 
} from "@mui/material"

export const StyledLandingContainer = styled(Container)<ContainerProps>(({ theme }) => ({
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: 0
}));