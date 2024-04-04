# Moment

### *class* Moment

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a Moment.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetActivateAtLoadStep`](#Moment.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`SetActivateAtLoadStep`](#Moment.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`GetComponentActivateAtLoadStep`](#Moment.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`SetComponentActivateAtLoadStep`](#Moment.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |
| [`PromoteToRemotePoint`](#Moment.PromoteToRemotePoint)                     | Run the PromoteToRemotePoint action.                                              |
| [`PromoteToNamedSelection`](#Moment.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`Delete`](#Moment.Delete)                                                 | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                      | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#Moment.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Moment.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Moment.AddImage)                                             | Creates a new child Image.                                                        |
| [`Activate`](#Moment.Activate)                                             | Activate the current object.                                                      |
| [`CopyTo`](#Moment.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#Moment.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#Moment.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Moment.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#Moment.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#Moment.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`CreateParameter`](#Moment.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#Moment.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#Moment.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Direction`](#Moment.Direction)                                                                                       | Gets or sets the Direction.                                   |
|------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`RemotePoint`](../RemotePoint.md#RemotePoint)                                                                         | Gets the remote point associated to the point mass.           |
| [`Location`](#Moment.Location)                                                                                         | Gets or sets the Geometry.                                    |
| [`StepSelection`](#Moment.StepSelection)                                                                               | Gets or sets the StepSelection.                               |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`BeamMaterial`](#Moment.BeamMaterial)                                                                                 | Gets or sets the BeamMaterial.                                |
| [`NumberOfSegments`](#Moment.NumberOfSegments)                                                                         | Gets or sets the NumberOfSegments.                            |
| [`XComponent`](#Moment.XComponent)                                                                                     | Gets the XComponent.                                          |
| [`XComponentImag`](#Moment.XComponentImag)                                                                             | Gets the XComponentImag.                                      |
| [`YComponent`](#Moment.YComponent)                                                                                     | Gets the YComponent.                                          |
| [`YComponentImag`](#Moment.YComponentImag)                                                                             | Gets the YComponentImag.                                      |
| [`ZComponent`](#Moment.ZComponent)                                                                                     | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Moment.ZComponentImag)                                                                             | Gets the ZComponentImag.                                      |
| [`HarmonicIndex`](#Moment.HarmonicIndex)                                                                               | Gets or sets the HarmonicIndex.                               |
| [`SectorNumber`](#Moment.SectorNumber)                                                                                 | Gets or sets the SectorNumber.                                |
| [`Magnitude`](#Moment.Magnitude)                                                                                       | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Moment.MagnitudeImag)                                                                               | Gets the MagnitudeImag.                                       |
| [`PhaseAngle`](#Moment.PhaseAngle)                                                                                     | Gets the PhaseAngle.                                          |
| [`XPhaseAngle`](#Moment.XPhaseAngle)                                                                                   | Gets the XPhaseAngle.                                         |
| [`YPhaseAngle`](#Moment.YPhaseAngle)                                                                                   | Gets the YPhaseAngle.                                         |
| [`ZPhaseAngle`](#Moment.ZPhaseAngle)                                                                                   | Gets the ZPhaseAngle.                                         |
| [`BeamRadius`](#Moment.BeamRadius)                                                                                     | Gets or sets the BeamRadius.                                  |
| [`PinballRegion`](#Moment.PinballRegion)                                                                               | Gets or sets the PinballRegion.                               |
| [`RpmSelection`](#Moment.RpmSelection)                                                                                 | Gets or sets the RpmSelection.                                |
| [`Behavior`](#Moment.Behavior)                                                                                         | Gets or sets the Behavior.                                    |
| [`DefineBy`](#Moment.DefineBy)                                                                                         | Gets or sets the DefineBy.                                    |
| [`LoadingApplicationType`](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#LoadingApplicationType)    | Gets or sets the LoadingApplicationType.                      |
| [`StepVarying`](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying)                                     | Gets or sets the StepVarying.                                 |
| [`NonCyclicLoadingType`](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType)          | Gets or sets the NonCyclicLoadingType.                        |
| [`IndependentVariable`](#Moment.IndependentVariable)                                                                   | Gets or sets the IndependentVariable.                         |
| [`CoordinateSystem`](../../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Suppressed`](#Moment.Suppressed)                                                                                     | Gets or sets the Suppressed.                                  |
| [`SharedRefBody`](#Moment.SharedRefBody)                                                                               | Gets or sets the SharedRefBody.                               |
| [`Children`](#Moment.Children)                                                                                         | Gets the list of children.                                    |
| [`Comments`](#Moment.Comments)                                                                                         | Gets the list of associated comments.                         |
| [`Figures`](#Moment.Figures)                                                                                           | Gets the list of associated figures.                          |
| [`Images`](#Moment.Images)                                                                                             | Gets the list of associated images.                           |
| [`ReadOnly`](#Moment.ReadOnly)                                                                                         | Gets or sets the ReadOnly.                                    |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.            |
| [`Properties`](#Moment.Properties)                                                                                     | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#Moment.VisibleProperties)                                                                       | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.BoundaryConditions import Moment
```

## Property detail

### *property* Moment.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* Moment.RemotePoint *: [Ansys.ACT.Automation.Mechanical.RemotePoint](../RemotePoint.md#RemotePoint) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the remote point associated to the point mass.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Geometry.

<!-- !! processed by numpydoc !! -->

### *property* Moment.StepSelection *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepSelection.

<!-- !! processed by numpydoc !! -->

### *property* Moment.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Moment.BeamMaterial *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamMaterial.

<!-- !! processed by numpydoc !! -->

### *property* Moment.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

### *property* Moment.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* Moment.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Moment.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* Moment.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Moment.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* Moment.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

### *property* Moment.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

### *property* Moment.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* Moment.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

### *property* Moment.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Moment.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Moment.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Moment.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../Mechanical/Fields/Field.md#Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

### *property* Moment.BeamRadius *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BeamRadius.

<!-- !! processed by numpydoc !! -->

### *property* Moment.PinballRegion *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PinballRegion.

<!-- !! processed by numpydoc !! -->

### *property* Moment.RpmSelection *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RpmSelection.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Behavior *: [Ansys.Mechanical.DataModel.Enums.LoadBehavior](../../../../Mechanical/DataModel/Enums/LoadBehavior.md#LoadBehavior) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Behavior.

<!-- !! processed by numpydoc !! -->

### *property* Moment.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* Moment.LoadingApplicationType *: [Ansys.Mechanical.DataModel.Enums.LoadingApplicationType](../../../../Mechanical/DataModel/Enums/LoadingApplicationType.md#LoadingApplicationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadingApplicationType.

<!-- !! processed by numpydoc !! -->

### *property* Moment.StepVarying *: [Ansys.Mechanical.DataModel.Enums.StepVarying](../../../../Mechanical/DataModel/Enums/StepVarying.md#StepVarying) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StepVarying.

<!-- !! processed by numpydoc !! -->

### *property* Moment.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../Mechanical/DataModel/Enums/NonCyclicLoadingType.md#NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

### *property* Moment.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../Mechanical/DataModel/Enums/LoadVariableVariationType.md#LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

### *property* Moment.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* Moment.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* Moment.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* Moment.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

### *property* Moment.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* Moment.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* Moment.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### Moment.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Moment.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Moment.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Moment.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

### Moment.PromoteToRemotePoint()

Run the PromoteToRemotePoint action.

<!-- !! processed by numpydoc !! -->

### Moment.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

### Moment.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### Moment.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Moment.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### Moment.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### Moment.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### Moment.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### Moment.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### Moment.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### Moment.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### Moment.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### Moment.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### Moment.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### Moment.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### Moment.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### Moment.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### Moment.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
