# RemoteForce

<a id="RemoteForce"></a>

### *class* RemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RemoteForce.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`PromoteToRemotePoint`](#RemoteForce.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
| [`GetActivateAtLoadStep`](#RemoteForce.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`SetActivateAtLoadStep`](#RemoteForce.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#RemoteForce.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#RemoteForce.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToNamedSelection`](#RemoteForce.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#RemoteForce.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                           | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#RemoteForce.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#RemoteForce.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#RemoteForce.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#RemoteForce.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#RemoteForce.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#RemoteForce.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#RemoteForce.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#RemoteForce.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#RemoteForce.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#RemoteForce.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#RemoteForce.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#RemoteForce.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#RemoteForce.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#RemoteForce.Direction)                                                                                  | Gets or sets the Direction.                                   |
| [`StepSelection`](#RemoteForce.StepSelection)                                                                          | Gets or sets the StepSelection.                               |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`BeamMaterial`](#RemoteForce.BeamMaterial)                                                                            | Gets or sets the BeamMaterial.                                |
| [`NumberOfSegments`](#RemoteForce.NumberOfSegments)                                                                    | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#RemoteForce.XComponent)                                                                                | Gets the XComponent.                                          |
| [`XComponentImag`](#RemoteForce.XComponentImag)                                                                        | Gets the XComponentImag.                                      |
| [`YComponent`](#RemoteForce.YComponent)                                                                                | Gets the YComponent.                                          |
| [`YComponentImag`](#RemoteForce.YComponentImag)                                                                        | Gets the YComponentImag.                                      |
| [`ZComponent`](#RemoteForce.ZComponent)                                                                                | Gets the ZComponent.                                          |
| [`ZComponentImag`](#RemoteForce.ZComponentImag)                                                                        | Gets the ZComponentImag.                                      |
| [`HarmonicIndex`](#RemoteForce.HarmonicIndex)                                                                          | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](#RemoteForce.SectorNumber)                                                                            | Gets or sets the SectorNumber.                                |
| [`Magnitude`](#RemoteForce.Magnitude)                                                                                  | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#RemoteForce.MagnitudeImag)                                                                          | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](#RemoteForce.PhaseAngle)                                                                                | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](#RemoteForce.XPhaseAngle)                                                                              | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](#RemoteForce.YPhaseAngle)                                                                              | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](#RemoteForce.ZPhaseAngle)                                                                              | Gets the ZPhaseAngle.                                         |
| [`BeamRadius`](#RemoteForce.BeamRadius)                                                                                | Gets or sets the BeamRadius.                                  |
| [`XCoordinate`](#RemoteForce.XCoordinate)                                                                              | Gets or sets the XCoordinate.                                 |
| [`YCoordinate`](#RemoteForce.YCoordinate)                                                                              | Gets or sets the YCoordinate.                                 |
| [`ZCoordinate`](#RemoteForce.ZCoordinate)                                                                              | Gets or sets the ZCoordinate.                                 |
| [`PinballRegion`](#RemoteForce.PinballRegion)                                                                          | Gets or sets the PinballRegion.                               |
| [`RpmSelection`](#RemoteForce.RpmSelection)                                                                            | Gets or sets the RpmSelection.                                |
| [`Behavior`](#RemoteForce.Behavior)                                                                                    | Gets or sets the Behavior.                                    |
| [`DefineBy`](#RemoteForce.DefineBy)                                                                                    | Gets or sets the DefineBy.                                    |
| [`LoadingApplicationType`](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#LoadingApplicationType)    | Gets or sets the LoadingApplicationType.                      |
| [`StepVarying`](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying)                                     | Gets or sets the StepVarying.                                 |
| [`NonCyclicLoadingType`](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType)          | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](#RemoteForce.IndependentVariable)                                                              | Gets or sets the IndependentVariable.                         |
| [`FollowerLoad`](#RemoteForce.FollowerLoad)                                                                            | Gets or sets the FollowerLoad.                                |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`Location`](#RemoteForce.Location)                                                                                    | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#RemoteForce.Suppressed)                                                                                | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#RemoteForce.SharedRefBody)                                                                          | Gets or sets the SharedRefBody.                               |
| [`Children`](#RemoteForce.Children)                                                                                    | Gets the list of children.                                    |
| [`Comments`](#RemoteForce.Comments)                                                                                    | Gets the list of associated comments.                         |
| [`Figures`](#RemoteForce.Figures)                                                                                      | Gets the list of associated figures.                          |
| [`Images`](#RemoteForce.Images)                                                                                        | Gets the list of associated images.                           |
| [`ReadOnly`](#RemoteForce.ReadOnly)                                                                                    | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#RemoteForce.Properties)                                                                                | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#RemoteForce.VisibleProperties)                                                                  | Gets the list of properties that are visible for this object. |

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RemoteForce
```

<a id="property-detail"></a>

## Property detail

<a id="RemoteForce.Direction"></a>

### *property* RemoteForce.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.StepSelection"></a>

### *property* RemoteForce.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.InternalObject"></a>

### *property* RemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.BeamMaterial"></a>

### *property* RemoteForce.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.NumberOfSegments"></a>

### *property* RemoteForce.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XComponent"></a>

### *property* RemoteForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XComponentImag"></a>

### *property* RemoteForce.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YComponent"></a>

### *property* RemoteForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YComponentImag"></a>

### *property* RemoteForce.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZComponent"></a>

### *property* RemoteForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZComponentImag"></a>

### *property* RemoteForce.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.HarmonicIndex"></a>

### *property* RemoteForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SectorNumber"></a>

### *property* RemoteForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Magnitude"></a>

### *property* RemoteForce.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.MagnitudeImag"></a>

### *property* RemoteForce.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PhaseAngle"></a>

### *property* RemoteForce.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XPhaseAngle"></a>

### *property* RemoteForce.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YPhaseAngle"></a>

### *property* RemoteForce.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZPhaseAngle"></a>

### *property* RemoteForce.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.BeamRadius"></a>

### *property* RemoteForce.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.XCoordinate"></a>

### *property* RemoteForce.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.YCoordinate"></a>

### *property* RemoteForce.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ZCoordinate"></a>

### *property* RemoteForce.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PinballRegion"></a>

### *property* RemoteForce.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RpmSelection"></a>

### *property* RemoteForce.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Behavior"></a>

### *property* RemoteForce.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.DefineBy"></a>

### *property* RemoteForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.LoadingApplicationType"></a>

### *property* RemoteForce.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#LoadingApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.StepVarying"></a>

### *property* RemoteForce.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.NonCyclicLoadingType"></a>

### *property* RemoteForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.IndependentVariable"></a>

### *property* RemoteForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.FollowerLoad"></a>

### *property* RemoteForce.FollowerLoad *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FollowerLoad.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CoordinateSystem"></a>

### *property* RemoteForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Location"></a>

### *property* RemoteForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.DataModelObjectCategory"></a>

### *property* RemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Suppressed"></a>

### *property* RemoteForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SharedRefBody"></a>

### *property* RemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Children"></a>

### *property* RemoteForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Comments"></a>

### *property* RemoteForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Figures"></a>

### *property* RemoteForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Images"></a>

### *property* RemoteForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.ReadOnly"></a>

### *property* RemoteForce.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* RemoteForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Properties"></a>

### *property* RemoteForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.VisibleProperties"></a>

### *property* RemoteForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="RemoteForce.PromoteToRemotePoint"></a>

### RemoteForce.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetActivateAtLoadStep"></a>

### RemoteForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SetActivateAtLoadStep"></a>

### RemoteForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetComponentActivateAtLoadStep"></a>

### RemoteForce.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.SetComponentActivateAtLoadStep"></a>

### RemoteForce.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PromoteToNamedSelection"></a>

### RemoteForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Delete"></a>

### RemoteForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetChildren"></a>

### RemoteForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### RemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddComment"></a>

### RemoteForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddFigure"></a>

### RemoteForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.AddImage"></a>

### RemoteForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Activate"></a>

### RemoteForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CopyTo"></a>

### RemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.Duplicate"></a>

### RemoteForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GroupAllSimilarChildren"></a>

### RemoteForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GroupSimilarObjects"></a>

### RemoteForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PropertyByName"></a>

### RemoteForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.PropertyByAPIName"></a>

### RemoteForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.CreateParameter"></a>

### RemoteForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.GetParameter"></a>

### RemoteForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="RemoteForce.RemoveParameter"></a>

### RemoteForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
