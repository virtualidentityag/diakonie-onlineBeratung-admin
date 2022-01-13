import React from "react";
import { Layout } from "antd";
import clsx from "clsx";
import SiteFooter from "./SiteFooter";

const { Content } = Layout;

interface PublicPageLayoutWrapperTypes {
  className?: string;
  children: React.ReactNode;
}

function PublicPageLayoutWrapper({
  children,
  className,
}: PublicPageLayoutWrapperTypes) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content className={clsx("content", className)}>{children}</Content>
      <SiteFooter />
    </Layout>
  );
}

export default PublicPageLayoutWrapper;
