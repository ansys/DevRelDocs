# `AcousticPort`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticPort

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticPort.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AcousticPort.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#AcousticPort.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticPort.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticPort.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#AcousticPort.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#AcousticPort.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#AcousticPort.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#AcousticPort.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#AcousticPort.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AcousticPort.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#AcousticPort.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticPort.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#AcousticPort.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#AcousticPort.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#AcousticPort.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AcousticPort.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Children`](#AcousticPort.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#AcousticPort.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#AcousticPort.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Figures`](#AcousticPort.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#AcousticPort.Images)                                           | Gets the list of associated images.                           |
| [`InsideSurfaceBodiesLocation`](#AcousticPort.InsideSurfaceBodiesLocation) | Gets or sets the InsideSurfaceBodiesLocation.                 |
| [`InternalObject`](#AcousticPort.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`PortBehavior`](#AcousticPort.PortBehavior)                               | Gets or sets the PortBehavior.                                |
| [`PortNumber`](#AcousticPort.PortNumber)                                   | Gets the PortNumber.                                          |
| [`PortPosition`](#AcousticPort.PortPosition)                               | Gets or sets the PortPosition.                                |
| [`PortSurfaceLocation`](#AcousticPort.PortSurfaceLocation)                 | Gets or sets the PortSurfaceLocation.                         |
| [`Properties`](#AcousticPort.Properties)                                   | Gets the list of properties for this object.                  |
| [`ReadOnly`](#AcousticPort.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SharedRefBody`](#AcousticPort.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#AcousticPort.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`VisibleProperties`](#AcousticPort.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticPort.Children"></a>

### *property* AcousticPort.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Comments"></a>

### *property* AcousticPort.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.DataModelObjectCategory"></a>

### *property* AcousticPort.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Figures"></a>

### *property* AcousticPort.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Images"></a>

### *property* AcousticPort.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.InsideSurfaceBodiesLocation"></a>

### *property* AcousticPort.InsideSurfaceBodiesLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InsideSurfaceBodiesLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.InternalObject"></a>

### *property* AcousticPort.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortBehavior"></a>

### *property* AcousticPort.PortBehavior *: [Ansys.Mechanical.DataModel.Enums.PortBehavior](../../../../Mechanical/DataModel/Enums/PortBehavior.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PortBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortBehavior.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortNumber"></a>

### *property* AcousticPort.PortNumber *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PortNumber.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortPosition"></a>

### *property* AcousticPort.PortPosition *: [Ansys.Mechanical.DataModel.Enums.PortPosition](../../../../Mechanical/DataModel/Enums/PortPosition.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PortPosition) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortPosition.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PortSurfaceLocation"></a>

### *property* AcousticPort.PortSurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PortSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Properties"></a>

### *property* AcousticPort.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.ReadOnly"></a>

### *property* AcousticPort.ReadOnly *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.SharedRefBody"></a>

### *property* AcousticPort.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Suppressed"></a>

### *property* AcousticPort.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.VisibleProperties"></a>

### *property* AcousticPort.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticPort.Activate"></a>

### AcousticPort.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddComment"></a>

### AcousticPort.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddFigure"></a>

### AcousticPort.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.AddImage"></a>

### AcousticPort.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.CopyTo"></a>

### AcousticPort.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.CreateParameter"></a>

### AcousticPort.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Delete"></a>

### AcousticPort.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.Duplicate"></a>

### AcousticPort.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetChildren"></a>

### AcousticPort.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GetParameter"></a>

### AcousticPort.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GroupAllSimilarChildren"></a>

### AcousticPort.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.GroupSimilarObjects"></a>

### AcousticPort.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PromoteToNamedSelection"></a>

### AcousticPort.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PropertyByAPIName"></a>

### AcousticPort.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.PropertyByName"></a>

### AcousticPort.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticPort.RemoveParameter"></a>

### AcousticPort.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

