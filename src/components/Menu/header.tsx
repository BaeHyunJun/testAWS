import React, { useEffect, useState } from "react";
import { NextPage } from "next";

import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import { useRouter } from "next/router";
import { SITE_MENU } from "@config/const";
import Link from "next/link";
import { goHome } from "@config/util";

type ItemProps = {
  isLogin?: boolean
  onSignOut?: () => void;
};

const Header: NextPage<ItemProps> = ( { isLogin = false, onSignOut} ) => {
  const router = useRouter();
  const [menuState, setMenuState] = useState('default')
  
  useEffect(()=> {
    // const currentPageType = router.query.type;
    const currentPage = router.pathname;
    
    // if (currentPageType == "SignIn") {
    if (currentPage === "/authentication") {
      setMenuState('SignIn');
    } else {
      setMenuState ('default');
    }
  }, [router]);
  
  return (
    <AppBar
      position="fixed"
      sx={{
        px: 2,
        backgroundColor: "white",
        color: "#333",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        '& .logoBox': { width: 250 },
        '& .logo': {
          width: 200,
          height: 60,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          }
        },
        '& .gnb': { flexGrow: 1, display: "flex" },
        '& .MuiButton-root': { m: 2, color: 'black', display: 'block', fontSize: "16px" },
        '& .MuiButton-root:hover': { backgroundColor: "transparent" },
      }}
    >
      <Toolbar disableGutters>
        <Box className={"logoBox"}>
          <Box className={"logo"}/>
        </Box>
        <Box className={"gnb"}>
          { menuState === "default" &&
            Object.keys(SITE_MENU).map((dat:any) => {
              return (
                <Button>
                  <Link key={dat} href={ SITE_MENU[dat].link }>
                    <a>
                      { SITE_MENU[dat].label }
                    </a>
                  </Link>
                </Button>
              )
            })
          }
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "flex" } }}>
          { menuState === "default" && (
            isLogin ?
              <Button onClick={onSignOut}>
                로그아웃
              </Button>
            :
              <Link href="/authentication?type=SignIn">
                <a>
                  로그인 / 회원가입
                </a>
              </Link>)
          }
          { menuState === "SignIn" &&
            <Link href="/">
              <a>
                돌아가기
              </a>
            </Link>
            
            // <Button onClick={goHome}>
            //   돌아가기
            // </Button>
          }
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

// function propsAreEqual(prev: any, next: any) {
//   return prev.data === next.data;
// }
//
// export default React.memo(Header, propsAreEqual);
