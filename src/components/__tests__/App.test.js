import React from "react";
import App from "../App";
import { shallow } from "enzyme";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

// make component a global object
let component;
// common setup logic BEFORE every test
beforeEach(() => {
  component = shallow(<App />);
});

it("shows a comment box and a comment list", () => {
  // .find() will return an array
  expect(component.find(CommentBox).length).toEqual(1);
  expect(component.find(CommentList).length).toEqual(1);
});

