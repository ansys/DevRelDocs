# `SectionPlanes`

<a id="ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlanes"></a>

#### *class* Ansys.Mechanical.Graphics.SectionPlanes(graphics: Ansys.Common.Interop.Gfx.IDSGraphics)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Represents the collection of section planes used by graphics

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Add`](#SectionPlanes.Add)                               | Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.   |
| [`Clear`](#SectionPlanes.Clear)                           | Clears the collection of all SectionPlane objects.                                                                                                           |
| [`Contains`](#SectionPlanes.Contains)                     | Returns true if the SectionPlane belongs to the collection.                                                                                                  |
| [`CopyTo`](#SectionPlanes.CopyTo)                         | CopyTo method.                                                                                                                                               |
| [`CreateSectionPlane`](#SectionPlanes.CreateSectionPlane) | Creates a SectionPlane based on a coordinate system and plane orientation.                                                                                   |
| [`GetEnumerator`](#SectionPlanes.GetEnumerator)           | GetEnumerator method.                                                                                                                                        |
| [`IndexOf`](#SectionPlanes.IndexOf)                       | Returns the index of the SectionObject if in the collection.  Returns -1 if not found.                                                                       |
| [`Remove`](#SectionPlanes.Remove)                         | Removes the requested SectionPlane from the collection.                                                                                                      |
| [`RemoveAt`](#SectionPlanes.RemoveAt)                     | Removes the SectionPlane at the given index.                                                                                                                 |

### Properties

| Name | Description |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [`Capping`](#SectionPlanes.Capping)                   | Gets or Sets the Capping style of the Section Plane                                                                       |
| [`Count`](#SectionPlanes.Count)                       | The number of section planes in the collection.                                                                           |
| [`IsReadOnly`](#SectionPlanes.IsReadOnly)             | IsReadOnly property.                                                                                                      |
| [`Item`](#SectionPlanes.Item)                         | Item property.                                                                                                            |
| [`ShowHatching`](#SectionPlanes.ShowHatching)         | Controls whether to render hatch lines (the black parallel lines) on the capped surfaces of section planes. Default: true |
| [`ShowWholeElement`](#SectionPlanes.ShowWholeElement) | Gets or Sets the Element Visibility of the Section Plane                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="SectionPlanes.Capping"></a>

### *property* SectionPlanes.Capping *: [Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType](../DataModel/Enums/SectionPlaneCappingType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SectionPlaneCappingType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the Capping style of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Count"></a>

### *property* SectionPlanes.Count *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

The number of section planes in the collection.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.IsReadOnly"></a>

### *property* SectionPlanes.IsReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsReadOnly property.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Item"></a>

### *property* SectionPlanes.Item *: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Item property.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.ShowHatching"></a>

### *property* SectionPlanes.ShowHatching *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Controls whether to render hatch lines (the black parallel lines) on the capped surfaces of section planes. Default: true

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.ShowWholeElement"></a>

### *property* SectionPlanes.ShowWholeElement *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the Element Visibility of the Section Plane

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SectionPlanes.Add"></a>

### SectionPlanes.Add(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Adds the given SectionPlane object to the collection to modify the view. Currently only 6 SectionPlane objects in the collection can be activated at once.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Clear"></a>

### SectionPlanes.Clear() → [None](https://docs.python.org/3/builtins/constants.html#None)

Clears the collection of all SectionPlane objects.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Contains"></a>

### SectionPlanes.Contains(item: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Returns true if the SectionPlane belongs to the collection.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.CopyTo"></a>

### SectionPlanes.CopyTo(array: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane), arrayIndex: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

CopyTo method.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.CreateSectionPlane"></a>

### SectionPlanes.CreateSectionPlane(coordinateSystem: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem), planeOrientation: [Ansys.Mechanical.DataModel.MechanicalEnums.Common.PlaneOrientation](../DataModel/MechanicalEnums/Common/PlaneOrientation.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Common.PlaneOrientation)) → [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane)

Creates a SectionPlane based on a coordinate system and plane orientation.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.GetEnumerator"></a>

### SectionPlanes.GetEnumerator() → Ansys.Mechanical.Graphics.SectionPlaneList

GetEnumerator method.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.IndexOf"></a>

### SectionPlanes.IndexOf(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Returns the index of the SectionObject if in the collection.  Returns -1 if not found.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.Remove"></a>

### SectionPlanes.Remove(sectionPlane: [Ansys.Mechanical.Graphics.SectionPlane](SectionPlane.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Graphics.SectionPlane)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Removes the requested SectionPlane from the collection.

<!-- !! processed by numpydoc !! -->

<a id="SectionPlanes.RemoveAt"></a>

### SectionPlanes.RemoveAt(index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the SectionPlane at the given index.

<!-- !! processed by numpydoc !! -->

