

# RAOutputData

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RAOutputData"></a>

### *class* RAOutputData

Rocky PrePost Scripting wrapper to manipulate the Output Data.

```python
output_data = study.GetOutputData()
# To enabled/disabled individual properties:
output_data.SetStandardOutputPropertyEnabled('Geometries', 'Area : Cell', enabled=False)
# To enabled/disabled all properties under a root parent:
output_data.SetStandardOutputPropertyEnabled('Geometries', enabled=False)
```

**Methods:**

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| [`DisableCollectContactsData`](#generated.RAOutputData.DisableCollectContactsData)()                            | Set the value of "Collect Contacts Data" to False.           |
| [`DisableCollectJointData`](#generated.RAOutputData.DisableCollectJointData)()                                  | Set the value of "Collect Joint Data" to False.              |
| [`DisableIncludeAdhesiveContacts`](#generated.RAOutputData.DisableIncludeAdhesiveContacts)()                    | Set the value of "Include Adhesive Contacts" to False.       |
| [`DisableSphEulerianSolution`](#generated.RAOutputData.DisableSphEulerianSolution)()                            | Set the value of "Eulerian Solution" to False.               |
| [`EnableCollectContactsData`](#generated.RAOutputData.EnableCollectContactsData)()                              | Set the value of "Collect Contacts Data" to True.            |
| [`EnableCollectJointData`](#generated.RAOutputData.EnableCollectJointData)()                                    | Set the value of "Collect Joint Data" to True.               |
| [`EnableIncludeAdhesiveContacts`](#generated.RAOutputData.EnableIncludeAdhesiveContacts)()                      | Set the value of "Include Adhesive Contacts" to True.        |
| [`EnableSphEulerianSolution`](#generated.RAOutputData.EnableSphEulerianSolution)()                              | Set the value of "Eulerian Solution" to True.                |
| [`GetAdditionalOutputPropertyEnabled`](#generated.RAOutputData.GetAdditionalOutputPropertyEnabled)(...)         | Retrieve enable state of given "Additional Output Property". |
| [`GetAvailableModulesOutputProperties`](#generated.RAOutputData.GetAvailableModulesOutputProperties)()          |                                                              |
| [`GetAvailableStandardOutputProperties`](#generated.RAOutputData.GetAvailableStandardOutputProperties)()        |                                                              |
| [`GetCollectContactsData`](#generated.RAOutputData.GetCollectContactsData)()                                    | Get the value of "Collect Contacts Data".                    |
| [`GetCollectJointData`](#generated.RAOutputData.GetCollectJointData)()                                          | Get the value of "Collect Joint Data".                       |
| [`GetIncludeAdhesiveContacts`](#generated.RAOutputData.GetIncludeAdhesiveContacts)()                            | Get the value of "Include Adhesive Contacts".                |
| [`GetModulesOutputPropertiesData`](#generated.RAOutputData.GetModulesOutputPropertiesData)()                    |                                                              |
| [`GetModulesOutputPropertyEnabled`](#generated.RAOutputData.GetModulesOutputPropertyEnabled)(\*output_property) | Retrieve enable state of given "Modules Output Property".    |
| [`GetSphEulerianSolutionEnabled`](#generated.RAOutputData.GetSphEulerianSolutionEnabled)()                      | Delegates the method to the project sph settings.            |
| [`GetStandardOutputPropertiesData`](#generated.RAOutputData.GetStandardOutputPropertiesData)()                  |                                                              |
| [`GetStandardOutputPropertyEnabled`](#generated.RAOutputData.GetStandardOutputPropertyEnabled)(...)             | Retrieve enable state of given "Standard Output Property".   |
| [`IsCollectContactsDataEnabled`](#generated.RAOutputData.IsCollectContactsDataEnabled)()                        | Check if the "Collect Contacts Data" is enabled.             |
| [`IsCollectJointDataEnabled`](#generated.RAOutputData.IsCollectJointDataEnabled)()                              | Check if the "Collect Joint Data" is enabled.                |
| [`IsIncludeAdhesiveContactsEnabled`](#generated.RAOutputData.IsIncludeAdhesiveContactsEnabled)()                | Check if the "Include Adhesive Contacts" is enabled.         |
| [`IsSphEulerianSolutionEnabled`](#generated.RAOutputData.IsSphEulerianSolutionEnabled)()                        | Check if the "Eulerian Solution" is enabled.                 |
| [`RestoreOutputPropertiesDefaults`](#generated.RAOutputData.RestoreOutputPropertiesDefaults)()                  | Restore default values of "Output Properties".               |
| [`SetAdditionalOutputPropertyEnabled`](#generated.RAOutputData.SetAdditionalOutputPropertyEnabled)(...)         | Set enable state of given "Additional Output Property".      |
| [`SetCollectContactsData`](#generated.RAOutputData.SetCollectContactsData)(value)                               | Set the value of "Collect Contacts Data".                    |
| [`SetCollectJointData`](#generated.RAOutputData.SetCollectJointData)(value)                                     | Set the value of "Collect Joint Data".                       |
| [`SetIncludeAdhesiveContacts`](#generated.RAOutputData.SetIncludeAdhesiveContacts)(value)                       | Set the value of "Include Adhesive Contacts".                |
| [`SetModulesOutputPropertiesData`](#generated.RAOutputData.SetModulesOutputPropertiesData)(data_dict)           | Set the current value of "Modules Output Properties".        |
| [`SetModulesOutputPropertyEnabled`](#generated.RAOutputData.SetModulesOutputPropertyEnabled)(...)               | Set enable state of given "Modules Output Property".         |
| [`SetSphEulerianSolutionEnabled`](#generated.RAOutputData.SetSphEulerianSolutionEnabled)(value)                 | Delegate the method to the project sph settings.             |
| [`SetStandardOutputPropertiesData`](#generated.RAOutputData.SetStandardOutputPropertiesData)(data_dict)         | Set the current value of "Standard Output Properties".       |
| [`SetStandardOutputPropertyEnabled`](#generated.RAOutputData.SetStandardOutputPropertyEnabled)(...)             | Set enable state of given "Standard Output Property".        |

<a id="generated.RAOutputData.DisableCollectContactsData"></a>

#### DisableCollectContactsData()

Set the value of “Collect Contacts Data” to False.

<a id="generated.RAOutputData.DisableCollectJointData"></a>

#### DisableCollectJointData()

Set the value of “Collect Joint Data” to False.

<a id="generated.RAOutputData.DisableIncludeAdhesiveContacts"></a>

#### DisableIncludeAdhesiveContacts()

Set the value of “Include Adhesive Contacts” to False.

<a id="generated.RAOutputData.DisableSphEulerianSolution"></a>

#### DisableSphEulerianSolution()

Set the value of “Eulerian Solution” to False.

<a id="generated.RAOutputData.EnableCollectContactsData"></a>

#### EnableCollectContactsData()

Set the value of “Collect Contacts Data” to True.

<a id="generated.RAOutputData.EnableCollectJointData"></a>

#### EnableCollectJointData()

Set the value of “Collect Joint Data” to True.

<a id="generated.RAOutputData.EnableIncludeAdhesiveContacts"></a>

#### EnableIncludeAdhesiveContacts()

Set the value of “Include Adhesive Contacts” to True.

<a id="generated.RAOutputData.EnableSphEulerianSolution"></a>

#### EnableSphEulerianSolution()

Set the value of “Eulerian Solution” to True.

<a id="generated.RAOutputData.GetAdditionalOutputPropertyEnabled"></a>

#### GetAdditionalOutputPropertyEnabled(\*output_property: str)

Retrieve enable state of given “Additional Output Property”.

* **Parameters:**
  **output_property** – The output property name.

<a id="generated.RAOutputData.GetAvailableModulesOutputProperties"></a>

#### *static* GetAvailableModulesOutputProperties()

* **Returns:**
  The available “Modules Output Properties”.

<a id="generated.RAOutputData.GetAvailableStandardOutputProperties"></a>

#### *static* GetAvailableStandardOutputProperties()

* **Returns:**
  The available “Standard Output Properties”.

<a id="generated.RAOutputData.GetCollectContactsData"></a>

#### GetCollectContactsData()

Get the value of “Collect Contacts Data”.

<a id="generated.RAOutputData.GetCollectJointData"></a>

#### GetCollectJointData()

Get the value of “Collect Joint Data”.

<a id="generated.RAOutputData.GetIncludeAdhesiveContacts"></a>

#### GetIncludeAdhesiveContacts()

Get the value of “Include Adhesive Contacts”.

<a id="generated.RAOutputData.GetModulesOutputPropertiesData"></a>

#### GetModulesOutputPropertiesData()

* **Returns:**
  The current value of “Modules Output Properties”.

<a id="generated.RAOutputData.GetModulesOutputPropertyEnabled"></a>

#### GetModulesOutputPropertyEnabled(\*output_property: str)

Retrieve enable state of given “Modules Output Property”.

* **Parameters:**
  **output_property** – The output property name.

<a id="generated.RAOutputData.GetSphEulerianSolutionEnabled"></a>

#### GetSphEulerianSolutionEnabled()

Delegates the method to the project sph settings.

<a id="generated.RAOutputData.GetStandardOutputPropertiesData"></a>

#### GetStandardOutputPropertiesData()

* **Returns:**
  The current value of “Standard Output Properties”.

<a id="generated.RAOutputData.GetStandardOutputPropertyEnabled"></a>

#### GetStandardOutputPropertyEnabled(\*output_property: str)

Retrieve enable state of given “Standard Output Property”.

* **Parameters:**
  **output_property** – The output property name.

<a id="generated.RAOutputData.IsCollectContactsDataEnabled"></a>

#### IsCollectContactsDataEnabled()

Check if the “Collect Contacts Data” is enabled.

<a id="generated.RAOutputData.IsCollectJointDataEnabled"></a>

#### IsCollectJointDataEnabled()

Check if the “Collect Joint Data” is enabled.

<a id="generated.RAOutputData.IsIncludeAdhesiveContactsEnabled"></a>

#### IsIncludeAdhesiveContactsEnabled()

Check if the “Include Adhesive Contacts” is enabled.

<a id="generated.RAOutputData.IsSphEulerianSolutionEnabled"></a>

#### IsSphEulerianSolutionEnabled()

Check if the “Eulerian Solution” is enabled.

<a id="generated.RAOutputData.RestoreOutputPropertiesDefaults"></a>

#### RestoreOutputPropertiesDefaults()

Restore default values of “Output Properties”.

<a id="generated.RAOutputData.SetAdditionalOutputPropertyEnabled"></a>

#### SetAdditionalOutputPropertyEnabled(\*output_property: str, enabled: bool)

Set enable state of given “Additional Output Property”.

* **Parameters:**
  * **output_property** – The output property name.
  * **enabled** – The enable state of given “Additional Output Property”.

<a id="generated.RAOutputData.SetCollectContactsData"></a>

#### SetCollectContactsData(value: bool)

Set the value of “Collect Contacts Data”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutputData.SetCollectJointData"></a>

#### SetCollectJointData(value: bool)

Set the value of “Collect Joint Data”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutputData.SetIncludeAdhesiveContacts"></a>

#### SetIncludeAdhesiveContacts(value: bool)

Set the value of “Include Adhesive Contacts”.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutputData.SetModulesOutputPropertiesData"></a>

#### SetModulesOutputPropertiesData(data_dict: dict)

Set the current value of “Modules Output Properties”.

* **Parameters:**
  **data_dict** – The data dictionary to set.

<a id="generated.RAOutputData.SetModulesOutputPropertyEnabled"></a>

#### SetModulesOutputPropertyEnabled(\*output_property: str, enabled: bool)

Set enable state of given “Modules Output Property”.

* **Parameters:**
  * **output_property** – The output property name.
  * **enabled** – The enable state of given “Modules Output Property”.

<a id="generated.RAOutputData.SetSphEulerianSolutionEnabled"></a>

#### SetSphEulerianSolutionEnabled(value: bool)

Delegate the method to the project sph settings.

* **Parameters:**
  **value** – The value to set.

<a id="generated.RAOutputData.SetStandardOutputPropertiesData"></a>

#### SetStandardOutputPropertiesData(data_dict: dict)

Set the current value of “Standard Output Properties”.

* **Parameters:**
  **data_dict** – The data dictionary to set.

<a id="generated.RAOutputData.SetStandardOutputPropertyEnabled"></a>

#### SetStandardOutputPropertyEnabled(\*output_property: str, enabled: bool)

Set enable state of given “Standard Output Property”.

* **Parameters:**
  * **output_property** – The output property name.
  * **enabled** – The enable state of given “Standard Output Property”.
