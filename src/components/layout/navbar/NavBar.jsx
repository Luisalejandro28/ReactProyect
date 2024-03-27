import { Box, Typography, Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const NavBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: { xs: "#6ab0be", sm: "yellow", md: "grey" },
      }}
      xs={12}
      sm={6}
      md={4}
    >
      <Typography className="nav-link" fontSize={{ xs: 16, sm: 18, md: 20 }}>
        LOGO
        <ul className="links">
          <a href="">
            <li>Incio</li>
          </a>
          <a href="">
            <li>Productos</li>
          </a>
          <a href="">
            <li>Contacto</li>
          </a>
          <Badge badgeContent={3} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
        </ul>
      </Typography>
    </Box>
  );
};
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
