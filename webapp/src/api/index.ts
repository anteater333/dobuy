
// ref. https://stackoverflow.com/questions/67507183/proxy-is-not-working-in-deployed-react-project-to-github-but-works-locally

export const apiAddr = "https://deg.anteater-lab.link/dobuy"

export const getTitle = async (): Promise<string> => {
  const response = await (await fetch(`${apiAddr}/`, {method: 'GET', headers: {
    'Access-Control-Allow-Origin': '*'
}})).json();
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
    await fetch(`${apiAddr}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
  ).json();

  return res;
};
