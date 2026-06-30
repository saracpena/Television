/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
import { tvShows } from "./shows/data";
import EpisodeDetails from "./episodes/EpisodeDetails";
import EpisodeList from "./episodes/EpisodeList";
import ShowDetails from "./shows/ShowDetails";
import ShowSelections from "./shows/ShowSelection";

export default function App() {
  return (
    <>
      <header>
        <p>React TV</p>
        <EpisodeDetails />
      </header>
      <main></main>
    </>
  );
}
