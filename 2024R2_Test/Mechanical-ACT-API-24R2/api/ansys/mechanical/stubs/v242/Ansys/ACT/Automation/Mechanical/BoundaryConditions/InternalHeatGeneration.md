# `InternalHeatGeneration`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.InternalHeatGeneration

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InternalHeatGeneration.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#InternalHeatGeneration.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#InternalHeatGeneration.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#InternalHeatGeneration.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#InternalHeatGeneration.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                        | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InternalHeatGeneration.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InternalHeatGeneration.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InternalHeatGeneration.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InternalHeatGeneration.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InternalHeatGeneration.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InternalHeatGeneration.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InternalHeatGeneration.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InternalHeatGeneration.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InternalHeatGeneration.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InternalHeatGeneration.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InternalHeatGeneration.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InternalHeatGeneration.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InternalHeatGeneration.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#InternalHeatGeneration.NumberOfSegments)               | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#InternalHeatGeneration.Magnitude)                             | Gets the Magnitude.                                           |
| [`Location`](#InternalHeatGeneration.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#InternalHeatGeneration.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#InternalHeatGeneration.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#InternalHeatGeneration.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#InternalHeatGeneration.Children)                               | Gets the list of children.                                    |
| [`Comments`](#InternalHeatGeneration.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#InternalHeatGeneration.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#InternalHeatGeneration.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#InternalHeatGeneration.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                     | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InternalHeatGeneration.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InternalHeatGeneration.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="InternalHeatGeneration.InternalObject"></a>

### *property* InternalHeatGeneration.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.NumberOfSegments"></a>

### *property* InternalHeatGeneration.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Magnitude"></a>

### *property* InternalHeatGeneration.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Location"></a>

### *property* InternalHeatGeneration.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.DataModelObjectCategory"></a>

### *property* InternalHeatGeneration.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Suppressed"></a>

### *property* InternalHeatGeneration.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SharedRefBody"></a>

### *property* InternalHeatGeneration.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Children"></a>

### *property* InternalHeatGeneration.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Comments"></a>

### *property* InternalHeatGeneration.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Figures"></a>

### *property* InternalHeatGeneration.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Images"></a>

### *property* InternalHeatGeneration.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.ReadOnly"></a>

### *property* InternalHeatGeneration.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* InternalHeatGeneration.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Properties"></a>

### *property* InternalHeatGeneration.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.VisibleProperties"></a>

### *property* InternalHeatGeneration.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InternalHeatGeneration.GetActivateAtLoadStep"></a>

### InternalHeatGeneration.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.SetActivateAtLoadStep"></a>

### InternalHeatGeneration.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PromoteToNamedSelection"></a>

### InternalHeatGeneration.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Delete"></a>

### InternalHeatGeneration.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetChildren"></a>

### InternalHeatGeneration.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### InternalHeatGeneration.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddComment"></a>

### InternalHeatGeneration.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddFigure"></a>

### InternalHeatGeneration.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.AddImage"></a>

### InternalHeatGeneration.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Activate"></a>

### InternalHeatGeneration.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CopyTo"></a>

### InternalHeatGeneration.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.Duplicate"></a>

### InternalHeatGeneration.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupAllSimilarChildren"></a>

### InternalHeatGeneration.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GroupSimilarObjects"></a>

### InternalHeatGeneration.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByName"></a>

### InternalHeatGeneration.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.PropertyByAPIName"></a>

### InternalHeatGeneration.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.CreateParameter"></a>

### InternalHeatGeneration.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.GetParameter"></a>

### InternalHeatGeneration.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InternalHeatGeneration.RemoveParameter"></a>

### InternalHeatGeneration.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

