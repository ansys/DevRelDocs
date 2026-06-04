---
uid: Ans.DataProcessing.ProgressInformationNotifier
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

```python
ProgressInformationNotifier()
```

## Methods

#### GetWorkflowProgressInformationById

```python
result = obj.GetWorkflowProgressInformationById(workflow_identifier)
```

**Parameters:**

- `workflow_identifier` (*str*)

**Returns:** *int*

#### GetOperatorStateById

```python
result = obj.GetOperatorStateById(operator_identifier)
```

**Parameters:**

- `operator_identifier` (*int*)

**Returns:** *int*

#### GetProgressCallback

```python
result = obj.GetProgressCallback()
```

**Returns:** *StringIntCallback*

#### GetOperatorStateCallback

```python
result = obj.GetOperatorStateCallback()
```

**Returns:** *IntIntCallback*
