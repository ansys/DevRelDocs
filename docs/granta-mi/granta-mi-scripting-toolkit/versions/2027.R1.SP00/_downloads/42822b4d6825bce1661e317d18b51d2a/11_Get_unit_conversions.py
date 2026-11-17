# # GetUnitConversions

# Export the Young's Modulus in the Metric system for a record

import pandas

import ansys.grantami.backend.soap as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", auto_logon=True, receive_timeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

import_service = session.data_import_service
browse_service = session.browse_service
export_service = session.data_export_service

partial_table_ref = gdl.PartialTableReference(table_name=table_name)

modified_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(db_key=db_key, record_guid=modified_record_guid)

attribute_name = "Young's Modulus (11-axis)"
unit_context_metric = gdl.UnitConversionContext(unit_system=gdl.UnitSystemDetail(name="Metric"))

modulus_attribute_ref = gdl.AttributeReference(
    name=attribute_name,
    db_key=db_key,
    partial_table_reference=partial_table_ref,
)
export_request = gdl.GetRecordAttributesByRefRequest(
    record_references=[modified_record_ref],
    attribute_references=[modulus_attribute_ref],
)

exported_data = export_service.get_record_attributes_by_ref(export_request).record_data
modulus_value = [[a.point_data_value.points[0].value for a in r.attribute_values] for r in exported_data][0][0]
modulus_metric_symbol = [[a.point_data_value.unit_symbol for a in r.attribute_values] for r in exported_data][0][0]
print(f"Young's modulus = {modulus_value} {modulus_metric_symbol}")

# Now let's convert its value with all available conversions in Granta MI

unit_conversions_request = gdl.GetUnitConversionsRequest(
    db_key=db_key,
    unit_symbols=[modulus_metric_symbol],
)

source_units = browse_service.get_unit_conversions(unit_conversions_request).source_units
conversion_targets = [c.conversions for c in source_units]
factors_and_offsets = [[(c.factor, c.offset) for c in c_target] for c_target in conversion_targets][0]
symbols = [[c.target_symbol for c in c_target] for c_target in conversion_targets][0]
results = [modulus_value * factor + offset for factor, offset in factors_and_offsets]
equations = [f"{modulus_value} * {factor} + {offset}" for factor, offset in factors_and_offsets]

factors, offsets = zip(*factors_and_offsets)
df = pandas.DataFrame([factors, offsets, equations, results])
df_flipped = df.transpose()
df_flipped.columns = ["factor", "offset", "equation", "converted result"]
df_flipped.index = symbols
df_flipped.style
