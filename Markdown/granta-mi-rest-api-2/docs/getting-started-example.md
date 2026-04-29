<p style="border: 1px solid #1a78c2; padding: 10px; border-radius: 8px;">
The code in this page follows the example script `SSEExample.py`, available here: <a href="example-scripts/python_examples.zip">python_examples.zip</a>
</p>

# Getting Started

Launch the Granta Material Picker in a browser and obtain data for the material models selected for use in your application.

## Imports
Import required packages for the workflow. 

:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="1-4":::

## Authentication

Obtain an access token from Ansys ID and format an authentication header. The underlying standard used is OIDC. 
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="6-15":::

## Connect to the Granta Integration Service

Create a session on the Granta Integration Service and store the response from that call.
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="18-22":::

## Launch the Granta Material Picker

Launch the Granta Material Picker in a browser (this example uses the default web browser). The session uid from the previous step is required here.

:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="24-27":::

In the browser, you can now search for materials and select material models to transfer to your application.

## Receive model data

Retrieve the material model data from the Granta Integration Service.
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="30-34":::

Your application can now use the material data contained in `data_response`. Replace the `print` statement with your code to handle the material data. 