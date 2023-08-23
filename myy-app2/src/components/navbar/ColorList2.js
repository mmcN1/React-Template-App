import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./ColorList2.css";
import COLORS2 from "./color-list.constant2";
const ColorItem2 = ({ color, isActive, onClick }) => <Paper
  className="button2"
  variant="outlined"
  onClick={() => onClick()}
  style={{
    border: `3px solid ${isActive ? '#7CFC00' : color}`,
    borderRadius: 100,
    backgroundColor: color
  }}
/>
const ColorList2 = ({selectedPaint,setSelectedPaint}) => {

  return (
    <>
      <Box>
        <div className="color2"> {
          COLORS2.map((item) => <ColorItem2 key={item.id} color={item.paint2} isActive={item.id === selectedPaint?.id} onClick={() => setSelectedPaint(item)} />)} </div>
      </Box>
    </>
  );
};

export default ColorList2;
