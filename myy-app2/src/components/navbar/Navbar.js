import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import ColorList from './ColorList';
import Content from './Content';
import ColorList2 from './ColorList2';

const NavBar = ({ selectedColor, setSelectedColor, active, setActive,selectedPaint, setSelectedPaint }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', margin: 'auto' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab style={{ width: '33.3%', margin: 'auto' }} icon={<ColorLensIcon />} label="APPEARANCE" value="1" />
            <Tab style={{ width: '33.3%', margin: 'auto' }} icon={<SettingsIcon />} label="TEMPLATE" value="2" />
            <Tab style={{ width: '33.3%', margin: 'auto' }} icon={<FormatPaintIcon />} label="APPEARANCE" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><ColorList selectedColor={selectedColor} setSelectedColor={setSelectedColor} /></TabPanel>
        <TabPanel value="2">{<Content selectedColor={selectedColor} setSelectedColor={setSelectedColor} active={active} setActive={setActive}/>}</TabPanel>
        <TabPanel value="3">{<ColorList2 selectedPaint={selectedPaint} setSelectedPaint={setSelectedPaint} />}</TabPanel>
      </TabContext>
    </Box>
  );
}

export default NavBar;