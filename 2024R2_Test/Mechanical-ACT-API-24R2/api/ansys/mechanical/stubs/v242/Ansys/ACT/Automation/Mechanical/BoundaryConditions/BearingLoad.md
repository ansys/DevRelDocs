# `BearingLoad`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.BearingLoad

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a BearingLoad.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#BearingLoad.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#BearingLoad.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#BearingLoad.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#BearingLoad.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#BearingLoad.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#BearingLoad.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#BearingLoad.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#BearingLoad.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#BearingLoad.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#BearingLoad.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#BearingLoad.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#BearingLoad.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#BearingLoad.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#BearingLoad.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#BearingLoad.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#BearingLoad.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#BearingLoad.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#BearingLoad.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#BearingLoad.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#BearingLoad.Direction)                             | Gets or sets the Direction.                                   |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`XComponent`](#BearingLoad.XComponent)                           | Gets the XComponent.                                          |
| [`YComponent`](#BearingLoad.YComponent)                           | Gets the YComponent.                                          |
| [`ZComponent`](#BearingLoad.ZComponent)                           | Gets the ZComponent.                                          |
| [`Magnitude`](#BearingLoad.Magnitude)                             | Gets the Magnitude.                                           |
| [`DefineBy`](#BearingLoad.DefineBy)                               | Gets or sets the DefineBy.                                    |
| [`CoordinateSystem`](#BearingLoad.CoordinateSystem)               | Gets or sets the CoordinateSystem.                            |
| [`Location`](#BearingLoad.Location)                               | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#BearingLoad.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`Suppressed`](#BearingLoad.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#BearingLoad.SharedRefBody)                     | Gets or sets the SharedRefBody.                               |
| [`Children`](#BearingLoad.Children)                               | Gets the list of children.                                    |
| [`Comments`](#BearingLoad.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](#BearingLoad.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](#BearingLoad.Images)                                   | Gets the list of associated images.                           |
| [`ReadOnly`](#BearingLoad.ReadOnly)                               | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](#BearingLoad.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#BearingLoad.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="BearingLoad.Direction"></a>

### *property* BearingLoad.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.InternalObject"></a>

### *property* BearingLoad.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.XComponent"></a>

### *property* BearingLoad.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.YComponent"></a>

### *property* BearingLoad.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ZComponent"></a>

### *property* BearingLoad.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Magnitude"></a>

### *property* BearingLoad.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DefineBy"></a>

### *property* BearingLoad.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CoordinateSystem"></a>

### *property* BearingLoad.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Location"></a>

### *property* BearingLoad.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.DataModelObjectCategory"></a>

### *property* BearingLoad.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Suppressed"></a>

### *property* BearingLoad.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SharedRefBody"></a>

### *property* BearingLoad.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Children"></a>

### *property* BearingLoad.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Comments"></a>

### *property* BearingLoad.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Figures"></a>

### *property* BearingLoad.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Images"></a>

### *property* BearingLoad.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.ReadOnly"></a>

### *property* BearingLoad.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* BearingLoad.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Properties"></a>

### *property* BearingLoad.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.VisibleProperties"></a>

### *property* BearingLoad.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="BearingLoad.GetActivateAtLoadStep"></a>

### BearingLoad.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetActivateAtLoadStep"></a>

### BearingLoad.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetComponentActivateAtLoadStep"></a>

### BearingLoad.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.SetComponentActivateAtLoadStep"></a>

### BearingLoad.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PromoteToNamedSelection"></a>

### BearingLoad.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Delete"></a>

### BearingLoad.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetChildren"></a>

### BearingLoad.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### BearingLoad.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddComment"></a>

### BearingLoad.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddFigure"></a>

### BearingLoad.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.AddImage"></a>

### BearingLoad.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Activate"></a>

### BearingLoad.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CopyTo"></a>

### BearingLoad.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.Duplicate"></a>

### BearingLoad.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupAllSimilarChildren"></a>

### BearingLoad.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GroupSimilarObjects"></a>

### BearingLoad.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByName"></a>

### BearingLoad.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.PropertyByAPIName"></a>

### BearingLoad.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.CreateParameter"></a>

### BearingLoad.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.GetParameter"></a>

### BearingLoad.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="BearingLoad.RemoveParameter"></a>

### BearingLoad.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

