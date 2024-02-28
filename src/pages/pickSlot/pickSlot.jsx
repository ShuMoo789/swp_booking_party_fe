import { useState } from 'react';
import premium from "../pickSlot/premium.jpg";
import { Typography, Select, MenuItem, Box } from '@material-ui/core';
import { Room, People, AttachMoney, EventSeat, Group } from '@material-ui/icons';
import "../../pages/pickSlot/pickSlot.scss";

const PickSlot = () => {
  const [kids, setKids] = useState(0);
  const [adults, setAdults] = useState(0);

  const totalCapacity = 100;
  const options = Array.from({ length: totalCapacity + 1 }, (_, i) => i);

  return (
    <Box className="event-details">
      <Typography variant="h4">Plan My Event</Typography>
      <Typography variant="h5">Step #3 Event Details</Typography>
      <div className='container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{ height: '100%', width: '300px', borderRadius: '10px', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={premium} alt="Premium Room" style={{ height: 'auto', width: '100%', borderRadius: '10px 10px 0 0' }} />
          <Typography><Room /> Premium Room</Typography>
        </div>
        <div style={{ height: '100%', width: '1000px', paddingLeft: '15px', border: '1px solid #ccc', borderRadius: '10px', background: '#fff', marginLeft: '20px' }}>
          <Typography variant="h6"><Room /> Location:</Typography>
          <h3>Gold Restaurant</h3>
          <h3>512 Nguyễn Xiển street, Long Thạnh Mỹ ward, Thủ Đức city, Hồ Chí Minh city</h3>
          <Typography variant="h6"><EventSeat /> Total Capacity: {totalCapacity}</Typography>
          <Typography variant="h6"><People /> Select Tickets:</Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'center' }}>
            <Typography style={{ marginRight: '10px' }}>How many kids will be attending?</Typography>
            <Select value={kids} onChange={(e) => setKids(e.target.value)}>
              {options.slice(0, totalCapacity - adults + 1).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'center' }}>
            <Typography style={{ marginRight: '10px' }}>How many adults will be attending?</Typography>
            <Select value={adults} onChange={(e) => setAdults(e.target.value)}>
              {options.slice(0, totalCapacity - kids + 1).map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
          <Typography variant="h6"><AttachMoney /> Total Price: $539.99</Typography>
          <Typography variant="h6"><Group /> Spots Left: {totalCapacity - kids - adults}</Typography>
        </div>
      </div>
    </Box>
  );
};

export default PickSlot;