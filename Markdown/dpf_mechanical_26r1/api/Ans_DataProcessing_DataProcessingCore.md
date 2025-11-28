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

```csharp
new DataProcessingCore()
```

## Methods

#### DataProcessing_initialization

```csharp
Void DataProcessing_initialization(Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### dataProcessing_initializeWithContext

```csharp
Void dataProcessing_initializeWithContext(Int32 context, String dataProcessingCore_xml_path, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `context` (*Int32*)
- `dataProcessingCore_xml_path` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### DataProcessing_set_debug_trace

```csharp
Void DataProcessing_set_debug_trace(String text, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `text` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### DataProcessing_load_library

```csharp
Void DataProcessing_load_library(String name, String dllPath, String symbol, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `name` (*String*)
- `dllPath` (*String*)
- `symbol` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### DataProcessing_available_operators

```csharp
IntPtr DataProcessing_available_operators(Int32& errorSize (out), IntPtr& sError (out))
```

**Parameters:**

- `errorSize` (*Int32&*)
- `sError` (*IntPtr&*)

**Returns:** *IntPtr*

#### DataProcessing_descriptionString

```csharp
IntPtr DataProcessing_descriptionString(IntPtr data, Int32& errorSize (out), IntPtr& sError (out))
```

**Parameters:**

- `data` (*IntPtr*)
- `errorSize` (*Int32&*)
- `sError` (*IntPtr&*)

**Returns:** *IntPtr*

#### DataProcessing_deleteString

```csharp
Void DataProcessing_deleteString(IntPtr des, Int32& errorSize (out), IntPtr& sError (out))
```

**Parameters:**

- `des` (*IntPtr*)
- `errorSize` (*Int32&*)
- `sError` (*IntPtr&*)

#### Initialization

```csharp
Void Initialization()
```

#### InitializationWithContext

```csharp
Void InitializationWithContext(Int32 context, String dataProcessingCore_xml_path (optional))
```

**Parameters:**

- `context` (*Int32*)
- `dataProcessingCore_xml_path` (*String*)

#### ActivateDebugTrace

```csharp
Void ActivateDebugTrace(String path)
```

**Parameters:**

- `path` (*String*)

#### DeactivateDebugTrace

```csharp
Void DeactivateDebugTrace()
```

#### LoadLibrary

```csharp
Void LoadLibrary(String name, String dllPath, String symbol (optional))
```

**Parameters:**

- `name` (*String*)
- `dllPath` (*String*)
- `symbol` (*String*)

#### GetAvailableOperators

```csharp
IEnumerable`1 GetAvailableOperators()
```

**Returns:** *IEnumerable`1*

#### GetRuntimeCoreConfig

```csharp
RuntimeCoreConfig GetRuntimeCoreConfig()
```

**Returns:** *RuntimeCoreConfig*

## Fields

#### DLLName

```csharp
static const String DLLName = DataProcessingCore
```
