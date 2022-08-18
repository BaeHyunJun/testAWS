import React, { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import {
  AppBar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type ItemProps = {
  onSignOut: () => void;
};

const Header: NextPage<ItemProps> = ( { onSignOut }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        px: 2,
        backgroundColor: "white",
        color: "#333",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar disableGutters>
        <Box sx={{ width: 250 }}>
          {/*<Image*/}
          {/*  src="/logo_black.png"*/}
          {/*  alt="로고"*/}
          {/*  layout="fixed"*/}
          {/*  width="200"*/}
          {/*  height="60"*/}
          {/*/>*/}
          <Box
            sx={{
              width: 200,
              height: 60,
              backgroundColor: 'primary.dark',
              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
          <Menu
            id="menu-appbar"
            open={true}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            sx={{
              display: { xs: 'block' },
            }}
          >
            <MenuItem >
              <Typography textAlign="center">등록하기</Typography>
            </MenuItem>
            <MenuItem >
              <Typography textAlign="center">이용사례</Typography>
            </MenuItem>
            <MenuItem >
              <Typography textAlign="center">파트너사</Typography>
            </MenuItem>
            <MenuItem >
              <Typography textAlign="center">스토어</Typography>
            </MenuItem>
            <MenuItem >
              <Typography textAlign="center">등록하기</Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex" } }}>
          <Stack direction="row" spacing={0}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={0} color="error">
                <PersonIcon />
              </Badge>
            </IconButton>

            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Typography
                variant="subtitle2"
                align="center"
                sx={{ color: "#333" }}
              >
                charisma36@natour.co.kr 님
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Toolbar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>
          <Link href="/admin/profile">개인 정보 수정</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={onSignOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

function propsAreEqual(prev: any, next: any) {
  return prev.data === next.data;
}

export default React.memo(Header, propsAreEqual);
