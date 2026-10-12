---
uid: Ans.DataProcessing.PropertyField
---

# *class* PropertyField(numEntities: int, elementaryDataSize: int)

The property field is a field object that contains int values.

It describes properties such as connectivity.

**Parameters:**

* **numEntities**
* **elementaryDataSize**

**Example:**

```python
my_property_field = dpf.PropertyField(0, 3) # create property field with 0 entities of size 3 (vector)

my_property_field.Add(1, new List<int>{ 1, 3, 7 }) # add values to the vector entity number one
```

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
