---
uid: Ans.DataProcessing.Session
title: Session
---

# Session Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

Session()


## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |
| Base Class | `Ans.DataProcessing.internal_objects.DpfType` |

## Constructors

#### Constructor

```csharp
new Session()
```

## Methods

#### GetInternalData

```csharp
IntPtr GetInternalData()
```

**Returns:** *IntPtr*

#### GetSessionId

```csharp
String GetSessionId()
```

**Returns:** *String*

#### AddWorkflow

```csharp
Void AddWorkflow(String workflow_id, Workflow workflow)
```

**Parameters:**

- `workflow_id` (*String*)
- `workflow` (*Workflow*)

#### GetWorkflow

```csharp
Workflow GetWorkflow(String workflow_id)
```

**Parameters:**

- `workflow_id` (*String*)

**Returns:** *Workflow*

#### GetWorkflowByIndex

```csharp
Workflow GetWorkflowByIndex(Int32 index)
```

**Parameters:**

- `index` (*Int32*)

**Returns:** *Workflow*

#### GetNumWorkflow

```csharp
Int32 GetNumWorkflow()
```

**Returns:** *Int32*

#### SetLogger

```csharp
Void SetLogger(EventLogger logger)
```

**Parameters:**

- `logger` (*EventLogger*)

#### SetProgressSystem

```csharp
Void SetProgressSystem(ProgressInformationNotifier notifier)
```

**Parameters:**

- `notifier` (*ProgressInformationNotifier*)

#### AddBreakpoint

```csharp
Int32 AddBreakpoint(Workflow workflow, BaseOperator op, Boolean isAfterExecution)
```

**Parameters:**

- `workflow` (*Workflow*)
- `op` (*BaseOperator*)
- `isAfterExecution` (*Boolean*)

**Returns:** *Int32*

#### RemoveBreakpoint

```csharp
Void RemoveBreakpoint(Workflow workflow, Int32 id)
```

**Parameters:**

- `workflow` (*Workflow*)
- `id` (*Int32*)
