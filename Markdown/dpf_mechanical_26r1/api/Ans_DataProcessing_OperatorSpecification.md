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

```csharp
new OperatorSpecification(String name)
```

**Parameters:**

- `name` (*String*)

#### Constructor

```csharp
new OperatorSpecification(Int64 id)
```

**Parameters:**

- `id` (*Int64*)

## Methods

#### HasSpecification

```csharp
Boolean HasSpecification(String name)
```

**Parameters:**

- `name` (*String*)

**Returns:** *Boolean*

#### GetOperatorDescription

```csharp
String GetOperatorDescription()
```

**Returns:** *String*

#### GetInputPins

```csharp
IEnumerable`1 GetInputPins()
```

**Returns:** *IEnumerable`1*

#### GetInputPin

```csharp
PinDescription GetInputPin(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

**Returns:** *PinDescription*

#### GetOutputPins

```csharp
IEnumerable`1 GetOutputPins()
```

**Returns:** *IEnumerable`1*

#### GetOutputPin

```csharp
PinDescription GetOutputPin(Int32 id)
```

**Parameters:**

- `id` (*Int32*)

**Returns:** *PinDescription*

#### getNumberOfPin

```csharp
Int32 getNumberOfPin(Boolean isInput)
```

**Parameters:**

- `isInput` (*Boolean*)

**Returns:** *Int32*

#### GetPinPosition

```csharp
Int32 GetPinPosition(String PinToGet, Boolean isInput)
```

**Parameters:**

- `PinToGet` (*String*)
- `isInput` (*Boolean*)

**Returns:** *Int32*

#### GetCategory

```csharp
String GetCategory()
```

**Returns:** *String*

#### GetUserName

```csharp
String GetUserName()
```

**Returns:** *String*

#### GetScriptingName

```csharp
String GetScriptingName()
```

**Returns:** *String*

#### GetExposure

```csharp
String GetExposure()
```

**Returns:** *String*

## Properties

#### Id

```csharp
Int64 Id { get; }
```
