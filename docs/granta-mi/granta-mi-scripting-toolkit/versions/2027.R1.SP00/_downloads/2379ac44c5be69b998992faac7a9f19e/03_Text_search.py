# # Text search
#
# Search a Granta MI database for records containing a specified text value.
#
# This example demonstrates:
#
# * Creating a connection to a Granta MI server
# * Retrieving Granta MI databases from the server
# * Searching a Granta MI database with the *SimpleTextSearch* operation
#
# ## Create a Granta MI Session
#
# Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)

# ## Select a database
#
# View the databases available on your Granta MI server.

databases = session.browse_service.get_databases().databases

print(f"Found {len(databases)} databases on the Granta MI Server")
for d in databases:
    print(f"Database key: {d.db_key}, Database name: {d.volume_name}")

# ## Search a database
#
# Search in the MI Training database for records containing the text *Leather*.

db_key = "MI_Training"
search_text = "leather"

simple_text_search = gdl.SimpleTextSearch(search_value=search_text, db_key=db_key)
search_response = session.search_service.simple_text_search(simple_text_search)

# Print the results returned by the search.

for result in search_response.search_results:
    print(result.short_name)
