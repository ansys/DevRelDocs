# `SectionPlanes`

<a id="ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.SectionPlanes"></a>

#### *class* Ansys.Mechanical.Graphics.SectionPlanes

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Represents the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Add`](#SectionPlanes.Add)                               | Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.   |
| [`Clear`](#SectionPlanes.Clear)                           | Clears the collection of all SectionPlane objects.                                                                                                           |
| [`CreateSectionPlane`](#SectionPlanes.CreateSectionPlane) | Creates a SectionPlane based on a coordinate system and plane orientation.                                                                                   |
| [`Remove`](#SectionPlanes.Remove)                         | Removes the requested SectionPlane from the collection.                                                                                                      |
| [`RemoveAt`](#SectionPlanes.RemoveAt)                     | Removes the SectionPlane at the given index.                                                                                                                 |

### Properties

| Name | Description |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [`Capping`](#SectionPlanes.Capping)                   | Gets or Sets the Capping style of the Section Plane                                                                       |
| [`Count`](#SectionPlanes.Count)                       | The number of section planes in the collection.                                                                           |
| [`ShowHatching`](#SectionPlanes.ShowHatching)         | Controls whether to render hatch lines (the black parallel lines) on the capped surfaces of section planes. Default: true |
| [`ShowWholeElement`](#SectionPlanes.ShowWholeElement) | Gets or Sets the Element Visibility of the Section Plane                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="SectionPlanes.Capping"></a>

### *property* SectionPlanes.Capping *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType](../DataModel/Enums/SectionPlaneCappingType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Capping style of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Count"></a>

### *property* SectionPlanes.Count *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

The number of section planes in the collection.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.ShowHatching"></a>

### *property* SectionPlanes.ShowHatching *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Controls whether to render hatch lines (the black parallel lines) on the capped surfaces of section planes. Default: true

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.ShowWholeElement"></a>

### *property* SectionPlanes.ShowWholeElement *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or Sets the Element Visibility of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SectionPlanes.Add"></a>

### SectionPlanes.Add(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.SectionPlane)) → [None](https://docs.python.org/3/library/constants.html#None)

Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Clear"></a>

### SectionPlanes.Clear() → [None](https://docs.python.org/3/library/constants.html#None)

Clears the collection of all SectionPlane objects.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.CreateSectionPlane"></a>

### SectionPlanes.CreateSectionPlane(coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem), planeOrientation: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PlaneOrientation](../DataModel/MechanicalEnums/Common/PlaneOrientation.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PlaneOrientation)) → [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.SectionPlane)

Creates a SectionPlane based on a coordinate system and plane orientation.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Remove"></a>

### SectionPlanes.Remove(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.Graphics.SectionPlane)) → [bool](https://docs.python.org/3/library/functions.html#bool)

Removes the requested SectionPlane from the collection.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.RemoveAt"></a>

### SectionPlanes.RemoveAt(index: [int](https://docs.python.org/3/library/functions.html#int)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the SectionPlane at the given index.

<!-- !! processed by numpydoc !! -->

