---
uid: Ans.DataProcessing.Scoping
---

# *class* Scoping(ids: list, location: str = None)

The scoping contains entities ids representing a subset of the model's support. Typically, scoping can represent node ids, element ids, time steps, frequencies, joints...

Its location indicates what kind of entity the scoping is referring to

**Parameters:**

* **ids**
* **location**

**Example:**

```python
my_scoping = dpf.data.Scoping()

my_scoping.Location = 'Nodal' #optional

my_scoping.Ids = range(1,11)
```

## Methods

#### HasId(id: int) -> bool

**Parameters:**

* **id**

#### IdByIndex(index: int) -> int

**Parameters:**

* **index**

#### IndexById(id: int) -> int

**Parameters:**

* **id**

## Properties

#### *property* Ids: list

Property `Ids` entity ids

*get/set*

#### *property* Count: int

Property `Count` returns the number of ids in the scoping

*get*

#### *property* Location: str

Property `Location` indicates what kind of entity the scoping is referring to

*get/set*
