/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import OdrToolbar from "src/components/odr-toolbar";

describe("components/odr-toolbar", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<OdrToolbar />);
      expect(component).to.not.be.null;
    });

  });

});
