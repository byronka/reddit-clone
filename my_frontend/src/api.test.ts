import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import * as api from "./api";

const API_URL = "http://localhost:3000";

test("test all the apis at once", async () => {
  // Delete all the posts
  await fetch(`${API_URL}/posts/delete_all`);

  // expect an empty list when asking for all posts
  expect(await api.getPosts()).toEqual([]);

  // some values for our post tests
  let firstName = "my name";
  let firstDescription = "my description";

  // create our first post
  let creationResponse = await api.createPost(firstName, firstDescription);

  // assert correct behavior
  expect(creationResponse.id).toBeGreaterThan(0);
  expect(creationResponse.success).toBeTruthy();

  // get a single post by id
  let getPostResponse = await api.getPost(creationResponse.id);

  // assert correct data in response
  expect(getPostResponse["id"]).toBeGreaterThan(0);
  expect(getPostResponse["name"]).toEqual(firstName);
  expect(getPostResponse["description"]).toEqual(firstDescription);

  // get current list of posts
  let getPostsResponse = await api.getPosts();

  // assert correct data in response
  expect(getPostsResponse.length).toEqual(1);
  expect(getPostsResponse[0]["id"]).toBeGreaterThan(0);
  expect(getPostsResponse[0]["name"]).toEqual(firstName);
  expect(getPostsResponse[0]["description"]).toEqual(firstDescription);

  // update the current (singular) post with a new description
  let updateResponse = await api.updatePostDescription(
    creationResponse.id,
    "a new description"
  );

  // assert it returns true (that it succeeded)
  expect(updateResponse).toBeTruthy();

  // with a bad id, we should get a false response (it failed to update)
  let badUpdateResponse = await api.updatePostDescription(
    creationResponse.id + 1,
    "foo"
  );

  // assert it returns false (it failed)
  expect(badUpdateResponse).toBeFalsy();

  // set a variable for our comment
  let myValue = "I am the value";

  // create a new comment on our post
  let createCommentResponse = await api.createComment(
    myValue,
    getPostResponse.id
  );

  // assert ordinary correct behavior
  expect(createCommentResponse.id).toBeGreaterThan(0);
  expect(createCommentResponse.success).toBeTruthy();

  // get all the comments for this post (should be just 1)
  let getCommentsResponse = await api.getComments(getPostResponse.id);

  // assert correct data in response
  expect(getCommentsResponse.length).toEqual(1);
  expect(getCommentsResponse[0]["id"]).toBeGreaterThan(0);
  expect(getCommentsResponse[0]["value"]).toEqual(myValue);

  // try getting comments for non-existent post
  // result should simply be an empty array (lots of posts have no comments!)
  let badCommentsResponse = await api.getComments(getPostResponse.id + 1);
  expect(badCommentsResponse.length).toEqual(0);
});

// test("test", () => {
//   expect(true).toBeTruthy();
// });

// test("happy path - I should be able to create a new Post", async () => {
//   render(<App />);

//   const nameInput = screen.getByLabelText("Name");
//   userEvent.type(nameInput, "bob");

//   const descInput = screen.getByLabelText("Description");
//   userEvent.type(descInput, "Hi I am the description");

//   const button = screen.getByRole("button");
//   userEvent.click(button);

//   const successAlert = await screen.findByText("Success");
//   expect(successAlert).toBeVisible;
// });
