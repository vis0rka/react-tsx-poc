import "assets/scss/bundle.scss"
import { ADMIN, ANONIMUS, USER } from "context/user-role"
import Error from "layouts/Error"
import Charts from "pages/Charts"
import IdField from "pages/Fields/IdField"
import Nestedroutes from "pages/Fields/List"
import Home from "pages/Home"
import Leaflet from "pages/Leaflet"
import Login from "pages/login"
import StorePoc from "pages/StorePoc"
import Table from "pages/Table"
import Timeline from "pages/Timeline"
import TimelineCalendar from "pages/TimelineCalendar"
import Toastr from "pages/Toastr"
import Admin from "pages/UserRoles/Admin"
import User from "pages/UserRoles/User"
import EditForm from "pages/Form/Edit"
import CreateForm from "pages/Form/Create"
import SamePassword from "pages/Form/SamePassword"
import Form from "pages/Form"
import "plugins/nprogress"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

export default () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute exact path="/" component={Login} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/home" component={Home} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/table" component={Table} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/user-roles/admin" component={Admin} allowedRoles={[ADMIN]} />
        <ProtectedRoute exact path="/user-roles/user" component={User} allowedRoles={[ADMIN, USER]} />
        <ProtectedRoute exact path="/toastr" component={Toastr} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/store-poc" component={StorePoc} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/charts" component={Charts} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/timeline" component={Timeline} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/leaflet" component={Leaflet} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/form" component={Form} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/form/edit" component={EditForm} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/form/create" component={CreateForm} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute exact path="/form/password" component={SamePassword} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute
          exact
          path="/timelinecalendar"
          component={TimelineCalendar}
          allowedRoles={[ADMIN, ANONIMUS, USER]}
        />
        <ProtectedRoute path="/fields/list" component={Nestedroutes} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <ProtectedRoute path="/fields/:fieldId" component={IdField} allowedRoles={[ADMIN, ANONIMUS, USER]} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
}
