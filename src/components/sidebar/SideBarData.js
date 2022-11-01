import React from "react";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import StorefrontIcon from "@material-ui/icons/Storefront";

export const SideBarData = [
    {
        title: "Warmindo",
        icon: <RestaurantIcon/>,
        link: "/",
    },
    {
        title: "Market",
        icon: <StorefrontIcon/>,
        link: "/market"
    }
]