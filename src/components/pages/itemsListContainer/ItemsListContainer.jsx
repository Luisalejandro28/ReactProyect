import { Box } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";
const ItemsListContainer = () => {
  return (
    <div className="items-list" xs={12} sm={6} md={4}>
      <h1>Bienvenidos a mi tienda</h1>
      <Box>
        <div className="products">
          <ProductCard
            titulo={"Producto 1"}
            img={
              "https://res.cloudinary.com/dl7jojha3/image/upload/v1711555939/shirt1.webp"
            }
            descripcion={"Lorem ipsum dolor sit amet, consectetur adipis"}
            precio={"$150"}
          />
          <ProductCard
            titulo={"Producto 2"}
            img={
              "https://res.cloudinary.com/dl7jojha3/image/upload/v1711555850/shirt2.jpg"
            }
            descripcion={"Lorem ipsum dolor sit amet, consectetur adipis"}
            precio={"$200"}
          />
          <ProductCard
            titulo={"Producto 3"}
            img={
              "https://res.cloudinary.com/dl7jojha3/image/upload/v1711556004/pants1.webp"
            }
            descripcion={"Lorem ipsum dolor sit amet, consectetur adipis"}
            precio={"$170"}
          />
          <ProductCard
            titulo={"Producto 4"}
            img={
              "https://res.cloudinary.com/dl7jojha3/image/upload/v1711556169/pants2.webp"
            }
            descripcion={"Lorem ipsum dolor sit amet, consectetur adipis"}
            precio={"$130"}
          />
        </div>
      </Box>
    </div>
  );
};

export default ItemsListContainer;
