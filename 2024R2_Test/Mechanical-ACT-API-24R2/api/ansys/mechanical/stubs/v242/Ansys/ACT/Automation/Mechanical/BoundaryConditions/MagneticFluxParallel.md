# `MagneticFluxParallel`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.MagneticFluxParallel

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a MagneticFluxParallel.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#MagneticFluxParallel.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#MagneticFluxParallel.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MagneticFluxParallel.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#MagneticFluxParallel.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#MagneticFluxParallel.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#MagneticFluxParallel.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#MagneticFluxParallel.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MagneticFluxParallel.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MagneticFluxParallel.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MagneticFluxParallel.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MagneticFluxParallel.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MagneticFluxParallel.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#MagneticFluxParallel.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MagneticFluxParallel.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MagneticFluxParallel.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Location`](#MagneticFluxParallel.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#MagneticFluxParallel.DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#MagneticFluxParallel.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#MagneticFluxParallel.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#MagneticFluxParallel.Children)                               | Gets the list of children.                                    |
| [`Comments`](#MagneticFluxParallel.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#MagneticFluxParallel.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#MagneticFluxParallel.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#MagneticFluxParallel.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#MagneticFluxParallel.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#MagneticFluxParallel.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MagneticFluxParallel.InternalObject"></a>

### *property* MagneticFluxParallel.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Location"></a>

### *property* MagneticFluxParallel.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.DataModelObjectCategory"></a>

### *property* MagneticFluxParallel.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Suppressed"></a>

### *property* MagneticFluxParallel.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.SharedRefBody"></a>

### *property* MagneticFluxParallel.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Children"></a>

### *property* MagneticFluxParallel.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Comments"></a>

### *property* MagneticFluxParallel.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Figures"></a>

### *property* MagneticFluxParallel.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Images"></a>

### *property* MagneticFluxParallel.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.ReadOnly"></a>

### *property* MagneticFluxParallel.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MagneticFluxParallel.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Properties"></a>

### *property* MagneticFluxParallel.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.VisibleProperties"></a>

### *property* MagneticFluxParallel.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MagneticFluxParallel.PromoteToNamedSelection"></a>

### MagneticFluxParallel.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Delete"></a>

### MagneticFluxParallel.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetChildren"></a>

### MagneticFluxParallel.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MagneticFluxParallel.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddComment"></a>

### MagneticFluxParallel.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddFigure"></a>

### MagneticFluxParallel.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.AddImage"></a>

### MagneticFluxParallel.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Activate"></a>

### MagneticFluxParallel.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CopyTo"></a>

### MagneticFluxParallel.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.Duplicate"></a>

### MagneticFluxParallel.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupAllSimilarChildren"></a>

### MagneticFluxParallel.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GroupSimilarObjects"></a>

### MagneticFluxParallel.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByName"></a>

### MagneticFluxParallel.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.PropertyByAPIName"></a>

### MagneticFluxParallel.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.CreateParameter"></a>

### MagneticFluxParallel.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.GetParameter"></a>

### MagneticFluxParallel.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MagneticFluxParallel.RemoveParameter"></a>

### MagneticFluxParallel.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

