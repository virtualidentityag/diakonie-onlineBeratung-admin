import React, { useEffect, useState } from "react";
import "./styles/App.less";
import { Route, Routes } from "react-router";
import { Spin } from "antd";
import ProtectedPageLayoutWrapper from "./components/Layout/ProtectedPageLayoutWrapper";
import routePathNames from "./appConfig";
// import Dashboard from "./pages/Dashboard";
import TenantSettings from "./pages/TenantSettings";
import Counselors from "./pages/Counselors";
import UserProfile from "./pages/UserProfile";
import Tenants from "./pages/Tenants";
import pubsub, { PubSubEvents } from "./state/pubsub/PubSub";
import Initialisation from "./components/Layout/Initialisation";

function App() {
  const [renderAppComponent, setRenderAppComponent] = useState(false);
  pubsub.subscribe(PubSubEvents.USER_AUTHORISED, setRenderAppComponent);

  return renderAppComponent ? (
    <ProtectedPageLayoutWrapper>
      <Routes>
        {/* later <Route path="/" element={<Dashboard />} /> */}
        <Route
          path={routePathNames.themeSettings}
          element={<TenantSettings />}
        />
        <Route path={routePathNames.counselors} element={<Counselors />} />
        <Route path={routePathNames.userProfile} element={<UserProfile />} />
        <Route path={routePathNames.tenants} element={<Tenants />} />
      </Routes>
    </ProtectedPageLayoutWrapper>
  ) : (
    <Initialisation />
  );
}

export default App;
