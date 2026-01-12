# Browse Granta MI
Use various methods to get records from Granta MI.

This notebook shows three methods of browsing for records in Granta MI:

* Get records by internal Granta MI identifier
* Get records by an exact match on a short text attribute value
* Get records by navigating the tree structure

## Connect to MI


```python
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
```

## Access a record by specifying an internal ID
Get a record with a specific identifier, for example history GUID.


```python
record_by_guid = db.get_record_by_id(hguid="bf5e6054-6cad-4c9d-ad7a-adfa124c504b")
record_by_guid
```



*Previous cell output:*
```output
<Record long name: Soda barium glass>
```


## Access a record by specifying a unique short text value
Get a record with a unique short-text attribute value using the `Table.get_record_by_lookup_value()` method.


```python
tensile_test_data = db.get_table("Tensile Test Data")
record_by_value = tensile_test_data.get_record_by_lookup_value("Specimen ID", "MTS-615722")
record_by_value
```



*Previous cell output:*
```output
<Record long name: MTS-615722>
```


## Browse for records by navigating the tree structure
The following examples show two methods of browsing the Granta MI tree structure in Python. These examples use the
*MaterialUniverse* table.


```python
material_universe = db.get_table("MaterialUniverse")
```

### Iterative browsing
Browse iteratively by getting the immediate children of each record in turn. First, get the top-level folders of the
table with the `Table.children` property:


```python
material_universe_folders = material_universe.children
[f"Name: {child.name}, Type: {child.type}" for child in material_universe_folders]
```



*Previous cell output:*
```output
['Name: Ceramics and glasses, Type: Folder',
 'Name: Hybrids: composites, foams, honeycombs, natural materials, Type: Folder',
 'Name: Metals and alloys, Type: Folder',
 'Name: Polymers: plastics, elastomers, Type: Folder',
 'Name: NEW RECORDS, Type: Folder']
```


Then filter for a specific folder and access the `Record.children` property to find its children:


```python
ceramics_and_glasses = [child for child in material_universe_folders if child.short_name == "Ceramics and glasses"][0]
[f"Name: {child.name}, Type: {child.type}" for child in ceramics_and_glasses.children]
```



*Previous cell output:*
```output
['Name: Glasses, Type: Folder', 'Name: Technical Ceramics, Type: Folder']
```


Repeat the process to navigate the tree structure until you reach your records of interest.


```python
glasses = [child for child in ceramics_and_glasses.children if child.short_name == "Glasses"][0]
alumino_silicate = [child for child in glasses.children if child.short_name == "Alumino silicate"][0]
[f"Name: {child.name}, Type: {child.type}" for child in alumino_silicate.children]
```



*Previous cell output:*
```output
['Name: Alumino silicate - 1720, Type: Record',
 'Name: Alumino silicate - 1723, Type: Record',
 'Name: Lithium aluminosilicate, Type: Record',
 'Name: Soda barium glass, Type: Record']
```


### Access a tree location directly

The `table.get_records_from_path()` method returns all the records at the end of a specified path.
It accepts wildcards at any level.

Get all records that are great-grandchildren of folders with the short name *Ceramics and glasses* and also have a
parent with the short name *Baryta*.


```python
baryta_children = material_universe.get_records_from_path(
    starting_node=None,
    tree_path=["Ceramics and glasses", None, "Baryta"],
    use_short_names=True,
)
baryta_children
```



*Previous cell output:*
```output
[<Record long name: Barium silicate>]
```


Get all records that are great-grandchildren of the folder *Ceramics and glasses*.


```python
ceramics_great_grandchildren = material_universe.get_records_from_path(
    starting_node=ceramics_and_glasses,
    tree_path=[None, None],
)
ceramics_great_grandchildren
```



*Previous cell output:*
```output
[<Record long name: Alumino silicate - 1720>,
 <Record long name: Alumino silicate - 1723>,
 <Record long name: Lithium aluminosilicate>,
 <Record long name: Soda barium glass>,
 <Record long name: Barium silicate>,
 <Record long name: Tungsten carbide>]
```


### Access all descendant records within a folder
Use the `Record.get_descendants()` method to retrieve all records that are a descendant of the specified record
in a single step.


```python
all_ceramics_and_glasses = ceramics_and_glasses.get_descendants()
all_ceramics_and_glasses
```



*Previous cell output:*
```output
[<Record long name: Alumino silicate - 1720>,
 <Record long name: Alumino silicate - 1723>,
 <Record long name: Lithium aluminosilicate>,
 <Record long name: Soda barium glass>,
 <Record long name: Barium silicate>,
 <Record long name: Tungsten carbide>]
```


Print the results and whether the object is a record or folder.


```python
print(f"{'Record Name':^30.30} | {'Short Name':^30.30} | {'Record / Folder?':^30.30}")
print("-" * 96)
for r in all_ceramics_and_glasses:
    print(f"{r.name:^30.30} | {r.short_name:^30.30} | {r.type:^30.30}")
```
*Previous cell output:*
```output
         Record Name           |           Short Name           |        Record / Folder?       
------------------------------------------------------------------------------------------------
   Alumino silicate - 1720     |    Alumino silicate - 1720     |             Record            
   Alumino silicate - 1723     |    Alumino silicate - 1723     |             Record            
   Lithium aluminosilicate     |    Lithium aluminosilicate     |             Record            
      Soda barium glass        |       Soda barium glass        |             Record            
       Barium silicate         |        Barium silicate         |             Record            
       Tungsten carbide        |        Tungsten carbide        |             Record
```