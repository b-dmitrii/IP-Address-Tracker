import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useSelector } from "react-redux";

import LocationIcon from "../assets/icon-location.svg";

export const AppMap = () => {
  const { data } = useSelector((state) => state.ipInfo);
  const { location } = data;
  return (
    <YMaps>
      <Map
        state={{
          center: [location?.lat, location?.lng],
          zoom: 10,
        }}
        width={"100%"}
        height="calc(100vh - 300px)"
      >
        <Placemark
          geometry={[location?.lat, location?.lng]}
          options={{
            iconLayout: "default#image",
            iconImageHref: LocationIcon,
            iconImageSize: [33, 42],
          }}
        />
      </Map>
    </YMaps>
  );
};
