import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../Styles/cardStyles.scss";

import {
  getAllSavedRecordsUserWise,
  getCurrentLink,
  getCurrentPostHtml,
  openPopModal,
} from "../../Redux/actions";
import ProfileComponentOne from "./ProfileComponentOne";
import UserSavedRecords from "./mapFavouriteItemsArray";
import FullScreenDialog from "../Pagination/popUpQuestionModal";
import {
  removeCurrentFavPost,
  setCurrentStatus,
} from "../../Redux/AuthRedux/actions";
import CustomizedSnackbars from "../../common/snackBarComponent";
const ObjectStyle = {
  backgroundColor: "#f1f1f1",
  margin: "10px",
  padding: "20px",
  fontSize: "10px",
  maxWidth: "400px",
  border: "2px solid black",
};

const ProfilePage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const dispatch = useDispatch();
  const records = useSelector((state) => state);
  const [profilePageDetails, setProfilePageDetails] = React.useState(
    JSON.parse(localStorage.getItem("payload"))
  );

  const [currentUserEmail, setCurrentUserEmail] = React.useState(
    JSON.parse(localStorage.getItem("payload")).email
  );

  useEffect(() => {
    dispatch(getAllSavedRecordsUserWise(currentUserEmail));
  }, [records.AuthReducers.removeCurrentFavPost]);

  React.useEffect(() => {
    dispatch(getCurrentPostHtml(records.ArticleReducers.currentOpenedLink));
  }, [records.ArticleReducers.currentOpenedLink]);

  return records.AuthReducers.accountLoginDetails.success ||
    localStorage.getItem("token") ? (
    <React.Fragment>
      <ProfileComponentOne />
      <FullScreenDialog />
      <div
        style={{
          margin: "auto",
          width: "75%",
          padding: "10px",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            sx={{
              backgroundColor: "lightBlue",
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Read All Posts
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div class="container">
              <div class="card__container">
                {records.ArticleReducers?.allSavedRecordsUserWise?.map(
                  (data) => (
                    <div class="card">
                      <div class="card__content">
                        <p class="card__info">Author id : {data.author_id}</p>
                        <p class="card__info">Category : {data.category}</p>
                        <p class="card__info">
                          Last Updated : {data.last_updated}
                        </p>
                        <p class="card__info">Title : {data.title}</p>
                      </div>
                      <Button
                        variant="contained"
                        color="success"
                        href={data.link}
                      >
                        Original Post Link
                      </Button>
                      <br />
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          dispatch(setCurrentStatus(504));
                          dispatch(openPopModal(true));
                          dispatch(getCurrentLink(data.link));
                        }}
                      >
                        Read Here
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(
                            removeCurrentFavPost(currentUserEmail, data._id)
                          );
                          dispatch(setCurrentStatus(501));
                        }}
                        variant="contained"
                        color="info"
                      >
                        Remove from Liked Posts
                      </Button>
                    </div>
                  )
                )}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </React.Fragment>
  ) : (
    <>Not Authorized</>
  );
};

export default ProfilePage;
