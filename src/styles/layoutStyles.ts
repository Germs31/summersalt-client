// MUI
import { styled } from '@mui/material/styles';
import {
    AppBar,
    AppBarProps,
} from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    background: theme.palette.primary.main,
    color: "#FFECD1",
    fontWeight: "bold"
}));
export const StyledLayoutContainer = styled('div')(({ theme }) => ({
    background: "#001524",
    color: "#FFECD1",
    fontWeight: "bold",
}));
