import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Space } from "antd";
import { getLocalStorage } from "../../utils/localstorage";

const items = [
  {
    label: <NavLink to={"/"}> Home</NavLink>,
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "About",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: <NavLink to={"/list-movie"}> List Movie</NavLink>,
    key: "list-movie",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Demo Hooks",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Use Effect",
      },
      {
        type: "group",
        label: "Use State",
      },
      {
        type: "group",
        label: "Use Ref",
      },
    ],
  },
];
export default function Header() {
  /*
   * Qui tắc của hook:
   *  - Đặt ở trên cao nhất: Top level
   *
   *  */
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`/search?q=${searchValue}`);
    }
  };

  const handleOnchange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const currentUser = getLocalStorage("currentUser");
  const accessToken = getLocalStorage("accessToken");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            CyberSoft
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active mr-4">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item mr-4 ">
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => {
                    return isActive ? "my-active" : "nav-link";
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item  mr-4">
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) => {
                    return isActive ? "my-active" : "nav-link";
                  }}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Demo Hooks
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Demo Use Effect
                  </a>
                  <a className="dropdown-item" href="#">
                    Demo Use CallBack
                  </a>
                  <NavLink className="dropdown-item" to={"/demo-use-ref"}>
                    Demo UseRef
                  </NavLink>
                  <NavLink className="dropdown-item" to={"/demo-hook-redux"}>
                    Demo Hook Redux
                  </NavLink>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleOnchange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div> */}
      <Menu items={items} mode="horizontal" />
      {accessToken && currentUser ? (
        <Space size={10}>
          <Avatar src="https://i.pravatar.cc/300" size={40} />
          <span style={{ fontWeight: 700 }}>{currentUser.hoTen}</span>
        </Space>
      ) : (
        <Space style={{ paddingRight: 20 }}>
          <Button>Sign up</Button>
          <Button type="primary" onClick={() => navigate("/login")}>
            Sign in
          </Button>
        </Space>
      )}
    </div>
  );
}
