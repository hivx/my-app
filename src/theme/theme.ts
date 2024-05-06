import { CSSSize } from "./css";

type PACS_THEME = {
    images: {
      login: string;
      navbar: string;
      favicon: string;
      statisticBar: string;
    };
    layout: {
      tableTheadHeight: CSSSize;
      navBarHeight: CSSSize;
      sidebarWidth: CSSSize;
      sidebarHeaderHeight: CSSSize;
      borderRadius: CSSSize;
      statisticBarHeight: CSSSize;
    };
};

// extend MUI theme object
declare module '@mui/material/styles' {
    interface Theme {
      pacs?: PACS_THEME;
    }
  }