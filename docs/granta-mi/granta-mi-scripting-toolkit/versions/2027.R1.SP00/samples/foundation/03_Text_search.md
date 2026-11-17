# Text search

Search a Granta MI database for records containing a specified text value.

This example demonstrates:

* Creating a connection to a Granta MI server
* Retrieving Granta MI databases from the server
* Searching a Granta MI database with the *SimpleTextSearch* operation

## Create a Granta MI Session

Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.


```python
import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)
```

## Select a database

View the databases available on your Granta MI server.


```python
databases = session.browse_service.get_databases().databases

print(f"Found {len(databases)} databases on the Granta MI Server")
for d in databases:
    print(f"Database key: {d.db_key}, Database name: {d.volume_name}")
```
*Previous cell output:*
```output
Found 1 databases on the Granta MI Server
Database key: MI_Training, Database name: MI Training
```
## Search a database

Search in the MI Training database for records containing the text *Leather*.


```python
db_key = "MI_Training"
search_text = "leather"

simple_text_search = gdl.SimpleTextSearch(search_value=search_text, db_key=db_key)
search_response = session.search_service.simple_text_search(simple_text_search)
```

Print the results returned by the search.


```python
for result in search_response.search_results:
    print(result.short_name)
```
*Previous cell output:*
```output
Leather
Potassium chromate [7789-00-6]
Alkanes, C10-13, chloro;  (Short chain chlorinated paraffins ) [85535-84-8]
Exercise Model Answers.ipynb
```