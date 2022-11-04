## ArtMarts

[ArtMarts](https://artmarts.herokuapp.com/) is an MVP clone of the [Etsy](https://www.etsy.com/) web application.  


### Site Resources: 

* [ArtMarts Live Link](https://artmarts.herokuapp.com/)
* [API Routes](https://github.com/codewjm/ArtMarts/wiki/API-Routes)
* [Database Schema](https://github.com/codewjm/ArtMarts/wiki/Database-Schema)
* [MVP Features](https://github.com/codewjm/ArtMarts/wiki/MVP-Features)
* [Redux State Shape](https://github.com/codewjm/ArtMarts/wiki/Redux-State-Shape)
* [User Stories](https://github.com/codewjm/ArtMarts/wiki/User-Stories)
* [Wireframes](https://github.com/codewjm/ArtMarts/wiki/Wireframes)

## Tech Stack: Frameworks, Platforms, and Libraries

Frontend:

![image](https://user-images.githubusercontent.com/20654267/192156837-122333b5-1337-4630-abcd-e48f538c141d.png)
![image](https://user-images.githubusercontent.com/20654267/192156876-64b1afdd-e93f-4f6b-a0ff-2d7e9b75258a.png)
![image](https://user-images.githubusercontent.com/20654267/192156881-268b4f35-02b2-4113-861b-c2ea54b6ff87.png)
![image](https://user-images.githubusercontent.com/20654267/192156890-ca8a0612-9350-4d10-88f7-cc09dd740865.png)
![image](https://user-images.githubusercontent.com/20654267/192156892-eddb0af2-29cc-46bf-9d6d-fc0ead32005b.png)


Backend:

![image](https://camo.githubusercontent.com/a1b2dac5667822ee0d98ae6d799da61987fd1658dfeb4d2ca6e3c99b1535ebd8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534)
![image](https://camo.githubusercontent.com/43c40e9f61f01e780f4cfed5dafda9e3494310ba1b6ea11e20c4949e556a47c3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f666c61736b2d2532333030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d666c61736b266c6f676f436f6c6f723d7768697465)
![image](https://user-images.githubusercontent.com/20654267/192156896-44718733-3b28-4f64-934a-78522df3a444.png)

Database: 

![image](https://camo.githubusercontent.com/f48e6e8822dbed2b14a693017b364d00813b7872df67d95e5844aa3cf94ec482/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c416c6368656d792d3130303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c266c6f676f436f6c6f723d424131323132266c6162656c436f6c6f723d41443030303026636f6c6f723d413930303030)

Hosted On:

![image](https://user-images.githubusercontent.com/20654267/192156972-28d4bd6a-7012-4d73-8bbd-105cfba12108.png)


# ArtMarts API Preview:

## Current MVP Features
* Shops 
* Items

## Splash Page 

![splash-page](https://user-images.githubusercontent.com/95896008/199967386-f937f9a6-9a53-4f52-af15-44c6c6691ded.png)

## Register New User Form

![register-page](https://user-images.githubusercontent.com/95896008/199967546-57734614-0458-4546-ab89-6ce03cf31ce7.png)

## Sign In Form 

![sign-in-page](https://user-images.githubusercontent.com/95896008/199967749-bb741801-3fa5-4228-a6d8-abd399560e28.png)

## User ArtMarts Page

![user-shop-page](https://user-images.githubusercontent.com/95896008/199967972-178777a6-b528-4e9b-a912-6cdef954224f.png)

## ArtMart Creation Form

![create-artmart-page](https://user-images.githubusercontent.com/95896008/199968140-b9609463-ccac-4237-a3fa-18c611b91832.png)


## Individual ArtMart Page

![owned-shop-page](https://user-images.githubusercontent.com/95896008/199968180-8805ff11-e743-4dae-8c5a-88021a7afebd.png)

## Item Creation Form (Add Item to an ArtMart)

![create-item-form](https://user-images.githubusercontent.com/95896008/199968264-740d1f0b-3cc9-4956-91a6-f99dfb89ffe3.png)

## Individual Item Page

![single-item-page](https://user-images.githubusercontent.com/95896008/199969425-f832a445-520e-4c9b-8c84-224ce85025b4.png)


### Road Map: Future Features
* AWS Implementation for Uploading Images
* Search Bar
* Reviews 
* Categories 
* Search 

## Build Steps:
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/codewjm/ArtMarts.git
   ```

2. Install dependencies

      ```bash
      pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Make sure the SQLite3 database connection URL is in the **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your Flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.
