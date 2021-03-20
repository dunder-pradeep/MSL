import React, { Component } from "react";

const baseUrl = "/courses/";

function fillID() {
  for (let i = 0; i < recommendations.length; i++)
    recommendations[i].link = `${baseUrl}${recommendations[i].id}`;
}

const recommendations = [
  {
    id: 1324,
    name: "Coursera",
    desc: "some random course i found for u",
    link: "",
  },
  {
    id: 134,
    name: "Hello world",
    desc: "some random course i found for u",
    link: "",
  },
  {
    id: 1524,
    name: "Random topic",
    desc: "some random course i found for u",
    link: "",
  },
  {
    id: 1924,
    name: "Random topic",
    desc: "some random course i found for u",
    link: "",
  },
];

fillID();

function getRecom() {
  return recommendations;
}

export default getRecom;
