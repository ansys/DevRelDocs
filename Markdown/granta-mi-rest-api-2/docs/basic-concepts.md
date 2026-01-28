# Basic concepts

From the perspective of your application, interacting with Granta Cloud Connected Materials involves three main concepts:

- The Granta Integration Service
- The Granta Material Picker
- The material models

![Basic architecture diagram](images/basic-architecture.png)

## The Granta Integration Service
This service hosts a web API. It is the only API that your application needs to directly communicate with. Any data sent to and from the web application is stored here in your session.
  
## The Granta Material Picker
This is a browser web application. Those who have used Granta MI may recognize the look and feel of the application, it allows end users to pick data for import to your application.
  
![Material Model Picker screenshot](./images/MMP-web-ui.png)

## The material models
  Material models are data in a JSON format. They are selected for import in the Granta Material Picker. The information in these models should be used to add materials data to a project or material library in your simulation application.