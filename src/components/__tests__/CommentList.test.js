import React from "react";
import CommentList from "../CommentList";
import { mount } from "enzyme";
import { Root } from "../../Root";

let component;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };
  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one <li> per comment", () => {
  expect(component.find('li').length).toEqual(2);
});

it("shows the text for each comment", () => {
  console.log(component.render().text());
  // "Cheerio" queries
  expect(component.render().text()).toContain('Comment 1');
  expect(component.render().text()).toContain('Comment 2');
});