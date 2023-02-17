// MUI
import { styled } from '@mui/material/styles';
import {
    AppBar,
    AppBarProps,
} from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: "bold"
}));
export const StyledLayoutContainer = styled('div')(({ theme }) => ({
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontWeight: "bold",
}));
