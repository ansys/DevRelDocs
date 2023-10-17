# Fetch Attribute Data in Bulk
By default, all attribute values are dynamically retrieved from the server when `Record.attributes` is accessed. When
operating on many records, this can result in poor performance, as unnecessary data might be exported for each record
and as export requests are performed for each individual record.
By grouping records into fewer requests through batching, and allowing the export of only a subset of attributes,
`bulk_fetch()` can be used to enhance performance.

## Connect to MI 
Specify a database and table.


```python
from GRANTA_MIScriptingToolkit import granta as mpy

mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
db.set_unit_system('Metric', absolute_temperatures=True)
tab = db.get_table('MaterialUniverse')
```

## Define a list of records to fetch
For example, by Record GUID.


```python
guids = ['00001192-000e-4fff-8fff-dd92ffff0000',
         '00001194-000e-4fff-8fff-dd92ffff0000',
         '0000119b-000e-4fff-8fff-dd92ffff0000',
         '00000e38-000e-4fff-8fff-dd92ffff0000',
         '00000e41-000e-4fff-8fff-dd92ffff0000',
         '000009cb-000e-4fff-8fff-dd92ffff0000']
```

Get each record using its Record GUID, using the `get_records_by_ids` method.


```python
records = tab.get_records_by_ids([{"vguid": guid} for guid in guids])
records
```




    [<Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, aged>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, solution treated & aged>,
     <Record long name: Aluminum, 7075, wrought, T6>,
     <Record long name: Aluminum, 7075, wrought, T73>,
     <Record long name: Low alloy steel, AISI 4130, air melted, normalized>]



## Fetch attribute data values 
Fetch the *Base*, *Density* and *Young's modulus* attribute values for each record, and print the results.
Default units can be overridden before export using the `table.set_display_unit()` method.


```python
tab.set_display_unit("Young's modulus", "ksi")
tab.bulk_fetch(records=records, attributes=["Base", "Density", "Young's modulus"])
```


```python
density_unit = tab.attributes['Density'].unit
youngs_mod_unit = tab.attributes["Young's modulus"].unit
print('{:50.50} | {:^21} | {:^21} | {:^18}'.format('Name',
                                                   'Density / ' + density_unit,
                                                   "Young's modulus / " + youngs_mod_unit,
                                                   'Base'))
print('-'*120)
for record in records:
    output = '{:50.50} | {:^10.2f}-{:^10.2f} | {:^10.2f}-{:^10.2f} | {:^20}'.format(record.name,
        record.attributes['Density'].value['low'],
        record.attributes['Density'].value['high'],
        record.attributes["Young's modulus"].value['low'],
        record.attributes["Young's modulus"].value['high'],
        str(record.attributes['Base'].value))
    print(output)
```

    Name                                               |   Density / kg/m^3    | Young's modulus / ksi |        Base       
    ------------------------------------------------------------------------------------------------------------------------
    Titanium, alpha-beta alloy, Ti-6Al-4V, aged        |  4420.00  - 4430.00   |  16099.19 - 17259.49  |    Ti (Titanium)    
    Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, g |  4406.64  - 4450.93   |  15954.15 - 17259.49  |    Ti (Titanium)    
    Titanium, alpha-beta alloy, Ti-6Al-4V, solution tr |  4406.64  - 4450.93   |  15954.15 - 16969.41  |    Ti (Titanium)    
    Aluminum, 7075, wrought, T6                        |  2770.00  - 2830.00   |  10007.60 - 11022.87  |    Al (Aluminum)    
    Aluminum, 7075, wrought, T73                       |  2781.69  - 2809.65   |  10007.60 - 10520.81  |    Al (Aluminum)    
    Low alloy steel, AISI 4130, air melted, normalized |  7794.24  - 7872.58   |  29007.55 - 30495.11  |      Fe (Iron)      
    

## Fetch meta-attributes data values
Meta-attributes can be included in a bulk export operation by specifying their `AttributeDefinition`, which can be
obtained from the parent attribute definition.
Accessing a meta-attribute that has not been exported will raise an error, even if the parent attribute has been
exported.
Fetch the attribute *Food contact* and associated meta-attribute *Notes* for each record and print the results.


```python
import textwrap
```


```python
food_contact = tab.attributes['Food contact']
food_contact_notes = food_contact.meta_attributes['Notes']
```


```python
tab.bulk_fetch(records=records, attributes=[food_contact, food_contact_notes])
```


```python
print('{:50.50} | {:^18} | {:^42}'.format(
    'Name', 'Food contact', 'Notes')
)
print('-'*120)
for record in records:
    output = '{:50.50} | {:^18} | {:^42}'.format(
        record.name,
        record.attributes['Food contact'].value,
        textwrap.shorten(str(record.attributes['Food contact'].meta_attributes['Notes'].value), width=42),
    )
    print(output)
```

    Name                                               |    Food contact    |                   Notes                   
    ------------------------------------------------------------------------------------------------------------------------
    Titanium, alpha-beta alloy, Ti-6Al-4V, aged        |        Yes         |                    None                   
    Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, g |        Yes         |                    None                   
    Titanium, alpha-beta alloy, Ti-6Al-4V, solution tr |        Yes         |                    None                   
    Aluminum, 7075, wrought, T6                        |        Yes         |   Not valid for use in France and [...]   
    Aluminum, 7075, wrought, T73                       |        Yes         |   Not valid for use in France and [...]   
    Low alloy steel, AISI 4130, air melted, normalized |        Yes         |                    None                   
    
