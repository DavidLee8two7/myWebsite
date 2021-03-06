import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Head from "next/head";
import Link from "next/link";
import PaginationStyles from "./styles/PaginationStyles";
import Error from "./styles/ErrorMessage";
import { perPage } from "../config";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    blogsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        const count = data.blogsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        return (
          <PaginationStyles>
            <Head>
              <title>
                David's Blogs - Page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{ pathname: "blogs", query: { page: page - 1 } }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ⬅️ Prev Page
              </a>
            </Link>
            <p>
              Page ({props.page}) of <span className="totalPages">{pages}</span>
              !
            </p>
            <p className="toggle">
              Total of ( {count} ) Blogs has been updated.
            </p>
            <Link
              prefetch
              href={{ pathname: "blogs", query: { page: page + 1 } }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next Page ➡️
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
export { PAGINATION_QUERY };
