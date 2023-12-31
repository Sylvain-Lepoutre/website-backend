import { render, screen } from "@testing-library/react";
import type { MockedProviderProps } from "@apollo/client/testing";
import { MockedProvider } from "@apollo/client/testing";
// import userEvent from "@testing-library/user-event";
import type { DocumentNode } from "@apollo/client";
import { gql } from "@apollo/client";

import ArticleUpdate from "../../src/app/articleupdate/[id]/page";

const ARTICLE: DocumentNode = gql`
  query findArticle($id: Cuid!) {
    findArticle(id: $id) {
      id
      title
      content
      createdAt
    }
  }
`;

const UPDATE_ARTICLE: DocumentNode = gql`
  mutation updateArticle($id: Cuid!, $title: String!, $content: String!) {
    updateArticle(id: $id, title: $title, content: $content) {
      id
      title
      content
      createdAt
    }
  }
`;
const mockArticle = {
  cuid: "",
  title: "Article 1",
  createdAt: "2023-06-25",
  content: "Content 1",
};
const mocks: MockedProviderProps["mocks"] = [
  {
    request: {
      query: ARTICLE,
      variables: {
        id: mockArticle.cuid,
      },
    },
    result: {
      data: {
        articles: [
          {
            id: mockArticle.cuid,
            title: mockArticle.title,
            content: mockArticle.content,
            createdAt: mockArticle.createdAt,
          },
        ],
      },
    },
  },

  {
    request: {
      query: UPDATE_ARTICLE,
      variables: {
        id: mockArticle.cuid,
        title: mockArticle.title,
        content: mockArticle.content,
      },
    },
    result: {
      data: {
        updateArticle: {
          ...mockArticle,
          title: "Updated Article 1",
          content: "Updated Content 1",
        },
      },
    },
  },
];

it("Should render the list of article lines", async () => {
  render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <ArticleUpdate />
    </MockedProvider>
  );

  expect(await screen.findByText("Article 1")).toBeInTheDocument();
  expect(await screen.findByText("Content 1")).toBeInTheDocument();

  const updateButton = screen.getByText("Mettre à jour");
  expect(updateButton).toBeInTheDocument();

  const user = userEvent.setup();
  await user.click(await screen.findByText("Mettre à jour"));
  expect(await screen.findByText("Updated Article 1")).toBeInTheDocument();
  expect(await screen.findByText("Updated Content 1")).toBeInTheDocument();
});

it("should render a <form> element", async () => {
  render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <ArticleUpdate />
    </MockedProvider>
  );

  const form = await screen.findByRole("form");

  expect(form).toBeInTheDocument();
});
