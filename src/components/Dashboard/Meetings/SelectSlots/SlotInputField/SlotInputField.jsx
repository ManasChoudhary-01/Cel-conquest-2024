import styles from "./SlotInputField.module.scss";

const SlotInputField = ({
  showHideSelectSlotTiming,
  id,
  slotno,
  dateTimeStart,
  dateTimeEnd,
}) => {
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dateObjEnd = new Date(dateTimeEnd);
  const dateObj = new Date(dateTimeStart);
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    dateObj
  );
  console.log(dateTimeEnd === dateTimeStart);
  const meetDate = dateObj.getDate();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const fullTime =
    hours > 12
      ? `${hours - 12}:${minutes} PM`
      : hours === 0
      ? `12:${minutes} AM`
      : `${hours}:${minutes} AM`;

  const hoursEnd = dateObjEnd.getHours();
  const minutesEnd = dateObjEnd.getMinutes();
  const fullTimeEnd =
    hoursEnd > 12
      ? `${hoursEnd - 12}:${minutesEnd} PM`
      : hoursEnd === 0
      ? `12:${minutesEnd} AM`
      : `${hoursEnd}:${minutesEnd} AM`;
  return (
    <div className={styles.inputField}>
      <div>
        <div> Slot {slotno}</div> 
        <div>

        ({meetDate} {month} ({week[dateObj.getDay()]}),{" "}
        {fullTime} - {fullTimeEnd})
        </div>
      </div>
      <button
        className={styles.SelectButton}
        onClick={showHideSelectSlotTiming}
      >
        Delete
      </button>
    </div>
  );
};
export default SlotInputField;
