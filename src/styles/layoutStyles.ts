// MUI
import { styled } from '@mui/material/styles';
import { AppBar, AppBarProps } from "@mui/material"

export const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
    background: "#fff",
    color: "#000",
    fontWeight: "bold"
}));
