# Link Records
Create and edit smart and static links between records.

## Create a new record
Connect to MI and get a database and table.


```python
from datetime import datetime
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
table = db.get_table("Training Exercise for Import")
```

Create a new record in the subset *Materials*.


```python
now = datetime.now().strftime("%c")
record_name = f"Scripting Toolkit Example 15:{now}"
record = table.create_record(record_name, subsets={"Materials"})
```

## Smart links
A smart link is configured in this database to link records with matching values for the attribute *Base*. Setting a
value for *Base* on the new record will link it to all existing records with the same value for that attribute.

Set the value of *Base* to *Oxide*, then write the changes to MI. At this point, the new record is created on the
server.


```python
base = record.attributes["Base"]
base.value = "Oxide"
record.set_attributes([base])
record = mi.update([record])[0]
```

View the smart links that have just been created to the new record.


```python
for link_group, records in record.links.items():
    print(f'Link group "{link_group}" contains links to the following records:')
    print(", ".join([r.name for r in records]))
```
*Previous cell output:*
```output
Link group "MaterialUniverse" contains links to the following records:

Link group "Smart Link to MaterialUniverse" contains links to the following records:
Alumino silicate - 1720, Lithium aluminosilicate, Alumino silicate - 1723, Barium silicate, Soda barium glass
```
## Static links
A static link can be created between two existing records, including cross-database.

Get a record from *MaterialUniverse* to link to your newly-created record.


```python
mu_record = db.get_record_by_id(hguid="bf5e6054-6cad-4c9d-ad7a-adfa124c504b")
```

Add the *MaterialUniverse* record to the link group on the new record.


```python
new_linked_records = record.links["MaterialUniverse"]
new_linked_records.add(mu_record)
record.set_links(link_name="MaterialUniverse", records=new_linked_records)
```

Write your changes to MI (use `update_links()` for changes to links, not `update()`).


```python
record = mi.update_links([record])[0]
```

View your new link on the list of record links.


```python
for link_group, records in record.links.items():
    print(f'Link group "{link_group}" contains links to the following records:')
    print(", ".join([r.name for r in records]))
```
*Previous cell output:*
```output
Link group "MaterialUniverse" contains links to the following records:
Soda barium glass
Link group "Smart Link to MaterialUniverse" contains links to the following records:
Alumino silicate - 1720, Lithium aluminosilicate, Barium silicate, Alumino silicate - 1723, Soda barium glass
```
## Associated Records
Associated Records are a way of traversing tabular links multiple steps at a time. This example finds all materials
impacted by a certain legislation by building an associated record chain between three tables.

First define the starting table and record. The association chain starts on the relevant record in the *Legislations
and Lists* table.


```python
starting_table = db.get_table("Legislations and Lists")
starting_record = starting_table.get_record_by_lookup_value(
    attribute_name="Legislation ID",
    lookup_value="Candidate_AnnexXV",
)
```

Next, set the tabular attribute that forms the first step in the chain. In this case, it is the tabular attribute
that links the *Restricted Substances* table to the *Legislations and Lists* table.


```python
rs_table = db.get_table("Restricted Substances")
first_step = rs_table.attributes["Legislations restricting its use"]
```

Then set the tabular attribute that forms the second step in the chain: *Restricted substances associated with this
material*.


```python
materialuniverse_table = db.get_table("MaterialUniverse")
second_step = materialuniverse_table.attributes["Restricted substances associated with this material"]
```

Finally, use the `get_associated_records()` method on the `starting_record` **Record** object to extract the records
at the end of the association chain.


```python
associated_records = starting_record.get_associated_records(
    target_table=materialuniverse_table,
    link_direction="Reverse",
    attribute_path=[first_step, second_step],
)
associated_records
```



*Previous cell output:*
```output
[<Record long name: PVC-elastomer (Shore A35)>,
 <Record long name: Barium silicate>]
```

