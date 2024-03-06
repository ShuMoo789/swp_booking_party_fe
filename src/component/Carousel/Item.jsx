import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Paper } from "@mui/material";

// eslint-disable-next-line react/prop-types
function Item({ item }) {
  return (
    <Paper
      sx={{
        // mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // eslint-disable-next-line react/prop-types
        backgroundImage: `url(${item.image})`,
        height: { lg: "300px", xs: "200px" },
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: "none" }}
          // eslint-disable-next-line react/prop-types
          src={item.image}
          // eslint-disable-next-line react/prop-types
          alt={item.imageText}
        />
      }
    </Paper>
  );
}
export default Item;
