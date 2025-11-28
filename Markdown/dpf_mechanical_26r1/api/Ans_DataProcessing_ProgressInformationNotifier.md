---
uid: Ans.DataProcessing.ProgressInformationNotifier
title: ProgressInformationNotifier
---

# ProgressInformationNotifier Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

ProgressInformationNotifier()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Constructors

#### Constructor

```csharp
new ProgressInformationNotifier()
```

## Methods

#### GetWorkflowProgressInformationById

```csharp
Int32 GetWorkflowProgressInformationById(String workflow_identifier)
```

**Parameters:**

- `workflow_identifier` (*String*)

**Returns:** *Int32*

#### GetOperatorStateById

```csharp
Int32 GetOperatorStateById(Int32 operator_identifier)
```

**Parameters:**

- `operator_identifier` (*Int32*)

**Returns:** *Int32*

#### GetProgressCallback

```csharp
StringIntCallback GetProgressCallback()
```

**Returns:** *StringIntCallback*

#### GetOperatorStateCallback

```csharp
IntIntCallback GetOperatorStateCallback()
```

**Returns:** *IntIntCallback*
