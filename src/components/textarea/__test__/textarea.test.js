import { render, screen } from '@testing-library/react';
import TextArea from '../textarea.component';

test("render textarea element properly", () => {
    render(<TextArea />);
    const textareaElement = screen.getByTestId("bodytextarea");
    expect(textareaElement).toBeInTheDocument();
})