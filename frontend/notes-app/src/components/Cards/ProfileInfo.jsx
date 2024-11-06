import React from "react";
import { getInitials } from "../../utils/helper";

export default function ProfileInfo({ onLogout }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-full font-medium bg-slate-100 text-slate-950">
        {getInitials("Digbijaya Lenka")}
      </div>
      <div>
        <p className="text-sm font-medium">Digbijaya Lenka</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}