# `LinePressure`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure"></a>

#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.LinePressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a LinePressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#LinePressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#LinePressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#LinePressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#LinePressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#LinePressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#LinePressure.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                            | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#LinePressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#LinePressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#LinePressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#LinePressure.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#LinePressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#LinePressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#LinePressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#LinePressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#LinePressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#LinePressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#LinePressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#LinePressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#LinePressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#LinePressure.Direction)                                     | Gets or sets the Direction.                                   |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#LinePressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#LinePressure.XComponent)                                   | Gets the XComponent.                                          |
| [`YComponent`](#LinePressure.YComponent)                                   | Gets the YComponent.                                          |
| [`ZComponent`](#LinePressure.ZComponent)                                   | Gets the ZComponent.                                          |
| [`Magnitude`](#LinePressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`RangeMaximum`](#LinePressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#LinePressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#LinePressure.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                  |
| [`DefineBy`](#LinePressure.DefineBy)                                       | Gets or sets the DefineBy.                                    |
| [`GraphControlsXAxis`](#LinePressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`IndependentVariable`](#LinePressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](#LinePressure.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`XYZFunctionCoordinateSystem`](#LinePressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#LinePressure.Location)                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#LinePressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#LinePressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#LinePressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Children`](#LinePressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#LinePressure.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](#LinePressure.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#LinePressure.Images)                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#LinePressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                   | Gets the internal object. For advanced usage only.            |
| [`Properties`](#LinePressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#LinePressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="LinePressure.Direction"></a>

### *property* LinePressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.InternalObject"></a>

### *property* LinePressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.NumberOfSegments"></a>

### *property* LinePressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XComponent"></a>

### *property* LinePressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.YComponent"></a>

### *property* LinePressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ZComponent"></a>

### *property* LinePressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Magnitude"></a>

### *property* LinePressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMaximum"></a>

### *property* LinePressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RangeMinimum"></a>

### *property* LinePressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PhaseAngle"></a>

### *property* LinePressure.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DefineBy"></a>

### *property* LinePressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GraphControlsXAxis"></a>

### *property* LinePressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.IndependentVariable"></a>

### *property* LinePressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CoordinateSystem"></a>

### *property* LinePressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.XYZFunctionCoordinateSystem"></a>

### *property* LinePressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Location"></a>

### *property* LinePressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.DataModelObjectCategory"></a>

### *property* LinePressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Suppressed"></a>

### *property* LinePressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SharedRefBody"></a>

### *property* LinePressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Children"></a>

### *property* LinePressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Comments"></a>

### *property* LinePressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Figures"></a>

### *property* LinePressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Images"></a>

### *property* LinePressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.ReadOnly"></a>

### *property* LinePressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* LinePressure.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Properties"></a>

### *property* LinePressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.VisibleProperties"></a>

### *property* LinePressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="LinePressure.GetActivateAtLoadStep"></a>

### LinePressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetActivateAtLoadStep"></a>

### LinePressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetComponentActivateAtLoadStep"></a>

### LinePressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.SetComponentActivateAtLoadStep"></a>

### LinePressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PromoteToNamedSelection"></a>

### LinePressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Delete"></a>

### LinePressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetChildren"></a>

### LinePressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### LinePressure.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddComment"></a>

### LinePressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddFigure"></a>

### LinePressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.AddImage"></a>

### LinePressure.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Activate"></a>

### LinePressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CopyTo"></a>

### LinePressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.Duplicate"></a>

### LinePressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupAllSimilarChildren"></a>

### LinePressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GroupSimilarObjects"></a>

### LinePressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByName"></a>

### LinePressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.PropertyByAPIName"></a>

### LinePressure.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.CreateParameter"></a>

### LinePressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.GetParameter"></a>

### LinePressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="LinePressure.RemoveParameter"></a>

### LinePressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

