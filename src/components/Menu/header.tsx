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
import Image from "next/image";

type ItemProps = {
  isLogin?: boolean
  onSignOut?: () => void;
};

const Header: NextPage<ItemProps> = ( { isLogin = false, onSignOut} ) => {
  const router = useRouter();
  const [menuState, setMenuState] = useState('default');
  const [pathState, setPathState] = useState<string>("");
  
  useEffect(()=> {
    // const currentPageType = router.query.type;
    const currentPage = router.pathname;
    const pathName = router.pathname.split("/");
    setPathState(pathName[1])
    
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
        '& .logoBox': { width: 150 },
        '& .MuiToolbar-root': { width: "1200px", margin:"0 auto" },
        '& .gnb': { flexGrow: 1, display: "flex" },
        '& .MuiButton-root': { m: 2, color: 'black', display: 'block', fontSize: "16px", backgroundColor: "transparent" },
        '& .MuiButton-root.active': { color: "#5471f3", fontWeight: "900" },
        '& .MuiButton-root:hover': { backgroundColor: "transparent" },
      }}
    >
      <Toolbar disableGutters>
        <Box className={"logoBox"}>
          {/*<Box className={"logo"}/>*/}
          <Link href={"/"}>
            <a>
              <Image src={"https://moacube.s3.ap-northeast-2.amazonaws.com/logo.png"} alt={"로고"} width={100} height={30} />
            </a>
          </Link>
        </Box>
        <Box className={"gnb"}>
          {
            // menuState === "default" &&
            Object.keys(SITE_MENU).map((dat:any) => {
              return (
                <Button key={dat} className={pathState == dat ? "active" : ""}>
                  <Link href={ SITE_MENU[dat].link }>
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
          {
            // menuState === "default" &&
            (
              isLogin ?
                <Button onClick={onSignOut}>
                  로그아웃
                </Button>
              :
              <>
                <Button>
                  <Link href="/authentication?type=SignIn">
                    <a>
                      로그인
                    </a>
                  </Link>
                </Button>
                <Button>
                  <Link href="/authentication?type=SignUp">
                    <a>
                      회원가입
                    </a>
                  </Link>
                </Button>
              </>
            )
          }
          {/*{ menuState === "SignIn" &&*/}
          {/*  <Link href="/">*/}
          {/*    <a>*/}
          {/*      돌아가기*/}
          {/*    </a>*/}
          {/*  </Link>*/}
          {/*}*/}
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
