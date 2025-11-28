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

```csharp
new OperatorConfig(String operatorName)
```

**Parameters:**

- `operatorName` (*String*)

#### Constructor

```csharp
new OperatorConfig()
```

#### Constructor

```csharp
new OperatorConfig(Int64 id)
```

**Parameters:**

- `id` (*Int64*)

#### Constructor

```csharp
new OperatorConfig(IntPtr id)
```

**Parameters:**

- `id` (*IntPtr*)

## Methods

#### GetIntValue

```csharp
Int32 GetIntValue(String optionName)
```

**Parameters:**

- `optionName` (*String*)

**Returns:** *Int32*

#### SetConfigOption

```csharp
Void SetConfigOption(String optionName, Int32 value)
```

**Parameters:**

- `optionName` (*String*)
- `value` (*Int32*)

#### GetDoubleValue

```csharp
Double GetDoubleValue(String optionName)
```

**Parameters:**

- `optionName` (*String*)

**Returns:** *Double*

#### SetConfigOption

```csharp
Void SetConfigOption(String optionName, Double value)
```

**Parameters:**

- `optionName` (*String*)
- `value` (*Double*)

#### GetBoolValue

```csharp
Boolean GetBoolValue(String optionName)
```

**Parameters:**

- `optionName` (*String*)

**Returns:** *Boolean*

#### SetConfigOption

```csharp
Void SetConfigOption(String optionName, Boolean value)
```

**Parameters:**

- `optionName` (*String*)
- `value` (*Boolean*)

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

## Properties

#### NumConfigOptions

```csharp
Int32 NumConfigOptions { get; }
```

#### ConfigOptions

```csharp
IList`1 ConfigOptions { get; }
```
