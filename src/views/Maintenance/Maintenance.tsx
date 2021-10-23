/**
 * @author Ben Siebert <ben@mctzock.de>
 * @copyright (c) 2018-2021 Ben Siebert. All rights reserved.
 */

import * as React from "react";
import RHeader from "../../components/RHeader/RHeader";
import logo from "../../assets/logo.png";

export default function Maintenance() {

  return (
    <>
      <RHeader title={
        <h1 className={"has-text-danger title"}>Maintenance</h1>
      } image={logo} imageAlt={"Craftions Logo"} imageStyle={{
        width: "256px"
      }}>
        This website is currently under maintenance. You can view the development process on&nbsp;
        <a href={"https://github.com/CraftionsMC/craftions.net"}>GitHub</a>!
      </RHeader>
    </>
  );
}