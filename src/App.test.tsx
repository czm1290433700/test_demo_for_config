import { mount } from "enzyme";
import App from "./App";

describe("test", () => {
  it("first unit test", () => {
    const app = mount(<App />);
    expect(app.find(".read-the-docs").getDOMNode().textContent).toEqual(
      "Click on the Vite and React logos to learn more"
    );
  });
});
