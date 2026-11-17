# # Local Tabular Data
#
# Work with local tabular data, including how to add and delete local rows.
#
# In general, tabular attributes contain a combination of local and linked tabular columns. This example focuses on
# local tabular columns only. [Example 12](./12_Edit_Linked_Tabular_Data.ipynb) shows how to work with linked tabular
# data.

# ## Create a new record
# Connect to MI and specify a database and table.

from datetime import datetime, date
from pathlib import Path

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Training Exercise for Import")

# Create a new record.

now = datetime.now().strftime("%c")
recordName = f"Scripting Toolkit Example 11:{now}"
record = table.create_record(recordName)
record

# ## Access a local tabular attribute
#
# Access the (empty) tabular attribute *Characterization of this material*.

tabular_attribute = record.attributes["Characterization of this material"]
tabular_attribute

# The tabular attribute `__repr__` shows that the tabular attribute is not loaded yet, and so additional information
# about the number of rows and columns is not available.
#
# Tabular data is loaded on-demand to improve performance, and reading or modifying the data will load the data
# automatically. However, accessing the `__repr__` does not trigger the load operation. To load the data manually, use
# the `.load()` method.
#
# Once the attribute is loaded, the `__repr__` shows the number of rows and columns.

tabular_attribute.load()
tabular_attribute

# The `.column_name`, `.column_types`, and `.linked_columns` properties list the tabular column names, types, and
# whether the column is linked. Each of these properties contain 11 entries, which corresponds to the number of columns
# in the tabular attribute, and the size printed in the tabular attribute `__repr__`.

for column_name, column_type, is_linked in zip(
    tabular_attribute.columns, tabular_attribute.column_types, tabular_attribute.linked_columns
):
    print(f"{column_name}: {column_type} ({'Linked' if is_linked else 'Local'})")

# The `.value` property contains an immutable representation of the current state of the tabular attribute
# value. Since the tabular attribute is empty, this returns an empty tuple.

tabular_attribute.value

# The `.linking_table` and `.linking_attribute` properties contain the target table and target attribute. This is a
# local tabular attribute, so these properties both return `None`.

print(f"Target table: {tabular_attribute.linking_table}")
print(f"Target attribute: {tabular_attribute.linking_attribute}")

# ## Add rows and data
#
# Add a new row to the tabular attribute.

row = tabular_attribute.append_row()
tabular_attribute.rows

# An empty `TabularRow` object is created, which contains a blank cell for each local tabular column, stored in a tuple.
# The type of the cell object depends on the type of the column.

row.cells

# Often it is more convenient to access cells by their column name. The `.cells_by_column` property returns a mapping of
# column name to cell object.

row.cells_by_column

# Tabular cell classes have similar interfaces to their attribute value counterparts. For example, all tabular cell
# classes have a `.value` property, and picture and file tabular cell classes have a `.load()` method.
#
# The name of each cell type has a 'Local' prefix, which indicates that these are local columns and can be modified.
#
# Each tabular cell class also has a linked counterpart without the 'Local' prefix. These are shown in the linked
# tabular data example referenced in the introduction. These linked tabular cell classes are read-only and cannot be
# modified.

# ### Text cells

# Long text cells can accept any string value. Short text cells can accept any string value less than 255 characters.
#
# Assign the string to the `.value` property.

row.cells_by_column["Notes"].value = "Scripting Toolkit example #11 - This example shows how to import tabular data"
row.cells_by_column["Technique (other)"].value = "Example"

# ### Integer cells

# Integer cells can accept any integer value. Assign the integer to the `.value` property.

row.cells_by_column["Order"].value = 1

# ### Date cells

# Date cells accept a `datetime.date` object. Assign the date to the `.value` property.

row.cells_by_column["Date"].value = date(2025, 10, 23)

# ### Logical cells

# Logical cells accept either `True` or `False`. Assign the boolean to the `.value` property.

row.cells_by_column["Non-destructive?"].value = True

# ### Discrete cells

# Discrete cells accept a limited set of allowed strings. To see which values are allowed, use the
# `.possible_discrete_values` property.

row.cells_by_column["Technique"].possible_discrete_values

# Use one of these for new value:

row.cells_by_column["Technique"].value = "Other"

# ### Point cells

# Point cells accept a float value and a unit.
#
# In contrast to point attributes, point cells are always single-valued and may not contain parameter information.

cell = row.cells_by_column["Temperature"]

cell.value = 250.0
cell.unit = "°C"

# ### Range cells

# Range cells are similar to point cells, except they accept high and low float values and a unit.
#
# Each high and low bound may be marked as inclusive or exclusive, using the `.low_value_is_inclusive` and
# `.high_value_is_inclusive` property.
#
# Range cell classes differ from range attribute classes in that they do not contain a `.value` property. Cell values
# are set using the `.low` and `.high` properties directly.

cell = row.cells_by_column["Grain size"]

cell.low = 1.
cell.high = 2.
cell.unit = "mil"
cell.high_value_is_inclusive = False

# ### Picture cells

# Picture cells can be populated either by setting `.value` to a `bytes` object, or using the `.load()` method.

image_path = Path("./supporting_files/09_example_image_for_import.jpg")

row.cells_by_column["Image"].load(image_path)

# ### File cells

# File cells are similar to picture cells, and can also be populated either by setting `.value` to a `bytes` object, or
# using the `.load()` method. However, file cells also have a settable `.file_name` and `.description` field.

file_path = Path("./supporting_files/09_example_file_for_import.txt")

cell = row.cells_by_column["Raw data"]
cell.load(file_path)
cell.file_name = "Raw data file.txt"
cell.description = "Plain text file containing raw data"

# ### Hyperlink cells

# Hyperlink cells accept a `.value` property which contains the link url, along with `.hyperlink_display` and
# `.hyperlink_description` properties which control how the hyperlink is displayed in MI Viewer.

cell = row.cells_by_column["Data on server"]

cell.value = "http://example.org/test_data_12345"
cell.hyperlink_display = "New"
cell.hyperlink_description = "Test data #12345"

# Print the cells again to show the added values.

row.cells_by_column

# The data is also visible in the `AttributeTabular.value` property.
#
# This property is useful as a high-level summary of the data, but should not be used for processing. The `.rows`
# property provides a richer representation of the data.

tabular_attribute.value

# ### Write changes to Granta MI

# Finally, write the changes to the server.

record.set_attributes([tabular_attribute])
record = mi.update([record])[0]

# Check the content of the tabular attribute after the update.

tabular_attribute = record.attributes["Characterization of this material"]
tabular_attribute.rows

# ## Edit tabular data

# Most modifications to tabular data can be made as updates to the data already in the database. For example, adding a
# new row only requires the new row to be uploaded to the database, any existing data is not re-transmitted.
#
# The next cell adds two new rows, and adds data to a subset of cells in each.

first_new_row = tabular_attribute.append_row()
second_new_row = tabular_attribute.append_row()

first_new_row.cells_by_column["Order"].value = 2
first_new_row.cells_by_column["Date"].value = date(2025, 10, 29)
first_new_row.cells_by_column["Notes"].value = "A new row can be appended to an existing tabular attribute"

second_new_row.cells_by_column["Order"].value = 3
second_new_row.cells_by_column["Date"].value = date(2025, 10, 30)
second_new_row.cells_by_column["Notes"].value = "Multiple rows can be added in the same operation"

record.set_attributes([tabular_attribute])
record = mi.update([record])[0]

# Check the content of the tabular attribute after the update.

tabular_attribute = record.attributes["Characterization of this material"]
tabular_attribute.rows

# Rows can be deleted and modified in the same operation

tabular_attribute.delete_row(1)
tabular_attribute.rows[1].cells_by_column["Order"].value = 2
tabular_attribute.rows[1].cells_by_column["Notes"].value = "Rows can be deleted and modified in the same operation"

record.set_attributes([tabular_attribute])
record = mi.update([record])[0]

tabular_attribute = record.attributes["Characterization of this material"]
tabular_attribute.rows

# ## Destructive operations

# Destructive operations cannot be completed by modifying data in-place, and can only be completed by overwriting all
# values.

# <div class="alert alert-warning">
#
# **Warning:**
#
# Destructive editing should be avoided because:
#
# * This can be slow for attributes with File or Picture attributes, especially if many rows are present.
# * Users of Data Updater will face conflicts when applying subsequent updates.
# </div>

# Modifying the order of rows in a tabular attribute is a destructive operation, and by default raises a `ValueError`.

try:
    tabular_attribute.swap_rows(0, 1)
except ValueError as e:
    print("The previous operation caused an exception")
    print(e)

# To check whether destructive editing is allowed, use the property `.is_destructive_editing_allowed`:

print(f"Is destructive editing allowed? {tabular_attribute.is_destructive_editing_allowed}")

# To allow destructive editing, call the method `.enable_destructive_editing()`. Re-export the tabular attribute with
# binary data enabled to avoid an exception when calling `mi.update()`.

record.refresh_attributes()

tabular_attribute = record.attributes["Characterization of this material"]

tabular_attribute.enable_destructive_editing()
print(f"Is destructive editing allowed? {tabular_attribute.is_destructive_editing_allowed}")

# Swapping rows will now not raise an exception.

tabular_attribute.swap_rows(0, 1)

# Update the record in Granta MI. Note that this will re-import all data in the tabular attribute.

record.set_attributes([tabular_attribute])
record = mi.update([record])[0]

tabular_attribute = record.attributes["Characterization of this material"]
tabular_attribute.rows
