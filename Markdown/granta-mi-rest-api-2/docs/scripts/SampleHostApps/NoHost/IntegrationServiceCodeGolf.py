import requests
import json
import webbrowser

a="https://azeww22lb0301.win.ansys.com"
b=":7071/api/v1/sessions/"
c=json.loads(requests.put(a+b, json={'name':'a'}, verify=0).text)['uid']
webbrowser.open(a+"/grantami/#/granta-material-picker?sessionId="+c)
print(requests.get(a+b+c+"/data", verify=0).content.decode())