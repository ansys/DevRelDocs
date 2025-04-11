# Text search

Search a Granta MI database for records containing a specified text value.

This example demonstrates:

* Creating a connection to a Granta MI server
* Retrieving Granta MI databases from the server
* Searching a Granta MI database with the *SimpleTextSearch* operation

## Create a Granta MI Session

Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", autoLogon=True)
```

## Select a database

View the databases available on your Granta MI server.


```python
databases = session.browseService.GetDatabases().databases

print(f"Found {len(databases)} databases on the Granta MI Server")
for d in databases:
    print(f"Database key: {d.DBKey}, Database name: {d.volumeName}")
```
*Previous cell output:*
```output
Found 1 databases on the Granta MI Server
Database key: MI_Training, Database name: MI Training
```
## Search a database

Search in the MI Training database for records containing the text *Leather*.


```python
dbKey = "MI_Training"
searchText = "leather"

simpleTextSearch = gdl.SimpleTextSearch(searchValue=searchText, DBKey=dbKey)
simpleTextSearchResponse = session.searchService.SimpleTextSearch(simpleTextSearch)
```

Print the results returned by the search.


```python
for result in simpleTextSearchResponse.searchResults:
    print(result.shortName)
```
*Previous cell output:*
```output
Leather
Potassium chromate [7789-00-6]
Alkanes, C10-13, chloro;  (Short chain chlorinated paraffins ) [85535-84-8]
Exercise Model Answers.ipynb
```