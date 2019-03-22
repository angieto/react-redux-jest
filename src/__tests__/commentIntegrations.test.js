import React from "react";
import { mount } from "enzyme";
// to "trick" axios from making request outside of command line env
import moxios from "moxios";
import { Root } from "../Root";
import App from "../components/App";

let component;

beforeEach(() => {
  moxios.install();
  // make a fake response to 'fool' axios
  moxios.stubRequest(
    "http://my-json-server.typicode.com/typicode/demo/comments",
    {
      status: 200,
      response: [{ body: "Comment #1" }, { body: "Comment #2" }]
    }
  );
  component = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
});

// it("can fetch a list of comments and display them", done => {
//   component.find(".fetchComments").simulate("click");
//   // instroduce a delay in order to allow moxios to return the data
//   setTimeout(() => {
//     component.update();
//     expect(component.find("li").length).toEqual(2);
//     // call this func before completing the test -> allow buffer time for error check!
//     done();
//     component.unmount();
//   }, 200);
// });

// a better way to handle the async issue: use moxios.wait() 
it("can fetch a list of comments and display them", done => {
  component.find(".fetchComments").simulate("click");
  // instroduce a delay in order to allow moxios to return the data
  moxios.wait(() => {
    component.update();
    expect(component.find("li").length).toEqual(2);
    done();
    component.unmount();
  });
});