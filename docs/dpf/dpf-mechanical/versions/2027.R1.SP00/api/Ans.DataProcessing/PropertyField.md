---
uid: Ans.DataProcessing.PropertyField
---

# *class* PropertyField(numEntities: int, elementaryDataSize: int)

PropertyField(pField: IntPtr)
PropertyField(numEntities: int, elementaryDataSize: int)


**Parameters:**

* **numEntities**
* **elementaryDataSize**

## Methods

#### Add(id: int, data: list) -> None

**Parameters:**

* **id**
* **data**

#### GetEntityDataById(id: int) -> list

Method `GetEntityDataById` data container of the entity asked

**Parameters:**

* **id** - Entity id found in the scoping

#### GetEntityDataByIndex(index: int) -> list

Method `GetEntityDataByIndex` data container of the entity asked

**Parameters:**

* **index** - 

## Properties

#### *property* ElementaryDataCount: int

Property `ElementaryDataCount` number of times numComp can be found in the data container

*get*

#### *property* Data: list

Property `Data`access the data container row values

 Data can be seen as a list of elementary data (one by scoping id)

*get/set*

#### *property* Scoping: Scoping

Property `Scoping` entities ids representing a subset of the model and on which the data container is scoped

*get/set*
