// import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
export default function Home() {
  return (
    <div>
      <>
        <Navbar />
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4 mt-8">
            <NoteCard
              title="meeting on 31st december"
              date="31-12-2024"
              content="meeting on 31st december"
              tags="#meeting"
              isPinned={true}
              onEdit={() => {}}
              onDelete={() => {}}
              onPinNote={() => {}}
            />
          </div>
        </div>

        <button
          className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
          onClick={() => {}}
        >
          <MdAdd className="text-[32px] text-white" />
        </button>
      </>
    </div>
  );
}
