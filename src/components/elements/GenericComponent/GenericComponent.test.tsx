import { screen } from "@testing-library/react";
import { setup } from "utils/tests";

import GenericComponent from ".";

describe(GenericComponent, () => {
  const { render } = setup(GenericComponent);

  describe("Rendering", () => {
    it("should render the <GenericComponent> component", () => {
      render();
      expect(screen.getByTestId("GenericComponent")).toBeInTheDocument();
    });
  });
});
