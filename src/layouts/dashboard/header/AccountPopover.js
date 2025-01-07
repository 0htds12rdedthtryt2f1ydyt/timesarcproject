import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';
import { Box, Divider, Link, Typography, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
import account from '../../../_mock/account';
import Image1 from "../../../Avatar.png.jpg";

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
            },
          }),
        }}
      >
        <Avatar
          variant="square"
          alt="Profile Picture"
          src={Image1}
          sx={{
            width: 40,
            height: 40,
            border: "2px solid #ccc",
            borderRadius: "10px",
          }}
        />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography sx={{ color: 'black' }} variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'black' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {/* <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem> */}
        {/* <Link icon={logoutIcon} to="/" component={RouterLink} sx={{  m: 3, color: "white", textDecoration: "none" }}>
        Logout
    </Link> */}
        <Link
          to="/"
          component={RouterLink}
          sx={{
            m: 1,
            color: "teal",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FaSignOutAlt size={20} />
          Logout
        </Link>
      </Popover>
    </>
  );
}
