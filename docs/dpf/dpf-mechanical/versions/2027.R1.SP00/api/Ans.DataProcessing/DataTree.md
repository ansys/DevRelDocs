---
uid: Ans.DataProcessing.DataTree
---

# *class* DataTree()

DataTree()
DataTree(val: IntPtr)


## Methods

#### ToJson() -> str

#### fillFromJson(value: str) -> None

**Parameters:**

* **value**

#### fillFromTxt(value: str) -> None

**Parameters:**

* **value**

#### getDoubleAttribute(attribute_name: str) -> float

**Parameters:**

* **attribute_name**

#### getIntAttribute(attribute_name: str) -> int

**Parameters:**

* **attribute_name**

#### getStringAttribute(attribute_name: str) -> str

**Parameters:**

* **attribute_name**

#### getSubTree(name: str) -> DataTree

**Parameters:**

* **name**

#### getVecDoubleAttribute(attribute_name: str) -> list

**Parameters:**

* **attribute_name**

#### getVecIntAttribute(attribute_name: str) -> list

**Parameters:**

* **attribute_name**

#### hasAttribute(name: str) -> bool

**Parameters:**

* **name**

#### hasSubTree(name: str) -> bool

**Parameters:**

* **name**

#### makeDoubleAttribute(attribute_name: str, value: float) -> None

**Parameters:**

* **attribute_name**
* **value**

#### makeIntAttribute(attribute_name: str, value: int) -> None

**Parameters:**

* **attribute_name**
* **value**

#### makeStringAttribute(attribute_name: str, value: str) -> None

**Parameters:**

* **attribute_name**
* **value**

#### makeSubTree(name: str) -> DataTree

**Parameters:**

* **name**

#### makeVecDoubleAttribute(attribute_name: str, data: list) -> None

**Parameters:**

* **attribute_name**
* **data**

#### makeVecIntAttribute(attribute_name: str, data: list) -> None

**Parameters:**

* **attribute_name**
* **data**

#### writeToTxt() -> str
