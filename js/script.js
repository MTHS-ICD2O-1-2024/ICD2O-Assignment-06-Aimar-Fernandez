// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Jun 2025
// This file contains the JS functions for index.html

"use strict"

async function updateDay() {
  try {
    const infoJSON = await fetch("https://worldtimeapi.org/api/timezone/America/Toronto")
    const JSONdata = await infoJSON.json()
    const dayOfYear = await JSONdata.day_of_year
    document.getElementById("answer").innerHTML = 
      "<p>" + dayOfYear + " / 365 days through the year</p>"
  }
  catch (error) {
    document.getElementById("answer").innerHTML = "<p>Error</p>"
  }
}
