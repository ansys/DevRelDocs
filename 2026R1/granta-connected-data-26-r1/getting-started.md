# Getting started 
An application's point of contact with Granta Connected Data is the Granta Integration Service REST API. This API brokers data between Granta services and your application. 

Any programming environment that can execute HTTP requests and parse a JSON response should be able to use the Granta Integration Service. 

For a simpler and more performant workflow, HTTP SSE (Server-Sent Events) can be used for part of the workflow.

Our examples use Python, but your application environment may restrict your choice of programming language.
### Authentication

In order to use Granta Connected Data, you need an account that has access to the Granta cloud instance. 

### Prerequisites
- A supported version of Python. You can download Python from [https://www.python.org/downloads/](https://www.python.org/downloads/).
- The following Python packages required by the example: 
    - `requests`
    - `msal`
- The example script `SimpleExample.py`, available here: [Python examples](./example-scripts/python_examples.zip)     


To get started:

1. Open a Command Prompt and navigate to the working directory.
1. Install the required Python packages using pip:
    
    ```cmd
    python -m pip install requests msal
    ``` 
1. Edit `SimpleExample.py` and replace the placeholder _`cloudserver.com`_ with the URL of the Cloud instance you are developing against. See [Examples](./examples.md).

1. Run the example script:
    ```cmd
    python SimpleExample.py
    ```

This launches the Granta Material Picker: 

![Material Picker screenshot](./images/MMP-web-ui.png)

You can now browse and search materials data for import to your application. Use the [User guide](./user-guide.md) to review basic concepts and material models, and understand how to integrate the Material Picker into your application.
