import { Box, Paper } from "@mui/material"
import './Content.css'


const Content = ({  active, setActive }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', maxHeight: '400px', height: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
            <Paper style={{ width: '45%', height: '100%', padding: '15px' }} onClick={() => setActive('firstTemp')}>
                <img className="selectPhoto" src="https://shots.codepen.io/username/pen/JeoGBG-800.jpg?version=1541509894" alt="Brand logo" />
            </Paper>
            <Paper style={{ width: '45%', height: '100%', padding: '15px' }} onClick={() => setActive('secondTemp')}>
                <img className="selectPhoto" src="https://shots.codepen.io/username/pen/yLGBoyo-800.jpg?version=1692187366" alt="#logoImg" />
            </Paper>

            <div>
            </div>
        </Box>
    )
}

export default Content;