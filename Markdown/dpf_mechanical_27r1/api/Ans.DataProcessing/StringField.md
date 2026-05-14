---
uid: Ans.DataProcessing.StringField
---

# *class* StringField()

 Holds a labelled collection of strings, where each entity slot (identified by an

 integer entity-ID) stores one or more string values.

**Example:**

```python
 var sf = new StringField();

 sf.PushBack(0, "Initial release.");

 sf.PushBack(1, "Bug fixes.");



 int n = sf.GetNumberEntities();   // 2

 string s = sf.GetEntityData(0);   // "Initial release."

 string[] all = sf.GetData();       // ["Initial release.", "Bug fixes."]
```

**Notes:**

`StringField` is the DPF counterpart of `CStringField` in the C++ API.

 It is most commonly encountered as a property value inside a

 , for example as the container used by the operator

 changelog to store per-version change descriptions.

## Methods

#### GetData() -> String[]

Returns all entity strings as a flat array in storage order.

#### GetEntityData(index: int) -> str

Returns the string stored at position `index` in the linearised

data array of this .

**Parameters:**

* **index** - Zero-based position in the data storage.

#### GetNumberEntities() -> int

Returns the number of entity slots stored in this .

#### PushBack(entityId: int, data: str) -> None

Appends a single string as entity `entityId` to this

.

**Parameters:**

* **entityId** - Entity identifier (stored in the scoping).
* **data** - String value to store.
