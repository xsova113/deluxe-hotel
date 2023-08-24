import {
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Room from "./Room";
import { roomsInfo } from "./constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface IQuery {
  category: string;
  bedCount: number;
  guestCount: number;
}

const RoomsSection = () => {
  const [isShow, setIsShow] = useState(false);
  const { palette } = useTheme();
  const isLargeScreen = useMediaQuery("(min-width: 940px)");

  const guests = useSelector((state: RootState) => state.availability.guests);

  const [query, setQuery] = useState<IQuery | null>(null);

  const filteredRooms =
    query === null
      ? roomsInfo
      : roomsInfo.filter(
          (item) =>
            item.label.toLowerCase().includes(query.category) &&
            item.beds === query.bedCount &&
            query.guestCount
        );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("guests", guests.toString());
    const guestCount = searchParams.get("guests");
    const category = searchParams.get("category");
    const bedCount = searchParams.get("bedCount");

    if (category && bedCount) {
      setQuery({
        category,
        bedCount: Number(bedCount),
        guestCount: Number(guestCount),
      });
    }
  }, [guests]);

  return (
    <>
      {filteredRooms.length === 0 ? (
        <Typography my={isLargeScreen ? 18 : 8} fontSize={24}>
          No results found...
        </Typography>
      ) : (
        <Stack
          py={isLargeScreen ? 10 : undefined}
          pb={isLargeScreen ? 18 : 14}
          bgcolor={"white"}
        >
          {filteredRooms.map((item, index) => (
            <div key={`${index}-${item.title}`}>
              {isShow ? (
                <Room index={index + 1} {...item} />
              ) : (
                index <= 2 && <Room index={index + 1} {...item} />
              )}
            </div>
          ))}

          {filteredRooms.length > 3 && (
            <Button
              size="large"
              variant="contained"
              sx={{
                width: "fit-content",
                mx: "auto",
                bgcolor: palette.secondary.dark,
                mt: !isLargeScreen ? 4 : undefined
              }}
              onClick={() => setIsShow(!isShow)}
            >
              {isShow ? "see less rooms" : "see more rooms"}
            </Button>
          )}
        </Stack>
      )}
    </>
  );
};

export default RoomsSection;
