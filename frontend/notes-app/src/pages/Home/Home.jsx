// import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
export default function Home() {
  return (
    <div>
      <>
        <Navbar />
        <div className="container mx-auto">
          <NoteCard />
        </div>
      </>
    </div>
  );
}
