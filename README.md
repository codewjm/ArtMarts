> ![ArtMarts-logo-old-2](https://user-images.githubusercontent.com/95896008/199977578-f68a9b4f-56c6-4ffd-b228-a6ea865f67b2.png)  
> ### **_"Monetize Your Passion_"**

# **ArtMarts**

**[ArtMarts](https://artmarts.herokuapp.com/)** is an online marketplace full stack web application inspired by [Etsy](https://www.etsy.com/). With a focus on artists, ArtMarts offers its users the ability to purchase and/or sell art-related products and supplies. Our aim is to **_empower_** artists through trade.


#### Site Resources: 

* [ArtMarts Live Link](https://artmarts.herokuapp.com/)
* [API Routes](https://github.com/codewjm/ArtMarts/wiki/API-Routes)
* [Database Schema](https://github.com/codewjm/ArtMarts/wiki/Database-Schema)
* [Features](https://github.com/codewjm/ArtMarts/wiki/MVP-Features)
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


# ArtMarts API Preview

### Current MVP Features:
* User Authentication
* Shops 
* Items

## ArtMarts Home Page (Splash Page)

![splash-page](https://user-images.githubusercontent.com/95896008/199979438-c060fa13-223b-4739-97a3-a021c5cb0e7b.png)

## New User Registration Form

![register-page](https://user-images.githubusercontent.com/95896008/199979468-ef5ae3ca-44a4-488a-ac21-7fa262b44282.png)

## Sign In Form 

![sign-in-page](https://user-images.githubusercontent.com/95896008/199979610-f63f6d81-e668-482b-ba76-b5665a468f70.png)

## User ArtMarts Page

![user-shop-page](https://user-images.githubusercontent.com/95896008/199979629-735f7cef-de97-4008-b3b7-593f55eb94e7.png)

## ArtMart Creation Form

![create-artmart-page](https://user-images.githubusercontent.com/95896008/199979669-e6e45c66-1e43-48df-b855-5add150e8af8.png)

## Individual ArtMart Page

![owned-shop-page](https://user-images.githubusercontent.com/95896008/199979803-c5e0ad73-c7a6-4fa0-aacf-b80a19258580.png)

## Item Creation Form (Add Item to an ArtMart)

![create-item-form](https://user-images.githubusercontent.com/95896008/199979870-2daedc98-c0f7-4f73-8958-a6756b1ba725.png)

## Individual Item Page

![single-item-page](https://user-images.githubusercontent.com/95896008/199979904-a2ea4e3c-1e48-4220-9538-12df9440daca.png)


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
