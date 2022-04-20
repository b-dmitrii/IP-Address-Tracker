import styled from "styled-components";
import headerBg from "../assets/pattern-bg.png";
import arrowIcon from "../assets/icon-arrow.svg";

import { Container } from "../Container";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/ipInfoSlice";
import { useState } from "react";

const HeaderBg = styled.header`
  background: url(${headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
`;

const HeaderInput = styled.input`
  width: 480px;
  padding: 0 15px;
  height: 40px;
  font-size: 20px;
  margin: auto;
  outline: none;
  border: none;
  border-radius: 10px;
`;

const HeaderInputSubmitButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 10px 10px 0;
  border: none;
  background-color: #000;

  &:hover {
    opacity: 0.8;
  }
`;

export const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const submitHundler = () => {
    dispatch(setSearch(searchValue));
    setSearchValue("");
  };

  return (
    <HeaderBg>
      <Container>
        <HeaderWrapper>
          <HeaderForm>
            <HeaderTitle>IP Address Tracker</HeaderTitle>
            <div style={{ position: "relative" }}>
              <HeaderInput
                placeholder="Search for any IP address or domain"
                type={"text"}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <HeaderInputSubmitButton onClick={() => submitHundler()}>
                <img src={arrowIcon} alt="arrow icon" />
              </HeaderInputSubmitButton>
            </div>
          </HeaderForm>
        </HeaderWrapper>
      </Container>
    </HeaderBg>
  );
};
