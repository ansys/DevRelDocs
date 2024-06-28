<!-- vale off -->

<a id="temperature"></a>

# `Temperature`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Temperature

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Temperature.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#Temperature.GetActivateAtLoadStep)     | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#Temperature.SetActivateAtLoadStep)     | SetActivateAtLoadStep method.                                                     |
| [`PromoteToNamedSelection`](#Temperature.PromoteToNamedSelection) | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Temperature.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Temperature.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#Temperature.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#Temperature.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#Temperature.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#Temperature.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Temperature.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Temperature.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Temperature.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Temperature.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Temperature.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#Temperature.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Temperature.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Temperature.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#Temperature.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`Magnitude`](#Temperature.Magnitude)                                     | Gets the Magnitude.                                           |
| [`RangeMaximum`](#Temperature.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Temperature.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`DefineBy`](#Temperature.DefineBy)                                       | Gets the DefineBy.                                            |
| [`GraphControlsXAxis`](#Temperature.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`ShellFace`](#Temperature.ShellFace)                                     | Gets or sets the ShellFace.                                   |
| [`IndependentVariable`](#Temperature.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`ApplyToEntireBody`](#Temperature.ApplyToEntireBody)                     | Gets or sets the ApplyToEntireBody.                           |
| [`XYZFunctionCoordinateSystem`](#Temperature.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`TableAssignment`](#Temperature.TableAssignment)                         | Gets or sets the TableAssignment.                             |
| [`Location`](#Temperature.Location)                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#Temperature.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Temperature.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Temperature.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Children`](#Temperature.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#Temperature.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](#Temperature.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#Temperature.Images)                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#Temperature.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                  | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Temperature.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Temperature.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Temperature.InternalObject"></a>

### *property* Temperature.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.NumberOfSegments"></a>

### *property* Temperature.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Magnitude"></a>

### *property* Temperature.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMaximum"></a>

### *property* Temperature.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RangeMinimum"></a>

### *property* Temperature.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DefineBy"></a>

### *property* Temperature.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GraphControlsXAxis"></a>

### *property* Temperature.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ShellFace"></a>

### *property* Temperature.ShellFace *: [Ansys.Mechanical.DataModel.Enums.ShellFaceType](../../../../Mechanical/DataModel/Enums/ShellFaceType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellFaceType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ShellFace.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.IndependentVariable"></a>

### *property* Temperature.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ApplyToEntireBody"></a>

### *property* Temperature.ApplyToEntireBody *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ApplyToEntireBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.XYZFunctionCoordinateSystem"></a>

### *property* Temperature.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.TableAssignment"></a>

### *property* Temperature.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../Table.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Location"></a>

### *property* Temperature.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.DataModelObjectCategory"></a>

### *property* Temperature.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Suppressed"></a>

### *property* Temperature.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SharedRefBody"></a>

### *property* Temperature.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Children"></a>

### *property* Temperature.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Comments"></a>

### *property* Temperature.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Figures"></a>

### *property* Temperature.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Images"></a>

### *property* Temperature.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.ReadOnly"></a>

### *property* Temperature.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* Temperature.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Properties"></a>

### *property* Temperature.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.VisibleProperties"></a>

### *property* Temperature.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Temperature.GetActivateAtLoadStep"></a>

### Temperature.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.SetActivateAtLoadStep"></a>

### Temperature.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PromoteToNamedSelection"></a>

### Temperature.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Delete"></a>

### Temperature.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetChildren"></a>

### Temperature.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### Temperature.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddComment"></a>

### Temperature.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddFigure"></a>

### Temperature.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.AddImage"></a>

### Temperature.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Activate"></a>

### Temperature.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CopyTo"></a>

### Temperature.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.Duplicate"></a>

### Temperature.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupAllSimilarChildren"></a>

### Temperature.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GroupSimilarObjects"></a>

### Temperature.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByName"></a>

### Temperature.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.PropertyByAPIName"></a>

### Temperature.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.CreateParameter"></a>

### Temperature.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.GetParameter"></a>

### Temperature.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Temperature.RemoveParameter"></a>

### Temperature.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
<!-- vale on -->
