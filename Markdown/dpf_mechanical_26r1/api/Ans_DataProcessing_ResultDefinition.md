---
uid: Ans.DataProcessing.ResultDefinition
title: ResultDefinition
---

# ResultDefinition Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

ResultDefinition()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```csharp
new ResultDefinition()
```

## Methods

#### ResultDefinition_SetCriteria

```csharp
Void ResultDefinition_SetCriteria(IntPtr resDef, String sCriteria, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sCriteria` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### ResultDefinition_SetSubCriteria

```csharp
Void ResultDefinition_SetSubCriteria(IntPtr resDef, String sSubCriteria, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sSubCriteria` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### ResultDefinition_SetLocation

```csharp
Void ResultDefinition_SetLocation(IntPtr resDef, String sLocation, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `resDef` (*IntPtr*)
- `sLocation` (*String*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### ResultDefinition_SetStep

```csharp
Void ResultDefinition_SetStep(IntPtr resDef, Int32 iStep, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `resDef` (*IntPtr*)
- `iStep` (*Int32*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### ResultDefinition_SetMeshScoping

```csharp
Void ResultDefinition_SetMeshScoping(IntPtr resDef, IntPtr scoping, Int32& errorSize (out), String& sError (out))
```

**Parameters:**

- `resDef` (*IntPtr*)
- `scoping` (*IntPtr*)
- `errorSize` (*Int32&*)
- `sError` (*String&*)

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### FilePath

```csharp
String FilePath { set; }
```

#### Criteria

```csharp
String Criteria { get; set; }
```

#### SubCriteria

```csharp
String SubCriteria { get; set; }
```

#### Location

```csharp
String Location { get; set; }
```

#### step

```csharp
Int32 step { get; set; }
```

#### Scoping

```csharp
Scoping Scoping { get; set; }
```
