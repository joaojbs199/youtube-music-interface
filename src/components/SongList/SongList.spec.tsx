import { render  } from "@testing-library/react";
import songs from "../../pageData/songs";
import SongList from "./component";

describe("Song list test", () => {

    it("Should render song list", () => {
        const { container } = render(<SongList songs={songs} />);
        const songList = container.getElementsByClassName("songContainer").length;
        expect(songList).toBe(songs.length);
    });
});