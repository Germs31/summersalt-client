import React from 'react'
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
import { StyledAppBar } from '../styles/layoutStyles'

const navRoutes = [
    {
        name: "01. Blogs",
        route: "/blog"
    },
    {
        name: "02. Projects",
        route: "/projects"
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

const Layout = (props: any) => {
    return (
      <Container disableGutters>
        <StyledAppBar elevation={0}>
          <Toolbar>
            {/* Logo */}
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              GRMNZ
            </Typography>

            <Box sx={{ display:"flex" }}>
              {navRoutes.map((item: any, idx: number) => (
                  <div key={idx}>
                    <Typography sx={{margin: "0 20px"}}>
                        {item.name}
                    </Typography>
                  </div>
              ))}
            </Box>
          </Toolbar>
        </StyledAppBar>

        {props.children}

      </Container>
    );
}

export default Layout
