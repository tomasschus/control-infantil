/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Percentiles from "views/Percentiles.js";
import ChildProfile from "views/ChildProfile.js";
import History from "views/History.js";
import Upgrade from "views/Upgrade.js";
import VaccineCalendar from "views/VaccineCalendar.js";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/create",
    name: "Nuevo control",
    icon: "nc-icon nc-single-copy-04",
    component: Upgrade,
    layout: "/control",
  },
  {
    path: "/children",
    name: "Grupo familiar",
    icon: "nc-icon nc-circle-09",
    component: ChildProfile,
    layout: "/control",
  },
  {
    path: "/history",
    name: "Historial médico",
    icon: "nc-icon nc-notes",
    component: History,
    layout: "/control",
  },
  {
    path: "/percentiles",
    name: "Seguimiento",
    icon: "nc-icon nc-chart-bar-32",
    component: Percentiles,
    layout: "/control",
  },
  {
    path: "/calendar",
    name: "Calendario de vacunas",
    icon: "nc-icon nc-refresh-02",
    component: VaccineCalendar,
    layout: "/control",
  }
];

export default dashboardRoutes;
