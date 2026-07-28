<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils"></a>
# Class Phoenix::ModelCenter::PlugIn::FormUtils

![][C#]
![][public]

**Definition**: `LIBS/DotNetUtils/Phoenix.ModelCenter.PlugIn/FormUtils.cs` (line 13)

Generic utility class for forms where all logic can be moved for unit tests



## Members

* [NameFilterCheck](classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils.md#classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils_1a461ce8a51c573ec985e326d6ce2b3301)

## Public static functions

<a id="classPhoenix_1_1ModelCenter_1_1PlugIn_1_1FormUtils_1a461ce8a51c573ec985e326d6ce2b3301"></a>
### Function NameFilterCheck

![][public]
![][static]


```csharp
static bool Phoenix.ModelCenter.PlugIn.FormUtils.NameFilterCheck(string filter, string name, bool caseSensitive=false)
```


Helper method that checks if a name passes the filter. Filters are simple filters that match if the target string contains them. Filters may include asterisk (*) to mean match any number of any character.

**Parameters**:

* **filter**: filter to check against
* **name**: name to be checked
* **caseSensitive**: pass true if the filter should be case sensitive, false by default


**Returns**:

True if the name matches the filter. False otherwise.



**Parameters**:

* string **filter**
* string **name**
* bool **caseSensitive** = false 

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"Phoenix.ModelCenter.PlugIn.FormUtils.NameFilterCheck"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)