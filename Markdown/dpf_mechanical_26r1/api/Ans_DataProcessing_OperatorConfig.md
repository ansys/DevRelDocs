---
uid: Ans.DataProcessing.OperatorConfig
title: OperatorConfig
---

# OperatorConfig Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

OperatorConfig(operatorName: str)
OperatorConfig()
OperatorConfig(id: Int64)
OperatorConfig(id: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
OperatorConfig(operatorName)
```

**Parameters:**

- `operatorName` (*str*)

#### Constructor

```python
OperatorConfig()
```

#### Constructor

```python
OperatorConfig(id)
```

**Parameters:**

- `id` (*int*)

#### Constructor

```python
OperatorConfig(id)
```

**Parameters:**

- `id` (*IntPtr*)

## Methods

#### GetIntValue

```python
result = obj.GetIntValue(optionName)
```

**Parameters:**

- `optionName` (*str*)

**Returns:** *int*

#### SetConfigOption

```python
obj.SetConfigOption(optionName, value)
```

**Parameters:**

- `optionName` (*str*)
- `value` (*int*)

#### GetDoubleValue

```python
result = obj.GetDoubleValue(optionName)
```

**Parameters:**

- `optionName` (*str*)

**Returns:** *float*

#### SetConfigOption

```python
obj.SetConfigOption(optionName, value)
```

**Parameters:**

- `optionName` (*str*)
- `value` (*float*)

#### GetBoolValue

```python
result = obj.GetBoolValue(optionName)
```

**Parameters:**

- `optionName` (*str*)

**Returns:** *bool*

#### SetConfigOption

```python
obj.SetConfigOption(optionName, value)
```

**Parameters:**

- `optionName` (*str*)
- `value` (*bool*)

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### NumConfigOptions

**Type:** *int*

```python
# Get the property (read-only)
value = obj.NumConfigOptions
```

#### ConfigOptions

**Type:** *list*

```python
# Get the property (read-only)
value = obj.ConfigOptions
```
