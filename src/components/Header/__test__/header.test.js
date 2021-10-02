import { render, screen } from "@testing-library/react";
import Header from "../header.component";

test("render heading element", () => {
    render(<Header heading="Heading of the document" />)
    const headElement = screen.getByRole("heading", { name: "Heading of the document" })
    expect(headElement).toBeInTheDocument()
})