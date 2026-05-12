---
uid: Ans.DataProcessing.Field
---

# *class* Field()

The field is the main simulation data container.

Results data are defined by values associated to entities (scoping), and these entities are a subset of a model (support)

**Example:**

```python
my_field = dpf.FieldsFactory.CreateScalarField(num_entities, 'Nodal')

my_field.ComponentCount #returns the nuber of component of the elementary data

my_field.Location

my_field.Scoping

my_field.Unit

my_field.Data #returns the full list of data

my_field.GetEntityDataByIndex(0) #returns the data list for the first entity

my_field.GetEntityDataById(1) #returns the data list for the entity of scoping's id 1
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

#### GetHardCopy(copyData: bool = True) -> Field

Method `GetHardCopy` create a copy of the field by allocating the data size and getting a copy of the scoping

**Parameters:**

* **copyData** (*optional*) - (optional, default is true) an hard copy of tha field's data is done if it is set to true

#### Reserve(scopingSize: int, dataSize: int) -> None

Method `Reserve` reserve the data vectors

**Parameters:**

* **scopingSize** - expected scoping size
* **dataSize** - expected data container size

#### UpdateEntityDataByEntityIndex(EntityIndex: int, data: list) -> None

**Parameters:**

* **EntityIndex**
* **data**

#### op_Addition(a: Field, b: Field) -> BaseOperator

**Parameters:**

* **a**
* **b**

#### op_Multiply(a: Field, b: Field) -> BaseOperator

**Parameters:**

* **a**
* **b**

#### op_Subtraction(a: Field, b: Field) -> BaseOperator

**Parameters:**

* **a**
* **b**

## Properties

#### *property* Location: str

Property `Location` describes what kind of entity the results are scoped to

*get/set*

#### *property* NComp: int

Property `NComp` number of components by entity

*get*

#### *property* ComponentCount: int

Property `ComponentCount` number of components by entity

*get*

#### *property* ElementaryDataCount: int

Property `ElementaryDataCount` number of times numComp can be found in the data container

*get*

#### *property* Data: list

Property `Data`access the data container row values

 Data can be seen as a list of elementary data (one by scoping id)

*get/set*

#### *property* ScopingIds: list

Property `ScopingIds` ids belonging to the scoping, identical to my_field.Scoping.Ids

*get/set*

#### *property* Scoping: Scoping

Property `Scoping` entities ids representing a subset of the model and on which the data container is scoped

*get/set*

#### *property* Unit: str

Property `unit` unit symbol of the field

*get/set*

#### *property* eShellLayers: shellLayers

*get/set*

#### *property* MeshedRegionSupport: MeshedRegion

Property `MeshedRegionSupport` returns the field's support if it's a meshed region

*get/set*

#### *property* TimeFreqSupport: TimeFreqSupport

Property `TimeFreqSupport` returns the field's support if it's a time freq support

*get/set*

#### *property* Name: str

*get/set*

#### *property* Clone: FieldCloning

Property `Clone` create a copy of the field, change its dimensionnality and allocate the data according to the fields scoping and the new dimensionnality

*get*

#### *property* Id: int

*get*
