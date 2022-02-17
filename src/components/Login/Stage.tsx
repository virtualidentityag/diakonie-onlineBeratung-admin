import React from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Title from "antd/es/typography/Title";
import Spinner from "../Spinner/Spinner";

export interface StageProps {
  className?: string;
  hasAnimation?: boolean;
  isReady?: boolean;
}

/**
 * login component
 * checks if the users token is still valid
 * @constructor
 */
function Stage({ className, hasAnimation, isReady = true }: StageProps) {
  const { t } = useTranslation();
  return (
    <div
      id="loginLogoWrapper"
      className={clsx(className, "stage stage--animated", {
        "stage--ready": isReady,
      })}
    >
      <div className="logo">
        <img src="/Logo-Connecta.png" alt="Logo Connecta" />
      </div>
      <div className="stage__headline">
        <Title level={1}>{t("slogan")}</Title>
        <Title level={3}>{t("subSlogan")}</Title>
      </div>
      <Spinner className={clsx("stage__spinner", !hasAnimation && "hidden")} />
    </div>
  );
}

export default Stage;
