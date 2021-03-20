import React, { Component } from "react";
const forums = [
  {
    id: 1,
    head: "General",
    title: "Title 1",
    author: "Useless boi",
    replyCount: 12,
  },
  {
    id: 2,
    head: "General",
    title: "Title 2",
    author: "Useless boi",
    replyCount: 132,
  },
  {
    id: 3,
    head: "Some specific topic",
    title: "Title 3",
    author: "Useless boi",
    replyCount: 134,
  },
];

export default function getForums() {
  return forums;
}
