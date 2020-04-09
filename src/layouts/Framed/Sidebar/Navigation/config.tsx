import { ReactComponent as Clients } from "assets/icons/clients.svg"
import { ReactComponent as Fields } from "assets/icons/fields.svg"
import { ADMIN, ANONIMUS, USER } from "context/user-role"

const navButtons = [
  {
    path: "/home",
    label: "Home",
    Icon: Clients,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/error",
    label: "Error",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/leaflet",
    label: "Leaflet",
    Icon: Clients,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/table",
    label: "Table",
    Icon: Clients,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/user-roles/admin",
    label: "Admin",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/user-roles/user",
    label: "User",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/store-poc",
    label: "Store-Poc",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/toastr",
    label: "Toastr",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/user-roles/admin",
    label: "Only Admin",
    Icon: Fields,
    allowedRoles: [ADMIN],
  },
  {
    path: "/user-roles/user",
    label: "Only User",
    Icon: Fields,
    allowedRoles: [USER],
  },
  {
    path: "/user-roles/user",
    label: "Admin User",
    Icon: Fields,
    allowedRoles: [ADMIN, USER],
  },
  {
    path: "/charts",
    label: "Charts",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/fields/list/aktiv",
    label: "Táblák",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/timeline",
    label: "timeline",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/timelinecalendar",
    label: "Timeline Calendar",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  },
  {
    path: "/form",
    label: "form",
    Icon: Fields,
    allowedRoles: [ANONIMUS, ADMIN, USER],
  }
];

export default navButtons
