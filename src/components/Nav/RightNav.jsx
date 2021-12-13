import React from "react";
import styled from "styled-components";
import { menu } from "./menu";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nawrap;

  li {
    padding: 18px 10px;
    > Link {
      color: #000;
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #000;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {menu.map((item, idx) => (
        <li key={idx}>
          <Link style={{ color: "tomato", fontSize: "26px" }} to={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </Ul>
  );
};

export default RightNav;
