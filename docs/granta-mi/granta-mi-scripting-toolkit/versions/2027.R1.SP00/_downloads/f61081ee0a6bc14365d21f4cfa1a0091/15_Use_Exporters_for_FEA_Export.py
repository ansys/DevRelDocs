# # Export data for FEA
# Use MI exporters to export records for use with FEA, CAE or CAD packages.

# ## Find exporters
# Check which exporters are available for a specific table.

import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Design Data")

exporters_in_table = table.get_available_exporters(package="ANSYS Workbench")

print("\nOutput of available ANSYS Workbench Exporters")
for exporter in exporters_in_table:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")

# Check which exporters are applicable to a specific record.

record = table.search_for_records_by_name(
    "250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis"
)[0]
applicable_exporters = record.get_available_exporters()
print("\nOutput of exporters for 250 Grade Maraging steel:")

for exporter in applicable_exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")

# ## Working with parameters
# Some exporters support parameters. The exported parameters have default values but they can also be set manually.
#
# Get the required parameters for an exporter.

all_exporters = record.get_available_exporters(
    package="Abaqus 6",
    model="Linear, temperature-dependent, isotropic, thermal, plastic",
)
exporter_to_use = all_exporters[0]

parameters_required = exporter_to_use.get_parameters_required_for_export([record])
print(parameters_required)

# Set the parameter values and perform the export to obtain the material card for use with FEA software. Provide one or
# more records to the exporter, up to the maximum number specified in the exporter configuration file. The records will
# be exported to the same material card.

parameter_values = {"Time": 100.0}
for parameter_name in parameters_required.keys():
    parameters_required[parameter_name].value_for_exporters = parameter_values[parameter_name]

material_card = exporter_to_use.run_exporter([record], parameter_defs=parameters_required)
print(material_card)

# Save the exported data using the settings provided in the .exp file. The filename, extension, and file encoding scheme
# are left as their defaults.

from pathlib import Path

path_to_save = "./output/"
Path(path_to_save).mkdir(exist_ok=True)
file_name = "Example_Export"
exporter_to_use.save(path_to_save, file_name="Example_Export")
file_extension = exporter_to_use.default_file_extension
print(f'Exporter output saved to "{path_to_save}{file_name}.{file_extension}"')
