exports.component = (name) => `import * as S from "./styles";

const ${name} = () => {
  return <S.${name} data-testid="${name}" />;
};

export default ${name};
`;

exports.styles = (name) => `import { styled } from "styles";

export const ${name} = styled("div", {});
`;

exports.test = (name) => `import { screen } from "@testing-library/react";
import { setup } from "utils/tests";

import ${name} from ".";

describe(${name}, () => {
  const { render } = setup(${name});

  describe("Rendering", () => {
    it("should render the <${name}> component", () => {
      render();
      expect(screen.getByTestId("${name}")).toBeInTheDocument();
    });
  });
});
`;

exports.barrel = (name) => `import ${name} from "./${name}";

export * from "./${name}";

export default ${name};
`;
