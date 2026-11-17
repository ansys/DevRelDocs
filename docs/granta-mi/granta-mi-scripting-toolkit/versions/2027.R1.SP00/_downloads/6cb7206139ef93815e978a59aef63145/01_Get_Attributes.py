# # Get Attributes
# Find out about the database schema by accessing the `attributes` property of the **Table** object.

# ## Connect to MI

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()

# ## Get table
# Get a database, then set the unit system for the **Database** object.

db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.unit_system

# Get a table from the database.

table = db.get_table("Training Exercise for Import")
table

# ## Access the attribute definitions
# These are associated with the **Table** object through the `attributes` property,
# which returns a dictionary of **AttributeDefinition** objects.

print(f"{'Name':30.30} - {'Type':^10.10} - {'Unit':^10.10} - {'Meta?':^10.10}")
print("-" * 70)
for name, att in table.attributes.items():
    print(f"{name:30.30} - {att.type:^10.10} - {getattr(att, 'unit', ''):^10.10} - {str(att.is_meta):^10.10}")
