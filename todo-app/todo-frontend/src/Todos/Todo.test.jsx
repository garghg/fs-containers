import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

test("Render todo text", () => {
    const todo = { text: "FullstackOpen part 12", done: false }
    render(<Todo todo={todo} onClickComplete={() => {}} onClickDelete={() => {}} />)
    expect(screen.getByText("FullstackOpen part 12")).toBeDefined()
})