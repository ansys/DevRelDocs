---
uid: Ans.DataProcessing.DataTree
---

# DataTree Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

DataTree()
DataTree(val: IntPtr)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
DataTree()
```

#### Constructor

```python
DataTree(val)
```

**Parameters:**

- `val` (*IntPtr*)

## Methods

#### getStringAttribute

```python
result = obj.getStringAttribute(attribute_name)
```

**Parameters:**

- `attribute_name` (*str*)

**Returns:** *str*

#### makeIntAttribute

```python
obj.makeIntAttribute(attribute_name, value)
```

**Parameters:**

- `attribute_name` (*str*)
- `value` (*int*)

#### makeVecIntAttribute

```python
obj.makeVecIntAttribute(attribute_name, data)
```

**Parameters:**

- `attribute_name` (*str*)
- `data` (*list*)

#### makeDoubleAttribute

```python
obj.makeDoubleAttribute(attribute_name, value)
```

**Parameters:**

- `attribute_name` (*str*)
- `value` (*float*)

#### makeVecDoubleAttribute

```python
obj.makeVecDoubleAttribute(attribute_name, data)
```

**Parameters:**

- `attribute_name` (*str*)
- `data` (*list*)

#### makeStringAttribute

```python
obj.makeStringAttribute(attribute_name, value)
```

**Parameters:**

- `attribute_name` (*str*)
- `value` (*str*)

#### writeToTxt

```python
result = obj.writeToTxt()
```

**Returns:** *str*

#### fillFromTxt

```python
obj.fillFromTxt(value)
```

**Parameters:**

- `value` (*str*)

#### ToJson

```python
result = obj.ToJson()
```

**Returns:** *str*

#### fillFromJson

```python
obj.fillFromJson(value)
```

**Parameters:**

- `value` (*str*)

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### hasSubTree

```python
result = obj.hasSubTree(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *bool*

#### hasAttribute

```python
result = obj.hasAttribute(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *bool*

#### getSubTree

```python
result = obj.getSubTree(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *DataTree*

#### makeSubTree

```python
result = obj.makeSubTree(name)
```

**Parameters:**

- `name` (*str*)

**Returns:** *DataTree*

#### getIntAttribute

```python
result = obj.getIntAttribute(attribute_name)
```

**Parameters:**

- `attribute_name` (*str*)

**Returns:** *int*

#### getVecIntAttribute

```python
result = obj.getVecIntAttribute(attribute_name)
```

**Parameters:**

- `attribute_name` (*str*)

**Returns:** *list*

#### getDoubleAttribute

```python
result = obj.getDoubleAttribute(attribute_name)
```

**Parameters:**

- `attribute_name` (*str*)

**Returns:** *float*

#### getVecDoubleAttribute

```python
result = obj.getVecDoubleAttribute(attribute_name)
```

**Parameters:**

- `attribute_name` (*str*)

**Returns:** *list*
