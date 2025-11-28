---
uid: Ans.DataProcessing.FieldsContainer
title: FieldsContainer
---

# FieldsContainer Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Container of fields.
            Can be used to handle results on different times/frequencies, to handle real and imaginary fields in complex results or
            to split spatially results on properties (bodies, element shapes (solid, shell, beams), material...)

FieldsContainer()
FieldsContainer(intptr: IntPtr)


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

```python
result = obj.GetFieldByTimeId(timeId)
```

**Parameters:**

- `timeId` (*int*)

**Returns:** *Field*

#### GetImaginaryField

```python
result = obj.GetImaginaryField(timeId)
```

**Parameters:**

- `timeId` (*int*)

**Returns:** *Field*

#### AddFieldByTimeId

```python
obj.AddFieldByTimeId(field, timeId)
```

**Parameters:**

- `field` (*Field*)
- `timeId` (*int*)

#### AddImaginaryField

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
