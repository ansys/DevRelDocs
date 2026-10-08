---
uid: Ans.DataProcessing.Any
---

# *class* Any(value: int)

 Represents a generic DPF container that can hold any supported DPF data type

 or a primitive value (int, double, string).

**Parameters:**

* **value**

**Example:**

```python
 Any a = new Any(myField);

 if (a.ObjectIsOfType<Field>())

     Field f = a.GetAs<Field>();



 Any b = new Any(42);

 int v = b.GetAs<int>();
```

**Notes:**

`Any` is typically used when the exact output type of an operator or workflow

 is not known at compile time. Once you have an `Any` instance, call

  to unwrap it into the concrete type.

## Methods

#### GetAs() -> T

#### GetAsCyclicSupport() -> CyclicSupport

Returns the wrapped DPF object as a .

#### GetAsDataSources() -> DataSources

Returns the wrapped DPF object as a .

#### GetAsDataTree() -> DataTree

Returns the wrapped DPF object as a .

#### GetAsDouble() -> float

Returns the wrapped value as a double.

#### GetAsField() -> Field

Returns the wrapped DPF object as a .

#### GetAsFieldsContainer() -> FieldsContainer

Returns the wrapped DPF object as a .

#### GetAsGenericDataContainer() -> GenericDataContainer

Returns the wrapped DPF object as a .

#### GetAsInt() -> int

Returns the wrapped value as an integer.

#### GetAsMeshedRegion() -> MeshedRegion

Returns the wrapped DPF object as a .

#### GetAsMeshesContainer() -> MeshesContainer

Returns the wrapped DPF object as a .

#### GetAsPropertyField() -> PropertyField

Returns the wrapped DPF object as a .

#### GetAsResultInfo() -> ResultInfo

Returns the wrapped DPF object as a .

#### GetAsScoping() -> Scoping

Returns the wrapped DPF object as a .

#### GetAsScopingsContainer() -> ScopingsContainer

Returns the wrapped DPF object as a .

#### GetAsStreamsContainer() -> StreamsContainer

Returns the wrapped DPF object as a .

#### GetAsString() -> str

Returns the wrapped value as a string.

#### GetAsStringField() -> StringField

Returns the wrapped DPF object as a .

#### GetAsTimeFreqSupport() -> TimeFreqSupport

Returns the wrapped DPF object as a .

#### GetAsWorkflow() -> Workflow

Returns the wrapped DPF object as a .

#### ObjectIsOfType() -> bool
