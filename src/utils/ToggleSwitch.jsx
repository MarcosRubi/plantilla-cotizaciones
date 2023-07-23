"use client";

import { ToggleSwitch } from "flowbite-react";

export default function ToggleSwitchElement() {
  return (
    <div className="flex flex-col max-w-md gap-4" id="toggle">
      <ToggleSwitch label="Toggle me" onChange={function () {}} />
      <ToggleSwitch
        checked
        label="Toggle me (checked)"
        onChange={function () {}}
      />
      <ToggleSwitch disabled label="Toggle me (disabled)" onChange={() => {}} />
    </div>
  );
}
