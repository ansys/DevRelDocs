# # Create and Delete Records in Bulk
# Create records and delete (or withdraw) them in bulk.

# ## Specify a table

from datetime import datetime
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
table = mi.get_db(db_key="MI_Training").get_table("Files for Training")

# ## Create records
# Decide which folder the new records will be added to (you can use the table itself as a parent for a 'top-level'
# record).

parent = table.search_for_records_by_name("Other")[0]

# Create five new **Record** objects.

now = datetime.now().strftime("%c")
record_names = [f"Scripting Toolkit Example 5:{now} - {i}" for i in range(5)]
new_records = [table.create_record(n, parent=parent, subsets={"All files"}) for n in record_names]
new_records

# ## Write your changes to MI
# The new records are created on the server when update() is called.

recs = mi.update(new_records)

print("New records:")
for rec in recs:
    print(rec.viewer_url)

# ## Delete the records
# ``Session.bulk_delete_or_withdraw_records`` accepts any list of records (e.g. results of a search,
# ``Table.all_records()``, ``Record.children``, etc.). If the table is version-controlled, the records are withdrawn
# instead. Unlike record creation, this method interacts directly with the server. The records are deleted or withdrawn
# when the method is called.

mi.bulk_delete_or_withdraw_records(recs)
