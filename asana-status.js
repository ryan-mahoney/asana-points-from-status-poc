const asana = require("asana");

const ASANA_TOKEN = process.env.ASANA_TOKEN;
const ASANA_PROJECT = process.env.ASANA_PROJECT;

const client = asana.Client.create().useAccessToken(ASANA_TOKEN);

const parseCompletedFromText = (text) => {
  const lines = text.split("\n");
  const pointLine = lines.indexOf("Sprint points complete") + 1;
  if (pointLine === 0) return 0;
  return lines[pointLine];
};

client.projectStatuses
  .getProjectStatusesForProject(ASANA_PROJECT)
  .then(({ data }) => 
    Promise.all(
      data.map(({ gid }) =>
        client.projectStatuses.getProjectStatus(gid)
      )
    )
  )
  .then((data) => {
    data.forEach(({ created_at, text }) => {
      console.log(
        `${created_at.split("T")[0]}\t${parseCompletedFromText(text)}`
      );
    });
  });
