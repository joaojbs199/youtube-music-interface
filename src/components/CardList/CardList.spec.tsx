import { render  } from "@testing-library/react";
import { cards } from "../../dataToRender/dataExporter";
import { CardList } from "../componentExporter";

describe("Cards list test", () => {

    it("Should render card list", () => {
        const { container } = render(<CardList cards={cards} />);
        const cardList = container.getElementsByClassName("cardContainer").length;
        expect(cardList).toBe(cards.length - 1);
    });

    it("Should test image source of a card", () => {
        const { container } = render(<CardList cards={cards} />);
        const cardList = container.getElementsByClassName("cardList")[0].children;
        
        for(let i = 1; i < cardList.length; i++) {
            const src = cardList[i].children[0].getAttribute("src");
            expect(src).toBe(cards[i + 1].img)
        }
    });
});