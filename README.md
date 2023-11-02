# Database Seeder

<h1 align="center">  Database Seeder for postgresql</h1>
<p align="center">
 This guide will walk through seeding a Postgres database. It will cover creating a Node script to seed the data
</p>

<br>
<br>

## Table of Contents

- [Prerequisites](#Prerequisites)
- [What do we mean by seed? ](#Whatdowemeanbyseed? )
- [Dependencies](#Dependencies)
- [Configurations](#Configurations)
- [Get Started](#GetStarted)
- [Environment variables](#environment-variables)

## Prerequisites


  - You must have Postgres installed on your machine
  - You must have Node installed on your machine
  - It is assumed that you have Postgres setup and know-how to access its databases, though the guide will cover some basic commands towards the end.This guide uses the default user postgres for accessing the database.

## What do we mean by seed?

The process of seeding (in the context of databases) is to insert or populate the initial data into the database. This can be either a manual or automated step in the setup of an application. Seeding can be used when testing different branches, for example, if you have a dev branch where you want to test some new sorting query against the database, seeding would be a good way to test against data that won't affect a production build. Of course, there are many reason one might choose to seed a database. In some instances, an applications database requires some form of data present before it will work properly, such as an admin account. But more often than not seeding would take place pre-install and thus allow the user to begin using the app without any issues.

## Dependencies

```sh
-  faker 6.1.1 
-  dotenv,
-  lodash 
-  pg 8.7.3
```

## Configurations
the clone the .env.example and name it .env  Set the parameters as per the db 

```sh
PGUSER=postgres
PGHOST=localhost
PGPASSWORD=test1234
PGDATABASE=translationsdb
PGPORT=5432
```

## Get Started

- Install NodeJS **LTS** version from NodeJs Official Page
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Open Terminal
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- (If not) Run in terminal `npm seed:customer` to seed customer data
- (If not) Run in terminal `npm seed:user` to seed user data 