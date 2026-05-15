---
uid: Ans.DataProcessing.FieldsContainer
---

# *class* FieldsContainer()

Container of fields.

Can be used to handle results on different times/frequencies, to handle real and imaginary fields in complex results or

to split spatially results on properties (bodies, element shapes (solid, shell, beams), material...)

**Example:**

```python
u_op = dpf.operators.result.displacement()

u_op.inputs.data_sources.Connect(my_data_sources)

my_fields_container = u_op.outputs.fields_container.GetData()

my_fields_container.FieldCount

my_fields_container.GetLabelSpace(index) #ie. {'time',1} for the first time set

#return the real Fields on {'time',1}

my_field = my_fields_container.GetFieldByTimeId(1)

my_field = my_fields_container.Get({'time':1}) #same

my_field = my_fields_container[0] #returns the first Field
```

## Methods

#### AddFieldByTimeId(field: Field, timeId: int) -> None

Method `AddFieldByTimeId` when building a fields container this can be used to add fields.

This can only be used for fields container with labels "time" (optionally "complex")

**Parameters:**

* **field** - field to add
* **timeId** - time set (starting at 1) described in the TimeFreqSupport

#### AddImaginaryField(field: Field, timeId: int) -> None

Method `AddFieldByTimeId` when building a fields container this can be used to add an imaginary field.

This can only be used for fields container with labels "time" AND "complex"

**Parameters:**

* **field** - field to add
* **timeId** - time set (starting at 1) described in the TimeFreqSupport

#### GetFieldByTimeId(timeId: int) -> Field

Method `GetFieldByTimeId` get the field (real field for complex analysis) corresponding to the param time id

**Parameters:**

* **timeId** - time set (starting at 1) described in the TimeFreqSupport

#### GetImaginaryField(timeId: int) -> Field

Method `GetImaginaryField` get the imaginary field (for complex analysis) corresponding to the param time id

**Parameters:**

* **timeId** - time set (starting at 1) described in the TimeFreqSupport

#### op_Addition(a: FieldsContainer, b: FieldsContainer) -> BaseOperator

**Parameters:**

* **a**
* **b**

#### op_Multiply(a: FieldsContainer, b: FieldsContainer) -> BaseOperator

**Parameters:**

* **a**
* **b**

#### op_Subtraction(a: FieldsContainer, b: FieldsContainer) -> BaseOperator

**Parameters:**

* **a**
* **b**

## Properties

#### *property* FieldCount: int

Property `FieldCount` number of fields

*get*

#### *property* TimeFreqSupport: TimeFreqSupport

*get/set*

#### *property* Id: int

*get*
