# MERN API E-COMMERCE APPLICATION

``réalisation d'un api pour une vitrines électroniques``

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

Une petite description du projet : Réalisation d'un api pour une vitrines électroniques

## Pour commencer

Une startup orientée vers la création des vitrines électroniques Vous avez actuellement votre site web réalisé sous Wordpress mais la plateforme en question ne répond pas à tous vos besoins présents et futurs. Ils en ont assez de dépendre des plugins et d'attendre toujours des mises à jour qui pourraient provoquer une panne à tout moment....

### Pré-requis

Pour cette raison, ils nous ont commandé, l'équipe de développement, une page Web responsive avec des fonctionnalités de commerce électronique. le but c'est de réaliser un api en utilisant expressJs...

- Une page principale avec quelques produits récemment ajoutés (Actualités).
- Une page où vous pouvez consulter la liste des produits disponibles et son category.
- Chaque produit doit avoir sa page de détail.
- Créer, lancer et partager des images Docker on utilisant docker compose.
- Réaliser le test d'intégration de notre application.

## Démarrage

Dites comment faire pour lancer votre projet --> npm start

## Fabriqué avec

Entrez les programmes/logiciels/ressources que vous avez utilisé pour développer votre projet

- [Materialize.css](http://materializecss.com) - Framework CSS (front-end)
- [Bootstrap](https:bootstrap.com) - Framework and collection between html and css
- [Mongodb](https:mongodb.com) -Database for nodejs projects
- [ExpressJs](https:expressjs.com)
-For build backend parte
- [ReactJs](https:reactjs.com)
-For build frentend parte
- [NodeJs](https:nodejs.com)
-Envirennement for work with javascript

## Auteur

**OUSSAMA ELKHALDAOUI** [](https://github.com/elkhaldaoui/)

## Dockerize this e-commerce application using Docker Compose

To dockerize this e-commerce application using Docker Compose, you will need to create a Dockerfile for each component of the application (e.g. the server, the React app, and the database) and a docker-compose.yml file to define the services and how they are linked together.

Here is an example Dockerfile for the server component of the application:
``FROM node:10

## Create app directory

WORKDIR /usr/src/app

## Install app dependencies

RUN npm install

## If you are building your code for production

- RUN npm ci --only=production

- Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]``

And here is an example Dockerfile for the client (React) component of the application:

FROM node:10

## Create derectoey

WORKDIR /usr/src/app

## where available

- RUN npm install

- If you are building your code for production :

-> RUN npm ci --only=production

## Bundle app source

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]``

For the database component, you can use an existing Docker image for MongoDB, such as mongo:4.2, and specify the necessary environment variables in the docker-compose.yml file.

Here is an example docker-compose.yml file that brings everything together:
``version: '3'<br>
  services:<br>
    server:<br>
    build:<br>
      context:<br>
      dockerfile: Dockerfile<br>
    ports:<br>
      - "5000:5000"
    depends_on:<br>
      - db<br>
    client:<br>
    build:<br>
      - context: client
      - dockerfile: Dockerfile<br>
    ports:<br>
      - "3000:3000"<br>
    db:<br>
      - image: mongo:4.2<br>
      - environment: MONGO_INITDB_ROOT_``

## To build the images and spin up the containers, you can run the following command

``docker-compose up``

## Test Uniter

To add unit tests to your e-commerce application, you can use a testing framework such as Jest. Jest is a popular JavaScript testing framework that works well with React applications, and it is already included as a dependency in the `package.json` file of the client component of the e-commerce application.

To write unit tests for your application, you will need to create test files in the `client/src/__tests__` directory or a subdirectory. The test files should have a `.test.js` or `.spec.js` extension, and they should contain test cases that exercise specific parts of your application code.

Here is an example test case that tests the ``addProduct`` function in the e-commerce application:

`import { addProduct } from '../utils/api';

test('addProduct adds a new product', async () => {
  const product = { name: 'Test Product', price: 19.99 };
  const res = await addProduct(product);
  expect(res.name).toBe('Test Product');
  expect(res.price).toBe(19.99);
});`

``To run the unit tests, you can use the 'npm test' command in the client directory. This will run Jest and execute all of the test cases in the '__tests__' directory.``
