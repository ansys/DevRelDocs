---
uid: Ans.DataProcessing.GenericDataContainer
---

# *class* GenericDataContainer()

 Maps property names to their associated DPF data values.

**Example:**

```python
 var gdc = new GenericDataContainer();

 gdc.SetPropertyAny("count", new Any(42));

 int count = gdc.GetPropertyAny("count").GetAsInt();



 var scoping = new Scoping(new List<int> { 1, 2, 3 }, "Nodal");

 gdc.SetPropertyDpfType("scoping", scoping);

 Scoping s = gdc.GetPropertyAny("scoping").GetAsScoping();
```

**Notes:**

`GenericDataContainer` is a flexible key-value store where each property

 is identified by a string name and holds any supported DPF type (wrapped in

 ) or a primitive value.

## Methods

#### GetProperty(name: str) -> object

Returns the property with the given name as its natural C# type, with automatic

type deduction from the container's stored metadata.

**Parameters:**

* **name** - Property name.

**Returns:**

    The property value as `object` with its runtime DPF-mapped type.

#### GetPropertyAny(name: str) -> Any

Returns the property with the given name wrapped in an .

**Parameters:**

* **name** - Property name.

**Returns:**

    An  holding the property value.

#### GetPropertyDescription() -> Dictionary

Returns a dictionary mapping each property name to its DPF type-name string

(e.g. `"int32"`, `"double"`, `"field"`, `"scoping"`).

#### GetPropertyNames() -> List

Returns the list of property names stored in this container.

#### GetPropertyTypes() -> List

Returns the list of DPF type-name strings for each stored property,

in the same order as .

#### SetProperty(name: str, value: object) -> None

Stores a value under the specified property name.

Accepts any type that  can wrap: `int`, `double`,

`string`, , ,

, and all other DPF object types.

For DPF object types,  is used directly

(preferred); primitives are wrapped in  automatically.

**Parameters:**

* **name** - Property name.
* **value** - The value to store.  Supported types: `int`, `double`, `string`,

or any  subclass.

#### SetPropertyAny(name: str, value: Any) -> None

Stores the given  value under the specified name.

**Parameters:**

* **name** - Property name.
* **value** - An  wrapping the value to store.

#### SetPropertyDpfType(name: str, value: DpfType) -> None

Stores any DPF object directly (without wrapping it in  first)

under the specified name. This overload is preferred for server versions that

support the `setPropertyDpfType` API (Ansys 2025 R2 / server 8.1+).

**Parameters:**

* **name** - Property name.
* **value** - Any DPF object derived from .
