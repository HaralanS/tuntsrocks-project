const express = require('express');
const { google } = require('googleapis');

const app = express();
app.use(express.json());

async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  })

  const client = await auth.getClient();

  const googleSheets = google.sheets({
    version: 'v4',
    auth: client
  })

  const spreadsheetId = "1lnEImf7wy2SsKE0arTr5u4iCIZbeFQbthEip10jgNlM"

  return {
    auth,
    client,
    googleSheets,
    spreadsheetId,
  }

}


app.post("/updateData", async (req, res) => {
  const { googleSheets, auth, spreadsheetId } = await getAuthSheets();
  const { values } = req.body;
  for (let i = 3; i < values.length; i++) {
    let averageGrade = (parseInt(values[i][3]) + parseInt(values[i][4]) + parseInt(values[i][5])) / 3;
    let absence = values[i][2] > 15 ? "Reprovado por Falta" : "pass";
    if (absence == "Reprovado por Falta") {
      values[i][6] = absence;
      values[i][7] = 0;
    } else if (averageGrade < 50) {
      values[i][6] = "Reprovado por Nota";
      values[i][7] = 0;
    } else if (averageGrade > 70) {
      values[i][6] = "Aprovado";
      values[i][7] = 0;
    } else {
      const finalGrade = 100 - averageGrade;
      values[i][6] = "Exame Final";
      values[i][7] = finalGrade.toFixed(0);
    }

  }

  const updateData = await googleSheets.spreadsheets.values.update({
    spreadsheetId,
    range: "engenharia_de_software!A1:H27",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: values,
    }
  })

  res.send(updateData.data)
})

app.listen(3001, () => console.log("Rodando na porta 3001"));

