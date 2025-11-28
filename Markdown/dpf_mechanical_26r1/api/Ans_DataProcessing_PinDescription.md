---
uid: Ans.DataProcessing.PinDescription
title: PinDescription
---

# PinDescription Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

PinDescription(index: Int32, name: str, description: str, isOptional: bool, isEllipsis: bool, typeNames: IEnumerable[str], aliases: IEnumerable[str])


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```csharp
new PinDescription(Int32 index, String name, String description, Boolean isOptional, Boolean isEllipsis, IEnumerable`1 typeNames, IEnumerable`1 aliases)
```

**Parameters:**

- `index` (*Int32*)
- `name` (*String*)
- `description` (*String*)
- `isOptional` (*Boolean*)
- `isEllipsis` (*Boolean*)
- `typeNames` (*IEnumerable`1*)
- `aliases` (*IEnumerable`1*)

## Methods

## Properties

#### Index

```csharp
Int32 Index { get; set; }
```

#### Name

```csharp
String Name { get; set; }
```

#### Description

```csharp
String Description { get; set; }
```

#### IsOptional

```csharp
Boolean IsOptional { get; set; }
```

#### IsEllipsis

```csharp
Boolean IsEllipsis { get; set; }
```

#### TypeNames

```csharp
List`1 TypeNames { get; set; }
```

#### Aliases

```csharp
List`1 Aliases { get; set; }
```
