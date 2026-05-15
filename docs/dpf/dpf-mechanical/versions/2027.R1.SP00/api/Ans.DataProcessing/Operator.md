---
uid: Ans.DataProcessing.Operator
---

# *class* Operator(name: str, input: object, input2: object, input3: object, input4: object, config: OperatorConfig = None)

Object used to create, transform and stream the data

'''''''''''''_________

"input1"  -> |operator| ->  "output1"

"input2"  -> |''''''''| ->  "output2"

'''''''''''''|________|

**Parameters:**

* **name**
* **input**
* **input2**
* **input3**
* **input4**
* **config**

**Example:**

```python
my_op = Ans.DataProcessing.Core.CreateOperators("U")

my_op.inputs.data_sources.Connect(my_data_sources) # my_op.inputs.Connect(4, my_data_sources)

my_op.inputs.time_scoping.Connect(105.0) # my_op.inputs.Connect(0, 105.0)

fields_container = my_op.outputs.fields_container.GetData()
```

## Methods

#### GetOutputAsAny(i: int = 0) -> Any

**Parameters:**

* **i** (*optional*)

#### GetOutputAsBool(i: int = 0) -> bool

**Parameters:**

* **i** (*optional*)

#### GetOutputAsByteArray(i: int = 0) -> Byte[]

**Parameters:**

* **i** (*optional*)

#### GetOutputAsDataSources(i: int = 0) -> DataSources

**Parameters:**

* **i** (*optional*)

#### GetOutputAsDataTree(i: int = 0) -> DataTree

**Parameters:**

* **i** (*optional*)

#### GetOutputAsDouble(i: int = 0) -> float

**Parameters:**

* **i** (*optional*)

#### GetOutputAsField(i: int = 0) -> Field

**Parameters:**

* **i** (*optional*)

#### GetOutputAsFieldsContainer(i: int = 0) -> FieldsContainer

**Parameters:**

* **i** (*optional*)

#### GetOutputAsGenericDataContainer(i: int = 0) -> GenericDataContainer

**Parameters:**

* **i** (*optional*)

#### GetOutputAsInt(i: int = 0) -> int

**Parameters:**

* **i** (*optional*)

#### GetOutputAsMeshedRegion(i: int = 0) -> MeshedRegion

**Parameters:**

* **i** (*optional*)

#### GetOutputAsMeshesContainer(i: int = 0) -> MeshesContainer

**Parameters:**

* **i** (*optional*)

#### GetOutputAsPropertyField(i: int = 0) -> PropertyField

**Parameters:**

* **i** (*optional*)

#### GetOutputAsResultInfo(i: int = 0) -> ResultInfo

**Parameters:**

* **i** (*optional*)

#### GetOutputAsScoping(i: int = 0) -> Scoping

**Parameters:**

* **i** (*optional*)

#### GetOutputAsScopingsContainer(i: int = 0) -> ScopingsContainer

**Parameters:**

* **i** (*optional*)

#### GetOutputAsStreamsContainer(i: int = 0) -> StreamsContainer

**Parameters:**

* **i** (*optional*)

#### GetOutputAsString(i: int = 0) -> str

**Parameters:**

* **i** (*optional*)

#### GetOutputAsStringField(i: int = 0) -> StringField

**Parameters:**

* **i** (*optional*)

#### GetOutputAsTimeFreqSupport(i: int = 0) -> TimeFreqSupport

**Parameters:**

* **i** (*optional*)

#### GetOutputAsWorkflow(i: int = 0) -> Workflow

**Parameters:**

* **i** (*optional*)
