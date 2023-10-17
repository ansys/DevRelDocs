# New Features in MI Scripting Toolkit v1.5

## Deleting records (DeleteOrWithdrawIfLatestRecordVersion)

#### Let's start by creating a new record (Note: added receiveTimeout to the MISession)


```python
import GRANTA_MIScriptingToolkit as gdl
from time import strftime
import datetime

session = gdl.GRANTA_MISession('http://my.server.name/mi_servicelayer/', autoLogon=True, receiveTimeout=5000)

raw_record_name = 'STK_1_5_Import_Test'
rec_name = raw_record_name + '_' + strftime("%Y-%m-%d %H:%M:%S")
table_name = 'Tensile Test Data'
subset_name = table_name
db_key = 'MI_Training'

import_service = session.dataImportService
browse_service = session.browseService
export_service = session.dataExportService

test_table_ref = gdl.TableReference(name=table_name, DBKey=db_key)
partial_table_ref = gdl.PartialTableReference(tableName=table_name)
subset_ref = gdl.SubsetReference(DBKey=db_key, partialTableReference=partial_table_ref, name=subset_name)
table_root_ref = browse_service.GetRootNode(gdl.GetRootNode(table=test_table_ref)).rootNode.recordReference

import_record = gdl.ImportRecord(recordName=rec_name, importAttributeValues=None, isFolder=False,
                                 existingRecord=table_root_ref, subsetReferences=[subset_ref])

import_request = gdl.SetRecordAttributesRequest(importRecords=[import_record])
imported_records = import_service.SetRecordAttributes(import_request).recordsImported
imported_record_ref = imported_records[0].recordReference
print('Imported record "{}" to table "{}"'.format(imported_records[0].longName, table_name))
```

    Imported record "STK_1_5_Import_Test_2023-09-01 15:57:12" to table "Tensile Test Data"
    

#### Now let's delete it!


```python
delete_record = gdl.DeleteOrWithdrawRecord(recordReference=imported_record_ref)
records_to_delete = [delete_record]

delete_records_request = gdl.DeleteOrWithdrawIfLatestRecordVersionRequest(deleteOrWithdrawRecords=records_to_delete)
delete_records_response = import_service.DeleteOrWithdrawIfLatestRecordVersion(delete_records_request)
print('Record {} was deleted'.format(imported_records[0].longName))
```

    Record STK_1_5_Import_Test_2023-09-01 15:57:12 was deleted
    

## ResolveReferences

#### Let's see if we can modify a record...


```python
modfied_record_guid = '4269f1bc-df6b-4a6d-870c-ef931728f37b'
modified_record_ref = gdl.RecordReference(DBKey=db_key, recordGUID=modfied_record_guid)

resolve_refs_request = gdl.ResolveReferencesRequest(entities=[modified_record_ref])

can_modify_int = browse_service.ResolveReferences(resolve_refs_request).entityResolutions[0].canWrite
if can_modify_int == 0:
    print('Yes, we can edit this record.')
else:
    print("No, we don't have permission to edit this record.")
```

    Yes, we can edit this record.
    

## lastModifier and last modifiedDate pseudo-attributes

#### If we can modify the record, let's make a small change to it...


```python
if can_modify_int == 0:
    attribute_project_notes = 'Project Notes'
    attribute_val = 'Project was updated: {0}'.format(datetime.datetime.now())
    attribute_ref = gdl.AttributeReference(name=attribute_project_notes, DBKey=db_key, partialTableReference=partial_table_ref)
    import_attribute_val = gdl.ImportAttributeValue(longTextDataValue=gdl.LongTextDataType(value=attribute_val),
                                                    attributeReference=attribute_ref) 
    update_record = gdl.ImportRecord(recordName=None,
                                     importRecordMode='Update',
                                     importAttributeValues=[import_attribute_val],
                                     existingRecord=modified_record_ref)

    update_request = gdl.SetRecordAttributesRequest(importRecords=[update_record])
    updated_records = import_service.SetRecordAttributes(update_request).recordsImported
    updated_record_ref = updated_records[0].recordReference
    updated_record_name = updated_records[0].longName
    print('Updated record "{}"'.format(updated_record_name))
else:
    print("Nothing to do - we can't modify the record!")
```

    Updated record "MTS-615723"
    

#### Now let's retrieve the record creator, createdDate, lastModifier and modifiedDate


```python
pseudo_creator = gdl.AttributeReference(pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.creator,
                                        DBKey=db_key, partialTableReference=partial_table_ref)
pseudo_created_date = gdl.AttributeReference(pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.createdDate,
                                             DBKey=db_key, partialTableReference=partial_table_ref)
pseudo_last_modifier = gdl.AttributeReference(pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.lastModifier,
                                              DBKey=db_key, partialTableReference=partial_table_ref)
pseudo_modified_date = gdl.AttributeReference(pseudoAttribute=gdl.AttributeReference.MIPseudoAttributeReference.modifiedDate,
                                              DBKey=db_key, partialTableReference=partial_table_ref)
attribute_refs = [pseudo_creator, pseudo_created_date, pseudo_last_modifier, pseudo_modified_date]

export_request = gdl.GetRecordAttributesByRefRequest(recordReferences=[modified_record_ref],
                                                     attributeReferences=attribute_refs)

exported_data = export_service.GetRecordAttributesByRef(export_request).recordData
for record in exported_data:
    creator = [a.shortTextDataType.value for a in record.attributeValues if a.attributeName == '[creator]'][0]
    created_date = [a.dateDataType.value for a in record.attributeValues if a.attributeName == '[createdDate]'][0]
    modifier = [a.shortTextDataType.value for a in record.attributeValues if a.attributeName == '[lastModifier]'][0]
    modified_date = [a.dateDataType.value for a in record.attributeValues if a.attributeName == '[modifiedDate]'][0]
    print('"{}" imported the record on {}'.format(creator, created_date))
    print('The record was last modified on {} by "{}"'.format(modified_date, modifier))
```

    "Ansys Granta 1" imported the record on 
    The record was last modified on  by "ANSYS\agrigg"
    

## GetUnitConversions

#### For the above record, let's export the Young's Modulus in the Metric system


```python
attribute_name = "Young's Modulus (11-axis)"
unit_context_metric = gdl.UnitConversionContext(unitSystem='Metric')

modulus_attribute_ref = gdl.AttributeReference(name=attribute_name, DBKey=db_key, partialTableReference=partial_table_ref)
export_request = gdl.GetRecordAttributesByRefRequest(recordReferences=[modified_record_ref],
                                                     attributeReferences=[modulus_attribute_ref])

exported_data = export_service.GetRecordAttributesByRef(export_request).recordData
modulus_value = [[a.pointDataType.points[0].value for a in r.attributeValues] for r in exported_data][0][0]
modulus_metric_symbol = [[a.pointDataType.unitSymbol for a in r.attributeValues] for r in exported_data][0][0]
print("Young's modulus = {} {}".format(modulus_value, modulus_metric_symbol))
```

    Young's modulus = 174.0004272460938 GPa
    

#### Now let's convert its value with all available conversions in Granta MI


```python
import pandas

unit_conversions_request = gdl.GetUnitConversionsRequest(DBKey=db_key, unitSymbols=[modulus_metric_symbol])

source_units = browse_service.GetUnitConversions(unit_conversions_request).sourceUnits
conversion_targets = [c.conversions for c in source_units]
factors_and_offsets = [[(c.factor, c.offset) for c in c_target] for c_target in conversion_targets][0]
symbols = [[c.targetSymbol for c in c_target] for c_target in conversion_targets][0]
results = [modulus_value * factor + offset for factor, offset in factors_and_offsets]
equations = ['{} * {} + {}'.format(modulus_value, factor, offset) for factor, offset in factors_and_offsets]

factors, offsets = zip(*factors_and_offsets)
df = pandas.DataFrame([factors, offsets, equations, results])
df_flipped = df.transpose()
df_flipped.columns = ['factor', 'offset', 'equation', 'converted result']
df_flipped.index = symbols
df_flipped.style
```




<style type="text/css">
</style>
<table id="T_123fb">
  <thead>
    <tr>
      <th class="blank level0" >&nbsp;</th>
      <th id="T_123fb_level0_col0" class="col_heading level0 col0" >factor</th>
      <th id="T_123fb_level0_col1" class="col_heading level0 col1" >offset</th>
      <th id="T_123fb_level0_col2" class="col_heading level0 col2" >equation</th>
      <th id="T_123fb_level0_col3" class="col_heading level0 col3" >converted result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="T_123fb_level0_row0" class="row_heading level0 row0" >10^6 psi</th>
      <td id="T_123fb_row0_col0" class="data row0 col0" >0.145038</td>
      <td id="T_123fb_row0_col1" class="data row0 col1" >0.000000</td>
      <td id="T_123fb_row0_col2" class="data row0 col2" >174.0004272460938 * 0.14503772518547858 + 0.0</td>
      <td id="T_123fb_row0_col3" class="data row0 col3" >25.236626</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row1" class="row_heading level0 row1" >ksi</th>
      <td id="T_123fb_row1_col0" class="data row1 col0" >145.037725</td>
      <td id="T_123fb_row1_col1" class="data row1 col1" >0.000000</td>
      <td id="T_123fb_row1_col2" class="data row1 col2" >174.0004272460938 * 145.0377251854786 + 0.0</td>
      <td id="T_123fb_row1_col3" class="data row1 col3" >25236.626149</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row2" class="row_heading level0 row2" >psi</th>
      <td id="T_123fb_row2_col0" class="data row2 col0" >145037.725185</td>
      <td id="T_123fb_row2_col1" class="data row2 col1" >0.000000</td>
      <td id="T_123fb_row2_col2" class="data row2 col2" >174.0004272460938 * 145037.72518547857 + 0.0</td>
      <td id="T_123fb_row2_col3" class="data row2 col3" >25236626.149075</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row3" class="row_heading level0 row3" >MGO</th>
      <td id="T_123fb_row3_col0" class="data row3 col0" >125663.706106</td>
      <td id="T_123fb_row3_col1" class="data row3 col1" >0.000000</td>
      <td id="T_123fb_row3_col2" class="data row3 col2" >174.0004272460938 * 125663.70610560982 + 0.0</td>
      <td id="T_123fb_row3_col3" class="data row3 col3" >21865538.551704</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row4" class="row_heading level0 row4" >Pa</th>
      <td id="T_123fb_row4_col0" class="data row4 col0" >1000000000.000000</td>
      <td id="T_123fb_row4_col1" class="data row4 col1" >0.000000</td>
      <td id="T_123fb_row4_col2" class="data row4 col2" >174.0004272460938 * 1000000000.0 + 0.0</td>
      <td id="T_123fb_row4_col3" class="data row4 col3" >174000427246.093811</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row5" class="row_heading level0 row5" >MPa</th>
      <td id="T_123fb_row5_col0" class="data row5 col0" >1000.000000</td>
      <td id="T_123fb_row5_col1" class="data row5 col1" >0.000000</td>
      <td id="T_123fb_row5_col2" class="data row5 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_123fb_row5_col3" class="data row5 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row6" class="row_heading level0 row6" >J/m^3</th>
      <td id="T_123fb_row6_col0" class="data row6 col0" >1000000000.000000</td>
      <td id="T_123fb_row6_col1" class="data row6 col1" >0.000000</td>
      <td id="T_123fb_row6_col2" class="data row6 col2" >174.0004272460938 * 1000000000.0 + 0.0</td>
      <td id="T_123fb_row6_col3" class="data row6 col3" >174000427246.093811</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row7" class="row_heading level0 row7" >MJ/m^3</th>
      <td id="T_123fb_row7_col0" class="data row7 col0" >1000.000000</td>
      <td id="T_123fb_row7_col1" class="data row7 col1" >0.000000</td>
      <td id="T_123fb_row7_col2" class="data row7 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_123fb_row7_col3" class="data row7 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row8" class="row_heading level0 row8" >erg/cm^3</th>
      <td id="T_123fb_row8_col0" class="data row8 col0" >10000000000.000002</td>
      <td id="T_123fb_row8_col1" class="data row8 col1" >0.000000</td>
      <td id="T_123fb_row8_col2" class="data row8 col2" >174.0004272460938 * 10000000000.000002 + 0.0</td>
      <td id="T_123fb_row8_col3" class="data row8 col3" >1740004272460.938477</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row9" class="row_heading level0 row9" >ft.lbf/in^3</th>
      <td id="T_123fb_row9_col0" class="data row9 col0" >12086.477099</td>
      <td id="T_123fb_row9_col1" class="data row9 col1" >0.000000</td>
      <td id="T_123fb_row9_col2" class="data row9 col2" >174.0004272460938 * 12086.477098789885 + 0.0</td>
      <td id="T_123fb_row9_col3" class="data row9 col3" >2103052.179090</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row10" class="row_heading level0 row10" >kJ/m^3</th>
      <td id="T_123fb_row10_col0" class="data row10 col0" >1000000.000000</td>
      <td id="T_123fb_row10_col1" class="data row10 col1" >0.000000</td>
      <td id="T_123fb_row10_col2" class="data row10 col2" >174.0004272460938 * 1000000.0 + 0.0</td>
      <td id="T_123fb_row10_col3" class="data row10 col3" >174000427.246094</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row11" class="row_heading level0 row11" >inHg</th>
      <td id="T_123fb_row11_col0" class="data row11 col0" >295299.714445</td>
      <td id="T_123fb_row11_col1" class="data row11 col1" >0.000000</td>
      <td id="T_123fb_row11_col2" class="data row11 col2" >174.0004272460938 * 295299.7144451761 + 0.0</td>
      <td id="T_123fb_row11_col3" class="data row11 col3" >51382276.479110</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row12" class="row_heading level0 row12" >Ba</th>
      <td id="T_123fb_row12_col0" class="data row12 col0" >10000000000.000000</td>
      <td id="T_123fb_row12_col1" class="data row12 col1" >0.000000</td>
      <td id="T_123fb_row12_col2" class="data row12 col2" >174.0004272460938 * 10000000000.0 + 0.0</td>
      <td id="T_123fb_row12_col3" class="data row12 col3" >1740004272460.937988</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row13" class="row_heading level0 row13" >hPa</th>
      <td id="T_123fb_row13_col0" class="data row13 col0" >10000000.000000</td>
      <td id="T_123fb_row13_col1" class="data row13 col1" >0.000000</td>
      <td id="T_123fb_row13_col2" class="data row13 col2" >174.0004272460938 * 10000000.0 + 0.0</td>
      <td id="T_123fb_row13_col3" class="data row13 col3" >1740004272.460938</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row14" class="row_heading level0 row14" >mb</th>
      <td id="T_123fb_row14_col0" class="data row14 col0" >10000000.000000</td>
      <td id="T_123fb_row14_col1" class="data row14 col1" >0.000000</td>
      <td id="T_123fb_row14_col2" class="data row14 col2" >174.0004272460938 * 10000000.0 + 0.0</td>
      <td id="T_123fb_row14_col3" class="data row14 col3" >1740004272.460938</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row15" class="row_heading level0 row15" >bar</th>
      <td id="T_123fb_row15_col0" class="data row15 col0" >10000.000000</td>
      <td id="T_123fb_row15_col1" class="data row15 col1" >0.000000</td>
      <td id="T_123fb_row15_col2" class="data row15 col2" >174.0004272460938 * 10000.0 + 0.0</td>
      <td id="T_123fb_row15_col3" class="data row15 col3" >1740004.272461</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row16" class="row_heading level0 row16" >atm</th>
      <td id="T_123fb_row16_col0" class="data row16 col0" >9869.232667</td>
      <td id="T_123fb_row16_col1" class="data row16 col1" >0.000000</td>
      <td id="T_123fb_row16_col2" class="data row16 col2" >174.0004272460938 * 9869.232667160128 + 0.0</td>
      <td id="T_123fb_row16_col3" class="data row16 col3" >1717250.700677</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row17" class="row_heading level0 row17" >torr</th>
      <td id="T_123fb_row17_col0" class="data row17 col0" >7500637.554192</td>
      <td id="T_123fb_row17_col1" class="data row17 col1" >0.000000</td>
      <td id="T_123fb_row17_col2" class="data row17 col2" >174.0004272460938 * 7500637.554192106 + 0.0</td>
      <td id="T_123fb_row17_col3" class="data row17 col3" >1305114139.047523</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row18" class="row_heading level0 row18" >lbf/ft^2</th>
      <td id="T_123fb_row18_col0" class="data row18 col0" >20885432.426709</td>
      <td id="T_123fb_row18_col1" class="data row18 col1" >0.000000</td>
      <td id="T_123fb_row18_col2" class="data row18 col2" >174.0004272460938 * 20885432.42670891 + 0.0</td>
      <td id="T_123fb_row18_col3" class="data row18 col3" >3634074165.466772</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row19" class="row_heading level0 row19" >HV</th>
      <td id="T_123fb_row19_col0" class="data row19 col0" >101.971621</td>
      <td id="T_123fb_row19_col1" class="data row19 col1" >0.000000</td>
      <td id="T_123fb_row19_col2" class="data row19 col2" >174.0004272460938 * 101.97162129779282 + 0.0</td>
      <td id="T_123fb_row19_col3" class="data row19 col3" >17743.105673</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row20" class="row_heading level0 row20" >kgf/mm^2</th>
      <td id="T_123fb_row20_col0" class="data row20 col0" >101.971621</td>
      <td id="T_123fb_row20_col1" class="data row20 col1" >0.000000</td>
      <td id="T_123fb_row20_col2" class="data row20 col2" >174.0004272460938 * 101.97162129779282 + 0.0</td>
      <td id="T_123fb_row20_col3" class="data row20 col3" >17743.105673</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row21" class="row_heading level0 row21" >dyn/cm^2</th>
      <td id="T_123fb_row21_col0" class="data row21 col0" >10000000000.000000</td>
      <td id="T_123fb_row21_col1" class="data row21 col1" >0.000000</td>
      <td id="T_123fb_row21_col2" class="data row21 col2" >174.0004272460938 * 10000000000.0 + 0.0</td>
      <td id="T_123fb_row21_col3" class="data row21 col3" >1740004272460.937988</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row22" class="row_heading level0 row22" >ft.lbf/ft^3</th>
      <td id="T_123fb_row22_col0" class="data row22 col0" >20885432.426709</td>
      <td id="T_123fb_row22_col1" class="data row22 col1" >0.000000</td>
      <td id="T_123fb_row22_col2" class="data row22 col2" >174.0004272460938 * 20885432.42670891 + 0.0</td>
      <td id="T_123fb_row22_col3" class="data row22 col3" >3634074165.466772</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row23" class="row_heading level0 row23" >in.lbf/in^3</th>
      <td id="T_123fb_row23_col0" class="data row23 col0" >145037.725185</td>
      <td id="T_123fb_row23_col1" class="data row23 col1" >0.000000</td>
      <td id="T_123fb_row23_col2" class="data row23 col2" >174.0004272460938 * 145037.72518547857 + 0.0</td>
      <td id="T_123fb_row23_col3" class="data row23 col3" >25236626.149075</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row24" class="row_heading level0 row24" >J/cm^3</th>
      <td id="T_123fb_row24_col0" class="data row24 col0" >1000.000000</td>
      <td id="T_123fb_row24_col1" class="data row24 col1" >0.000000</td>
      <td id="T_123fb_row24_col2" class="data row24 col2" >174.0004272460938 * 1000.0000000000001 + 0.0</td>
      <td id="T_123fb_row24_col3" class="data row24 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row25" class="row_heading level0 row25" >kN/cm^2</th>
      <td id="T_123fb_row25_col0" class="data row25 col0" >100.000000</td>
      <td id="T_123fb_row25_col1" class="data row25 col1" >0.000000</td>
      <td id="T_123fb_row25_col2" class="data row25 col2" >174.0004272460938 * 100.0 + 0.0</td>
      <td id="T_123fb_row25_col3" class="data row25 col3" >17400.042725</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row26" class="row_heading level0 row26" >Msi</th>
      <td id="T_123fb_row26_col0" class="data row26 col0" >0.145038</td>
      <td id="T_123fb_row26_col1" class="data row26 col1" >0.000000</td>
      <td id="T_123fb_row26_col2" class="data row26 col2" >174.0004272460938 * 0.14503772518547858 + 0.0</td>
      <td id="T_123fb_row26_col3" class="data row26 col3" >25.236626</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row27" class="row_heading level0 row27" >N/mm^2</th>
      <td id="T_123fb_row27_col0" class="data row27 col0" >1000.000000</td>
      <td id="T_123fb_row27_col1" class="data row27 col1" >0.000000</td>
      <td id="T_123fb_row27_col2" class="data row27 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_123fb_row27_col3" class="data row27 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_123fb_level0_row28" class="row_heading level0 row28" >N.mm/mm^3</th>
      <td id="T_123fb_row28_col0" class="data row28 col0" >1000.000000</td>
      <td id="T_123fb_row28_col1" class="data row28 col1" >0.000000</td>
      <td id="T_123fb_row28_col2" class="data row28 col2" >174.0004272460938 * 1000.0000000000001 + 0.0</td>
      <td id="T_123fb_row28_col3" class="data row28 col3" >174000.427246</td>
    </tr>
  </tbody>
</table>



