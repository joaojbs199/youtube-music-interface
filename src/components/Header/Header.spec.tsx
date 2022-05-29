import { render } from "@testing-library/react";
import { Header } from "../exporter";
import buttons from "../../pageData/menuButtons";

describe("Test menu buttons", () => {

    it("Should render text buttons", () => {
        const { container } = render(<Header buttons={buttons} />);
        const textButtons = container.getElementsByClassName("textBtn").length;
        expect(textButtons).toBe(buttons.textBtn.length);
    });

    it("Should render icon buttons", () => {
        const { container } = render(<Header buttons={buttons} />);
        const textButtons = container.getElementsByClassName("iconBtn").length;
        expect(textButtons).toBe(buttons.iconBtn.length);
    });
});