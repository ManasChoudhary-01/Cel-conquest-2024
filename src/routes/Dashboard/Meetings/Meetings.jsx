import styles from "./meetings.module.scss";
import MeetingDetails from "../../../components/Dashboard/Meetings/MeetingDetails/MeetingDetails";
import SelectSlots from "../../../components/Dashboard/Meetings/SelectSlots/SelectSlots";
import { useState } from "react";

const Meetings = () => {
  const [selectSlots, setselectSlots] = useState(false);

  let handleSelectSlotsButtonClick = () => {
    setselectSlots(!selectSlots);
  };

  return (
    <div className={styles.meetingsContainer}>
      <div className={styles.meetingsList}>
        <div className={styles.meetingsListOptionsContainer}>
          <div className={`${styles.meetingsListOptions} ${styles.active}`}>
            Upcoming
          </div>
          <div className={styles.meetingsListOptions}>Pending</div>
          <div className={styles.meetingsListOptions}>Past</div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rightPart}>
        <button
          style={{zIndex: 2}}
          className={styles.selectSlots}
          onClick={handleSelectSlotsButtonClick}
        >
          Select Slots
        </button>
        {selectSlots ? <SelectSlots></SelectSlots> : null}
        <div
          className={`${styles.meetingsDetails} ${
            selectSlots ? styles.blur : null
          }`}
        >
          <MeetingDetails></MeetingDetails>
        </div>
      </div>
    </div>
  );
};
export default Meetings;
