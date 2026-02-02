# Getting Started 

In order to use Granta Cloud Connected Materials, you will need an account on this system that has access to the Granta Cloud instance. We will provide a URL to sign up to the Cloud instance here in future. Ansys will host the Cloud instance of Granta MI. 

An application's point of contact with Granta Cloud Connected Materials is the Granta Integration Service REST API. This API brokers data between Granta services and your application. 

Any programming environment that can execute HTTP requests and parse a JSON response should be able to use the Granta Integration Service. 

For a simpler and more performant workflow, HTTP SSE (Serverside events) can be used for part of the workflow.

In our examples, we will be using python - python is included as a scripting language in many application engineering programs.

Your choice of programming language may be restricted by the rest of your application environment. 


## Quick start for python

### Pre-requisites
You can download python from [https://www.python.org/downloads/](https://www.python.org/downloads/). This documentation was written against Python 3.11.4.

We have provided an example script that interacts with the Granta Integration Service and launches the Granta Material Picker. To run this script, you will need the requests module installed:

```cmd
python -m pip install requests msal
```

Download this script:

[Granta Integration Service Python example](https://github.com/ansys-internal/granta-cloud-data-examples/blob/main/SampleHostApps/NoHost/SimpleExample.py) [raw file](https://github.com/ansys-internal/granta-cloud-data-examples/blob/raw/SampleHostApps/NoHost/SimpleExample.py)

Run the script without arguments

```cmd
python SimpleExample.py
```

This will launch the Granta Material Picker:

![Material Picker screenshot](images/MMP-web-ui.png)
