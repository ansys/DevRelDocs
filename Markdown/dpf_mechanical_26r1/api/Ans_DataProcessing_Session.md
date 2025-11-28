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

```python
Session()
```

## Methods

#### GetInternalData

```python
result = obj.GetInternalData()
```

**Returns:** *IntPtr*

#### GetSessionId

```python
result = obj.GetSessionId()
```

**Returns:** *str*

#### AddWorkflow

```python
obj.AddWorkflow(workflow_id, workflow)
```

**Parameters:**

- `workflow_id` (*str*)
- `workflow` (*Workflow*)

#### GetWorkflow

```python
result = obj.GetWorkflow(workflow_id)
```

**Parameters:**

- `workflow_id` (*str*)

**Returns:** *Workflow*

#### GetWorkflowByIndex

```python
result = obj.GetWorkflowByIndex(index)
```

**Parameters:**

- `index` (*int*)

**Returns:** *Workflow*

#### GetNumWorkflow

```python
result = obj.GetNumWorkflow()
```

**Returns:** *int*

#### SetLogger

```python
obj.SetLogger(logger)
```

**Parameters:**

- `logger` (*EventLogger*)

#### SetProgressSystem

```python
obj.SetProgressSystem(notifier)
```

**Parameters:**

- `notifier` (*ProgressInformationNotifier*)

#### AddBreakpoint

```python
result = obj.AddBreakpoint(workflow, op, isAfterExecution)
```

**Parameters:**

- `workflow` (*Workflow*)
- `op` (*BaseOperator*)
- `isAfterExecution` (*bool*)

**Returns:** *int*

#### RemoveBreakpoint

```python
obj.RemoveBreakpoint(workflow, id)
```

**Parameters:**

- `workflow` (*Workflow*)
- `id` (*int*)
