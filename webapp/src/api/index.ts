const serverAddr = process.env.REACT_APP_API_SERVER_ADDR;

export const getTitle = async (): Promise<string> => {
  const response = await (await fetch(`${serverAddr}/`)).json();
  return response.title;
};

/** Not used, Do Nothing */
export const postRoot = async (data: any) => {
  // TBD
};

/** My GQL Call func */
export const checkGQL = async () => {
  const query = `{
    allTodos { id }
  }`;

  const res = await (
    await fetch(`${serverAddr}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
  ).json();

  return res;
};
