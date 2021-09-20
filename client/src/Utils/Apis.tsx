import axios from "axios";

const graphqlRequest = (
  { headers, ...rest }: any,
  query: any,
  variables: any
) => {
  const options = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    validateStatus: function (status: number) {
      return status >= 200 && status < 300;
    },
  };
  return new Promise((resolve, reject) => {
    axios({ ...options, data: { query, variables } })
      .then((response: unknown) => {
        resolve(response);
      })
      .catch((error: any) => {
        console.log("err api", error);
        reject(error);
      });
  });
};

export { graphqlRequest };
