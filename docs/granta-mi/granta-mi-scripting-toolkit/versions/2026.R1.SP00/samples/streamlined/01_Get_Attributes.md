# Get Attributes
Find out about the database schema by accessing the `attributes` property of the **Table** object.

## Connect to MI


```python
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
```

## Get table
Get a database, then set the unit system for the **Database** object.


```python
db = mi.get_db(db_key="MI_Training")
db.unit_system = "Metric"
db.unit_system
```



*Previous cell output:*
```output
'Metric'
```


Get a table from the database.


```python
table = db.get_table("Training Exercise for Import")
table
```



*Previous cell output:*
```output
<Table name: Training Exercise for Import, subsets: {'Materials'}>
```


## Access the attribute definitions
These are associated with the **Table** object through the `attributes` property,
which returns a dictionary of **AttributeDefinition** objects.


```python
print(f"{'Name':30.30} - {'Type':^10.10} - {'Unit':^10.10} - {'Meta?':^10.10}")
print("-" * 70)
for name, att in table.attributes.items():
    print(f"{name:30.30} - {att.type:^10.10} - {getattr(att, 'unit', ''):^10.10} - {str(att.is_meta):^10.10}")
```
*Previous cell output:*
```output
Name                           -    Type    -    Unit    -   Meta?   
----------------------------------------------------------------------
Base                           -    DISC    -            -   False   
Composition                    -    STXT    -            -   False   
Density                        -    POIN    -   kg/m^3   -   False   
Description                    -    LTXT    -            -   False   
Document                       -    FILE    -            -   False   
Electrical Properties          -    DISC    -            -   False   
Material                       -    STXT    -            -   False   
More Information               -    HLNK    -            -   False   
Tensile Modulus                -    RNGE    -    GPa     -   False   
Tensile Strength               -    RNGE    -    MPa     -   False   
Transparent                    -    LOGI    -            -   False   
Typical Use                    -    PICT    -            -   False   
Young's Modulus                -    FUNC    -    GPa     -   False   
Stress-strain Chart            -    FUNC    -    MPa     -   False   
Creep Rupture                  -    FUNC    -    MPa     -   False   
Environmental Resistance       -    DSFN    -            -   False   
Design Allowable Data          -    TABL    -            -   False   
Atomic number                  -    INPT    -            -   False   
Date of datasheet release      -    DTTM    -            -   False   
Wikipedia page                 -    HLNK    -            -   False   
Environmental performances ove -    TABL    -            -   False   
Characterization of this mater -    TABL    -            -   False   
Yield Strength                 -    POIN    -    MPa     -   False
```