import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.jpeg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="searh" />
          <span>ABOUT US</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>SERVICES</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="original" />
          <span>CONTACT US</span>
        </a>
        
      </NavMenu>
      <UserImg src="/images/anonymous.png" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 50px;
  background-color: #3bb19b;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 50px;
  margin-left:0px;
  border-radius:10%;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 1;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
