import React from 'react'
// React Router
import { useNavigate } from 'react-router'
import { Outlet } from "react-router-dom";
// MUI
import { 
    Container,
    AppBar,
    Toolbar,
    List,
    ListItem,
    Typography,
    Box
} from '@mui/material'
// Styles
import { 
  StyledAppBar,
  StyledLayoutContainer
} from '../styles/layoutStyles'

const navRoutes = [
    {
        name: "01. Blogs",
        route: "/blogs"
    },
    {
        name: "02. Work",
        route: "/work"
    },
    {
        name: "03. About",
        route: "/about"
    },
    {
        name: "04. Contact",
        route: "/contact"
    },
]

const Layout = () => {

    const navigate = useNavigate()

    const routeToPage = (route: string) => {
        navigate(route)
    }

    return (
      <StyledLayoutContainer>
        <StyledAppBar elevation={0}>
          <Toolbar>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              onClick={() => navigate('/')}
            >
              GRMNZ
            </Typography>

            <Box sx={{ display:"flex" }}>
              {navRoutes.map((item: any, idx: number) => (
                  <div key={idx} onClick={() => routeToPage(item.route)}>
                    <Typography sx={{margin: "0 20px"}}>
                        {item.name}
                    </Typography>
                  </div>
              ))}
            </Box>
          </Toolbar>
        </StyledAppBar>
        
        {/* allows passing of page components */}
        <Outlet/>

      </StyledLayoutContainer>
    );
}

export default Layout
