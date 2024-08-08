# `AcousticFreeSurface`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.AcousticFreeSurface

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AcousticFreeSurface.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#AcousticFreeSurface.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#AcousticFreeSurface.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AcousticFreeSurface.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AcousticFreeSurface.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AcousticFreeSurface.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AcousticFreeSurface.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AcousticFreeSurface.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AcousticFreeSurface.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AcousticFreeSurface.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AcousticFreeSurface.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AcousticFreeSurface.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AcousticFreeSurface.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AcousticFreeSurface.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AcousticFreeSurface.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AcousticFreeSurface.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Location`](#AcousticFreeSurface.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#AcousticFreeSurface.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#AcousticFreeSurface.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#AcousticFreeSurface.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#AcousticFreeSurface.Children)                               | Gets the list of children.                                    |
| [`Comments`](#AcousticFreeSurface.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#AcousticFreeSurface.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#AcousticFreeSurface.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#AcousticFreeSurface.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#AcousticFreeSurface.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#AcousticFreeSurface.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="AcousticFreeSurface.InternalObject"></a>

### *property* AcousticFreeSurface.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Location"></a>

### *property* AcousticFreeSurface.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.DataModelObjectCategory"></a>

### *property* AcousticFreeSurface.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Suppressed"></a>

### *property* AcousticFreeSurface.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.SharedRefBody"></a>

### *property* AcousticFreeSurface.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Children"></a>

### *property* AcousticFreeSurface.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Comments"></a>

### *property* AcousticFreeSurface.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Figures"></a>

### *property* AcousticFreeSurface.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Images"></a>

### *property* AcousticFreeSurface.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.ReadOnly"></a>

### *property* AcousticFreeSurface.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AcousticFreeSurface.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Properties"></a>

### *property* AcousticFreeSurface.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.VisibleProperties"></a>

### *property* AcousticFreeSurface.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AcousticFreeSurface.PromoteToNamedSelection"></a>

### AcousticFreeSurface.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Delete"></a>

### AcousticFreeSurface.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetChildren"></a>

### AcousticFreeSurface.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AcousticFreeSurface.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddComment"></a>

### AcousticFreeSurface.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddFigure"></a>

### AcousticFreeSurface.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.AddImage"></a>

### AcousticFreeSurface.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Activate"></a>

### AcousticFreeSurface.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CopyTo"></a>

### AcousticFreeSurface.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.Duplicate"></a>

### AcousticFreeSurface.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupAllSimilarChildren"></a>

### AcousticFreeSurface.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GroupSimilarObjects"></a>

### AcousticFreeSurface.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByName"></a>

### AcousticFreeSurface.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.PropertyByAPIName"></a>

### AcousticFreeSurface.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.CreateParameter"></a>

### AcousticFreeSurface.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.GetParameter"></a>

### AcousticFreeSurface.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AcousticFreeSurface.RemoveParameter"></a>

### AcousticFreeSurface.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

