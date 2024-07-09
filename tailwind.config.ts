import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "yellow-orange": {
          "50": "#fff7eb",
          "100": "#fee7c7",
          "200": "#fcce8b",
          "300": "#fbac49",
          "400": "#fa9225",
          "500": "#f46d0c",
          "600": "#d84b07",
          "700": "#b3300a",
          "800": "#91250f",
          "900": "#771f10",
          "950": "#450c03",
        },
      },
    },
  },
};
