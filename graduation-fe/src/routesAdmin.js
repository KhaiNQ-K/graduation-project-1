import Voucher from "views/Voucher";
import Service from "views/Service";
import Dentist from "views/Dentist";
import Customer from "views/Customer";
import Post from "views/Post";
import HomePage from "views/HomePage";
import Dashboard from "views/Dashboard";
import Account from "views/Account";
import Booking from "views/Booking";

let routerAdmin = [
  {
    path: "/homepage",
    name: "Trang chủ",
    icon: "shopping_shop",
    component: HomePage,
    layout: "/admin",
  },
  {
    path: "/account",
    name: "Quản lý tài khoản",
    icon: "users_circle-08",
    component: Account,
    layout: "/admin",
  },
  {
    path: "/dentist",
    name: "Quản lý nha sỹ",
    icon: "location_map-big",
    component: Dentist,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Quản lý khách hàng",
    icon: "users_single-02",
    component: Customer,
    layout: "/admin",
  },
  {
    path: "/service",
    name: "Quản lý dịch vụ",
    icon: "objects_globe",
    component: Service,
    layout: "/admin",
  },
  {
    path: "/voucher",
    name: "Quản lý voucher",
    icon: "files_paper",
    component: Voucher,
    layout: "/admin",
  },
  {
    path: "/booking",
    name: "Quản lý đặt lịch",
    icon: "ui-1_calendar-60",
    component: Booking,
    layout: "/admin",
  },
  {
    path: "/post",
    name: "Quản lý bài viết",
    icon: "design-2_ruler-pencil",
    component: Post,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Thống kê",
    icon: "business_chart-bar-32",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/setting",
    name: "Cài đặt",
    icon: "loader_gear",
    component: Post,
    layout: "/admin",
  }
];

export default routerAdmin;
