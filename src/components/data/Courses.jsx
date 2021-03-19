import React, { Component } from "react";

const courses = [
  {
    id: 123245,
    name: "Data Structures",
    startDate: new Date(),
    status: "Ongoing",
    resources: ["pooja", "jol"],
  },
  {
    id: 123245,
    name: "Signals and Systems",
    startDate: new Date(),
    status: "Completed",
    resources: [],
  },
];

function getCourses() {
  return courses;
}

export default getCourses;
