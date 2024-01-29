import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { BackButtonCmp } from "../../components/Buttons";
import { IconWithTextSimpleChipCmp } from "../../components/Chips";
import {
  DownloadPdfIconCmp,
  MembersIconCmp,
  ShareIconCmp,
  TimeIconCmp,
} from "../../components/Icons";
import { PageMainContentsLayoutCmp, PageSectionLayoutCmp } from "../../components/Layouts";
import RadioCmp from "../../components/RadioCmp";

const trackerData = [
  {
    heading: "Interpretation and Definitions",
    content: (
      <>
        "Juneteenth is known to some in the United States as the country’s “second Independence
        Day.” Observed each year on June 19, the holiday marks the end of slavery in Texas at the
        end of the Civil War."
        <br />
        <br />
        "For more than 150 years, African American communities across the country have observed this
        holiday—from social gatherings in Emancipation Parks to church services and other events.
        But Juneteenth has increasingly been celebrated nationwide; in 2021 it became the first new
        federal holiday since the establishment of Martin Luther King Jr."
      </>
    ),
  },
  {
    heading: "Acknowledgment",
    content: (
      <>
        "Juneteenth is known to some in the United States as the country’s “second Independence
        Day.” Observed each year on June 19, the holiday marks the end of slavery in Texas at the
        end of the Civil War."
        <br />
        <br />
        "For more than 150 years, African American communities across the country have observed this
        holiday—from social gatherings in Emancipation Parks to church services and other events.
        But Juneteenth has increasingly been celebrated nationwide; in 2021 it became the first new
        federal holiday since the establishment of Martin Luther King Jr."
      </>
    ),
  },
];

const tocTemp = [
  {
    label: "Overview",
    subHeadings: [
      "Overview",
      "Introduction",
      "First Step: Tools and Objects",
      "Second Step: Packing and Carry",
      "Final Step: Necessary Carry",
    ],
  },
  {
    label: "Interpretation and Definitions",
    subHeadings: [
      "Overview",
      "Introduction",
      "First Step: Tools and Objects",
      "Second Step: Packing and Carry",
      "Final Step: Necessary Carry",
    ],
  },
  {
    label: "Links to Other Websites",
    subHeadings: [
      "Overview",
      "Introduction",
      "First Step: Tools and Objects",
      "Second Step: Packing and Carry",
      "Final Step: Necessary Carry",
    ],
  },
  {
    label: "Final Conclusion",
    subHeadings: [
      "Overview",
      "Introduction",
      "First Step: Tools and Objects",
      "Second Step: Packing and Carry",
      "Final Step: Necessary Carry",
    ],
  },
];

export default function ToolboxPostPage() {
  return (
    <PageMainContentsLayoutCmp>
      <PageSectionLayoutCmp title="Toolbox" footer={<Footer />}>
        <Box display="flex" flexDirection="column" rowGap={6}>
          <BackButtonCmp />
          <Box px={{ md: 1, lg: 10 }} display="flex" alignItems="center" columnGap={10}>
            <Box flex={1}>
              <Typography variant="h5" fontWeight={700} color="primary">
                Mindfulness Journey
              </Typography>
              <Box pt={1} />
              <Typography lineHeight="29px">
                Immerse yourself in nature and pure luxury at Shangrila Rénao situated on top of
                Tandi hill near Jibhi. Not only can you pour yourself in a hot bubble bath but also
                enjoy the stunning views right from your bathtub.
              </Typography>
              <Box display="flex" alignItems="center" columnGap={2} mt={1}>
                <IconWithTextSimpleChipCmp icon={MembersIconCmp} label="10 Members min" />
                <IconWithTextSimpleChipCmp icon={TimeIconCmp} label="1-2 min read" />
              </Box>
            </Box>
            <Box width="100%" height="100%" flex={1}>
              <img
                src="/images/toolbox-2.png"
                alt="mindful"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
          <Box px={{ md: 1, lg: 10 }} pb={4}>
            <Divider />
          </Box>
        </Box>
        <Box display="flex" px={{ md: 1, lg: 10 }} mt={4} columnGap={16}>
          <Box>
            <PostDataCmp />
          </Box>
          <Box flexShrink={0}>
            <TableOfContentsCmp />
          </Box>
        </Box>
      </PageSectionLayoutCmp>
    </PageMainContentsLayoutCmp>
  );
}

function Footer() {
  return (
    <>
      <Button variant="outlined" startIcon={<ShareIconCmp />}>
        Share
      </Button>
      <Box px={1} />
      <Button variant="contained" startIcon={<DownloadPdfIconCmp />}>
        Download as PDF
      </Button>
    </>
  );
}

function TableOfContentsCmp() {
  const [selected, setSelected] = React.useState(0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      rowGap={3}
      borderLeft="1px solid rgba(33, 33, 33, 0.32)"
      py={4}
      pl={4}
    >
      {tocTemp.map((el, idx) => (
        <TocItem
          key={idx}
          id={idx}
          label={el.label}
          selected={idx === selected}
          subHeadings={el.subHeadings}
          onClick={() => setSelected(idx)}
        />
      ))}
    </Box>
  );
}

function TocItem({ id, label, selected, subHeadings, onClick }) {
  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={onClick}>
        <Box display="flex" justifyContent="center" width={80}>
          <RadioCmp selected={selected} />
        </Box>
        <Typography fontWeight={selected && 700} color={selected ? "primary.main" : "text.light"}>
          {label}
        </Typography>
      </Box>
      {selected && (
        <Box pt={2} display="flex" flexDirection="column" rowGap={1}>
          {subHeadings.map((el, idx) => (
            <TocSubItem key={idx} selected={idx < 3} label={el} />
          ))}
        </Box>
      )}
    </Box>
  );
}

function TocSubItem({ selected, label }) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" justifyContent="center" width={80}>
        <Box
          width={8}
          height={8}
          bgcolor={selected ? "primary.main" : "secondary.main"}
          borderRadius={8}
        />
      </Box>
      <Typography
        variant="body2"
        fontWeight={selected && 700}
        color={selected ? "primary.main" : "text.light"}
      >
        {label}
      </Typography>
    </Box>
  );
}

function PostDataCmp() {
  return (
    <Box>
      {trackerData.map((el, idx) => (
        <PostDataItemCmp key={idx} heading={el.heading} content={el.content} selected={idx === 0} />
      ))}
    </Box>
  );
}

function PostDataItemCmp({ heading, content, selected }) {
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Box display="flex" width={40}>
          <RadioCmp selected={selected} />
        </Box>
        <Typography variant="h5Alt" fontWeight={600}>
          {heading}
        </Typography>
      </Box>
      <Box display="flex">
        <Box display="flex" width={10} flexShrink={0} />
        <Box pl="30px" borderLeft="1px solid rgba(225, 225, 225, 1)" pt={3} pb={6}>
          <Typography>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
