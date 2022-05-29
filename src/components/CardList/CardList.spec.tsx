import { render  } from "@testing-library/react";
import cards from "../../pageData/cards";
import CardList from "./component";

describe("Cards list test", () => {

    it("Should render card list", () => {
        const { container } = render(<CardList cards={cards} />);
        const cardList = container.getElementsByClassName("cardContainer").length;
        expect(cardList).toBe(cards.length - 1);
    });
});