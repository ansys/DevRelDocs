---
uid: Ans.DataProcessing.FieldsFactory
---

# *class* FieldsFactory()

Helpers to create user defined fields

**Example:**

```python
my_displacement = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacement.Scoping.Ids = range(1,101)

my_displacement.Data = my_data

my_stress = dpf.FieldsFactory.CreateTensorField(numEntities=30, locations.elemental_nodal)

my_stress.Add(id=1, data=[1.0,2.0,3.0,4.0, 5.0, 6.0]) # ...
```

## Methods

#### Create3DVectorField(numEntities: int, location: str = Nodal) -> Field

Method `Create3DVectorField` create a 3D vector field with reserved size = numEntities

**Parameters:**

* **numEntities** - number of entities in the scoping used to reserve the data size
* **location** (*optional*) - (optional, default nodal) set the location of the field

**Example:**

```python
my_displacement = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacement.Scoping.Ids = range(1,101)

my_displacement.Data = my_data
```

#### CreateMatrixField(numEntities: int, numLines: int, numCol: int, location: str = Nodal) -> Field

Method `CreateMatrixField` create a matrix field with reserved size = numEntities

**Parameters:**

* **numEntities** - number of entities in the scoping used to reserve the data size
* **numLines** - number of line in the matrix
* **numCol** - number of columns in the matrix
* **location** (*optional*) - (optional, default nodal) set the location of the field

**Example:**

```python
my_matrix = dpf.FieldsFactory.CreateMatrixField(numEntities=1)

my_matrix.Add(1, my_data_list)
```

#### CreateScalarField(numEntities: int, location: str = Nodal) -> Field

Method `CreateScalarField` create a scalar field with reserved size = numEntities

**Parameters:**

* **numEntities** - number of entities in the scoping used to reserve the data size
* **location** (*optional*) - (optional, default nodal) set the location of the field

**Example:**

```python
my_volume = dpf.FieldsFactory.CreateScalarField(numEntities=100, location=dpf.locations.elemental)

my_volume.Scoping.Ids = range(1,101)

my_volume.Data = my_data
```

#### CreateTensorField(numEntities: int, location: str = Nodal) -> Field

Method `CreateTensorField` create a 3*3 symmetric tensor field with reserved size = numEntities

**Parameters:**

* **numEntities** - number of entities in the scoping used to reserve the data size
* **location** (*optional*) - (optional, default nodal) set the location of the field

**Example:**

```python
 my_stress = dpf.FieldsFactory.CreateTensorField(numEntities=30, location=locations.elemental_nodal)

 my_stress.Add(id=1, data=[1.0, 2.0, 3.0, 4.0, 5.0, 6.0]) # ...
```

#### CreateVectorField(numEntities: int, numComp: int, location: str = Nodal) -> Field

Method `CreateVectorField` create a vector field with reserved size = numEntities

**Parameters:**

* **numEntities** - number of entities in the scoping used to reserve the data size
* **numComp** - size of an elementary vector
* **location** (*optional*) - (optional, default nodal) set the location of the field

**Example:**

```python
my_2D_displacement = dpf.FieldsFactory.CreateVectorField(numEntities=100, numComp=2)

my_2D_displacement.Scoping.Ids = range(1,101)

my_2D_displacement.Data = my_data
```
