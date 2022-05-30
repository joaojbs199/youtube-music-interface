import { render } from "@testing-library/react";
import { cards } from "../../dataToRender/dataExporter";
import { DynamicInfo } from "../componentExporter";

describe("Test dynamic info", () => {

    it("Should render default component", () => {
        const { container } = render(<DynamicInfo />);
        const h1Test = "Olá, João Batista da Silva";
        const pTest = "ALGUMAS MÚSICAS PARA VOCÊ COMEÇAR";
        const h1 = container.getElementsByTagName("h1")[0].innerHTML;
        const p = container.getElementsByTagName("p")[0].innerHTML;
        expect(h1).toBe(h1Test);
        expect(p).toBe(pTest);
    });

    it("Should render dynamic component", () => {
        const pTest = "PARECIDO COM";
        const info = {
            text: cards[0].name,
            img: cards[0].img
        };
        const { container, getByAltText } = render(<DynamicInfo dynamicInfo={info} />);
        const h1 = container.getElementsByTagName("h1")[0].innerHTML;
        const p = container.getElementsByTagName("p")[0].innerHTML;
        expect(h1).toBe(info.text);
        expect(p).toBe(pTest);
        expect(getByAltText("album-image")).toHaveAttribute("src", info.img);
    });
});
