# Edit Data
Create and edit a **Record** object and write your changes to the MI server.

This notebook describes how to edit text-based attributes. See the following notebooks for additional attribute types:

- [Point and range attributes](./12_Add_Point_Range_Data.ipynb)
- [Date, integer, and logical attributes](./13_Add_Date_Integer_and_Logical_Data.ipynb)
- [Functional attributes](./07_Import_Functional_Data.ipynb)
- [Tabular attributes](./09_Edit_Tabular_Data.ipynb)
- [File, picture, and hyperlink attributes](./11_Add_Files_Pictures_and_Hyperlinks.ipynb)
- [Pseudo-attributes](./10_Edit_Pseudo-attributes.ipynb)

## Connect to MI
Get a database and table.


```python
from datetime import datetime
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect("http://my.server.name/mi_servicelayer", autologon=True)

db = mi.get_db(db_key="MI_Training")
db.unit_system = "SI (Consistent)"
db.absolute_temperatures = True

tab = db.get_table("Design Data")
```

## Create a new record and path
Create a path in the table from a starting folder, in this case, the top level folder, using `path_from()`.
Create a new **Record** object at the end of the path.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 5:{now}"
folder = tab.path_from(None, tree_path=["High Alloy Steel", "AMS 6520"])
record = tab.create_record(name=record_name, parent=folder)
record, folder
```



*Previous cell output:*
```output
(<Record long name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025>,
 <Record long name: AMS 6520>)
```


## Edit the record's attributes
Access some empty discrete and text attributes associated with the record.


```python
common_name = record.attributes["Common Name"]
product_form = record.attributes["Product Form"]
statistical_basis = record.attributes["Statistical Basis"]
available_properties = record.attributes["Available mechanical properties"]
```

Edit their data values.


```python
common_name.value = "Scripting Toolkit Example 5 Test Material"
product_form.value = "Plate"
```

*Statistical Basis* is a single valued discrete attribute, and must be set with a string.


```python
print(f"{statistical_basis.name} supports multivalued data? {statistical_basis.is_multivalued}")
statistical_basis.value = "S basis"
```
*Previous cell output:*
```output
Statistical Basis supports multivalued data? False
```
*Available mechanical properties* is a multivalued discrete attribute. It can be set either with a string or a list of
strings for each value.


```python
print(f"{available_properties.name} supports multivalued data? {available_properties.is_multivalued}")
available_properties.value = ["Tensile", "Compression"]
```
*Previous cell output:*
```output
Available mechanical properties supports multivalued data? True
```
## Set the record's release status
If the record is being created in a version-controlled table,
decide whether the record should be released after creation.
The record is created in the **unreleased** state
to allow more data to be added later without creating a new version.


```python
record.flag_for_release = False
```

## Write your changes to MI
First, specify the attributes on the record which you want to update on the server.


```python
record.set_attributes([common_name, product_form, statistical_basis, available_properties])
```

Then write the changes to MI. The list of updated **Record** objects is returned.


```python
record = mi.update([record])[0]
print(f"Record Name: {record.name}, State: {record.release_state}")
```
*Previous cell output:*
```output
Record Name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025, State: Unreleased
```
## 'Not Applicable' flag
Further edits can be made to the same **Record** object. In this case, the *Condition* attribute is not relevant,
so the `is_applicable` property is set to False. This sets the attribute to 'Not Applicable' in Granta MI.


```python
condition = record.attributes["Condition"]
condition.is_applicable = False
```

Set the new attributes to update, and update again to write the latest changes to the server. Release the record.


```python
record.set_attributes([condition])
record.flag_for_release = True
record = mi.update([record])[0]

print(f'Record Name: "{record.name}", State: "{record.release_state}"')
```
*Previous cell output:*
```output
Record Name: "Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025", State: "Released"
```
Check the `Record.all_versions` property for a dictionary of all versions of the record. The dictionary
contains a single version, confirming that only a single version was created in Granta MI.


```python
record.all_versions
```



*Previous cell output:*
```output
{'v1': <Record long name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025>}
```


## Meta-attributes
Meta-attributes are edited similarly to attributes, except that meta-attributes are a property of the parent
attribute, as opposed to the table. It is strongly recommended to ensure the parent attribute has a value if the
meta-attribute is being set; the behavior of a populated meta-attribute with an empty parent attribute is undefined.

If the parent attribute doesn't already have a value, set the parent attribute value.


```python
mooney_rivlin = record.attributes["Mooney-Rivlin"]
```

*Mooney-Rivlin* is a logical attribute. It is set to a Python boolean value.


```python
mooney_rivlin.value = False
```

Now set the meta-attribute value.


```python
mooney_rivlin_comments = mooney_rivlin.meta_attributes["Comments"]
mooney_rivlin_comments.value = "Material does not exhibit hyperelastic behavior."
```

Finally, set both the attribute and meta-attribute to update, and update the record.


```python
record.set_attributes([mooney_rivlin, mooney_rivlin_comments])
record.flag_for_release = True
record = mi.update([record])[0]

print(f'"Record Name: {record.name}", State: "{record.release_state}"')
```
*Previous cell output:*
```output
"Record Name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025", State: "Released"
```
Check the `Record.all_versions` property again. The dictionary contains two versions, confirming that updating the
Mooney-Rivlin attribute has created and released a second version of the record.


```python
record.all_versions
```



*Previous cell output:*
```output
{'v1': <Record long name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025>,
 'v2': <Record long name: Scripting Toolkit Example 5:Wed Apr  9 10:41:06 2025>}
```


## Output the record's attributes
The attribute values are accessed via the same properties used for assignment.
*Statistical Basis* and *Available mechanical properties* are discrete attributes. For multivalued discrete attributes
the value is a list of strings, otherwise the value is a string.
*Condition* is set to 'Not Applicable'; this is checked when printing the attribute value.


```python
common_name = record.attributes["Common Name"]
print(f"Common Name: {common_name.value}")

product_form = record.attributes["Product Form"]
print(f"Product Form: {product_form.value}")

statistical_basis = record.attributes["Statistical Basis"]
print(f"Statistical Basis: {statistical_basis.value}")

available_properties = record.attributes["Available mechanical properties"]
result = ", ".join([prop for prop in available_properties.value])
print(f"Available mechanical properties: {result}")

condition = record.attributes["Condition"]
result = condition.value if condition.is_applicable else "<Not Applicable>"
print(f"Condition: {result}")

mooney_rivlin = record.attributes["Mooney-Rivlin"]
mooney_rivlin_comment = mooney_rivlin.meta_attributes["Comments"]
result = "Yes" if mooney_rivlin.value else "No"
print(f"Mooney-Rivlin: {result}, comments: {mooney_rivlin_comment.value}")
```
*Previous cell output:*
```output
Common Name: Scripting Toolkit Example 5 Test Material
Product Form: Plate
Statistical Basis: S basis
Available mechanical properties: Tensile, Compression
Condition: <Not Applicable>
Mooney-Rivlin: No, comments: Material does not exhibit hyperelastic behavior.
```