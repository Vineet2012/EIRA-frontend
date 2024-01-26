import {
  Box,
  Button,
  Chip,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { ChevronArrowIconCmp, CrossIconCmp, SearchIconCmp } from "./Icons";

export function TextFieldWithDropdownCmp({
  bgcolor = "#fff",
  placeholder,
  actionText,
  resultsHeading,
  results,
  autoFocus,
  onClickAction,
  defaultValue,
  border,
}) {
  const [isFocus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue ?? "");
  const inputRef = React.useRef();

  function handleClearInput() {
    inputRef.current.value = "";
    setValue("");
    inputRef.current.focus();
  }

  return (
    <Box
      bgcolor={bgcolor}
      borderRadius={4}
      display="flex"
      alignItems="center"
      boxShadow={isFocus && "0px 4px 28px -24px #000000"}
      position="relative"
    >
      <TextField
        inputRef={inputRef}
        fullWidth
        variant="outlined"
        defaultValue={defaultValue}
        sx={{ border: border, "& fieldset": { border: border } }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleClearInput} sx={{ cursor: "pointer" }}>
              <CrossIconCmp sx={{ color: "text.light" }} fontSize="small" />
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment
              position="start"
              onClick={() => inputRef.current.focus()}
              sx={{ cursor: "pointer" }}
            >
              <SearchIconCmp sx={{ color: "text.light" }} fontSize="small" />
            </InputAdornment>
          ),
        }}
      />
      {(isFocus || value) && (
        <Box
          position="absolute"
          top="4em"
          zIndex={1}
          left={0}
          width="100%"
          bgcolor="background.main"
          borderRadius={3}
          overflow="hidden"
          boxShadow={"0px 4px 28px -24px #000000"}
          display="flex"
          flexDirection="column"
          textAlign="start"
        >
          {results && results.length > 0 && (
            <Box p={2} maxHeight={150} overflow="auto">
              <Typography variant="body2" fontWeight={600}>
                {resultsHeading}
              </Typography>
              <Box mt={2} display="flex" flexDirection="column" rowGap={1}>
                {results.map((el, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    alignItems="center"
                    columnGap={2}
                    sx={{ cursor: "pointer" }}
                  >
                    {el.icon}
                    <Typography>{el.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          {actionText && value && (
            <Box
              bgcolor="#fff"
              borderTop={results && results.length > 0 && "1px solid"}
              borderColor="text.light"
            >
              <Button
                sx={{
                  color: "primary.main",
                  py: 2,
                  borderRadius: 0,
                }}
                fullWidth
                onClick={onClickAction}
              >
                <Box display="flex" justifyContent="space-between" width="100%">
                  {actionText + ` "${value}"`}
                  <ChevronArrowIconCmp direction="right" />
                </Box>
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export function TextFieldWithLabelCmp({
  label,
  sideLabel,
  placeholder,
  defaultValue,
  multiline,
  rows,
  maxRows,
  type,
  letterSpacing,
  disabled,
}) {
  return (
    <Box flex={1}>
      <Box display="flex" alignContent="center" justifyContent="space-between">
        <Typography variant="body1" fontWeight={500} color="text.light">
          {label}
        </Typography>
        <Typography variant="body1" fontWeight={500} color="text.light">
          {sideLabel}
        </Typography>
      </Box>
      <Box mt={1} />
      <TextField
        variant="outlined"
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        fullWidth
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        type={type}
        inputProps={{ style: { letterSpacing } }}
      />
    </Box>
  );
}

export function DropdownCmp({ label, options = [], multiple, value, onChange }) {
  return (
    <Box flex={1}>
      <Typography fontWeight={500} color="text.light">
        {label}
      </Typography>
      <Box pt={1} />
      {/* TODO: style select */}
      <Select
        fullWidth
        value={value}
        onChange={onChange}
        sx={{
          borderRadius: 4,
          color: "#212121",
        }}
        multiple={multiple}
        renderValue={
          multiple &&
          ((selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected?.map((value) => (
                <Chip key={value} label={options.find((el) => el.id === value).cmp} />
              ))}
            </Box>
          ))
        }
        IconComponent={ChevronArrowIconCmp}
      >
        {options.map((el, idx) => (
          <MenuItem key={idx} value={el.id}>
            {el.cmp}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
