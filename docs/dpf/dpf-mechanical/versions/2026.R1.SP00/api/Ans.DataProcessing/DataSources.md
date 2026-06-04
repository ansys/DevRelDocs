---
uid: Ans.DataProcessing.DataSources
---

# DataSources Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Container of files paths on which the analysis results can be found

## Example

```python
my_data_sources = dpf.DataSources()

my_data_sources.SetResultFilePath(r'c:/temp/file.rst')

my_data_sources.AddFilePath(r'c:/temp/file.mode')
```

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

Method `SetResultFilePath` change or set the result file path

```python
obj.SetResultFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### SetResultFilePath

Method `SetResultFilePath` change or set the result file path

```python
obj.SetResultFilePath(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### SetResultFilePath

Method `SetResultFilePath` change or set the result file path

```python
obj.SetResultFilePath(source, sKey)
```

**Parameters:**

- `source` (*AnsDispatchHolder*)
- `sKey` (*str*)

#### AddFilePath

Method `AddFilePath` add secondary path containing part of the analysis' information

```python
obj.AddFilePath(filePath, sKey, sResultKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)
- `sResultKey` (*str*)

#### AddFilePath

Method `AddFilePath` add secondary path containing part of the analysis' information

```python
obj.AddFilePath(filePath, sKey)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)

#### AddFilePath

Method `AddFilePath` add secondary path containing part of the analysis' information

```python
obj.AddFilePath(filePath)
```

**Parameters:**

- `filePath` (*str*)

#### AppendUpStreamDataSources

Method `AppendUpStreamDataSources`the recursivity of specific results (mainly expansion results) can be defined with upstreams

```python
obj.AppendUpStreamDataSources(up_stream)
```

**Parameters:**

- `up_stream` (*DataSources*)

#### SetDomainResultFilePath

Method `SetDomainResultFilePath` change or set the domain result file path

```python
obj.SetDomainResultFilePath(filePath, sKey, id)
```

**Parameters:**

- `filePath` (*str*)
- `sKey` (*str*)
- `id` (*int*)

#### SetDomainResultFilePath

Method `SetDomainResultFilePath` change or set the domain result file path

```python
obj.SetDomainResultFilePath(filePath, id)
```

**Parameters:**

- `filePath` (*str*)
- `id` (*int*)

#### AddDomainFilePath

Method `SetDomainResultFilePath` change or set the domain result file path

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

Property `ResultFileKey` extension of the results contained in the data sources

**Type:** *str*

```python
# Get the property (read-only)
value = obj.ResultFileKey
```

#### ResultFilePath

Property `ResultFilePath` path to the result file registered in the data sources

**Type:** *str*

```python
# Get or set the property
value = obj.ResultFilePath
obj.ResultFilePath = new_value
```
