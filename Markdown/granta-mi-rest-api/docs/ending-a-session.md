# Ending a session

If your host application is no longer accepting materials, end the session by using the DELETE verb on the session URL:


:::code source="../../SampleHostApps/NoHost/SimpleExample.py" language="python" range="35-36":::

This causes the Granta Material Picker to display the following message:

![Material Picker screenshot with session ended popup](images/session-ended.jpeg)

You may want to end a session for various reasons:

- your host application is closing, or has unloaded its project

- the project you are writing data to has become "read only"

- your host application has received all the materials that it has asked a user to specify