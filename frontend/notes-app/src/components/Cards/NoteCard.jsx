import React from "react";

export default function NoteCard({
  title,
  contnet,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) {
  return (
    <div>
      <div className="">
        <div>
          <h6 className="text-sm font-medium">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>

        <MdOutlinePushPin className="" onClick={onPinNote} />
      </div>
      <p className="">{contnet?.slice(0, 60)}</p>
    </div>
  );
}
