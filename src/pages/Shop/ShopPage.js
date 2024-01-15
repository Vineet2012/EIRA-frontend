import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  ActivityIconCmp,
  ArrowHorizontalIconCmp,
  CalendarIconCmp,
  ChevronArrowIconCmp,
  GuideIconCmp,
  MembersIconCmp,
  PackagesIconCmp,
  StarCircleIconCmp,
  WorkshopIconCmp,
} from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import ChooseTimeDialog from "./ChooseTimeDialog";
import ShopPageActivityCmp from "./ShopPageActivityCmp";
import ShopPageContextProvider, { ShopPageContext } from "./ShopPageContext";
import ShopPageGuideCmp from "./ShopPageGuideCmp";
import ShopPagePackagesCmp from "./ShopPagePackagesCmp";
import ShopPageWorkshopCmp from "./ShopPageWorkshopCmp";

export default function ShopPage() {
  return (
    <ShopPageContextProvider>
      <ShopPageMain />
    </ShopPageContextProvider>
  );
}

function ShopPageMain() {
  const { stepNo, handleJump, openTimeDialog, setOpenTimeDialog } =
    React.useContext(ShopPageContext);

  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="My Shop" footer={<FooterCmp />}>
        <HeaderCmp />
        <Box display="flex" pt={4} columnGap={4}>
          <Box>
            <MenuCmp selected={stepNo} onSelect={(val) => handleJump(val)} />
          </Box>
          <Box flex={1}>
            <Box display="flex" flexDirection="column" rowGap={4}>
              {stepNo !== 2 && <FilterCmp />}
              <Box>
                {
                  [
                    <ShopPageActivityCmp />,
                    <ShopPageWorkshopCmp />,
                    <ShopPageGuideCmp />,
                    <ShopPagePackagesCmp />,
                  ][stepNo]
                }
              </Box>
            </Box>
          </Box>
        </Box>
      </PageSectionLayoutCmp>
      <ChooseTimeDialog open={openTimeDialog} handleClose={() => setOpenTimeDialog(false)} />
    </PageMainContentsLayoutCmp>
  );
}

function HeaderCmp() {
  return (
    <Box
      bgcolor="secondary.main"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={4}
      borderRadius={4}
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="h4Alt" fontWeight={600} color="primary">
          Embark on a Journey of Enrichment
        </Typography>
        <Typography variant="body2Alt">
          Immerse Yourself in Activities, Workshops, and Expert Guidance – All Included in Your
          Package.
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width={300}
        bgcolor="#fff"
        borderRadius={4}
        p={2}
      >
        <Typography fontWeight={700} color="primary.main">
          ABC
        </Typography>
        <ChevronArrowIconCmp color="primary" />
      </Box>
    </Box>
  );
}

function FooterCmp() {
  return (
    <Button variant="contained" endIcon={<ArrowHorizontalIconCmp />}>
      Pay Now
    </Button>
  );
}

function MenuCmp({ selected, onSelect }) {
  return (
    <Box
      width={240}
      display="flex"
      flexDirection="column"
      rowGap={1}
      bgcolor="rgba(246, 246, 246, 1)"
      p={2}
      borderRadius={4}
      sx={{ cursor: "pointer" }}
    >
      {[
        { icon: ActivityIconCmp, label: "Activity" },
        { icon: WorkshopIconCmp, label: "Workshop" },
        { icon: GuideIconCmp, label: "Guide" },
        { icon: PackagesIconCmp, label: "Packages" },
      ].map((el, idx) => (
        <MenuItemCmp
          key={idx}
          icon={el.icon}
          label={el.label}
          selected={selected === idx}
          onClick={() => onSelect(idx)}
        />
      ))}
    </Box>
  );
}

function MenuItemCmp({ icon, label, selected, onClick }) {
  return (
    <Box p={2} bgcolor={selected && "secondary.main"} borderRadius={3} onClick={onClick}>
      <IconWithTextSimpleChipCmp
        icon={icon}
        label={label}
        color={selected && "primary.main"}
        columnGap={1}
      />
    </Box>
  );
}

function FilterCmp() {
  const width = 240;

  return (
    <Box display="flex" alignItems="center" columnGap={4}>
      <Box flex={1}>
        {/* TODO: replace with DrowdownCmp */}
        <Select
          fullWidth
          value={10}
          onChange={() => {}}
          sx={{
            borderRadius: 4,
            color: "#212121",
          }}
          IconComponent={ChevronArrowIconCmp}
        >
          <MenuItem value={10}>
            <IconWithTextSimpleChipCmp
              icon={StarCircleIconCmp}
              label="Strategy"
              color="text.main"
              columnGap={1}
              large
            />
          </MenuItem>
          <MenuItem value={20}>
            <IconWithTextSimpleChipCmp
              icon={StarCircleIconCmp}
              label="Strategy"
              color="text.main"
              columnGap={1}
              large
            />
          </MenuItem>
          <MenuItem value={30}>
            <IconWithTextSimpleChipCmp
              icon={StarCircleIconCmp}
              label="Strategy"
              color="text.main"
              columnGap={1}
              large
            />
          </MenuItem>
        </Select>
      </Box>
      <Box flex={1}>
        <TextField
          placeholder="22/11/2023"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CalendarIconCmp />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box flex={1}>
        <TextField
          placeholder="22"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MembersIconCmp />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
}
