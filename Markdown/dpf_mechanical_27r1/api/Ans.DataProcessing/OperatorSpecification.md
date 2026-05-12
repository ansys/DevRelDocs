---
uid: Ans.DataProcessing.OperatorSpecification
---

# *class* OperatorSpecification(name: str)

OperatorSpecification(name: str)
OperatorSpecification(id: Int64)


**Parameters:**

* **name**

## Methods

#### GetCategory() -> str

#### GetExposure() -> str

#### GetInputPin(id: int) -> PinDescription

**Parameters:**

* **id**

#### GetInputPins() -> iterable

#### GetOperatorDescription() -> str

#### GetOutputPin(id: int) -> PinDescription

**Parameters:**

* **id**

#### GetOutputPins() -> iterable

#### GetPinPosition(PinToGet: str, isInput: bool) -> int

**Parameters:**

* **PinToGet**
* **isInput**

#### GetScriptingName() -> str

#### GetUserName() -> str

#### GetVersion() -> str

Returns the current semantic version of the operator specification

(e.g. `"1.2.0"`), or an empty string when none has been set.

#### HasSpecification(name: str) -> bool

**Parameters:**

* **name**

#### getNumberOfPin(isInput: bool) -> int

**Parameters:**

* **isInput**

## Properties

#### *property* Id: int

*get*
