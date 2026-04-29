<p style="border: 1px solid #1a78c2; padding: 10px; border-radius: 8px;">
The code in this page follows the example script `SSEExample.py`, available here: <a href="example-scripts/python_examples.zip">python_examples.zip</a>
</p>

# Waiting for and retrieving data

This example illustrates using a Server-Sent Event (SSE) connection to receive data. The advantage of using an SSE is that you do not have to write a polling loop to check for new data. 

## Creating a Granta Integration Service session

The first part of this script (creating a session) is the same as in the Getting Started example:
:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="8-37":::

## Opening an SSE connection
Next we add the code to connect via SSE:

:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="40-41":::

This connection will stay open indefinitely, and you can receive data on this connection as soon as it is available.

To demonstrate receiving data from the SSE connection, add:

:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="43-45":::


This waits for events that have data and provides the information. In this example we wait for 3 events. An event will fire when you click "Fetch material data" in the Granta Material Picker.

## Ending the session

To close the session down and ensure no more materials can be received, send an HTTP `DELETE` request to the session URL:
:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="47-49":::`
