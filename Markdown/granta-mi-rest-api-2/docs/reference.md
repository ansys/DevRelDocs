# Quick start for python

Download and run the code in this script

[Integration Service Python example](https://github.com/ansys-internal/granta-cloud-data-examples/blob/main/SampleHostApps/NoHost/IntegrationServiceCodeGolf.py) [raw file](https://github.com/ansys-internal/granta-cloud-data-examples/blob/raw/SampleHostApps/NoHost/IntegrationServiceCodeGolf.py)

Run this script without arguments

```cmd
python IntegrationServiceCodeGolf.py
```

## Breaking down this script

This creates a session on the integration service
```python
c=json.loads(requests.put(a+b, json={'name':'a'}, verify=0).text)['uid']
```

This launches the web UI
```python
webbrowser.open(a+"/grantami/#/material-model-picker?sessionId="+c)
```

This waits for, picks up, and prints the material model chosen in the browser.
```python
print(requests.get(a+b+c+"/data", verify=0).content.decode())
```