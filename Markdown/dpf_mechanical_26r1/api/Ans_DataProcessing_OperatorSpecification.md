---
uid: Ans.DataProcessing.OperatorSpecification
title: OperatorSpecification
---

# OperatorSpecification Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

OperatorSpecification(name: str)
OperatorSpecification(id: Int64)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```python
OperatorSpecification(name)
```

**Parameters:**

- `name` (*str*)

#### Constructor

```python
OperatorSpecification(id)
```

**Parameters:**

- `id` (*int*)

## Methods

#### HasSpecification

```python
result = obj.HasSpecification(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *bool*

#### GetOperatorDescription

```python
result = obj.GetOperatorDescription()
```

**Returns:** *str*

#### GetInputPins

```python
result = obj.GetInputPins()
```

**Returns:** *iterable*

#### GetInputPin

```python
result = obj.GetInputPin(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *PinDescription*

#### GetOutputPins

```python
result = obj.GetOutputPins()
```

**Returns:** *iterable*

#### GetOutputPin

```python
result = obj.GetOutputPin(id)
```

**Parameters:**

- `id` (*int*)

**Returns:** *PinDescription*

#### getNumberOfPin

```python
result = obj.getNumberOfPin(isInput)
```

**Parameters:**

- `isInput` (*bool*)

**Returns:** *int*

#### GetPinPosition

```python
result = obj.GetPinPosition(PinToGet, isInput)
```

**Parameters:**

- `PinToGet` (*str*)
- `isInput` (*bool*)

**Returns:** *int*

#### GetCategory

```python
result = obj.GetCategory()
```

**Returns:** *str*

#### GetUserName

```python
result = obj.GetUserName()
```

**Returns:** *str*

#### GetScriptingName

```python
result = obj.GetScriptingName()
```

**Returns:** *str*

#### GetExposure

```python
result = obj.GetExposure()
```

**Returns:** *str*

## Properties

#### Id

**Type:** *int*

```python
# Get the property (read-only)
value = obj.Id
```
