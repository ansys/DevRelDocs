# # Get Started
# Load MI Scripting Toolkit, connect to your MI Session, and select a database and table.

# ## Connect to MI
# Import the `granta` libraries and connect to Granta MI via the Service Layer using Windows authentication,
# replacing `my.server.name` with the name of your Granta MI server.

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()

# ## Select a database
# All the sample scripts use the *MI Training* database.

my_db = mi.get_db(db_key="MI_Training")

# Set a unit system, and choose whether to use absolute or relative temperatures (Kelvin/Rankine or Celsius/Fahrenheit).

my_db.unit_system = "UK Imperial"
my_db.absolute_temperatures = False

# ## Select a table
# Select *MaterialUniverse* and print its number of attributes.

my_table = my_db.get_table("MaterialUniverse")
print(f"Table {my_table.name} has {len(my_table.attributes)} attributes defined")

# Print the definition of an attribute within your table.

print(f"The definition of the Density attribute in {my_table.name} is {my_table.attributes['Density']}")

# ## Find a record
# Search for a record by name (only exact matches for short or long name will be returned), and print information to
# help you locate and view it in MI applications.

print("Finding Aluminum, 7075, wrought, T73...")
my_record = my_table.search_for_records_by_name("Aluminum, 7075, wrought, T73")[0]

print("Found this record:")
my_record

print("in database/table:")
f"{my_record.db_key}/{my_record.table_name}"

print("at this point in the tree:")
" => ".join(my_record.path)

print("with data like this:")
my_table.bulk_fetch([my_record], attributes=["Mg (magnesium)"])
my_record.attributes["Mg (magnesium)"]

print("and you can see it in MI Viewer here:")
my_record.viewer_url
