# # Layouts
#
# This notebook shows how to access layouts through the Streamlined API.

# ## Connect to Granta MI

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")

# ## Access a layout and inspect its properties
#
# The `Table.layouts` property contains a **dict** of all layouts in the table, indexed by the layout name. Show the
# first two elements in this dictionary.

table = db.get_table("MaterialUniverse")
list(table.layouts.items())[:2]

# Each layout contains a list of categories. Select a particular **Layout** object and view the first two categories
# within the layout.

polymers_layout = table.layouts["Polymers"]
polymers_layout.categories[:2]

# The `attributes_by_category` property contains a **dict** of attributes indexed by their category. Display the
# attributes in the first two categories.

list(polymers_layout.attributes_by_category.items())[:2]
