import { render  } from "@testing-library/react";
import list from "../../pageData/list";
import List from "./component";

describe("Song list test", () => {

    it("Should render song list", () => {
        const { container } = render(<List songs={list} />);
        const songList = container.getElementsByClassName("songContainer").length;
        expect(songList).toBe(list.length);
    });
});