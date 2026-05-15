---
uid: Ans.DataProcessing.FieldsContainer
---

# FieldsContainer Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Container of fields.

Can be used to handle results on different times/frequencies, to handle real and imaginary fields in complex results or

to split spatially results on properties (bodies, element shapes (solid, shell, beams), material...)

## Example

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

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfTypeCollection`1[[Ans.DataProcessing.Field, CS_DataProcessing, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null]]` |

## Constructors

#### Constructor

```python
FieldsContainer()
```

#### Constructor

```python
FieldsContainer(intptr)
```

**Parameters:**

- `intptr` (*IntPtr*)

## Methods

#### GetFieldByTimeId

Method `GetFieldByTimeId` get the field (real field for complex analysis) corresponding to the param time id

```python
result = obj.GetFieldByTimeId(timeId)
```

**Parameters:**

- `timeId` (*int*)

**Returns:** *Field*

#### GetImaginaryField

Method `GetImaginaryField` get the imaginary field (for complex analysis) corresponding to the param time id

```python
result = obj.GetImaginaryField(timeId)
```

**Parameters:**

- `timeId` (*int*)

**Returns:** *Field*

#### AddFieldByTimeId

Method `AddFieldByTimeId` when building a fields container this can be used to add fields.

This can only be used for fields container with labels "time" (optionally "complex")

```python
obj.AddFieldByTimeId(field, timeId)
```

**Parameters:**

- `field` (*Field*)
- `timeId` (*int*)

#### AddImaginaryField

Method `AddFieldByTimeId` when building a fields container this can be used to add an imaginary field.

This can only be used for fields container with labels "time" AND "complex"

```python
obj.AddImaginaryField(field, timeId)
```

**Parameters:**

- `field` (*Field*)
- `timeId` (*int*)

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### op_Addition

```python
result = obj.op_Addition(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### op_Subtraction

```python
result = obj.op_Subtraction(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*float*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*Field*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*Field*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*float*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*FieldsContainer*)
- `b` (*list*)

**Returns:** *BaseOperator*

#### op_Multiply

```python
result = obj.op_Multiply(a, b)
```

**Parameters:**

- `a` (*list*)
- `b` (*FieldsContainer*)

**Returns:** *BaseOperator*

## Properties

#### FieldCount

Property `FieldCount` number of fields

**Type:** *int*

```python
# Get the property (read-only)
value = obj.FieldCount
```

#### TimeFreqSupport

**Type:** *TimeFreqSupport*

```python
# Get or set the property
value = obj.TimeFreqSupport
obj.TimeFreqSupport = new_value
```

#### Id

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Id
```
