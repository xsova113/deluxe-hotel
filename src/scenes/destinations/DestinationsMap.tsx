import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const DestinationsMap = () => {
  const center = useMemo(() => ({ lat: 49.166592, lng: -123.133568 }), []);
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_MAP_KEY,
  });

  return (
    <Box
      width={"100%"}
      height={"490px"}
      flexBasis={isLargeScreen ? "65%" : undefined}
    >
      {!isLoaded ? (
        <Box
          width={"100%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Box>
      ) : (
        <GoogleMap
          mapContainerClassName="mapContainer"
          center={center}
          zoom={8}
        >
          <Marker position={center} />
          <Marker position={{ lat: 49.246292, lng: -123.116226 }} />
          <Marker position={{ lat: 48.407326, lng: -123.329773 }} />
        </GoogleMap>
      )}
    </Box>
  );
};

export default DestinationsMap;
