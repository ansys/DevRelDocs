# RASizeDistributionList

<!-- Make "generated" the current module for all PrePost Scripting classes so that we can
cross-reference them without adding the full package path. -->
<!-- The empty parenthesis is to suppress documenting the constructor (PrePost Scripting classes
generally aren't instantiated by the user). -->

<a id="generated.RASizeDistributionList"></a>

### *class* RASizeDistributionList

Rocky PrePost Scripting wrapper to manipulate the size properties in a single Particle.

To get the [`RASizeDistributionList`](#generated.RASizeDistributionList) from a [`RAParticle`](RAParticle.md#generated.RAParticle), use:

```python
size_distribution_list = particle.GetSizeDistributionList()
```

[`RASizeDistributionList`](#generated.RASizeDistributionList) contains methods to set the size type and add, remove and
retrieve individual size distribution entries. It corresponds to the items on a Particle’s
“Size” tab on the Rocky UI.

The following examples add, remove and access individual entries in the size distribution list:

```python
# Add new items
size_distribution = size_distribution_list.New()

# Access and modify items
size_distribution = size_distribution_list[0]
size_distribution.SetSize(1.0, 'm')

# Remove items
size_distribution_list.Remove(size_distribution)
del size_distribution_list[0]
size_distribution_list.Clear()
```

Note that this list is used even if the configured particle only has a single size, such as when
it is composed of Multiple Elements. In these cases, the single size refers to the first item
on the list (and no other items are used).

The [`RASizeDistributionList`](#generated.RASizeDistributionList) is a list of [`RASizeDistribution`](RASizeDistribution.md#generated.RASizeDistribution).

**Methods:**

| Name | Description |
|----------------------------------------------------------------------------------------|----------------------------------------------------|
| [`Clear`](#generated.RASizeDistributionList.Clear)()                                   | Remove all items from the list.                    |
| [`GetCgmScaleFactor`](#generated.RASizeDistributionList.GetCgmScaleFactor)()           | Get the value of "Cgm Scale Factor".               |
| [`GetSizeType`](#generated.RASizeDistributionList.GetSizeType)()                       | Get "Size Type" as a string.                       |
| [`GetValidSizeTypeValues`](#generated.RASizeDistributionList.GetValidSizeTypeValues)() | Get a list of all possible values for "Size Type". |
| [`New`](#generated.RASizeDistributionList.New)()                                       | Add a new item.                                    |
| [`Remove`](#generated.RASizeDistributionList.Remove)(item)                             | Remove an item from the list.                      |
| [`SetCgmScaleFactor`](#generated.RASizeDistributionList.SetCgmScaleFactor)(value)      | Set the value of "Cgm Scale Factor".               |
| [`SetSizeType`](#generated.RASizeDistributionList.SetSizeType)(value)                  | Set the value of "Size Type".                      |

<a id="generated.RASizeDistributionList.Clear"></a>

#### Clear()

Remove all items from the list.

<a id="generated.RASizeDistributionList.GetCgmScaleFactor"></a>

#### GetCgmScaleFactor()

Get the value of “Cgm Scale Factor”.

<a id="generated.RASizeDistributionList.GetSizeType"></a>

#### GetSizeType()

Get “Size Type” as a string.

* **Returns:**
  The returned value will be one of [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].

<a id="generated.RASizeDistributionList.GetValidSizeTypeValues"></a>

#### GetValidSizeTypeValues()

Get a list of all possible values for “Size Type”.

* **Returns:**
  The returned list is [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].

<a id="generated.RASizeDistributionList.New"></a>

#### New()

Add a new item. Returns the newly created item.

<a id="generated.RASizeDistributionList.Remove"></a>

#### Remove(item: T)

Remove an item from the list.

<a id="generated.RASizeDistributionList.SetCgmScaleFactor"></a>

#### SetCgmScaleFactor(value: Union[str, float])

Set the value of “Cgm Scale Factor”.

* **Parameters:**
  **value** – The value to set. This value can be an expression with input variables or float type.

<a id="generated.RASizeDistributionList.SetSizeType"></a>

#### SetSizeType(value: str)

Set the value of “Size Type”.

* **Parameters:**
  **value** – The value to set. Must be one of [‘sieve’, ‘equivalent_diameter’, ‘original_size_scale’].
* **Raises:**
  **RockyApiError** – If value is not a valid “Size Type” option.
