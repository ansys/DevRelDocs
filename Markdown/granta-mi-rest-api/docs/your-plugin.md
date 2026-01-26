# Writing your plugin

Here is some inspiration for designing an integration with Granta Cloud Connected Materials using the Granta Material Picker (GMP).
The examples have been developed with a typical workflow in mind, but your application's material selection workflow may have different requirements. 

## Launch point

You will need to find some space in the UI of your application to launch the Granta Material Picker.

Typically, this is a button on a toolbar:

![Material Model Picker Button](images/launch-ribbon.png)

or a context menu option:

![Material Model Picker Context Menu Option](images/launch-ctx-menu.png)

Your application code might require the plugin to choose a destination for incoming materials (for example, a part or a library) when the GMP is launched. 

## Authentication

Your code needs an access token provided by Ansys ID in order to use the Granta Integration Service API. See [Authentication](/docs/authentication.html).
  
## Create an integration service session

Your code needs to create a session on the Integration Service.
Use [HTTP POST on the sessions endpoint](/integration_service.html#integration_service_api_v1_Ansys_Integration_Service_1_0_0_sessions_post)

Here is an example payload:

```json
{
  "name": "My Application",
  "settings": {
    "title": "My Application",
    "packageName": "MyPackageName",
    "unitSystem": "metric",
    "pollSeconds": 60
  }
}
```

The response is a JSON object containing a uid key.

`"uid": "6bd31d4e-86ff-4b14-8fea-e74386d49e8b"`

Your code should keep the ID of this session for future usage. 


  
## Launch a browser
Your end user must be prompted to select some material models. Do this by launching a browser at this URL and append your session ID. For example

`https://test-grantami.awsansys7np.onscale.com/grantami/#/granta-material-picker?sessionId=<sessionid>`

In most programming languages and operating systems, there is a way to launch the system browser at a certain URL. In Python, for example, you can use 

```python
import webbrowser
webbrowser.open("https://test-grantami.awsansys7np.onscale.com/grantami/#/granta-material-picker?sessionId="<sessionid>)
```

## Receive model data
There are two ways to receive the data (in JSON format) that the user has selected for import. 

The best way is to listen on a Server-side Event (SSE) using HTTP on the [session data SSE endpoint](/integration_service.html#integration_service_api_v1_Ansys_Integration_Service_1_0_0_get_sessions_uid_data_sse).

A simpler way is to send an [HTTP GET for your session data](/integration_service.html#integration_service_api_v1_Ansys_Integration_Service_1_0_0_get_sessions_uid_data)

## Ending your session (optional)

Depending on the requirements of your workflow, you might want to signal to the user that they should stop selecting materials in the Granta Material Picker. For example, the user may have selected enough materials to satisfy your workflow and a further material would not be used. 


To end a Granta Material Picker session, send a [DELETE to your session URL](/integration_service.html#integration_service_api_v1_Granta_Integration_Service_1_0_0_sessions_uid_delete).

This will disable the user interface controls in the web browser tab for your session, and materials will no longer be available on the data endpoints.

If you do not end your session, the web UI will remain active and the session can be used to transfer further material models. 
