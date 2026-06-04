---
uid: Ans.DataProcessing.Core
---

# *class* Core()

Contains DPF main actions

## Methods

#### CreateOperator(opName: str, config: OperatorConfig = None) -> BaseOperator

Method `CreateOperator` create an operator with its name. If plugins have been loaded, inputs and outputs APIs are available.

 '''''''''''''_________

 "input1"  -> |operator| ->  "output1"

 "input2"  -> |''''''''| ->  "output2"

              |________|

**Parameters:**

* **opName** - 
* **config** (*optional*) - (optional) used to set how the operator will run
