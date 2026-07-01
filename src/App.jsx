/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { useState } from "react";
import { tvShows } from "./shows/data";
import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowDetails from "./shows/ShowDetails";
import ShowSelections from "./shows/ShowSelection";

export default function App() {
  const [selectedShow, setSelectedShow] = useState(null); 
  return (
    <>
      <header>
        <p>React TV</p>
        <EpisodeDetails />
      </header>
      <main>
        <ShowSelections onShowSelect={setSelectedShow} />
        {selectedShow && <ShowDetails show={selectedShow} />}
      </main>
    </>
  );
}
