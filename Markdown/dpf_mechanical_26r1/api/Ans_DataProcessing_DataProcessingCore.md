---
uid: Ans.DataProcessing.DataProcessingCore
title: DataProcessingCore
---

# DataProcessingCore Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

DataProcessingCore()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```python
DataProcessingCore()
```

## Methods

#### DataProcessing_initialization

```python
obj.DataProcessing_initialization(errorSize, sError)
```

**Parameters:**

- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### dataProcessing_initializeWithContext

```python
obj.dataProcessing_initializeWithContext(context, dataProcessingCore_xml_path, errorSize, sError)
```

**Parameters:**

- `context` (*int*)
- `dataProcessingCore_xml_path` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### DataProcessing_set_debug_trace

```python
obj.DataProcessing_set_debug_trace(text, errorSize, sError)
```

**Parameters:**

- `text` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### DataProcessing_load_library

```python
obj.DataProcessing_load_library(name, dllPath, symbol, errorSize, sError)
```

**Parameters:**

- `name` (*str*)
- `dllPath` (*str*)
- `symbol` (*str*)
- `errorSize` (*Int32&* (out))
- `sError` (*String&* (out))

#### DataProcessing_available_operators

```python
result = obj.DataProcessing_available_operators(errorSize, sError)
```

**Parameters:**

- `errorSize` (*Int32&* (out))
- `sError` (*IntPtr&* (out))

**Returns:** *IntPtr*

#### DataProcessing_descriptionString

```python
result = obj.DataProcessing_descriptionString(data, errorSize, sError)
```

**Parameters:**

- `data` (*IntPtr*)
- `errorSize` (*Int32&* (out))
- `sError` (*IntPtr&* (out))

**Returns:** *IntPtr*

#### DataProcessing_deleteString

```python
obj.DataProcessing_deleteString(des, errorSize, sError)
```

**Parameters:**

- `des` (*IntPtr*)
- `errorSize` (*Int32&* (out))
- `sError` (*IntPtr&* (out))

#### Initialization

```python
obj.Initialization()
```

#### InitializationWithContext

```python
obj.InitializationWithContext(context, dataProcessingCore_xml_path)
```

**Parameters:**

- `context` (*int*)
- `dataProcessingCore_xml_path` (*str* (optional))

#### ActivateDebugTrace

```python
obj.ActivateDebugTrace(path)
```

**Parameters:**

- `path` (*str*)

#### DeactivateDebugTrace

```python
obj.DeactivateDebugTrace()
```

#### LoadLibrary

```python
obj.LoadLibrary(name, dllPath, symbol)
```

**Parameters:**

- `name` (*str*)
- `dllPath` (*str*)
- `symbol` (*str* (optional))

#### GetAvailableOperators

```python
result = obj.GetAvailableOperators()
```

**Returns:** *iterable*

#### GetRuntimeCoreConfig

```python
result = obj.GetRuntimeCoreConfig()
```

**Returns:** *RuntimeCoreConfig*

## Fields

#### DLLName

**Type:** *str* (static, constant)

**Value:** `DataProcessingCore`

```python
# Access as static field
value = DataProcessingCore.DLLName
```
