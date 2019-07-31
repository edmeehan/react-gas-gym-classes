# Gym Class Attendance Sign-in App
I discovered Google App Scripts by accident in 2017 while working in Google Sheets. Upon further investigation, I felt I had stumbled upon a golden resource. I built this project to try out Google App Scripts capabilities and also create something with React. Enjoy!

* Demo - https://script.google.com/macros/s/AKfycbxie4-nC-H8W_sW1Qh55HAvXeMD1195-NUSilcoB14VwrQPWGeQ/exec
* Google Sheet - https://docs.google.com/spreadsheets/d/137AledrNYTQv7ZOODO-XK9O6JTT0k2kYMAPfYhzuXio/edit?usp=sharing
* Project Drive Folder - https://drive.google.com/drive/folders/1Vk1yb4O-Z62BmE48ZOFY_S9LwIcOdc4z?usp=sharing

## Basic Info
The app uses a google sheet to fetch member information and add an attendance entry when a member selects a class. The class schedule is fetched from a Google Calendar, and gym logo and member photos are fetched from a Google Drive folder.

Google Service API Scope used:
* spreadsheets - read, write
* calendar - read
* drive - read

![App Screen Shot](https://i.imgur.com/kgRvwtJ.png)

### Project Boilerplate
This project boilerplate was cloned from - https://github.com/enuchi/React-Google-Apps-Script.git

### React + Google Apps Script
*Use this demo project as your boilerplate React app for HTML dialogs in Google Sheets, Docs and Forms.*

This project uses labnol's excellent [apps-script-starter](https://github.com/labnol/apps-script-starter) as a starting point, adding support for React. It demonstrates how easy it is to build React apps that interact with Google Apps server-side scripts. Simply clone this project and modify the source code to get started developing with React for Google Apps Script client-side dialogs.

![Google Apps Script / React development](https://i.imgur.com/0yYQoYj.jpg "Start a React project for Google Apps Script")
*The demo app for Google Sheets shows insertion/deletion/activation of sheets through React-built HTML dialog.*
