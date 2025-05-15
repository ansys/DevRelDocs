# GetUnitConversions

Export the Young's Modulus in the Metric system for a record

```python
import pandas

import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer/", autoLogon=True, receiveTimeout=5000)
db_key = "MI_Training"
table_name = "Tensile Test Data"

import_service = session.dataImportService
browse_service = session.browseService
export_service = session.dataExportService

partial_table_ref = gdl.PartialTableReference(tableName=table_name)

modfied_record_guid = "4269f1bc-df6b-4a6d-870c-ef931728f37b"
modified_record_ref = gdl.RecordReference(DBKey=db_key, recordGUID=modfied_record_guid)

attribute_name = "Young's Modulus (11-axis)"
unit_context_metric = gdl.UnitConversionContext(unitSystem="Metric")

modulus_attribute_ref = gdl.AttributeReference(
    name=attribute_name,
    DBKey=db_key,
    partialTableReference=partial_table_ref,
)
export_request = gdl.GetRecordAttributesByRefRequest(
    recordReferences=[modified_record_ref],
    attributeReferences=[modulus_attribute_ref],
)

exported_data = export_service.GetRecordAttributesByRef(export_request).recordData
modulus_value = [[a.pointDataType.points[0].value for a in r.attributeValues] for r in exported_data][0][0]
modulus_metric_symbol = [[a.pointDataType.unitSymbol for a in r.attributeValues] for r in exported_data][0][0]
print(f"Young's modulus = {modulus_value} {modulus_metric_symbol}")
```

*Previous cell output:*

```output
Young's modulus = 174.0004272460938 GPa
```

Now let's convert its value with all available conversions in Granta MI

```python
unit_conversions_request = gdl.GetUnitConversionsRequest(
    DBKey=db_key,
    unitSymbols=[modulus_metric_symbol],
)

source_units = browse_service.GetUnitConversions(unit_conversions_request).sourceUnits
conversion_targets = [c.conversions for c in source_units]
factors_and_offsets = [[(c.factor, c.offset) for c in c_target] for c_target in conversion_targets][0]
symbols = [[c.targetSymbol for c in c_target] for c_target in conversion_targets][0]
results = [modulus_value * factor + offset for factor, offset in factors_and_offsets]
equations = [f"{modulus_value} * {factor} + {offset}" for factor, offset in factors_and_offsets]

factors, offsets = zip(*factors_and_offsets)
df = pandas.DataFrame([factors, offsets, equations, results])
df_flipped = df.transpose()
df_flipped.columns = ["factor", "offset", "equation", "converted result"]
df_flipped.index = symbols
df_flipped.style
```

<table id="T_eb17b">
  <thead>
    <tr>
      <th class="blank level0" >&nbsp;</th>
      <th id="T_eb17b_level0_col0" class="col_heading level0 col0" >factor</th>
      <th id="T_eb17b_level0_col1" class="col_heading level0 col1" >offset</th>
      <th id="T_eb17b_level0_col2" class="col_heading level0 col2" >equation</th>
      <th id="T_eb17b_level0_col3" class="col_heading level0 col3" >converted result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="T_eb17b_level0_row0" class="row_heading level0 row0" >10^6 psi</th>
      <td id="T_eb17b_row0_col0" class="data row0 col0" >0.145038</td>
      <td id="T_eb17b_row0_col1" class="data row0 col1" >0.000000</td>
      <td id="T_eb17b_row0_col2" class="data row0 col2" >174.0004272460938 * 0.14503773773039605 + 0.0</td>
      <td id="T_eb17b_row0_col3" class="data row0 col3" >25.236628</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row1" class="row_heading level0 row1" >ksi</th>
      <td id="T_eb17b_row1_col0" class="data row1 col0" >145.037738</td>
      <td id="T_eb17b_row1_col1" class="data row1 col1" >0.000000</td>
      <td id="T_eb17b_row1_col2" class="data row1 col2" >174.0004272460938 * 145.03773773039603 + 0.0</td>
      <td id="T_eb17b_row1_col3" class="data row1 col3" >25236.628332</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row2" class="row_heading level0 row2" >psi</th>
      <td id="T_eb17b_row2_col0" class="data row2 col0" >145037.737730</td>
      <td id="T_eb17b_row2_col1" class="data row2 col1" >0.000000</td>
      <td id="T_eb17b_row2_col2" class="data row2 col2" >174.0004272460938 * 145037.73773039604 + 0.0</td>
      <td id="T_eb17b_row2_col3" class="data row2 col3" >25236628.331896</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row3" class="row_heading level0 row3" >MGO</th>
      <td id="T_eb17b_row3_col0" class="data row3 col0" >125663.706106</td>
      <td id="T_eb17b_row3_col1" class="data row3 col1" >0.000000</td>
      <td id="T_eb17b_row3_col2" class="data row3 col2" >174.0004272460938 * 125663.70610560982 + 0.0</td>
      <td id="T_eb17b_row3_col3" class="data row3 col3" >21865538.551704</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row4" class="row_heading level0 row4" >Pa</th>
      <td id="T_eb17b_row4_col0" class="data row4 col0" >1000000000.000000</td>
      <td id="T_eb17b_row4_col1" class="data row4 col1" >0.000000</td>
      <td id="T_eb17b_row4_col2" class="data row4 col2" >174.0004272460938 * 1000000000.0 + 0.0</td>
      <td id="T_eb17b_row4_col3" class="data row4 col3" >174000427246.093811</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row5" class="row_heading level0 row5" >MPa</th>
      <td id="T_eb17b_row5_col0" class="data row5 col0" >1000.000000</td>
      <td id="T_eb17b_row5_col1" class="data row5 col1" >0.000000</td>
      <td id="T_eb17b_row5_col2" class="data row5 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_eb17b_row5_col3" class="data row5 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row6" class="row_heading level0 row6" >J/m^3</th>
      <td id="T_eb17b_row6_col0" class="data row6 col0" >1000000000.000000</td>
      <td id="T_eb17b_row6_col1" class="data row6 col1" >0.000000</td>
      <td id="T_eb17b_row6_col2" class="data row6 col2" >174.0004272460938 * 1000000000.0 + 0.0</td>
      <td id="T_eb17b_row6_col3" class="data row6 col3" >174000427246.093811</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row7" class="row_heading level0 row7" >MJ/m^3</th>
      <td id="T_eb17b_row7_col0" class="data row7 col0" >1000.000000</td>
      <td id="T_eb17b_row7_col1" class="data row7 col1" >0.000000</td>
      <td id="T_eb17b_row7_col2" class="data row7 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_eb17b_row7_col3" class="data row7 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row8" class="row_heading level0 row8" >erg/cm^3</th>
      <td id="T_eb17b_row8_col0" class="data row8 col0" >10000000000.000002</td>
      <td id="T_eb17b_row8_col1" class="data row8 col1" >0.000000</td>
      <td id="T_eb17b_row8_col2" class="data row8 col2" >174.0004272460938 * 10000000000.000002 + 0.0</td>
      <td id="T_eb17b_row8_col3" class="data row8 col3" >1740004272460.938477</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row9" class="row_heading level0 row9" >ft.lbf/in^3</th>
      <td id="T_eb17b_row9_col0" class="data row9 col0" >12086.478144</td>
      <td id="T_eb17b_row9_col1" class="data row9 col1" >0.000000</td>
      <td id="T_eb17b_row9_col2" class="data row9 col2" >174.0004272460938 * 12086.478144199671 + 0.0</td>
      <td id="T_eb17b_row9_col3" class="data row9 col3" >2103052.360991</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row10" class="row_heading level0 row10" >kJ/m^3</th>
      <td id="T_eb17b_row10_col0" class="data row10 col0" >1000000.000000</td>
      <td id="T_eb17b_row10_col1" class="data row10 col1" >0.000000</td>
      <td id="T_eb17b_row10_col2" class="data row10 col2" >174.0004272460938 * 1000000.0 + 0.0</td>
      <td id="T_eb17b_row10_col3" class="data row10 col3" >174000427.246094</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row11" class="row_heading level0 row11" >inHg</th>
      <td id="T_eb17b_row11_col0" class="data row11 col0" >295299.714445</td>
      <td id="T_eb17b_row11_col1" class="data row11 col1" >0.000000</td>
      <td id="T_eb17b_row11_col2" class="data row11 col2" >174.0004272460938 * 295299.7144451761 + 0.0</td>
      <td id="T_eb17b_row11_col3" class="data row11 col3" >51382276.479110</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row12" class="row_heading level0 row12" >Ba</th>
      <td id="T_eb17b_row12_col0" class="data row12 col0" >10000000000.000000</td>
      <td id="T_eb17b_row12_col1" class="data row12 col1" >0.000000</td>
      <td id="T_eb17b_row12_col2" class="data row12 col2" >174.0004272460938 * 10000000000.0 + 0.0</td>
      <td id="T_eb17b_row12_col3" class="data row12 col3" >1740004272460.937988</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row13" class="row_heading level0 row13" >hPa</th>
      <td id="T_eb17b_row13_col0" class="data row13 col0" >10000000.000000</td>
      <td id="T_eb17b_row13_col1" class="data row13 col1" >0.000000</td>
      <td id="T_eb17b_row13_col2" class="data row13 col2" >174.0004272460938 * 10000000.0 + 0.0</td>
      <td id="T_eb17b_row13_col3" class="data row13 col3" >1740004272.460938</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row14" class="row_heading level0 row14" >mb</th>
      <td id="T_eb17b_row14_col0" class="data row14 col0" >10000000.000000</td>
      <td id="T_eb17b_row14_col1" class="data row14 col1" >0.000000</td>
      <td id="T_eb17b_row14_col2" class="data row14 col2" >174.0004272460938 * 10000000.0 + 0.0</td>
      <td id="T_eb17b_row14_col3" class="data row14 col3" >1740004272.460938</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row15" class="row_heading level0 row15" >bar</th>
      <td id="T_eb17b_row15_col0" class="data row15 col0" >10000.000000</td>
      <td id="T_eb17b_row15_col1" class="data row15 col1" >0.000000</td>
      <td id="T_eb17b_row15_col2" class="data row15 col2" >174.0004272460938 * 10000.0 + 0.0</td>
      <td id="T_eb17b_row15_col3" class="data row15 col3" >1740004.272461</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row16" class="row_heading level0 row16" >atm</th>
      <td id="T_eb17b_row16_col0" class="data row16 col0" >9869.232667</td>
      <td id="T_eb17b_row16_col1" class="data row16 col1" >0.000000</td>
      <td id="T_eb17b_row16_col2" class="data row16 col2" >174.0004272460938 * 9869.232667160128 + 0.0</td>
      <td id="T_eb17b_row16_col3" class="data row16 col3" >1717250.700677</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row17" class="row_heading level0 row17" >torr</th>
      <td id="T_eb17b_row17_col0" class="data row17 col0" >7500637.554192</td>
      <td id="T_eb17b_row17_col1" class="data row17 col1" >0.000000</td>
      <td id="T_eb17b_row17_col2" class="data row17 col2" >174.0004272460938 * 7500637.554192106 + 0.0</td>
      <td id="T_eb17b_row17_col3" class="data row17 col3" >1305114139.047523</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row18" class="row_heading level0 row18" >lbf/ft^2</th>
      <td id="T_eb17b_row18_col0" class="data row18 col0" >20885434.233177</td>
      <td id="T_eb17b_row18_col1" class="data row18 col1" >0.000000</td>
      <td id="T_eb17b_row18_col2" class="data row18 col2" >174.0004272460938 * 20885434.233177025 + 0.0</td>
      <td id="T_eb17b_row18_col3" class="data row18 col3" >3634074479.792996</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row19" class="row_heading level0 row19" >HV</th>
      <td id="T_eb17b_row19_col0" class="data row19 col0" >101.971621</td>
      <td id="T_eb17b_row19_col1" class="data row19 col1" >0.000000</td>
      <td id="T_eb17b_row19_col2" class="data row19 col2" >174.0004272460938 * 101.97162129779282 + 0.0</td>
      <td id="T_eb17b_row19_col3" class="data row19 col3" >17743.105673</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row20" class="row_heading level0 row20" >kgf/mm^2</th>
      <td id="T_eb17b_row20_col0" class="data row20 col0" >101.971621</td>
      <td id="T_eb17b_row20_col1" class="data row20 col1" >0.000000</td>
      <td id="T_eb17b_row20_col2" class="data row20 col2" >174.0004272460938 * 101.97162129779282 + 0.0</td>
      <td id="T_eb17b_row20_col3" class="data row20 col3" >17743.105673</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row21" class="row_heading level0 row21" >dyn/cm^2</th>
      <td id="T_eb17b_row21_col0" class="data row21 col0" >10000000000.000000</td>
      <td id="T_eb17b_row21_col1" class="data row21 col1" >0.000000</td>
      <td id="T_eb17b_row21_col2" class="data row21 col2" >174.0004272460938 * 10000000000.0 + 0.0</td>
      <td id="T_eb17b_row21_col3" class="data row21 col3" >1740004272460.937988</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row22" class="row_heading level0 row22" >ft.lbf/ft^3</th>
      <td id="T_eb17b_row22_col0" class="data row22 col0" >20885434.233177</td>
      <td id="T_eb17b_row22_col1" class="data row22 col1" >0.000000</td>
      <td id="T_eb17b_row22_col2" class="data row22 col2" >174.0004272460938 * 20885434.23317702 + 0.0</td>
      <td id="T_eb17b_row22_col3" class="data row22 col3" >3634074479.792995</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row23" class="row_heading level0 row23" >in.lbf/in^3</th>
      <td id="T_eb17b_row23_col0" class="data row23 col0" >145037.737730</td>
      <td id="T_eb17b_row23_col1" class="data row23 col1" >0.000000</td>
      <td id="T_eb17b_row23_col2" class="data row23 col2" >174.0004272460938 * 145037.73773039604 + 0.0</td>
      <td id="T_eb17b_row23_col3" class="data row23 col3" >25236628.331896</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row24" class="row_heading level0 row24" >J/cm^3</th>
      <td id="T_eb17b_row24_col0" class="data row24 col0" >1000.000000</td>
      <td id="T_eb17b_row24_col1" class="data row24 col1" >0.000000</td>
      <td id="T_eb17b_row24_col2" class="data row24 col2" >174.0004272460938 * 1000.0000000000001 + 0.0</td>
      <td id="T_eb17b_row24_col3" class="data row24 col3" >174000.427246</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row25" class="row_heading level0 row25" >kN/cm^2</th>
      <td id="T_eb17b_row25_col0" class="data row25 col0" >100.000000</td>
      <td id="T_eb17b_row25_col1" class="data row25 col1" >0.000000</td>
      <td id="T_eb17b_row25_col2" class="data row25 col2" >174.0004272460938 * 100.0 + 0.0</td>
      <td id="T_eb17b_row25_col3" class="data row25 col3" >17400.042725</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row26" class="row_heading level0 row26" >Msi</th>
      <td id="T_eb17b_row26_col0" class="data row26 col0" >0.145038</td>
      <td id="T_eb17b_row26_col1" class="data row26 col1" >0.000000</td>
      <td id="T_eb17b_row26_col2" class="data row26 col2" >174.0004272460938 * 0.14503773773039605 + 0.0</td>
      <td id="T_eb17b_row26_col3" class="data row26 col3" >25.236628</td>
    </tr>
    <tr>
      <th id="T_eb17b_level0_row27" class="row_heading level0 row27" >N/mm^2</th>
      <td id="T_eb17b_row27_col0" class="data row27 col0" >1000.000000</td>
      <td id="T_eb17b_row27_col1" class="data row27 col1" >0.000000</td>
      <td id="T_eb17b_row27_col2" class="data row27 col2" >174.0004272460938 * 1000.0 + 0.0</td>
      <td id="T_eb17b_row27_col3" class="data row27 col3" >174000.427246</td>
    </tr>
  </tbody>
</table>
