# `NodalForce`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.BoundaryConditions.NodalForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a NodalDisplacement.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetActivateAtLoadStep`](#NodalForce.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#NodalForce.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#NodalForce.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#NodalForce.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#NodalForce.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#NodalForce.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                          | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#NodalForce.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#NodalForce.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#NodalForce.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#NodalForce.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#NodalForce.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#NodalForce.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#NodalForce.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#NodalForce.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#NodalForce.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#NodalForce.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#NodalForce.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#NodalForce.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#NodalForce.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|--------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`NumberOfSegments`](#NodalForce.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`LoadVectorNumber`](#NodalForce.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`XComponent`](#NodalForce.XComponent)                                   | Gets the XComponent.                                          |
| [`YComponent`](#NodalForce.YComponent)                                   | Gets the YComponent.                                          |
| [`ZComponent`](#NodalForce.ZComponent)                                   | Gets the ZComponent.                                          |
| [`HarmonicIndex`](#NodalForce.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](#NodalForce.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`RangeMaximum`](#NodalForce.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#NodalForce.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`PhaseAngle`](#NodalForce.PhaseAngle)                                   | Gets or sets the PhaseAngle.                                  |
| [`DynamicRelaxationBehavior`](#NodalForce.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                   |
| [`GraphControlsXAxis`](#NodalForce.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`LoadVectorAssignment`](#NodalForce.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`NonCyclicLoadingType`](#NodalForce.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](#NodalForce.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`DivideLoadByNodes`](#NodalForce.DivideLoadByNodes)                     | Gets or sets the DivideLoadByNodes.                           |
| [`CoordinateSystem`](#NodalForce.CoordinateSystem)                       | Gets the CoordinateSystem.                                    |
| [`XYZFunctionCoordinateSystem`](#NodalForce.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`Location`](#NodalForce.Location)                                       | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](#NodalForce.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#NodalForce.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#NodalForce.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Children`](#NodalForce.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#NodalForce.Comments)                                       | Gets the list of associated comments.                         |
| [`Figures`](#NodalForce.Figures)                                         | Gets the list of associated figures.                          |
| [`Images`](#NodalForce.Images)                                           | Gets the list of associated images.                           |
| [`ReadOnly`](#NodalForce.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                 | Gets the internal object. For advanced usage only.            |
| [`Properties`](#NodalForce.Properties)                                   | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#NodalForce.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="NodalForce.InternalObject"></a>

### *property* NodalForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.NumberOfSegments"></a>

### *property* NodalForce.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorNumber"></a>

### *property* NodalForce.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.XComponent"></a>

### *property* NodalForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.YComponent"></a>

### *property* NodalForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ZComponent"></a>

### *property* NodalForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.HarmonicIndex"></a>

### *property* NodalForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SectorNumber"></a>

### *property* NodalForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v241/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v241.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RangeMaximum"></a>

### *property* NodalForce.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RangeMinimum"></a>

### *property* NodalForce.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PhaseAngle"></a>

### *property* NodalForce.PhaseAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DynamicRelaxationBehavior"></a>

### *property* NodalForce.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GraphControlsXAxis"></a>

### *property* NodalForce.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.LoadVectorAssignment"></a>

### *property* NodalForce.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.NonCyclicLoadingType"></a>

### *property* NodalForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.IndependentVariable"></a>

### *property* NodalForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DivideLoadByNodes"></a>

### *property* NodalForce.DivideLoadByNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DivideLoadByNodes.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CoordinateSystem"></a>

### *property* NodalForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.XYZFunctionCoordinateSystem"></a>

### *property* NodalForce.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Location"></a>

### *property* NodalForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.DataModelObjectCategory"></a>

### *property* NodalForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Suppressed"></a>

### *property* NodalForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SharedRefBody"></a>

### *property* NodalForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Children"></a>

### *property* NodalForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Comments"></a>

### *property* NodalForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Figures"></a>

### *property* NodalForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Images"></a>

### *property* NodalForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.ReadOnly"></a>

### *property* NodalForce.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* NodalForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Properties"></a>

### *property* NodalForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.VisibleProperties"></a>

### *property* NodalForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NodalForce.GetActivateAtLoadStep"></a>

### NodalForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SetActivateAtLoadStep"></a>

### NodalForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetComponentActivateAtLoadStep"></a>

### NodalForce.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.SetComponentActivateAtLoadStep"></a>

### NodalForce.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PromoteToNamedSelection"></a>

### NodalForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Delete"></a>

### NodalForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetChildren"></a>

### NodalForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### NodalForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddComment"></a>

### NodalForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddFigure"></a>

### NodalForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.AddImage"></a>

### NodalForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Activate"></a>

### NodalForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CopyTo"></a>

### NodalForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.Duplicate"></a>

### NodalForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GroupAllSimilarChildren"></a>

### NodalForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GroupSimilarObjects"></a>

### NodalForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PropertyByName"></a>

### NodalForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.PropertyByAPIName"></a>

### NodalForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.CreateParameter"></a>

### NodalForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.GetParameter"></a>

### NodalForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NodalForce.RemoveParameter"></a>

### NodalForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

