# Compare test data to specification values

The following script demonstrates how to compare raw test data to specification values that define acceptable ranges
for the test data. In this example, the specification values are stored in a separate record that is linked to the
test data.

## Connect to Granta MI

Connect to Granta MI and specify the database and table containing the test results.

Since this operation is likely to be performed as a batch operation, see
[Authentication](../../user_guide/authentication.rst) for more information about connecting to Granta MI securely in
batch mode operation.


```python
import ansys.grantami.core as mpy

mi = mpy.SessionBuilder("http://my.server.name/mi_servicelayer").with_autologon()
db = mi.get_db(db_key="MI_Training")
test_data_table = db.get_table("Tensile Test Data")
print(test_data_table)
```
*Previous cell output:*
```output
<Table name: Tensile Test Data, subsets: {'Tensile Test Data'}>
```
## Find test data to process
Before we start, we need to find the **Test Data** records we want to process by applying the following criteria:
   1. The test record has test data which has not previously been compared to a specification.
   2. The test record is linked to a specification record.

### Criteria 1: Test data that has not been compared to a specification
First, define the attributes that contain the relevant test data, and the name of the meta-attribute that contains
specification comparison results (if they exist).
A dictionary is used for test data attributes so they can be mapped to the corresponding specification attributes.


```python
COMPARISON_ATTRIBUTES = {
    "0.02% Offset yield stress (specification value)": "0.02% Offset Yield Stress",
    "0.2% Offset yield stress (specification value)": "0.2% Offset Yield Stress",
    "Tensile modulus (specification value)": "Young's Modulus (11-axis)",
    "Ultimate tensile strength (specification value)": "Ultimate Tensile Strength",
}
SPEC_STATUS_META_ATTRIBUTE = "Specification status"
```

Next, define an _unprocessed records_ function that takes an attribute name as input and returns the list of records
where the attribute is populated, but the meta-attribute is empty.


```python
from typing import List

def find_unprocessed_records_for_attribute(test_attribute_name: str) -> List[mpy.Record]:
    test_attribute_definition = test_data_table.attributes[test_attribute_name]
    spec_result_attribute_definition = test_attribute_definition.meta_attributes[SPEC_STATUS_META_ATTRIBUTE]

    test_result_attribute_has_value = test_attribute_definition.search_criterion(exists=True)
    spec_comparison_result_is_empty = spec_result_attribute_definition.search_criterion(exists=False)
    combined_criteria = [test_result_attribute_has_value, spec_comparison_result_is_empty]

    unprocessed_records = test_data_table.search_for_records_where(combined_criteria)
    return unprocessed_records
```

Iterate over each attribute defined in the `ATTRIBUTES` constant to get the previously unprocessed records for each
one. Use a dictionary with the `record.record_guid` as the key to ensure you only get unique records (a single
record may be missing multiple attributes, and we only want to process each record once).


```python
unique_unprocessed_records = {}

for test_attribute in COMPARISON_ATTRIBUTES.values():
    unprocessed_records_for_attribute = find_unprocessed_records_for_attribute(test_attribute)
    unique_unprocessed_records.update({r.record_guid: r for r in unprocessed_records_for_attribute})
```

Finally, extract the `record` values from the `dict` and confirm the number of unprocessed records identified.


```python
unprocessed_records = list(unique_unprocessed_records.values())
print(f"{len(unprocessed_records)} unprocessed records.")
```
*Previous cell output:*
```output
176 unprocessed records.
```
### Criteria 2: Test data with linked specifications
To compare test data to specification values, each unprocessed record must also be linked to a specification record
containing those values. Therefore, we need to filter the `unprocessed_records` list to include only those records
that have a link to a **Specification Values** record.

Use the `test_data_table.bulk_link_fetch()` method to improve performance by fetching links for all records in a
single operation. The link group name is stored in a constant, since we will need to refer to it later.


```python
SPEC_LINK_GROUP_NAME = "Specification Values"

test_data_table.bulk_link_fetch(link_groups=[SPEC_LINK_GROUP_NAME], records=unprocessed_records)
records_to_process = [r for r in unprocessed_records if r.links[SPEC_LINK_GROUP_NAME]]
print(f"{len(records_to_process)} unprocessed records with links to specifications.")
```
*Previous cell output:*
```output
6 unprocessed records with links to specifications.
```
## Compare test data to specification values
Now check each record in the `records_to_process` list against its linked specification.

### Pre-fetch the data
First, pre-fetch all the attributes in the *Specification Values* and *Tensile Test Data* tables that are required for
the analysis. (This step is optional, but helps improve performance for large datasets.)
Pre-fetching data using the `bulk_fetch()` operation generally requires three types of objects: a list of attributes,
a list of records, and the table to fetch the data from.

For the test data, we already have the `test_data_table` object and the list of records. However, we need to construct
the list of attributes. We want to export the following:

- The *Specimen ID* attribute, used for printing status information while performing the comparison
- The list of test data attributes defined as values in the `COMPARISON_ATTRIBUTES` dictionary
- The *Specification Status* meta-attribute

The cell below builds this list of attributes, and then uses `bulk_fetch()` to fetch the data.


```python
SPECIMEN_ID_ATTRIBUTE = "Specimen ID"
specimen_id_attribute_object = test_data_table.attributes[SPECIMEN_ID_ATTRIBUTE]
test_data_attributes = [specimen_id_attribute_object]

for attribute_name in COMPARISON_ATTRIBUTES.values():
    attribute = test_data_table.attributes[attribute_name]
    meta_attribute = attribute.meta_attributes[SPEC_STATUS_META_ATTRIBUTE]
    test_data_attributes.extend([attribute, meta_attribute])

test_data_table.bulk_fetch(records=records_to_process, attributes=test_data_attributes)
print(f"Bulk fetched {len(test_data_attributes)} attributes across {len(records_to_process)} records")
```
*Previous cell output:*
```output
Bulk fetched 9 attributes across 6 records
```
For the specification values we know the attributes we need, but we do not have a list of records or a table object.
The following steps must be performed:
1. Create a single flat list of all linked specification records. Use a `set` as the intermediary container to only
   include unique records.
2. Extract the table name from one of the specification records and create a `specification_table` object.
3. Use the `specification_table` object to bulk fetch the data.


```python
# Step 1: Generate a single list of unique linked specification records
spec_records = set()
for r in records_to_process:
    spec_records.update(r.links[SPEC_LINK_GROUP_NAME])
spec_records = list(spec_records)

# Step 2: Get the specification table object
specification_table_name = spec_records[0].table_name
specification_table = db.get_table(specification_table_name)

# Step 3: Bulk fetch the data
specification_data_attributes = list(COMPARISON_ATTRIBUTES.keys())
specification_table.bulk_fetch(records=spec_records, attributes=specification_data_attributes)
print(f"Fetched {len(specification_data_attributes)} attributes across {len(spec_records)} records")
```
*Previous cell output:*
```output
Fetched 4 attributes across 1 records
```
### Comparison logic
Next, write a function that compares the test data attribute and the specification attribute and returns the result
as a string. This function includes an initial check to ensure values exist for both attributes. If either attribute
does not have a value, return `None`.


```python
from typing import Optional


def compare_test_to_spec(test_attribute: mpy.AttributePoint, spec_attribute: mpy.AttributeRange) -> Optional[str]:
    if test_attribute.is_empty() or spec_attribute.is_empty():
        return None
    test_value = test_attribute.value
    low_spec_value = spec_attribute.value.low if spec_attribute.value.low is not None else float("-inf")
    high_spec_value = spec_attribute.value.high if spec_attribute.value.high is not None else float("inf")

    if low_spec_value <= test_value <= high_spec_value:
        return "Test meets specification"
    else:
        return "Test does not meet specification"
```

### Compare the data
Finally, iterate over all records in the `records_to_process` list and all attributes in the `COMPARISON_ATTRIBUTES`
constant. For each combination of record and attribute, call the function defined above and store the result in the
*Specification Status* meta-attribute. The comparison is skipped if the meta-attribute is already populated.


```python
records_to_update = []

for test_record in records_to_process:
    test_specimen_id = test_record.attributes[SPECIMEN_ID_ATTRIBUTE].value
    print(f"{test_specimen_id}")

    spec_record = next(iter(test_record.links[SPEC_LINK_GROUP_NAME]))
    modified_attributes = []
    for spec_attribute_name, test_attribute_name in COMPARISON_ATTRIBUTES.items():
        test_attribute = test_record.attributes[test_attribute_name]
        spec_status_meta_attribute = test_attribute.meta_attributes[SPEC_STATUS_META_ATTRIBUTE]
        if not spec_status_meta_attribute.is_empty():
            print(f" - {test_attribute_name} skipped: <Already populated>")
            continue

        spec_attribute = spec_record.attributes[spec_attribute_name]
        status = compare_test_to_spec(test_attribute, spec_attribute)
        if not status:
            print(f" - {test_attribute_name} skipped: <No data>")
            continue

        print(f" - {test_attribute_name} result: {status}")
        spec_status_meta_attribute.value = status
        modified_attributes.append(spec_status_meta_attribute)
    if modified_attributes:
        test_record.set_attributes(modified_attributes)
        records_to_update.append(test_record)
```
*Previous cell output:*
```output
MTS-615726
 - 0.02% Offset Yield Stress result: Test does not meet specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test meets specification
 - Ultimate Tensile Strength skipped: <No data>
MTS-615746
 - 0.02% Offset Yield Stress result: Test meets specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test meets specification
 - Ultimate Tensile Strength skipped: <No data>
MTS-615776
 - 0.02% Offset Yield Stress result: Test meets specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test does not meet specification
 - Ultimate Tensile Strength skipped: <No data>
MTS-615736
 - 0.02% Offset Yield Stress result: Test does not meet specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test meets specification
 - Ultimate Tensile Strength skipped: <No data>
MTS-615756
 - 0.02% Offset Yield Stress result: Test meets specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test meets specification
 - Ultimate Tensile Strength skipped: <No data>
MTS-615766
 - 0.02% Offset Yield Stress result: Test meets specification
 - 0.2% Offset Yield Stress skipped: <No data>
 - Young's Modulus (11-axis) result: Test does not meet specification
 - Ultimate Tensile Strength skipped: <No data>
```
## Push the results to Granta MI
The final step is to update the processed records in Granta MI. Once the cell below has completed, click the link to
view the results in MI Viewer.


```python
if records_to_update:
    modified_records = mi.update(records_to_update)
    print(f"{len(modified_records)} records modified. Links to the MI Viewer datasheets are provided below.")
    for modified_record in modified_records:
        print(f"{modified_record.attributes[SPECIMEN_ID_ATTRIBUTE].value}: {modified_record.viewer_url}")
else:
    print("No records modified")
```
*Previous cell output:*
```output
6 records modified. Links to the MI Viewer datasheets are provided below.
MTS-615726: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=6bcb5814-9ff5-4df1-8c92-984474d4ca74
MTS-615746: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=c0130467-8847-4e22-aab2-d5ca2b6308fd
MTS-615776: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=d5c2f875-7822-44dc-88b3-ffdf22f7a60f
MTS-615736: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=d2d7b359-49d4-4028-b75c-1a79ccb56892
MTS-615756: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=d8cf380b-b48e-43b2-be5b-d150415f3691
MTS-615766: http://my.server.name/mi/datasheet.aspx?dbKey=MI_Training&recordHistoryGuid=fdd81e11-bcdd-4ed3-bf37-6ed12f7e2162
```
## Clean up the database
Uncomment the bottom line and run this cell to revert the changes made in this script. This is useful if you wish to
run the script again.


```python
for record in records_to_process:
    for test_attribute in COMPARISON_ATTRIBUTES.values():
        spec_attr = record.attributes[test_attribute].meta_attributes[SPEC_STATUS_META_ATTRIBUTE]
        record.clear_attributes([spec_attr])
# mi.update(records_to_process)
```
