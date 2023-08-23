import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ColorList.css";
import COLORS from "./color-list.constant";
const ColorItem = ({ color, isActive, onClick }) => <Paper
  className="button"
  variant="outlined"
  onClick={() => onClick()}
  style={{
    border: `3px solid ${isActive ? '#7CFC00' : color}`,
    borderRadius: 100,
    backgroundColor: color
  }}
/>
const ColorList = ({selectedColor,setSelectedColor}) => {

  return (
    <>
      <Box>
        <div className="color"> {
          COLORS.map((item) => <ColorItem key={item.id} color={item.paint} isActive={item.id === selectedColor?.id} onClick={() => setSelectedColor(item)} />)} </div>
      </Box>
    </>
  );
};

export default ColorList;
