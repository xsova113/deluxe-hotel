import { Stack } from "@mui/material";
import Room from "./Room";
import { roomsInfo } from "./constants";

const RoomsSection = () => {
  return (
    <Stack py={10} bgcolor={"white"}>
      {roomsInfo.map((item, index) => (
        <Room index={index + 1} key={`${index}-${item.title}`} {...item} />
      ))}
    </Stack>
  );
};

export default RoomsSection;
