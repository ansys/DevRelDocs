---
uid: Ans.DataProcessing.FieldsContainerFactory
---

# *class* FieldsContainerFactory()

Helpers to create user defined fields container

**Example:**

```python
time1_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

time2_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacements = dpf.FieldsContainerFactory.OverTimeFreqFieldsContainer([time1_disp, time2_disp])
```

## Methods

#### ComplexFieldsContainer(realField: Field, imaginaryField: Field) -> FieldsContainer

Method `ComplexFieldsContainer` create fields container with one real and one imaginary field

**Parameters:**

* **realField** - real part field
* **imaginaryField** - imaginary part field

**Example:**

```python
real_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

im_disp = dpf.FieldsFactory.Create3DVectorField(numEntities=100)

my_displacements = dpf.FieldsContainerFactory.OverTimeFreqComplexFieldsContainer(real_disp,im_disp)
```

#### OverTimeFreqComplexFieldsContainer(realFields: dict, imaginaryFields: dict, timeFreqUnit: str) -> FieldsContainer

**Parameters:**

* **realFields**
* **imaginaryFields**
* **timeFreqUnit**

#### OverTimeFreqFieldsContainer(fields: dict, timeFreqUnit: str) -> FieldsContainer

**Parameters:**

* **fields**
* **timeFreqUnit**
