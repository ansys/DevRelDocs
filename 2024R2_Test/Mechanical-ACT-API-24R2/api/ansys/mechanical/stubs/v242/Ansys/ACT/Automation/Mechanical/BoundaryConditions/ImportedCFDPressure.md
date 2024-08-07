# `ImportedCFDPressure`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.ImportedCFDPressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCFDPressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToNamedSelection`](#ImportedCFDPressure.PromoteToNamedSelection)   | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#ImportedCFDPressure.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                       | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ImportedCFDPressure.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCFDPressure.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCFDPressure.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#ImportedCFDPressure.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#ImportedCFDPressure.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ImportedCFDPressure.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ImportedCFDPressure.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCFDPressure.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ImportedCFDPressure.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ImportedCFDPressure.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#ImportedCFDPressure.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ImportedCFDPressure.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ImportedCFDPressure.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`CFDPressureFile`](#ImportedCFDPressure.CFDPressureFile)                 | Gets or sets the CFDPressureFile.                             |
| [`Location`](#ImportedCFDPressure.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#ImportedCFDPressure.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#ImportedCFDPressure.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#ImportedCFDPressure.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#ImportedCFDPressure.Children)                               | Gets the list of children.                                    |
| [`Comments`](#ImportedCFDPressure.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#ImportedCFDPressure.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#ImportedCFDPressure.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#ImportedCFDPressure.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ImportedCFDPressure.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ImportedCFDPressure.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCFDPressure.InternalObject"></a>

### *property* ImportedCFDPressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CFDPressureFile"></a>

### *property* ImportedCFDPressure.CFDPressureFile *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CFDPressureFile.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Location"></a>

### *property* ImportedCFDPressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.DataModelObjectCategory"></a>

### *property* ImportedCFDPressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Suppressed"></a>

### *property* ImportedCFDPressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.SharedRefBody"></a>

### *property* ImportedCFDPressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Children"></a>

### *property* ImportedCFDPressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Comments"></a>

### *property* ImportedCFDPressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Figures"></a>

### *property* ImportedCFDPressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Images"></a>

### *property* ImportedCFDPressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.ReadOnly"></a>

### *property* ImportedCFDPressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ImportedCFDPressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Properties"></a>

### *property* ImportedCFDPressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.VisibleProperties"></a>

### *property* ImportedCFDPressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCFDPressure.PromoteToNamedSelection"></a>

### ImportedCFDPressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Delete"></a>

### ImportedCFDPressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetChildren"></a>

### ImportedCFDPressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ImportedCFDPressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddComment"></a>

### ImportedCFDPressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddFigure"></a>

### ImportedCFDPressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.AddImage"></a>

### ImportedCFDPressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Activate"></a>

### ImportedCFDPressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CopyTo"></a>

### ImportedCFDPressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.Duplicate"></a>

### ImportedCFDPressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupAllSimilarChildren"></a>

### ImportedCFDPressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GroupSimilarObjects"></a>

### ImportedCFDPressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByName"></a>

### ImportedCFDPressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.PropertyByAPIName"></a>

### ImportedCFDPressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.CreateParameter"></a>

### ImportedCFDPressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.GetParameter"></a>

### ImportedCFDPressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCFDPressure.RemoveParameter"></a>

### ImportedCFDPressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

