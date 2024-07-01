<!-- vale off -->

<a id="acousticfarfieldradationsurface"></a>

# `AcousticFarFieldRadationSurface`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFarFieldRadationSurface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFarFieldRadationSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticFarFieldRadationSurface.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticFarFieldRadationSurface.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                                   | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFarFieldRadationSurface.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFarFieldRadationSurface.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFarFieldRadationSurface.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFarFieldRadationSurface.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFarFieldRadationSurface.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFarFieldRadationSurface.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFarFieldRadationSurface.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFarFieldRadationSurface.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFarFieldRadationSurface.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFarFieldRadationSurface.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticFarFieldRadationSurface.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticFarFieldRadationSurface.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFarFieldRadationSurface.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                      | Gets the internal object. For advanced usage only.            |
| [`EquivalentSurfaceLocation`](#AcousticFarFieldRadationSurface.EquivalentSurfaceLocation)     | Gets or sets the EquivalentSurfaceLocation.                   |
| [`InsideSurfaceBodiesLocation`](#AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation) | Gets or sets the InsideSurfaceBodiesLocation.                 |
| [`DataModelObjectCategory`](#AcousticFarFieldRadationSurface.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#AcousticFarFieldRadationSurface.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticFarFieldRadationSurface.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticFarFieldRadationSurface.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#AcousticFarFieldRadationSurface.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](#AcousticFarFieldRadationSurface.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#AcousticFarFieldRadationSurface.Images)                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticFarFieldRadationSurface.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                      | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticFarFieldRadationSurface.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticFarFieldRadationSurface.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFarFieldRadationSurface.InternalObject"></a>

### *property* AcousticFarFieldRadationSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.EquivalentSurfaceLocation"></a>

### *property* AcousticFarFieldRadationSurface.EquivalentSurfaceLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the EquivalentSurfaceLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation"></a>

### *property* AcousticFarFieldRadationSurface.InsideSurfaceBodiesLocation *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InsideSurfaceBodiesLocation.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.DataModelObjectCategory"></a>

### *property* AcousticFarFieldRadationSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Suppressed"></a>

### *property* AcousticFarFieldRadationSurface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.SharedRefBody"></a>

### *property* AcousticFarFieldRadationSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Children"></a>

### *property* AcousticFarFieldRadationSurface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Comments"></a>

### *property* AcousticFarFieldRadationSurface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Figures"></a>

### *property* AcousticFarFieldRadationSurface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Images"></a>

### *property* AcousticFarFieldRadationSurface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.ReadOnly"></a>

### *property* AcousticFarFieldRadationSurface.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFarFieldRadationSurface.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Properties"></a>

### *property* AcousticFarFieldRadationSurface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.VisibleProperties"></a>

### *property* AcousticFarFieldRadationSurface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFarFieldRadationSurface.PromoteToNamedSelection"></a>

### AcousticFarFieldRadationSurface.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Delete"></a>

### AcousticFarFieldRadationSurface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetChildren"></a>

### AcousticFarFieldRadationSurface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFarFieldRadationSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddComment"></a>

### AcousticFarFieldRadationSurface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddFigure"></a>

### AcousticFarFieldRadationSurface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.AddImage"></a>

### AcousticFarFieldRadationSurface.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Activate"></a>

### AcousticFarFieldRadationSurface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.CopyTo"></a>

### AcousticFarFieldRadationSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.Duplicate"></a>

### AcousticFarFieldRadationSurface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GroupAllSimilarChildren"></a>

### AcousticFarFieldRadationSurface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GroupSimilarObjects"></a>

### AcousticFarFieldRadationSurface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PropertyByName"></a>

### AcousticFarFieldRadationSurface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.PropertyByAPIName"></a>

### AcousticFarFieldRadationSurface.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.CreateParameter"></a>

### AcousticFarFieldRadationSurface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.GetParameter"></a>

### AcousticFarFieldRadationSurface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFarFieldRadationSurface.RemoveParameter"></a>

### AcousticFarFieldRadationSurface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
