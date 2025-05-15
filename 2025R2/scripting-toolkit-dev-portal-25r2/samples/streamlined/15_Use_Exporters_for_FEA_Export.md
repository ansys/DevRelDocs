# Export data for FEA
Use MI exporters to export records for use with FEA, CAE or CAD packages.

## Find exporters
Check which exporters are available for a specific table.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Design Data")

exporters_in_table = table.get_available_exporters(package="ANSYS Workbench")

print("\nOutput of available ANSYS Workbench Exporters")
for exporter in exporters_in_table:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")
```
*Previous cell output:*
```output

Output of available ANSYS Workbench Exporters
458E9A7E-C268-4ED0-9CC1-FF7438521B4F (ANSYS Workbench) - Exports linear, temperature-independent, isotropic data to the Ansys Workbench format
CE8DCFA2-B3EE-4545-8D3E-82810FA92AFC (ANSYS Workbench) - Exports linear, temperature-dependent, isotropic data to the Ansys Workbench format
4B0B1EA3-8760-43DF-8060-2C79CA471D4C (ANSYS Workbench) - Exports linear, temperature-independent, isotropic with simple failure data to the Ansys Workbench format
```
Check which exporters are applicable to a specific record.


```python
rec = table.search_for_records_by_name(
    "250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis"
)[0]
applicable_exporters = rec.get_available_exporters()
print("\nOutput of exporters for 250 Grade Maraging steel:")

for exporter in applicable_exporters:
    print(f"{exporter.name} ({exporter.package}) - {exporter.description}")
```
*Previous cell output:*
```output

Output of exporters for 250 Grade Maraging steel:
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
## Working with parameters
Some exporters support parameters. The exported parameters have default values but they can also be set manually.

Get the required parameters for an exporter.


```python
all_exporters = rec.get_available_exporters(
    package="Abaqus 6",
    model="Linear, temperature-dependent, isotropic, thermal, plastic"
)
exporter_to_use = all_exporters[0]

parameters_required = exporter_to_use.get_parameters_required_for_export([rec])
print(parameters_required)
```
*Previous cell output:*
```output
{'Time': <ExporterParameter name: Time, type: Numeric, unit: hr>}
```
Set the parameter values and perform the export to obtain the material card for use with FEA software. Provide one or
more records to the exporter, up to the maximum number specified in the exporter configuration file. The records will
be exported to the same material card.


```python
parameter_values = {"Time": 100.0}
for parameter_name in parameters_required.keys():
    parameters_required[parameter_name].value_for_exporters = parameter_values[parameter_name]

material_card = exporter_to_use.run_exporter([rec], parameter_defs=parameters_required)
print(material_card)
```
*Previous cell output:*
```output
**
**Granta Material Name: 250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis
**Model Type: Linear, temperature-dependent, isotropic, thermal, plastic
**Unit System: SI (Consistent)
**Export User: ANSYS\mi-sw-admin
**Export DateTime: 2025-05-12T12:17:04.8602976-04:00
**Database Name: MI Training
**Table Name: Design Data
**Material Record History Id: 20673
**Density: 7.92e+3 kg/m^3
**Thermal conductivity with temperature: 37 datapoints W/m.°C
**Thermal expansion coefficient with temperature: 103 datapoints strain/°C
**Tensile strength, yield with temperature: 0 datapoints Pa
**Tensile modulus with temperature: 0 datapoints Pa
**Poissons ratio: 3.10e-1
**Thermal diffusivity with temperature: [No Value]
**
**Comments
**
**LinearIsoTempThermalPlastic.xslt: Transformed CAE material model data
**(Linear, temperature-dependent, isotropic, thermal, plastic) to Abaqus 6 format.
**
**
*MATERIAL, NAME = A250_Grade_Maraging_Maraged_at
**
*DENSITY
7.92e+3
**
**
**ELASTIC
** [No Value]
**
**PLASTIC
** [No Value]
**
*EXPANSION, ZERO=2.93e+2
5.41e-6, 1.09e+1
5.58e-6, 2.20e+1
5.75e-6, 3.32e+1
5.92e-6, 4.43e+1
6.09e-6, 5.54e+1
6.25e-6, 6.65e+1
6.41e-6, 7.76e+1
6.57e-6, 8.87e+1
6.73e-6, 9.98e+1
6.88e-6, 1.11e+2
7.03e-6, 1.22e+2
7.17e-6, 1.33e+2
7.31e-6, 1.44e+2
7.45e-6, 1.55e+2
7.58e-6, 1.66e+2
7.71e-6, 1.78e+2
7.83e-6, 1.89e+2
7.95e-6, 2.00e+2
8.07e-6, 2.11e+2
8.18e-6, 2.22e+2
8.30e-6, 2.33e+2
8.40e-6, 2.44e+2
8.51e-6, 2.55e+2
8.61e-6, 2.66e+2
8.71e-6, 2.78e+2
8.81e-6, 2.89e+2
8.91e-6, 3.00e+2
9.00e-6, 3.11e+2
9.10e-6, 3.22e+2
9.19e-6, 3.33e+2
9.28e-6, 3.44e+2
9.36e-6, 3.55e+2
9.45e-6, 3.66e+2
9.53e-6, 3.78e+2
9.61e-6, 3.89e+2
9.69e-6, 4.00e+2
9.77e-6, 4.11e+2
9.84e-6, 4.22e+2
9.91e-6, 4.33e+2
9.98e-6, 4.44e+2
1.01e-5, 4.55e+2
1.01e-5, 4.66e+2
1.02e-5, 4.78e+2
1.02e-5, 4.89e+2
1.03e-5, 5.00e+2
1.03e-5, 5.11e+2
1.04e-5, 5.22e+2
1.04e-5, 5.33e+2
1.05e-5, 5.44e+2
1.05e-5, 5.55e+2
1.06e-5, 5.66e+2
1.06e-5, 5.78e+2
1.06e-5, 5.89e+2
1.07e-5, 6.00e+2
1.07e-5, 6.11e+2
1.07e-5, 6.22e+2
1.07e-5, 6.33e+2
1.07e-5, 6.44e+2
1.08e-5, 6.55e+2
1.08e-5, 6.66e+2
1.08e-5, 6.78e+2
1.08e-5, 6.89e+2
1.08e-5, 7.00e+2
1.08e-5, 7.11e+2
1.08e-5, 7.22e+2
1.08e-5, 7.33e+2
1.08e-5, 7.44e+2
1.08e-5, 7.55e+2
1.08e-5, 7.66e+2
1.08e-5, 7.78e+2
1.08e-5, 7.89e+2
1.08e-5, 8.00e+2
1.07e-5, 8.11e+2
1.07e-5, 8.22e+2
1.06e-5, 8.33e+2
1.06e-5, 8.44e+2
1.05e-5, 8.55e+2
1.04e-5, 8.66e+2
1.02e-5, 8.78e+2
1.00e-5, 8.89e+2
9.86e-6, 9.00e+2
9.66e-6, 9.11e+2
9.45e-6, 9.22e+2
9.24e-6, 9.33e+2
9.03e-6, 9.44e+2
8.84e-6, 9.55e+2
8.68e-6, 9.66e+2
8.54e-6, 9.78e+2
8.42e-6, 9.89e+2
8.34e-6, 1.00e+3
8.28e-6, 1.01e+3
8.25e-6, 1.02e+3
8.25e-6, 1.03e+3
8.27e-6, 1.04e+3
8.31e-6, 1.06e+3
8.37e-6, 1.07e+3
8.44e-6, 1.08e+3
8.54e-6, 1.09e+3
8.66e-6, 1.10e+3
8.82e-6, 1.11e+3
9.02e-6, 1.12e+3
9.29e-6, 1.13e+3
9.67e-6, 1.14e+3
**
**
*CONDUCTIVITY
2.51e+1, 3.00e+2
2.54e+1, 3.11e+2
2.56e+1, 3.22e+2
2.59e+1, 3.33e+2
2.62e+1, 3.44e+2
2.65e+1, 3.55e+2
2.67e+1, 3.66e+2
2.70e+1, 3.78e+2
2.73e+1, 3.89e+2
2.75e+1, 4.00e+2
2.78e+1, 4.11e+2
2.80e+1, 4.22e+2
2.83e+1, 4.33e+2
2.85e+1, 4.44e+2
2.87e+1, 4.55e+2
2.89e+1, 4.66e+2
2.91e+1, 4.78e+2
2.93e+1, 4.89e+2
2.94e+1, 5.00e+2
2.96e+1, 5.11e+2
2.98e+1, 5.22e+2
2.99e+1, 5.33e+2
3.00e+1, 5.44e+2
3.02e+1, 5.55e+2
3.03e+1, 5.66e+2
3.04e+1, 5.78e+2
3.05e+1, 5.89e+2
3.05e+1, 6.00e+2
3.06e+1, 6.11e+2
3.07e+1, 6.22e+2
3.08e+1, 6.33e+2
3.08e+1, 6.44e+2
3.09e+1, 6.55e+2
3.09e+1, 6.66e+2
3.10e+1, 6.78e+2
3.10e+1, 6.89e+2
3.11e+1, 7.00e+2
**
**
**SPECIFIC HEAT
** [No Value]
*NODE
1, 0.0, 0.0, 0.0
*ELEMENT, TYPE=CPE4, ELSET=EALL
1, 1, 2, 5, 4
```
Save the exported data using the settings provided in the .exp file. The filename, extension, and file encoding scheme
are left as their defaults.


```python
path_to_save = "./"
file_name = "Example_Export"
exporter_to_use.save(path_to_save, file_name="Example_Export")
file_extension = exporter_to_use.default_file_extension
print(f"Exporter output saved to \"{path_to_save}{file_name}.{file_extension}\"")
```
*Previous cell output:*
```output
Exporter output saved to "./Example_Export.inp"
```