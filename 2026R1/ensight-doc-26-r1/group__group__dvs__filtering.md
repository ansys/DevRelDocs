# DVS Filtering

<a id="group__group__dvs__filtering"></a>

Description of filtering of data within the DVS project.

Data selection of the current view of data is done via a chained set of filters ([Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas)). These filters make it possible to dynamically down select to a subset of data in the cache. This can be used to filter data within a single cache and in the future form multiple DVS data sources at the same time. This will enable the creation of ensemble views of multiple disparate DVS data sources, allowing users to combine design points or even data from different domains (i.e. mechanical and fluids) into one overall view to iterate over. Allowing more powerful and interesting postprocessing of the data for comparison.





These filters are used in the [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas) section of the [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri) and also in the DVS Reader API [DVS::IQuery](class_d_v_s_1_1_i_query.md#class_d_v_s_1_1_i_query).





In [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri) the filters are specified by adding a query option to the [Cache URI Options](#group__group__dvs__uri_1dvs_cache_uri_options) section of the [Cache URIs](#group__group__dvs__uri_1dvs_cache_uri).





The specifics of these filters are in the sections below.





---

 ### Table of Contents







* [Query Stanzas](#group__group__dvs__filtering_1dvs_query_stanzas)
* [Top Level Operator](#group__group__dvs__filtering_1dvs_query_top_level_operator)

* [Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects)

* [Operators](#group__group__dvs__filtering_1dvs_query_operator)

* [Operands](#group__group__dvs__filtering_1dvs_query_operands)



* [Misc Query Examples](#group__group__dvs__filtering_1dvs_query_examples)







---







---

 





### Query Stanzas

A query in DVS is specified by a number of query stanzas chained together to select a specific set of data entries from a larger set. These stanzas in general are usually AND'd together. The overall structure is in the table below. An individual query stanza has multiple sections separate by a single '/' character and ended with 2 '//' characters. For Examples see [Misc Query Examples](#group__group__dvs__filtering_1dvs_query_examples).





**Only objects mentioned in the query will be filtered, so if there isn't a query stanza related to plots all of them will be loaded for the datasets.**






| Query Stanza Format | Description |
| --- | --- |
| {[Top Level Operator](#group__group__dvs__filtering_1dvs_query_top_level_operator)}/{[Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects)}/{[Operators](#group__group__dvs__filtering_1dvs_query_operator)}/{[Operands](#group__group__dvs__filtering_1dvs_query_operands)} | The format of a single query stanza |
| {[Top Level Operator](#group__group__dvs__filtering_1dvs_query_top_level_operator)}/{[Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects)}/{[Operators](#group__group__dvs__filtering_1dvs_query_operator)}/{[Operands](#group__group__dvs__filtering_1dvs_query_operands)}//{[Top Level Operator](#group__group__dvs__filtering_1dvs_query_top_level_operator)}/{[Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects)}/{[Operators](#group__group__dvs__filtering_1dvs_query_operator)}/{[Operands](#group__group__dvs__filtering_1dvs_query_operands)} | Example of multiple stanzas |
| {[Top Level Operator](#group__group__dvs__filtering_1dvs_query_top_level_operator)}/{[Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects)}/{[Operators](#group__group__dvs__filtering_1dvs_query_operator)}/{[Operands](#group__group__dvs__filtering_1dvs_query_operands)}|{[Operands](#group__group__dvs__filtering_1dvs_query_operands)} | Multiple operands |







**Using a top level OR currently can cause unintented consequences as it will "overwrite" previous stanzas.**





For example if you have 3 stanzas that have the meaning: 
> "Select Dataset 1" AND "Select Parts with name Inlet*" OR "Select Dataset 2"






This will cause everything from Dataset 2 to be loaded regardless of the name. In the future the meaning or OR will be to split the Query up into parts. So that if you had stanzas with the meaning: 
> "Select Dataset 1" AND "Select Parts with name Inlet*" OR "Select Dataset 2" AND "Select Parts with name Wall*" The or would split the statements to be wrapped with "()" so it would effectively be: ("Select Dataset 1" AND "Select Parts with name Inlet*") OR ("Select Dataset 2" AND "Select Parts with name Wall*"). This should hopefully make the intents clearer for future iterations.






#### Top Level Operator

The first part of a query stanza is an operator which is used to chain it with the previous stanza. The overall operator portion of the **first** stanza is ignored and optional but must have a '/' separator before the [Objects/Attributes](#group__group__dvs__filtering_1dvs_query_objects) section.






| Top Level Operator | Description |
| --- | --- |
| and | AND this stanza with the previous stanza |
| or | OR this stanza with the previous stanza, (use '|' to OR multiple operand names together within the same stanza, see examples below) |







<br/>
 
| Query Example (Top Level Operator) | Description |
| --- | --- |
| query=/dataset.name/eq/Dataset1//and/var.name/eq/my_var | Load all entries from Dataset1 and only vars named my_var |
| query=/dataset.name/eq/Dataset1//or/dataset.name/eq/Dataset2 | Load all entries from Dataset1 or Dataset2 |





#### Objects/Attributes

The object and attribute section is simply defined by object.attribute. This specifies which object and attributes on that object to apply the query to. Currently the only specifically named attribute is name. All other attributes are generically applied to the metadata attached to the object. So dataset.my_tag will only match with datasets which have the my_tag metadata attribute. These attributes are case sensitive. Some objects, such as timestep/rank/chunk are global across every cache entry and do not have specific attributes currently.






| Object | Specific Attributes |
| --- | --- |
| dataset | name |
| part | name |
| plot | name |
| var | name |
| timestep | N/A |
| rank | N/A |
| chunk | N/A |







**Attributes in this section which have a space should use '+' to replace spaces. Reserved characters in names should be escaped with % hex values, below is a list of reserved characters.**






| Reserved Characters | Escape Sequence |
| --- | --- |
| + | %2B |
| | | %7C |
| / | %2F |







<br/>
 
| Query Example (Object Attributes) | Description |
| --- | --- |
| query=/dataset.name/eq/Dataset1//and/part.name/eq/Fan+1 | Select all entries from dataset "Dataset1" and only parts named "Fan 1" |
| query=/dataset.name/eq/Dataset1//and/part.my%7Cattribute/eq/Fan+1%2B | Select all entries from dataset "Dataset1" and only parts with the attribute "my\|attribute" == "Fan 1+" |
| query=/dataset.name/eq/Dataset1//and/timestep/rngi/2.0|10.0 | Select all entries from dataset "Dataset1" for timesteps >= 2.0 and <= 10.0 |





#### Operators

Below are a list of valid operators and their operands. Operands are separated by '|' to allow for easily chaining multiple statements.<br/>







| Operator | Number of operands | Valid Objects | Description |
| --- | --- | --- | --- |
| eq | 1-many | all | Equal, supports * for simple pattern matching |
| neq | 1-many | all | Not Equal, supports * for simple pattern matching |
| gt | 1 | timestep, rank, chunk | > |
| gte | 1 | timestep, rank, chunk | >= |
| lt | 1 | timestep, rank, chunk | < |
| lte | 1 | timestep, rank, chunk | <= |
| rnge | 2 | timestep, rank, chunk | Range exclude Operands i.e. '/and/rank/rnge/1|3' means select ranks where rank > 1 and rank < 3 |
| rngi | 2 | timestep, rank, chunk | Range include Operands i.e. '/and/rank/rngi/1|3' means select ranks where rank >= 1 and rank <= 3 |
| mod | 2 | rank, chunk | Modulus, useful for selecting ranks i.e. '/and/rank/mod/2|0' means select every rank where rank % 2 == 0 |







<br/>
 
| Query Example (Operators) | Description |
| --- | --- |
| query=/dataset.name/neq/dataset+1|dataset+2 | Select all entries which do not have the dataset name of "dataset 1" or "dataset 2" |
| query=/timestep/gt/1.5 | Select all timesteps > 1.5 |
| query=/rank/mod/2|0 | Select all entries which rank % 2 == 0 |
| query=/rank/rngi/0|5 | Select all entries which rank >= 0 and rank <= 5 |





#### Operands

Operands can be separated by the '|' character to OR them together for eq, neg cases. The number of operands allowed per operator is in the [Operators](#group__group__dvs__filtering_1dvs_query_operator) table.





**Operands have special characters reserved should use '+' to replace spaces. Reserved characters in names should be escaped with % hex values, below is a list of reserved characters.**





<br/>
 
| Reserved Characters | Escape Sequence |
| --- | --- |
| + | %2B |
| | | %7C |
| / | %2F |







<br/>
 
| Query Example (Operands) | Description |
| --- | --- |
| query=/dataset.name/eq/my+dataset|Dataset+2 | Load all cache entries from 'my dataset' OR 'Dataset 2' |
| query=/dataset.name/eq/Dataset%2B1|Dataset%7C2 | Load all cache entries from 'Dataset+1' OR 'Dataset|2' |
| query=/timestep/rnge/2.0|10.0 | Load all timesteps > 2.0 AND < 10.0 |







---




### Misc Query Examples


| Query Example | Description |
| --- | --- |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset1|Dataset2//and/var.name/neq/pressure//and/plot.name/eq/my+plot | Load entries from Dataset1 OR Dataset2. Do not load vars with name 'pressure'. Only load plots named 'my plot'. |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset1|Dataset2|Dataset3 | Load entries from Dataset1 OR Dataset2 OR Dataset3 |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/Dataset+1|Dataset+2//and/rank/mod/3|0 | Load all cache entries from 'Dataset 1' OR 'Dataset 2' where rank % 3 == 0 |
| hdf5:///D:/my_cache/?query=/part.name/eq/inlet* | Load all cache entries for parts with partial name inlet, i.e. inlet 1, inlet 2 etc |
| hdf5:///D:/my_cache/?query=/dataset.name/eq/my+dataset//and/timestep/rngi/1.2|2.3 | Load all cache entries from 'my dataset' where time >= 1.2 and time <= 2.3 |
| hdf5:///D:/my_cache/?query=/part.name/neq/inlet*|outlet* | Load all cache entries for parts that do not partial match 'inlet' OR 'outlet' |


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)