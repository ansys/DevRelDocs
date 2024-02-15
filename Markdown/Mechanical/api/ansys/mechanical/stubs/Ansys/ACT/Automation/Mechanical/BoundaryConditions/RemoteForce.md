# RemoteForce

### *class* RemoteForce

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a RemoteForce.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`PromoteToRemotePoint`](#RemoteForce.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
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

| [`Direction`](#RemoteForce.Direction)                                                                                  | Gets or sets the Direction.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
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

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import RemoteForce
```

## Property detail

### *property* RemoteForce.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.XCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.YCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.ZCoordinate *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZCoordinate.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#LoadingApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.FollowerLoad *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FollowerLoad.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* RemoteForce.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### RemoteForce.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteForce.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteForce.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### RemoteForce.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### RemoteForce.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### RemoteForce.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### RemoteForce.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### RemoteForce.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### RemoteForce.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### RemoteForce.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### RemoteForce.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### RemoteForce.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### RemoteForce.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### RemoteForce.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### RemoteForce.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### RemoteForce.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
