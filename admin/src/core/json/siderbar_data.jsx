import React from "react";

import * as Icon from "react-feather";

export const SidebarData = [
  {
    label: "Admin",
    submenuOpen: true,
    showSubRoute: false,
    submenuHdr: "Admin",
    submenuItems: [
      {
        label: "Dashboard",
        link: "/dashboard",
        icon: <Icon.PieChart />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Users",
        link: "/users",
        icon: <Icon.Users />,
        showSubRoute: false,
        submenu: false,
      },

      {
        label: "Fund",
        submenu: true,
        showSubRoute: false,
        icon: <Icon.DollarSign />,
        submenuItems: [
          {
            label: "Withdrawal Requests",
            link: "/withdraw-request",
            showSubRoute: false,
          },
          {
            label: "Deposit Requests",
            link: "/deposit-request",
            showSubRoute: false,
          },
        ],
      },
      {
        label: "Platform",
        link: "/platform",
        icon: <Icon.HardDrive />,
        showSubRoute: false,
        submenu: false,
      },
      {
        label: "Communication",
        submenu: true,
        showSubRoute: false,
        icon: <Icon.MessageSquare />,
        submenuItems: [
          { label: "Mails", link: "/mails", showSubRoute: false },
          {
            label: "Mail Configuration",
            link: "/mail-configuration",
            showSubRoute: false,
          },
          {
            label: "Mail Broadcast",
            link: "/mail-broadcast",
            showSubRoute: false,
          },
        ],
      },
    ],
  },
];
