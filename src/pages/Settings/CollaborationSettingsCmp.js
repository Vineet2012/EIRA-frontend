import { AddCircleOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { DeleteIconCmp, EditIconCmp } from "../../components/Icons";
import { DropdownCmp } from "../../components/Inputs";
import AddMemberDialog from "./AddMemberDialog";
import RemoveMemberDialog from "./RemoveMemberDialog";

export default function CollaborationSettingsCmp() {
  const [openAddMember, setOpenAddMember] = React.useState(false);
  const [openRemoveMember, setOpenRemoveMember] = React.useState(false);

  return (
    <Box pb={10}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box flex={1}>
          <Typography fontWeight={700} fontSize={18}>
            Team Collaborations
          </Typography>
        </Box>
        <Box flexShrink={1}>
          <DropdownCmp value={2} options={options} />
        </Box>
      </Box>
      <TableCmp onClickRemoveMember={() => setOpenRemoveMember(true)} />
      <Box display="flex" justifyContent="center">
        <Button color="primary" onClick={() => setOpenAddMember(true)}>
          <AddCircleOutline /> <Box mx={0.5} /> Invite More
        </Button>
      </Box>
      <AddMemberDialog open={openAddMember} handleClose={() => setOpenAddMember(false)} />
      <RemoveMemberDialog open={openRemoveMember} handleClose={() => setOpenRemoveMember(false)} />
    </Box>
  );
}

const options = [
  { id: 0, cmp: "Team Building" },
  { id: 1, cmp: "Team Building" },
  { id: 2, cmp: "Team Building" },
];
const headings = ["Name", "Email", "Status", ""];
const rowTemp = [
  {
    id: 1,
    profileImage: "https://mui.com/static/images/avatar/1.jpg",
    name: "Krishna A.",
    email: "krishnaA@example.com",
    status: "Planner",
  },
  {
    id: 2,
    profileImage: "https://wallpapers.com/images/hd/cool-profile-picture-l0hzjr9omwan07nt.jpg",
    name: "Mani S.",
    email: "MaiS@example.com",
    status: "Participant",
  },
  {
    id: 2,
    profileImage: "https://wallpapers.com/images/hd/cool-profile-picture-1ecoo30f26bkr14o.jpg",
    name: "Mani S.",
    email: "MaiS@example.com",
    status: "Invited",
  },
];

function TableCmp({ onClickRemoveMember }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map((el, idx) => (
              <TableCell
                key={idx}
                align="left"
                sx={{ fontWeight: 700, color: "#21212185", fontSize: 16 }}
              >
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowTemp.map((row) => (
            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell sx={{ display: "flex", alignItems: "center", columnGap: 2 }}>
                <Avatar src={row.profileImage} /> <Typography>{row.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{row.email}</Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  sx={{
                    fontWeight: 700,
                    fontSize: 12,
                    minWidth: 100,
                    ...(row.status === "Planner" && {
                      color: "primary.main",
                      backgroundColor: "secondary.main",
                    }),
                    ...(row.status === "Invited" && {
                      color: "#212121",
                      backgroundColor: "#F1EDE9",
                    }),
                  }}
                />
              </TableCell>
              <TableCell width={100}>
                {row.status === "Planner" ? (
                  <IconButton>
                    <EditIconCmp />
                  </IconButton>
                ) : (
                  <IconButton onClick={onClickRemoveMember}>
                    <DeleteIconCmp sx={{ color: "red" }} />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
