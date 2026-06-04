---
uid: Ans.DataProcessing.Core
---

# Core Class

**Namespace:** [Ans.DataProcessing](Ans_DataProcessing.md)

## Summary

Contains DPF main actions

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing` |
| Assembly | `CS_DataProcessing` |

## Methods

#### CreateOperator

Method `CreateOperator` create an operator with its name. If plugins have been loaded, inputs and outputs APIs are available.

 '''''''''''''_________

 "input1"  -> |operator| ->  "output1"

 "input2"  -> |''''''''| ->  "output2"

              |________|

```python
result = obj.CreateOperator(opName, config)
```

**Parameters:**

- `opName` (*str*)
- `config` (*OperatorConfig* (optional))

**Returns:** *BaseOperator*
