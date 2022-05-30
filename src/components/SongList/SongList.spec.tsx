import { render  } from "@testing-library/react";
import { songs } from "../../dataToRender/dataExporter";
import { SongList } from "../componentExporter";

describe("Song list test", () => {

    it("Should render song list", () => {
        const { container } = render(<SongList songs={songs} />);
        const songList = container.getElementsByClassName("songContainer").length;
        expect(songList).toBe(songs.length);
    });
});