# Get Started

<p style="border: 1px solid #1a78c2; padding: 10px; background-color: #f2f2f2; border-radius: 8px;">
 This page follows <a href=https://github.com/ansys-internal/granta-cloud-data-examples/blob/main/SampleHostApps/NoHost/SimpleExample.py>SimpleExample.py</a>
</p>



Launch the Granta Material Picker in a browser and obtain data for the material models selected for use in your application.

## Imports
Import required packages for the workflow. 

:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="1-4":::

## Authentication

Obtain an access token from Ansys ID and format an authentication header. The underlying standard used is OIDC. 
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="6-15":::

## Connect to the Granta Integration Service

Create a session on the Granta Integration Service and store the response from that call.
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="17-22":::

## Launch the Granta Material Picker

Launch the Granta Material Picker in a browser (this example uses the default web browser). The session uid from the previous step is required here.

:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="24-27":::

In the browser, you can now search for materials and select material models to transfer to your application.

## Receive model data

Retrieve the material model data from the Granta Integration Service.
:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="29-33":::

Your application can now use the material data contained in `data_response`. Replace the `print` statement with your code to handle the material data. 