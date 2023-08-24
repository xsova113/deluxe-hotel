/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconButton, useTheme } from "@mui/material";

const IconButtons = ({
  icon,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  onClick,
}: {
  icon: React.ReactNode;
  onClick?: () => void;
}) => {
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
