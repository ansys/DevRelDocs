# Search Granta MI
Use the three available search methods to search for records.

All three methods can be performed at either the Session, Database, or Table levels:

* Simple text search
* Record name search
* Criteria search

## Connect to MI


```python
from GRANTA_MIScriptingToolkit import granta as mpy
mi = mpy.connect('http://my.server.name/mi_servicelayer', autologon=True)
db = mi.get_db(db_key='MI_Training')
material_universe = db.get_table('MaterialUniverse', unit_system='UK Imperial', absolute_temperatures=False)
```

## Simple text search
Search for records which contain the string anywhere in the record.


```python
normalized_material_records = material_universe.search_for_records_by_text('Normalized')
normalized_material_records
```




    [<Record long name: Low alloy steel, AISI 4130, air melted, normalized>]



## Record name search
Search for records by name. Only exact matches to the long or short name of a record are returned.


```python
sodium_barium_glass_records = material_universe.search_for_records_by_name('Soda barium glass')
sodium_barium_glass_records
```




    [<Record long name: Soda barium glass>]



## Criteria searches
Search criteria are constructed from **AttributeDefinition** objects using the `search_criterion()` method.

This search type is typically used in 7 different scenarios:

* Text searches
* Numeric searches
* Date searches
* Boolean searches
* Tabular searches
* Searching for the presence of any value
* Combining search criteria


### Text searches
In these examples, the criteria are that the attribute *Base* in the *MaterialUniverse* table:

* Contains iron (`contains=`)
* Does not contain iron (`does_not_contain=`)
* Contains one of three specified metals (`contains_any=`)
* Contains all three specified metals (`contains_all=`)


```python
base_attribute = material_universe.attributes['Base']
```

All materials that contain Iron:


```python
base_contains_iron = base_attribute.search_criterion(contains='Fe (Iron)')
base_contains_iron
```




    <SearchCriterion: Base - CONTAINS - 'Fe (Iron)'>




```python
iron_records = material_universe.search_for_records_where([base_contains_iron])
iron_records
```




    [<Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
     <Record long name: 250 maraging steel, maraged at 900F>,
     <Record long name: Low alloy steel, AISI 4130, air melted, normalized>]



All materials that **do not** contain Iron:


```python
base_does_not_contain_iron = base_attribute.search_criterion(does_not_contain='Fe (Iron)')
iron_free_records = material_universe.search_for_records_where([base_does_not_contain_iron])
iron_free_records[:5]
```




    [<Record long name: Ceramics and glasses>,
     <Record long name: Soda barium glass>,
     <Record long name: Aluminum, 7075, wrought, T73>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, aged>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic>]



All materials that contain **one of** Iron, Aluminum **or** Titanium:


```python
base_contains_any_metal = base_attribute.search_criterion(contains_any=['Fe (Iron)', 'Al (Aluminum)', 'Ti (Titanium)'])
base_any_metal_records = material_universe.search_for_records_where([base_contains_any_metal])
base_any_metal_records
```




    [<Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
     <Record long name: Aluminum, 7075, wrought, T73>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, aged>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, solution treated & aged>,
     <Record long name: 250 maraging steel, maraged at 900F>,
     <Record long name: Low alloy steel, AISI 4130, air melted, normalized>,
     <Record long name: Aluminum, 7075, wrought, T6>]



All materials that contain Iron, Aluminum **and** Titanium:


```python
base_contains_all_metals = base_attribute.search_criterion(contains_all=['Fe (Iron)', 'Al (Aluminum)', 'Ti (Titanium)'])
base_all_metals_records = material_universe.search_for_records_where([base_contains_all_metals])
base_all_metals_records
```




    []



### Numeric searches
In this example, the criteria are that the attribute *Yield Strength, L* in the *Design Data* table is either greater than or less than 145 ksi.


```python
design_data = db.get_table('Design Data', unit_system='UK Imperial', absolute_temperatures=False)
yield_strength_l_attribute = design_data.attributes['Yield Strength, L']
```

Materials with a *Yield Strength* **less than** 145 ksi:


```python
yield_strength_l_attribute.unit
low_yield_strength = yield_strength_l_attribute.search_criterion(less_than=145.0)
low_yield_strength_records = design_data.search_for_records_where([low_yield_strength])
low_yield_strength_records
```




    [<Record long name: Titanium alloys, Ti-6Al-4V>]



Materials with a *Yield Strength* **greater than** 145 ksi:


```python
high_yield_strength = yield_strength_l_attribute.search_criterion(greater_than=145.0)
high_yield_strength_records = design_data.search_for_records_where([high_yield_strength])
high_yield_strength_records
```




    [<Record long name: Nickel alloys, Inconel 718, Forging>,
     <Record long name: 250 Grade Maraging, Maraged at 900F, Plate, Thickness: 0.1875 to 0.251 in, AMS 6520, S basis>]



### Date searches
In this example, the search is for records in the *Legislation and Lists* table with an *Effective Date* between 1970 and 2000.


```python
legislations = db.get_table('Legislations and Lists', unit_system='UK Imperial', absolute_temperatures=False)
effective_date_attribute = legislations.attributes['Effective date']
```


```python
import datetime
start_date = datetime.datetime(1970, 1, 1)
end_date = datetime.datetime(2000, 1, 1)
effective_date_1970_2000 = effective_date_attribute.search_criterion(between_dates=(start_date, end_date))
legislations_1970_2000 = legislations.search_for_records_where([effective_date_1970_2000])
legislations_1970_2000
```




    [<Record long name: TSCA Section 6>]



### Boolean searches
Search for records with a certain Boolean value. In this example, the search is for all materials where RoHS compliant grades are available.


```python
RoHS_grades_attribute = material_universe.attributes['RoHS (EU) compliant grades?']

RoHS_grades_true = RoHS_grades_attribute.search_criterion(contains=True)
materials_with_rohs_grades = material_universe.search_for_records_where([RoHS_grades_true])
materials_with_rohs_grades[:5]
```




    [<Record long name: Soda barium glass>,
     <Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
     <Record long name: Aluminum, 7075, wrought, T73>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, aged>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic>]



### Combining criteria
The `search_for_records_where` method takes a list of criteria, allowing criteria to be combined as long as they relate to attributes in the same table.


```python
metals_with_rohs_grades = material_universe.search_for_records_where([base_contains_any_metal, RoHS_grades_true])
metals_with_rohs_grades
```




    [<Record long name: Low alloy steel, AISI 4130, air melted, quenched & tempered>,
     <Record long name: Aluminum, 7075, wrought, T73>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, aged>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, annealed, generic>,
     <Record long name: 250 maraging steel, maraged at 900F>,
     <Record long name: Low alloy steel, AISI 4130, air melted, normalized>,
     <Record long name: Titanium, alpha-beta alloy, Ti-6Al-4V, solution treated & aged>,
     <Record long name: Aluminum, 7075, wrought, T6>]



### Searching for the existence of data
We can also define criteria that search for records which have *any* value for the specified attribute, with no restriction on the data.


```python
restricted_substances = db.get_table('Restricted Substances', unit_system='UK Imperial', absolute_temperatures=False)
SVHC_criterion = restricted_substances.attributes['SVHC criterion']

svhc_exists = SVHC_criterion.search_criterion(exists=True)
svhc_materials = restricted_substances.search_for_records_where([svhc_exists])
svhc_materials
```




    [<Record long name: Dibutyl phthalate [84-74-2]>,
     <Record long name: Bis (2-ethyl(hexyl)phthalate) (DEHP) [117-81-7]>,
     <Record long name: Alkanes, C10-13, chloro;  (Short chain chlorinated paraffins ) [85535-84-8]>,
     <Record long name: Potassium chromate [7789-00-6]>,
     <Record long name: Arsenic trioxide [1327-53-3]>]



### Searching for tabular data
Searching tabular data works in exactly the same way as searching attributes, except the criteria require an additional argument to specify the applicable column. This example finds all records in the *MaterialUniverse* table that contain at least one tabular row, and where both the following are true:

* The 'Substance name' column contains the text value 'Alkanes'
* The 'Amount' column contains a value greater than 10.0


```python
declaration = material_universe.attributes['Restricted substances that may be associated with this material']

substance_contains_alkanes = declaration.search_criterion(contains='Alkanes', in_column='Substance name')
amount_gt_10 = declaration.search_criterion(greater_than=10.0, in_column='Amount')

affected_materials = restricted_substances.search_for_records_where([substance_contains_alkanes, amount_gt_10])
affected_materials
```




    [<Record long name: PVC-elastomer (Shore A35)>,
     <Record long name: PVC-elastomer (Shore A75, flame retarded)>,
     <Record long name: PVC-elastomer (Shore A55)>,
     <Record long name: PVC-elastomer (Shore A75)>]



Print the results of the tabular search.


```python
print('{:^55.55} | {:^55.55}'.format('Record Name', 'Short Name'))
print('-'*113)
for r in affected_materials:
    print('{:^55.55} | {:^55.55}'.format(str(r.name), r.short_name))
```

                          Record Name                       |                       Short Name                       
    -----------------------------------------------------------------------------------------------------------------
                   PVC-elastomer (Shore A35)                |                        Shore A35                       
           PVC-elastomer (Shore A75, flame retarded)        |                Shore A75, flame retarded               
                   PVC-elastomer (Shore A55)                |                        Shore A55                       
                   PVC-elastomer (Shore A75)                |                        Shore A75                       
    

### Searching with pseudoattributes
Some pseudoattributes can be used as search criteria, they behave as ordinary attributes and permit the same criteria
to be used. By default they are not limited to a single table. This example searches for tensile test results for
**MTS** samples (High Alloy Steels) that were last modified in the 24 hours before the 29th of April 2021 at 10:43.


```python
tensile_test_table = db.get_table("Tensile Test Data")

name_criterion = mpy.SearchCriterion(mpy.PseudoAttributeDefinition("name"), "CONTAINS", "MTS")

start_datetime = datetime.datetime(year=2021, month=4, day=28, hour=9, minute=44)
end_datetime = datetime.datetime(year=2021, month=4, day=29, hour=9, minute=43)
modified_criterion = mpy.SearchCriterion(
    mpy.PseudoAttributeDefinition("modifiedDate"), "BETWEEN", (start_datetime, end_datetime)
)

modified_records = tensile_test_table.search_for_records_where([name_criterion, modified_criterion])

print('{:^55.55} | {:^55.55}'.format('Record Name', 'Last Modified Date'))
print('-'*113)
for r in modified_records:
    print('{:^55.55} | {:^55.55}'.format(
        str(r.name), r.pseudo_attributes["modifiedDate"].value.strftime("%Y/%m/%d %H:%M:%S")))
```

                          Record Name                       |                   Last Modified Date                   
    -----------------------------------------------------------------------------------------------------------------
                          MTS-615772                        |                   2021/04/28 09:44:02                  
                          MTS-615732                        |                   2021/04/28 09:44:39                  
                          MTS-615742                        |                   2021/04/28 09:44:31                  
                          MTS-615752                        |                   2021/04/28 09:44:22                  
                          MTS-615762                        |                   2021/04/28 09:44:13                  
    

If your search matches records on more than one table then all will be returned. If you need to limit your search to
a single table then you will need to modify the **PseudoAttributeDefinition** to include a **PartialTableReference**
within the **SearchCriterion**. The next example searches for all records in the **Material Universe** table that were modified
in 2019.


```python
import GRANTA_MIScriptingToolkit as gdl

partial_table_reference = gdl.PartialTableReference(tableName="MaterialUniverse")

end_datetime = datetime.datetime(year=2019, month=12, day=31)
start_datetime = datetime.datetime(year=2019, month=1, day=1)

modified_criterion = mpy.SearchCriterion(
    mpy.PseudoAttributeDefinition("modifiedDate"),
    "BETWEEN",
    (start_datetime, end_datetime)
)
modified_criterion.attribute._attribute_ref.partialTableReference = partial_table_reference

modified_material_records = tensile_test_table.search_for_records_where([modified_criterion])

print('{:^55.55} | {:^55.55}'.format('Record Name', 'Last Modified Date'))
print('-'*113)
for r in modified_material_records:
    print('{:^55.55} | {:^55.55}'.format(
        str(r.name),
        r.pseudo_attributes["modifiedDate"].value.strftime("%Y/%m/%d %H:%M:%S"))
    )
```

                          Record Name                       |                   Last Modified Date                   
    -----------------------------------------------------------------------------------------------------------------
    ABS (20% glass fiber, injection molding, flame retarded |                   2019/10/15 17:46:51                  
                   PVC-elastomer (Shore A35)                |                   2019/10/15 17:45:45                  
                    PMMA (impact modified)                  |                   2019/10/15 17:47:07                  
           PVC-elastomer (Shore A75, flame retarded)        |                   2019/10/15 17:46:32                  
                        PMMA - unfilled                     |                   2019/12/04 17:43:22                  
                   PVC-elastomer (Shore A55)                |                   2019/10/15 17:45:55                  
                   PVC-elastomer (Shore A75)                |                   2019/10/15 17:46:04                  
    
