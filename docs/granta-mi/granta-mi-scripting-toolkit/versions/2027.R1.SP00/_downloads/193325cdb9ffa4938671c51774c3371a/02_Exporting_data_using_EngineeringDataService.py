# # Exporting data using the Engineering Data Service

# Find a list of FEA exporters for a record in a Granta MI database, and export relevant parameter values.
#
# This example demonstrates:
#
# - Retrieving a list of available exporters
# - Retrieving a list exporters applicable to a specific record in a Granta MI database
# - Get the parameters that can be exported for a specific exporter and record combination
# - Run the FEA exporter on the specific record

# ## Create a Granta MI Session
#
# Import the ansys.grantami.backend.soap package, and create a connection to a Granta MI server.

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", auto_logon=True)

# ## List the available exporters
# Retrieve the list of FEA exporters that will export data from the database MI_Training into Ansys Workbench format.

dbKey = "MI_Training"
avail_exp_request = gdl.GetAvailableExportersRequest(db_key=dbKey, package="ANSYS Workbench", match_db=True)

print("Output of available Exporters for Ansys Workbench")
avail_exp_response = session.engineering_data_service.get_available_exporters(avail_exp_request)

for exporter in avail_exp_response.exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")

# Get a record by name.

search_req = gdl.RecordNameSearchRequest(
    record_name="Nickel alloys, Inconel 718, Forging",
    table=gdl.TableReference(db_key=dbKey, name="Design Data"),
    search_short_names=True,
)
search_resp = session.search_service.record_name_search(search_req)
print(f"Found {len(search_resp.search_results)} record(s)")
record = search_resp.search_results[0].record_reference


# ## Get exporters for a specific record
# Use the engineering data service to find valid FEA exporters for Inconel 718.

exp_rec_request = gdl.ExportersForRecordsRequest(records=[record])
exp_rec_resp = session.engineering_data_service.exporters_for_records(exp_rec_request)
print("Output of exporters for Inconel 718")
for exporter in exp_rec_resp.records[0].exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")


# ## Get a list of parameters that can be exported
# Get the parameters that can be exported from Inconel 718 using an exporter that supports them.

exporter = next(
    exp for exp in exp_rec_resp.records[0].exporters
    if exp.model == "Linear, temperature-dependent, isotropic"
    and exp.package == "ANSYS Workbench"
)
exp_param_req = gdl.GetExporterParametersRequest(records=[record], exporter_key=exporter.key)
exporter_parameters = session.engineering_data_service.get_exporter_parameters(exp_param_req)
for attrib in exporter_parameters.records[0].attributes:
    print(attrib.attribute.name)
    for param in attrib.parameters:
        print(f"\t{param.name}")


# ## Perform an FEA Export
# Get all applicable attributes for this record.

gra_req = gdl.GetRecordAttributesRequest(record_references=[record])
attribs = session.browse_service.get_record_attributes(gra_req)

# If exporting a functional data attribute, you also need to define a parameter value to evaluate the attribute at.
# Here, a parameter is fixed at 1.337.

parameter = exporter_parameters.records[0].attributes[0].parameters[0]
pwv = gdl.ParameterReferenceAndValue(
    parameter_value=gdl.ParameterValue(numeric_value=1.337),
    parameter=parameter.parameter_reference,
)

pv = gdl.UnittedParameterValue(
    unit_symbol=parameter.unit.unit_symbol,
    parameter_with_values=pwv,
)

# Run the FEA exporter, and print the output.

export_data_request = gdl.ExportRecordDataRequest(
    attribute_references=[a.attribute.attribute for a in attribs.record_attributes],
    records=[record],
    exporter_key=exporter.key,
    parameter_values=[pv],
)

resp = session.engineering_data_service.export_record_data(export_data_request)

print(resp.text[:200] + "...")

# Write the output to file. First create an output directory if it doesn't exist, and then save the XML file into that
# directory.

from pathlib import Path

output_dir = Path("./output")
output_dir.mkdir(exist_ok=True)

with open(output_dir / "engineering_data.xml", "wb") as f:
    f.write(resp.text.encode("utf-8"))
