import React, { useState } from "react";
import { DateTimePicker } from "react-rainbow-components";
import "./pickDate.scss";

const containerStyles = {
  maxWidth: 400,
};

const initialState = { value: new Date() };

function PickDate() {
  const [state, setState] = useState(initialState);

  return (
    <div
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
      style={containerStyles}
    >
      <DateTimePicker
        value={state.value}
        minDate={new Date(2018, 0, 4)}
        maxDate={new Date(2020, 0, 4)}
        label="DateTimePicker Label"
        onChange={(value) => setState({ value })}
      />
    </div>
  );
}

export default PickDate;
