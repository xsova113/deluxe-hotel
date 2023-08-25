import {
  Autocomplete,
  Button,
  Divider,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import { motion } from "framer-motion";
import { bedCounts, bedroomCategories } from "./constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import qs from "query-string";

const FilterBox = () => {
  const isLargeScreen = useMediaQuery("(min-width: 940px)");
  const { palette } = useTheme();
  const navigate = useNavigate();
  const [bedCount, setBedCount] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>("");

  const onSubmit = () => {
    const url = qs.stringifyUrl(
      {
        url: window.location.pathname,
        query: {
          bedCount,
          category,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    navigate(url);
    location.reload();
  };

  return (
    <FlexBetween
      bgcolor={"white"}
      displayPrint={"flex"}
      flexDirection={isLargeScreen ? "row" : "column"}
      width={isLargeScreen ? "80%" : "90%"}
      mx={"auto"}
      position={"relative"}
      top={50}
      boxShadow={8}
      display={"flex"}
      p={"1rem 1rem"}
      gap={1}
      component={motion.div}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      initial="hidden"
      whileInView={"visible"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", delay: 0.2 },
        },
      }}
    >
      <Autocomplete
        onChange={(_e, newValue) => setCategory(newValue)}
        options={bedroomCategories}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Bedroom Categories" />
        )}
      />
      <Divider
        flexItem
        orientation={isLargeScreen ? "vertical" : "horizontal"}
      />
      <Autocomplete
        onChange={(_e, newValue) => setBedCount(newValue)}
        options={bedCounts}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} name="bedCounts" label="Number of Beds" />
        )}
      />
      <Divider
        flexItem
        orientation={isLargeScreen ? "vertical" : "horizontal"}
      />
      <Button
        onClick={onSubmit}
        sx={{
          bgcolor: palette.secondary.main,
          color: "white",
          fontSize: 14,
          minWidth: "fit-content",
          p: "1rem 1.5rem",
          ":hover": { bgcolor: palette.secondary.light },
        }}
      >
        filter rooms
      </Button>
    </FlexBetween>
  );
};

export default FilterBox;
