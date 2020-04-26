# Web Applications Development – Na Matho - Documentation


Web Application Architecture and Technologies
------------------------------
## Technologies

- React
- Express
- Node
- MongoDB Atlas 
- Semantic UI
- Multer
- Google Firebase

When building the Holiday Card Maker web application we decided to use the MERN Stack. MERN Stack comprises of four technologies namely: MongoDB, Express.js, React.js and Node.js. We chose this stack because of its easy and fast deployment.   

![MERN Stack](https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg)


## Architecture

The illustration below is an example of how the different systems interact with one another. The user uploads a photo and React stores the image on Googe Firebase, in addition, sends to the server `Express.js/Node.js` which then stores the image's metadata in MongoDB.

<img src="https://user-images.githubusercontent.com/39684482/78522228-8db29900-7781-11ea-9306-485fe6913703.png" width="90%"></img> 


## Backend Development

### Node JS

Node.js is an open source JavaScript runtime environment built on Chrome's V8 JS engine. It allows users to run code on the server(outside the browser). Node.js will be used to run Express and serve as the backend API code to handle HTTP requests/response. Because of Nodes popularity and community base, Node Pack  Manager ( `npm` ) allows users to choose from thousands of free packages ( `node modules` ) to download. 


### Express JS

A web framework built for Node.js. Express makes it simpler and easier to write backend code. Express helps in designing APIs and handle `HTTP modules`. We used express to run on a port that we specify and make requests and responses. The following code creates a server where browsers can connect to. Once we are connected to `localhost:5000`. We can perform CRUD operations. In express, we can handle GET request with the `get` method. 


<img src="https://user-images.githubusercontent.com/39684482/78520194-9784ce00-777a-11ea-8a8d-5dc04613cfe7.png" width="45%"></img> 


## Multer

For uploading files we used multer to indicate the destination and the filename. Code below

<img src="https://user-images.githubusercontent.com/39684482/78520195-981d6480-777a-11ea-820a-e45bfa246008.png" width="45%"></img> 


### MongoDB

MongoDB is a document based open source database. Data is stored in the form of JSON style documents, which makes structuring of a single object clear. 

Below is an example of an image file metadata in JSON documented format. With MongoDB we used GridFS to storing files that may exceed the BSON size limit of 16 MB.
<img src="https://user-images.githubusercontent.com/39684482/78518963-b97c5180-7776-11ea-8e61-2002fd7c4833.png" width="90%"></img> 

The following code below uses the GridFS to connect to our database and divides the file into parts or chunks or binary and file's metadata. Click [GridFS](https://docs.mongodb.com/manual/core/gridfs/) for more details.

<img src="https://user-images.githubusercontent.com/39684482/78523868-05cf8d80-7787-11ea-84b4-5391f4c2a5ad.png" width="45%"></img> 

## Frontend Development

### Semantic UI Design

For web design we used Semantic UI because of its sleek and modern design. Semantic UI is a front end framework that works very well with React. It allowed us to add multiple design components and elements to our page with ease. We also implemented the image-picker package in order to create a simple template selection which showcases the full image overlay once the user selects their desired design.

<img src="https://user-images.githubusercontent.com/39684482/78523817-e6386500-7786-11ea-9b2d-8bc8c8d45141.png" width="90%"></img> 

### React JS

The following code displays React event handling. When the user uploads a photo, the function handleUpload() performs two tasks. One the image file gets sent to Google Firebase for storing and also sends the image back for previewing. Second, it sends the file to backend server (Express/Node). From there it GridFS divides the file into parts and stores the files in JSON documented format in MongoDB.

<img src="https://user-images.githubusercontent.com/39684482/78523536-f7cd3d00-7785-11ea-89dc-8da9a3d307b9.png" width="45%"></img> <img src="https://user-images.githubusercontent.com/39684482/78523537-f865d380-7785-11ea-9aa8-3c8640d030de.png" width="45%"></img> 

### Google Firebase

Google firebase stored user images and would be sent back to the client for previewing.

<img src="https://user-images.githubusercontent.com/39684482/78529940-901fed80-7797-11ea-8cc8-678c8b0bd903.png" width="90%"></img> 

