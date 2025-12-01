---
uid: Ans.DataProcessing.DataSources
---

# DataSources Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Container of files paths on which the analysis results can be found

DataSources()
DataSources(pDataSources: IntPtr)
DataSources(resultPath: str)
DataSources(resultPath: str, extension: str)


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```python
DataSources()
```

#### Constructor

```python
DataSources(pDataSources)
```

**Parameters:**

- `pDataSources` (*IntPtr*)

#### Constructor

```python
DataSources(resultPath)
```

**Parameters:**

- `resultPath` (*str*)

#### Constructor

```python
DataSources(resultPath, extension)
```

**Parameters:**

- `resultPath` (*str*)
- `extension` (*str*)

## Methods

#### GetFilePath

```python
result = obj.GetFilePath(key)
```

**Parameters:**

- `key` (*str*)

**Returns:** *str*

#### SetResultFilePath

```python
obj.SetResultFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### SetResultFilePath

```python
obj.SetResultFilePath(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### SetResultFilePath

```python
obj.SetResultFilePath(source, sKey)
```

**Parameters:**

- `source` (*AnsDispatchHolder*)
- `sKey` (*str*)

#### AddFilePath

```python
obj.AddFilePath(filePath, sKey, sResultKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)
- `sResultKey` (*str*)

#### AddFilePath

```python
obj.AddFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### AddFilePath

```python
obj.AddFilePath(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### AppendUpStreamDataSources

```python
obj.AppendUpStreamDataSources(up_stream)
```

**Parameters:**

- `up_stream` (*DataSources*)

#### SetDomainResultFilePath

```python
obj.SetDomainResultFilePath(filePath, sKey, id)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)
- `id` (*int*)

#### SetDomainResultFilePath

```python
obj.SetDomainResultFilePath(filePath, id)
```

**Parameters:**

- `filePath` (*str*)
- `id` (*int*)

#### AddDomainFilePath

```python
obj.AddDomainFilePath(filePath, sKey, id)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)
- `id` (*int*)

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### ResultFileKey

**Type:** *str*

```python
# Get the property (read-only)
value = obj.ResultFileKey
```

#### ResultFilePath

**Type:** *str*

```python
# Get or set the property
value = obj.ResultFilePath
obj.ResultFilePath = new_value
```
