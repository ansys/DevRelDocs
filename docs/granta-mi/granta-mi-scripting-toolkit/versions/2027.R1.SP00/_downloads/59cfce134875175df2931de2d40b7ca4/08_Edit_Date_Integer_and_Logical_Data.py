# # Date, Integer and Logical data
# Work with date, integer, and logical data.

# ## Connect to MI
# Get a database and table.

from datetime import date, datetime
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()

db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.absolute_temperatures = False

table = db.get_table("AM Builds")

# ## Create a new record and path
# Define a path in the table from a starting folder (in this case the top level folder) using `path_from()`.
# If the path does not exist, the required folders will be created.
# Create a new **Record** object at the end of the path.

now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 8:{now}"
folder = table.path_from(None, tree_path=["Blown Powder (Laser beam)", "Ti-6Al-4V"])
record = table.create_record(name=record_name, parent=folder)
record, folder

# ## Edit the record's attributes
# Access empty date, integer and logical attributes.

diagnostic_date = record.attributes["Date of Beam Profile Diagnostic"]
build_date = record.attributes["Date of Build"]
number_of_layers = record.attributes["Maximum Number of Layers"]
closed_chamber = record.attributes["Built in Closed Chamber?"]

# ### Date attributes
# Use the `value` property to set the date value of the attribute with a **date** object.

diagnostic_date.value = date(year=2020, month=7, day=12)
build_date.value = date.today()

# ### Integer attributes
# Use the `value` property to set the integer value of the attribute.

number_of_layers.value = 5

# ### Logical attributes
# Use the `value` property to set the logical value of the attribute.

closed_chamber.value = True

# ## Write your changes to MI
# First, specify the attributes on the record which you want to update on the server. Then write the changes to MI. The
# list of updated **Record** objects is returned.

record.set_attributes([diagnostic_date, build_date, number_of_layers, closed_chamber])
record = mi.update([record])[0]

# ## Output the record's attributes
# Access the attribute values via the same properties you used to assign them.

datetime_format = "%b %d %Y"
diagnostic_date = record.attributes["Date of Beam Profile Diagnostic"]
print(f"Date of Beam Profile Diagnostic: {diagnostic_date.value.strftime(datetime_format)}")

build_date = record.attributes["Date of Build"]
print(f"Date of Build: {build_date.value.strftime(datetime_format)}")

number_of_layers = record.attributes["Maximum Number of Layers"]
print(f"Maximum Number of Layers: {number_of_layers.value}")

closed_chamber = record.attributes["Built in Closed Chamber?"]
print(f"Built in Closed Chamber?: {'Yes' if closed_chamber.value else 'No'}")
