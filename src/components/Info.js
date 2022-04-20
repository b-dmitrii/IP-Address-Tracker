import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container } from "../Container";

const InfoList = styled.div`
  position: absolute;
  width: 700px;
  display: flex;
  justify-content: space-between;
  top: 250px;
  left: calc(50% - 760px / 2);
  padding: 15px 30px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 10px #636363;
  z-index: 999;
  & > div:not(:last-child) {
    padding-right: 30px;
    border-right: 1px solid #00000025;
  }
`;

const InfoItem = styled.div``;

const InfoItemTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;

  color: #9e9e9e;
`;

const InfoItemDescription = styled.p`
  font-weight: bold;
`;

export const Info = () => {
  const { data } = useSelector((state) => state.ipInfo);
  const { ip, isp, location } = data;

  return (
    <Container>
      <InfoList>
        <InfoItem>
          <InfoItemTitle>ip address</InfoItemTitle>
          <InfoItemDescription>{ip ? ip : "Loading..."}</InfoItemDescription>
        </InfoItem>
        <InfoItem>
          <InfoItemTitle>location</InfoItemTitle>
          <InfoItemDescription>
            {location?.city || location?.region || location?.postalCode
              ? `${location?.city}, ${location?.region} ${location?.postalCode}`
              : "Loading..."}
          </InfoItemDescription>
        </InfoItem>
        <InfoItem>
          <InfoItemTitle>timezone</InfoItemTitle>
          <InfoItemDescription>
            {location?.timezone ? location?.timezone : "Loading..."}
          </InfoItemDescription>
        </InfoItem>
        <InfoItem>
          <InfoItemTitle>isp</InfoItemTitle>
          <InfoItemDescription>{isp ? isp : "Loading..."}</InfoItemDescription>
        </InfoItem>
      </InfoList>
    </Container>
  );
};
