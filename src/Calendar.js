import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { CalendarComponent, Button, List, ListItem } from './Styles/Calendar.styled';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(new Date());
  const navigate = useNavigate()
  
  const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
  };

  const fetchAddRate = async () => {
      const post = {
          date: JSON.stringify(date).split('T')[0],
          time: JSON.stringify(time).split('T')[1].split('.')[0]
      }
      const config = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: `bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(post)
      }
      const response = await fetch('http://localhost:3001/rates', config);
      await response.json();
  }

  const addRate = () => {
      fetchAddRate();
      navigate('/');
  }

  return (
    <CalendarComponent>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        style={{width:'70%'}}
        orientation="landscape"
        openTo="day"
        disablePast
        value={date}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DesktopTimePicker
          value={time}
          onChange={(newValue) => {
            setTime(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <Button type='button' onClick={addRate}>Schedule</Button>
    <List>
      <ListItem>
      <PhoneForwardedOutlinedIcon />
        Call Now
      </ListItem>
      <ListItem>
      <FavoriteBorderOutlinedIcon />
        Add to favorites
      </ListItem>
      <ListItem>
      <NotificationsNoneOutlinedIcon />
        Follow
      </ListItem>
    </List>
    </CalendarComponent>
  )
}

export default Calendar
