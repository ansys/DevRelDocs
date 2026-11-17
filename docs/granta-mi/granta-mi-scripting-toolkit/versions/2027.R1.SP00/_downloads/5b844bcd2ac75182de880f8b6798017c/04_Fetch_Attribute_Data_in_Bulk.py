# # Fetch Attribute Data in Bulk
# By default, all attribute values are dynamically retrieved from the server when `Record.attributes` is accessed. When
# operating on many records, this can result in poor performance, as unnecessary data might be exported for each record
# and as export requests are performed for each individual record.
# By grouping records into fewer requests through batching, and allowing the export of only a subset of attributes,
# `bulk_fetch()` can be used to enhance performance.

# ## Connect to MI
# Specify a database and table.

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()

db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.absolute_temperatures = True

table = db.get_table("MaterialUniverse")

# ## Define a list of records to fetch
# For example, by Record GUID.

guids = [
    "00001192-000e-4fff-8fff-dd92ffff0000",
    "00001194-000e-4fff-8fff-dd92ffff0000",
    "0000119b-000e-4fff-8fff-dd92ffff0000",
    "00000e38-000e-4fff-8fff-dd92ffff0000",
    "00000e41-000e-4fff-8fff-dd92ffff0000",
    "000009cb-000e-4fff-8fff-dd92ffff0000",
]

# Get each record using its Record GUID, using the `get_records_by_ids` method.

records = table.get_records_by_ids([{"vguid": guid} for guid in guids])
records

# ## Fetch attribute data values
# Fetch the *Base*, *Density* and *Young's modulus* attribute values for each record, and print the results.
# Default units can be overridden before export using the `table.set_display_unit()` method.

table.set_display_unit("Young's modulus", "ksi")
table.bulk_fetch(records=records, attributes=["Base", "Density", "Young's modulus"])

density_unit = table.attributes["Density"].unit
density_header = f"Density / {density_unit}"

youngs_mod_unit = table.attributes["Young's modulus"].unit
youngs_mod_header = f"Young's modulus / {youngs_mod_unit}"

print(f"{'Name':50.50} | {density_header:^21} | {youngs_mod_header:^21} | {'Base':^18}")
print("-" * 120)
for record in records:
    formatted_name = f"{record.name:50.50}"

    density = record.attributes["Density"].value
    formatted_density = f"{density.low:^10.2f}-{density.high:^10.2f}"

    youngs_mod = record.attributes["Young's modulus"].value
    formatted_youngs_mod = f"{youngs_mod.low:^10.2f}-{youngs_mod.high:^10.2f}"

    base = record.attributes["Base"].value
    formatted_base = f"{base:^20}"

    print(f"{formatted_name} | {formatted_density} | {formatted_youngs_mod} | {formatted_base}")


# ## Fetch meta-attributes data values
# Meta-attributes can be included in a bulk export operation by specifying their `AttributeDefinition`, which can be
# obtained from the parent attribute definition.
# Accessing a meta-attribute that has not been exported will raise an error, even if the parent attribute has been
# exported.
# Fetch the attribute *Food contact* and associated meta-attribute *Notes* for each record and print the results.

import textwrap

food_contact = table.attributes["Food contact"]
food_contact_notes = food_contact.meta_attributes["Notes"]

table.bulk_fetch(records=records, attributes=[food_contact, food_contact_notes])

print(f"{'Name':50.50} | {'Food contact':^18} | {'Notes':^42}")
print("-" * 120)
for record in records:
    formatted_name = f"{record.name:50.50}"

    food_contact = record.attributes["Food contact"].value
    formatted_food_contact = f"{food_contact:^18}"

    notes = record.attributes["Food contact"].meta_attributes["Notes"].value
    formatted_notes = textwrap.shorten(notes, width=42) if notes else ""

    print(f"{formatted_name} | {formatted_food_contact} | {formatted_notes}")
