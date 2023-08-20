import { IconButton, useTheme } from "@mui/material";

const IconButtons = ({ icon }: { icon: React.ReactNode }) => {
  const { palette } = useTheme();

  return (
    <IconButton
      sx={{
        color: palette.primary.light,
        ":hover": {
          color: "white",
          translate: "0 -4px",
          transition: "all",
          transitionDuration: "200ms",
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default IconButtons;
