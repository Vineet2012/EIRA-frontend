import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export function IconWithTextSimpleChipCmp({
  icon,
  label,
  color,
  bgcolor = "secondary.main",
  contained,
  fontWeight,
  iconProps = {},
  reverse,
  columnGap = 0.5,
  textColor,
  large,
  onClick,
}) {
  const Icon = icon;

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={reverse && "row-reverse"}
      columnGap={columnGap}
      bgcolor={contained && bgcolor}
      px={contained && 2}
      py={contained && 1}
      borderRadius={contained && 12}
      sx={{ cursor: onClick && "pointer" }}
      onClick={onClick}
    >
      <Icon color="primary" fontSize="small" sx={{ color }} {...iconProps} />
      <Typography
        variant={large ? "body1" : "body2"}
        color={textColor ?? color ?? "primary.main"}
        fontWeight={fontWeight}
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 1,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export function MultiChipsCmp({
  data,
  xs = 4,
  height = 120,
  spacing = 4,
  typographyVariant = "body1",
  maxSelectItems,
}) {
  const [selected, setSelected] = React.useState([]);

  function handleClick(id) {
    console.log({ id, selected });
    const idx = selected.indexOf(id);

    if (idx === -1)
      setSelected((prev) => {
        const newArr = [id, ...prev].slice(0, maxSelectItems ?? prev.length + 1);
        return [...newArr];
      });
    else
      setSelected((prev) => {
        const newArr = prev.filter((el, idx) => el !== id);
        return [...newArr];
      });
  }

  return (
    <Grid container spacing={spacing}>
      {data.map((el, idx) => {
        const Icon = el.icon;

        let isSelcted = selected.includes(el.id);
        const borderColor = isSelcted ? "primary.main" : "text.light";
        const bgcolor = isSelcted ? "primary.main" : "transparent";
        const color = isSelcted ? "#fff" : "text.light";

        return (
          <Grid key={idx} item xs={xs}>
            <Box
              height={height}
              width="100%"
              display="flex"
              flexDirection="column"
              rowGap={1}
              alignItems="center"
              justifyContent="center"
              bgcolor={bgcolor}
              color={color}
              border="1px solid"
              borderRadius={3}
              borderColor={borderColor}
              textAlign="center"
              sx={{ cursor: "pointer", transition: "0.3s" }}
              onClick={() => handleClick(el.id)}
            >
              {Icon && <Icon />}
              <Typography variant={typographyVariant} color="inherit" fontWeight={500}>
                {el.text}
              </Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export function TextWithLinkCmp({ label, linkText, onClick }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" columnGap={0.5}>
      <Typography color="text.light">{label}</Typography>
      <Box sx={{ cursor: "pointer" }} onClick={onClick}>
        <Typography color="primary.main" fontWeight={700}>
          {linkText}
        </Typography>
      </Box>
    </Box>
  );
}
