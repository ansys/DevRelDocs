# Exporting data using the Engineering Data Service

Find a list of FEA exporters for a record in a Granta MI database, and export relevant parameter values.

This example demonstrates:

- Retrieving a list of available exporters
- Retrieving a list exporters applicable to a specific record in a Granta MI database
- Get the parameters that can be exported for a specific exporter and record combination
- Run the FEA exporter on the specific record

## Create a Granta MI Session

Import the GRANTA_MIScriptingToolkit package, and create a connection to a Granta MI server.


```python
import GRANTA_MIScriptingToolkit as gdl

session = gdl.GRANTA_MISession("http://my.server.name/mi_servicelayer", autoLogon=True)
```

## List the available exporters
Retrieve the list of FEA exporters that will export data from the database MI_Training into Ansys Workbench format.


```python
dbKey = "MI_Training"
request = gdl.GetAvailableExportersRequest(DBKey=dbKey, package="ANSYS Workbench", matchDB=True)

print("Output of available Exporters for Ansys Workbench")
response = session.engineeringDataService.GetAvailableExporters(request)

for exporter in response.exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")
```
*Previous cell output:*
```output
Output of available Exporters for Ansys Workbench
```*Previous cell output:*
```output
458E9A7E-C268-4ED0-9CC1-FF7438521B4F (ANSYS Workbench) - Exports linear, temperature-independent, isotropic data to the Ansys Workbench format
CE8DCFA2-B3EE-4545-8D3E-82810FA92AFC (ANSYS Workbench) - Exports linear, temperature-dependent, isotropic data to the Ansys Workbench format
4B0B1EA3-8760-43DF-8060-2C79CA471D4C (ANSYS Workbench) - Exports linear, temperature-independent, isotropic with simple failure data to the Ansys Workbench format
```
Get a record by name.


```python
req = gdl.RecordNameSearchRequest(
    recordName="Nickel alloys, Inconel 718, Forging",
    table=gdl.TableReference(DBKey=dbKey, name="Design Data"),
    searchShortNames=True
)
resp = session.searchService.RecordNameSearch(req)
print(f"Found {len(resp.searchResults)} record(s)")
rec = resp.searchResults[0].recordReference
```
*Previous cell output:*
```output
Found 1 record(s)
```
## Get exporters for a specific record
Use the engineering data service to find valid FEA exporters for Inconel 718.


```python
request = gdl.ExportersForRecordsRequest(records=[rec])
resp = session.engineeringDataService.ExportersForRecords(request)
print("Output of exporters for Inconel 718")
for exporter in resp.records[0].exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")
```
*Previous cell output:*
```output
Output of exporters for Inconel 718
71CE1C21-FDEA-4119-B481-81BDC41BD900 (Abaqus 6) - Exports temperature dependent, isotropic data to the Abaqus format.
5C560880-4FD3-4E5C-992B-4B6CEF6A055A (Abaqus 6) - Exports temperature independent, isotropic data to the Abaqus 6 format.
911AF055-B388-439A-8AF6-EB18480E2D80 (Abaqus 6) - Linear, temperature-independent, isotropic, simple failure
3AE2BEA5-B1DB-45D3-A431-48915B8D1317 (Abaqus 6) - Linear, temperature-independent, isotropic, simple failure with thermal expansion
722E5C46-3633-4B72-BF93-74E8112C20C3 (Abaqus 6) - Exports temperature dependent, isotropic data to the Abaqus 6 format.
B653C213-8BEB-42A7-8512-5F340EEBFAB4 (Abaqus 6) - Exports temperature independent, isotropic data to the Abaqus 6 format.
458E9A7E-C268-4ED0-9CC1-FF7438521B4F (ANSYS Workbench) - Exports linear, temperature-independent, isotropic data to the Ansys Workbench format
CE8DCFA2-B3EE-4545-8D3E-82810FA92AFC (ANSYS Workbench) - Exports linear, temperature-dependent, isotropic data to the Ansys Workbench format
4B0B1EA3-8760-43DF-8060-2C79CA471D4C (ANSYS Workbench) - Exports linear, temperature-independent, isotropic with simple failure data to the Ansys Workbench format
```
## Get a list of parameters that can be exported
Get the parameters that can be exported from Inconel 718 using an exporter that supports them.


```python
exporter = resp.records[0].exporters[7]
req = gdl.GetExporterParametersRequest(records=[rec], exporterKey=exporter.key)
expParams = session.engineeringDataService.GetExporterParameters(req)
for attrib in expParams.records[0].attributes:
    print(attrib.attribute.name)
    for param in attrib.parameters:
        print(f"\t{param.name}")
```
*Previous cell output:*
```output
Tensile Modulus (L-dir) with Temp.
	Temperature
	Time
	Other
```
## Perform an FEA Export
Get all applicable attributes for this record.


```python
req = gdl.GetRecordAttributesRequest(recordReferences=[rec])
attribs = session.browseService.GetRecordAttributes(req)
```

If exporting a functional data attribute, you also need to define a parameter value to evaluate the attribute at.
Here, a parameter is fixed at 1.337.


```python
myParam = expParams.records[0].attributes[0].parameters[0]
pwv = gdl.ParameterReferenceAndValue(
    parameterValue=gdl.ParameterValue(numericValue=1.337),
    parameter=myParam.parameterReference,
)

pv = gdl.UnittedParameterValue(
    unitSymbol=myParam.unit.unitSymbol,
    parameterWithValues=pwv,
)
```

Run the FEA exporter, and print the output.


```python
expReq = gdl.ExportRecordDataRequest(
    attributeReferences=[a.attribute.attribute for a in attribs.recordAttributes], 
    records=[rec], 
    exporterKey=exporter.key,
    parameterValues=[pv]
)

resp = session.engineeringDataService.ExportRecordData(expReq)

print(resp.text[:200] + "...")
```
*Previous cell output:*
```output
<?xml version="1.0" encoding="utf-8"?>
<EngineeringData version="14.0.0.367" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <Materials>
    <MatML_Doc xsi:noNamespaceSchemaLocation="http:...
```
Write the output to file. First create an output directory if it doesn't exist, and then save the XML file into that
directory.


```python
from pathlib import Path
Path("./output").mkdir(exist_ok=True)
```


```python
with open("output/engineering_data.xml", "wb") as f:
    f.write(resp.text.encode("utf-8"))
```
