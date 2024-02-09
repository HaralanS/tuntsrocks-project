# Node.js API
This is a simple Node.js API built using Express and Google APIs. It provides a basic setup for creating RESTful endpoints. The application will read a Google Sheets spreadsheet, search for the necessary information, calculate and write the result in the spreadsheet.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

## Google Sheet Link
https://docs.google.com/spreadsheets/d/1lnEImf7wy2SsKE0arTr5u4iCIZbeFQbthEip10jgNlM/edit?usp=sharing

## Prerequisites
Make sure you have Node.js and npm installed on your machine.

## Installation

#### Clone the repository to your local machine:

git clone https://github.com/HaralanS/tuntsrocks-project

#### Navigate to the project directory:

cd tuntsrocks-project

#### Initialize npm:

npm init

#### Install dependencies:

npm install express googleapis nodemon

## Usage

To start the server, run:

npm start
The server will start listening on port 3001 by default. You can change this in the index.js file.

## Making a POST Request
To make a POST request to this API, you can use tools like Hoppscotch or Postman. Here's how to do it using Hoppscotch:

Open Hoppscotch in your browser and enter the URL where your API is hosted (http://localhost:3001/updateData).

Select the POST method.

In the "Body" section, select "JSON" as the body type.

Enter your JSON request body, since all the logic to change the google sheet is already in the api, we will just need to simulate a frontend making a request with the static content of the google sheet:

{  "values": [
    [
      "Engenharia de Software"
    ],
    [
      "Total de aulas no semestre: 60"
    ],
    [
      "Matricula",
      "Aluno",
      "Faltas",
      "P1",
      "P2",
      "P3",
      "Situação",
      "Nota para Aprovação Final"
    ],
    [
      "1",
      "Eduardo",
      "8",
      "35",
      "63",
      "61"
    ],
    [
      "2",
      "Murilo",
      "8",
      "64",
      "97",
      "36"
    ],
    [
      "3",
      "Guilherme",
      "19",
      "68",
      "74",
      "51"
    ],
    [
      "4",
      "Flavia ",
      "23",
      "66",
      "98",
      "62"
    ],
    [
      "5",
      "Ruan",
      "13",
      "80",
      "65",
      "41"
    ],
    [
      "6",
      "Arnando",
      "23",
      "83",
      "68",
      "77"
    ],
    [
      "7",
      "Lucas",
      "5",
      "38",
      "53",
      "80"
    ],
    [
      "8",
      "Fabio",
      "10",
      "53",
      "96",
      "89"
    ],
    [
      "9",
      "Alisson",
      "15",
      "45",
      "61",
      "68"
    ],
    [
      "10",
      "Felipe",
      "12",
      "32",
      "41",
      "85"
    ],
    [
      "11",
      "Rachel",
      "11",
      "84",
      "66",
      "39"
    ],
    [
      "12",
      "Jouy",
      "13",
      "42",
      "93",
      "57"
    ],
    [
      "13",
      "François",
      "19",
      "59",
      "87",
      "89"
    ],
    [
      "14",
      "Dâmaris",
      "10",
      "44",
      "50",
      "62"
    ],
    [
      "15",
      "Leonardo",
      "16",
      "83",
      "92",
      "32"
    ],
    [
      "16",
      "Guilherme ",
      "6",
      "36",
      "38",
      "76"
    ],
    [
      "17",
      "Wesley",
      "16",
      "41",
      "52",
      "87"
    ],
    [
      "18",
      "Yuri",
      "2",
      "87",
      "75",
      "50"
    ],
    [
      "19",
      "Kira",
      "8",
      "36",
      "46",
      "48"
    ],
    [
      "20",
      "Cleici",
      "22",
      "91",
      "88",
      "92"
    ],
    [
      "21",
      "João Moacir",
      "23",
      "38",
      "90",
      "98"
    ],
    [
      "22",
      "Bruno",
      "15",
      "96",
      "37",
      "100"
    ],
    [
      "23",
      "Elcio",
      "9",
      "73",
      "71",
      "75"
    ],
    [
      "24",
      "Criscia",
      "0",
      "50",
      "95",
      "84"
    ]
  ]
}

Click the "Send" button to make the request.
## Routes
http://localhost:3001/updateData
## Authors
Haralan Santana
