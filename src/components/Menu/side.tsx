import React from "react";

import { NextPage } from "next";

import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SendIcon from "@mui/icons-material/Send";

type ItemProps = {
  selectedIndex: number;

  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
};

const Side: NextPage<ItemProps> = ({ selectedIndex, handleListItemClick }) => {
  return (
    <Box component="nav">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 250,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 250,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {/* <Toolbar sx={{ backgroundColor: "black" }}> */}
        {/*  <Image */}
        {/*    src="/logo.png" */}
        {/*    alt="로고" */}
        {/*    layout="fixed" */}
        {/*    width="200" */}
        {/*    height="60" */}
        {/*  /> */}
        {/* </Toolbar> */}
        {/* <Divider /> */}

        <List component="nav">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="홈" />
          </ListItemButton>

          <Divider />

          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                상품 관리
                {/* <Typography variant="subtitle1">상품 관리</Typography> */}
                {/* <Typography variant="caption" display="block" gutterBottom> */}
                {/*  caption text */}
                {/* </Typography> */}
              </ListSubheader>
            }
          >
            <ListItemButton
              sx={{ py: 0, minHeight: 32 }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText
                primary="상품 목록"
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
          </List>

          <Divider />

          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                예약 관리
              </ListSubheader>
            }
          >
            <ListItemButton
              sx={{ py: 0, minHeight: 32 }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="예약 목록"
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
          </List>

          <Divider />

          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                회원 관리
              </ListSubheader>
            }
          >
            <ListItemButton
              sx={{ py: 0, minHeight: 32 }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                primary="회원 목록"
                primaryTypographyProps={{ fontSize: 14, fontWeight: "medium" }}
              />
            </ListItemButton>
          </List>

          <Divider />
        </List>
      </Drawer>
    </Box>
  );
};

function propsAreEqual(prev: any, next: any) {
  return prev.data === next.data;
}

export default React.memo(Side, propsAreEqual);
