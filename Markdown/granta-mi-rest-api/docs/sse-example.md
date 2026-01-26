# Using SSEs to wait for and retrieve data

<p style="border: 1px solid #1a78c2; padding: 10px; background-color: #f2f2f2; border-radius: 8px;">
 This page follows <a href=https://github.com/ansys-internal/granta-cloud-data-examples/blob/main/SampleHostApps/NoHost/SSEExample.py>SSEExample.py</a>
</p>


## Connect to the Granta Integration Service

This example illustrates using an SSE (Server Sent Event) connection to receive data. 
The advantage of using an SSE is that you do not have to write a polling loop to check for new data. 
The first part of this script (creating a session) is the same as in the Getting Started example.

:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="8-34":::


## Open an SSE connection
The SSE connection stays open indefinitely. You can receive data on this connection as soon as it is available

:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="38-39":::

## End the session
:::code source="../../SampleHostApps/NoHost/SSEExample.py" language="python" range="45-46":::
