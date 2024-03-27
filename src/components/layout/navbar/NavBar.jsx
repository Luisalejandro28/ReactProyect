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
