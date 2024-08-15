# `SectionPlanes`



#### *class* ansys.mechanical.stubs.v242.Ansys.Mechanical.Graphics.SectionPlanes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Add`      | Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.   |
| `Clear`    | Clears the collection of all SectionPlane objects.                                                                                                           |
| `Remove`   | Removes the requested SectionPlane from the collection.                                                                                                      |
| `RemoveAt` | Removes the SectionPlane at the given index.                                                                                                                 |

### Properties

| Name | Description |
|----------------------|------------------------------------------------------------|
| `ShowWholeElement`   | Gets or Sets the Element Visibility of the Section Plane   |
| `Capping`            | Gets or Sets the Capping style of the Section Plane        |
| `Count`              | The number of section planes in the collection.            |

<a id="property-detail"></a>

## Property detail

### *property* SectionPlanes.ShowWholeElement *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Element Visibility of the Section Plane

<!-- !! processed by numpydoc !! -->

### *property* SectionPlanes.Capping *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType](../../../../v241/Ansys/Mechanical/DataModel/Enums/SectionPlaneCappingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Capping style of the Section Plane

<!-- !! processed by numpydoc !! -->

### *property* SectionPlanes.Count *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

The number of section planes in the collection.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### SectionPlanes.Add(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](../../../../v241/Ansys/Mechanical/Graphics/SectionPlane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.SectionPlane))

Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.Clear()

Clears the collection of all SectionPlane objects.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.Remove(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](../../../../v241/Ansys/Mechanical/Graphics/SectionPlane.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.Graphics.SectionPlane))

Removes the requested SectionPlane from the collection.

<!-- !! processed by numpydoc !! -->

### SectionPlanes.RemoveAt(index: System.Int32)

Removes the SectionPlane at the given index.

<!-- !! processed by numpydoc !! -->

