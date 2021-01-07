import { ResponsiveCalendar } from "@nivo/calendar";
import { data } from "./data/calendarData";
import React, { Component, useState } from "react";

const Calendar = ({ id }) => {
  const userDays = data.filter((day) => day.id == id)[0];
  if (userDays === undefined) {
    return <></>;
  }
  return (
    <div style={{ height: "250px", width: "10000px" }} className="container">
      <ResponsiveCalendar
        data={userDays.days}
        from="2015-01-02"
        to="2015-12-01"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        margin={{ top: 0, right: 40, bottom: 40, left: 40 }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    </div>
  );
};
export default Calendar;
