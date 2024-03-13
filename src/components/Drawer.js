import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        
      <List>
      <Avatar alt="Sam Jherwin Tagufa" src="src/icons/pic.jpg"
      style={{ 
        width: '100px', // Adjust size as needed
        height: '100px', // Adjust size as needed
        margin: 'auto', // Centers the avatar horizontally
      }}  />
  {['Curriculum Vitae', 'Educational achievements', 'Programming Languages', 'Web Dev'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index === 0 ? <AssessmentIcon /> :
           index === 1 ? <WorkspacePremiumIcon /> :
           index === 2 ? <TerminalIcon /> :
           <LanguageIcon />}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
      <Divider />
      <List>
  {['About me', 'Past projects', 'Contacts'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {index === 0 ? <InfoIcon /> :
           index === 1 ? <AccountTreeIcon /> :
           index === 2 ? <PermContactCalendarIcon /> :
           null}
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}