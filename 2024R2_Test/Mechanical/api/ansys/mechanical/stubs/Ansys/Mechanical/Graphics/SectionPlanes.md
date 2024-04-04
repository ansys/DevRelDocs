# SectionPlanes

### *class* SectionPlanes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Represents the collection of section planes used by graphics

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Add`](#SectionPlanes.Add)           | Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.   |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Clear`](#SectionPlanes.Clear)       | Clears the collection of all SectionPlane objects.                                                                                                           |
| [`Remove`](#SectionPlanes.Remove)     | Removes the requested SectionPlane from the collection.                                                                                                      |
| [`RemoveAt`](#SectionPlanes.RemoveAt) | Removes the SectionPlane at the given index.                                                                                                                 |

### Properties

| [`ShowWholeElement`](#SectionPlanes.ShowWholeElement)   | Gets or Sets the Element Visibility of the Section Plane   |
|---------------------------------------------------------|------------------------------------------------------------|
| [`Capping`](#SectionPlanes.Capping)                     | Gets or Sets the Capping style of the Section Plane        |
| [`Count`](#SectionPlanes.Count)                         | The number of section planes in the collection.            |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.Mechanical.Graphics import SectionPlanes
```

## Property detail

### *property* SectionPlanes.ShowWholeElement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Element Visibility of the Section Plane

<!-- !! processed by numpydoc !! -->

### *property* SectionPlanes.Capping *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType](../DataModel/Enums/SectionPlaneCappingType.md#SectionPlaneCappingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Capping style of the Section Plane

<!-- !! processed by numpydoc !! -->

### *property* SectionPlanes.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of section planes in the collection.

<!-- !! processed by numpydoc !! -->

## Method detail

### SectionPlanes.Add(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#SectionPlane))

Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.Clear()

Clears the collection of all SectionPlane objects.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.Remove(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#SectionPlane))

Removes the requested SectionPlane from the collection.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.RemoveAt(index: System.Int32)

Removes the SectionPlane at the given index.

<!-- !! processed by numpydoc !! -->
