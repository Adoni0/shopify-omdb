# shopify-omdb
Movie Nomination App

## Table of Contents
* [Demo](#demo)
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## Demo
![](shopify-demo1.gif)

![](demo2.gif)

## General Info
This application allows the user to search all films in the omdb database.

The user can nominate up to 5 of their favorite films to the nomination list. A film cannot be nominated twice, and you will see the "Nominate" button become disabled after its nomination. After 5 nominations, a success banner will appear congratulating the user on their choices. The list will not allow more than 5 nominations. 

To replace a film in the nomination list, simply hover over the movie poster of a film you have nominated. Here you will see the film's title, year of release, and a remove button appear. The remove button deletes a nomination from your list. Upon removing a film from the nomination list, you will see that it can be easily re-added to your list as the Nominate button will no longer be disabled.

## Technologies
Project is created with:
* React.js
* omdb API
* react-bootstrap
* react-multi-carousel
* node.js

## Setup
To run this project, you can clone the repository and use npm install

```
$ npm install
$ npm start