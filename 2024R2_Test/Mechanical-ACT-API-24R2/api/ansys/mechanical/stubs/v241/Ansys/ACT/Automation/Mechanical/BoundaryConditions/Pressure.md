# `Pressure`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure"></a>

#### *class* Ansys.ACT.Automation.Mechanical.BoundaryConditions.Pressure

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a Pressure.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#Pressure.Activate)                                             | Activate the current object.                                                      |
| [`AddComment`](#Pressure.AddComment)                                         | Creates a new child Comment.                                                      |
| [`AddFigure`](#Pressure.AddFigure)                                           | Creates a new child Figure.                                                       |
| [`AddImage`](#Pressure.AddImage)                                             | Creates a new child Image.                                                        |
| [`CopyTo`](#Pressure.CopyTo)                                                 | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#Pressure.CreateParameter)                               | Creates a new parameter for a Property.                                           |
| [`Delete`](#Pressure.Delete)                                                 | Run the Delete action.                                                            |
| [`Duplicate`](#Pressure.Duplicate)                                           | Creates a copy of the current DataModelObject.                                    |
| [`GetActivateAtLoadStep`](#Pressure.GetActivateAtLoadStep)                   | GetActivateAtLoadStep method.                                                     |
| [`GetChildren`](#Pressure.GetChildren)                                       | Gets the list of children, filtered by type.                                      |
| [`GetComponentActivateAtLoadStep`](#Pressure.GetComponentActivateAtLoadStep) | GetComponentActivateAtLoadStep method.                                            |
| [`GetParameter`](#Pressure.GetParameter)                                     | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#Pressure.GroupAllSimilarChildren)               | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#Pressure.GroupSimilarObjects)                       | Run the GroupSimilarObjects action.                                               |
| [`PromoteToNamedSelection`](#Pressure.PromoteToNamedSelection)               | Run the PromoteToNamedSelection action.                                           |
| [`PropertyByAPIName`](#Pressure.PropertyByAPIName)                           | Get a property by its API name.                                                   |
| [`PropertyByName`](#Pressure.PropertyByName)                                 | Get a property by its unique name.                                                |
| [`RemoveParameter`](#Pressure.RemoveParameter)                               | Removes the parameter from the parameter set corresponding to the given property. |
| [`SetActivateAtLoadStep`](#Pressure.SetActivateAtLoadStep)                   | SetActivateAtLoadStep method.                                                     |
| [`SetComponentActivateAtLoadStep`](#Pressure.SetComponentActivateAtLoadStep) | SetComponentActivateAtLoadStep method.                                            |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AppliedBy`](#Pressure.AppliedBy)                                     | Gets or sets the AppliedBy.                                   |
| [`Children`](#Pressure.Children)                                       | Gets the list of children.                                    |
| [`Comments`](#Pressure.Comments)                                       | Gets the list of associated comments.                         |
| [`CoordinateSystem`](#Pressure.CoordinateSystem)                       | Gets or sets the CoordinateSystem.                            |
| [`DataModelObjectCategory`](#Pressure.DataModelObjectCategory)         | Gets the current DataModelObject’s category.                  |
| [`DefineBy`](#Pressure.DefineBy)                                       | Gets or sets the DefineBy.                                    |
| [`Direction`](#Pressure.Direction)                                     | Gets or sets the Direction.                                   |
| [`DynamicRelaxationBehavior`](#Pressure.DynamicRelaxationBehavior)     | Gets or sets the DynamicRelaxationBehavior.                   |
| [`Figures`](#Pressure.Figures)                                         | Gets the list of associated figures.                          |
| [`GraphControlsXAxis`](#Pressure.GraphControlsXAxis)                   | Gets or sets the GraphControlsXAxis.                          |
| [`HarmonicIndex`](#Pressure.HarmonicIndex)                             | Gets or sets the HarmonicIndex.                               |
| [`Images`](#Pressure.Images)                                           | Gets the list of associated images.                           |
| [`IndependentVariable`](#Pressure.IndependentVariable)                 | Gets or sets the IndependentVariable.                         |
| [`InternalObject`](#Pressure.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`LoadVectorAssignment`](#Pressure.LoadVectorAssignment)               | Gets or sets the LoadVectorAssignment.                        |
| [`LoadVectorNumber`](#Pressure.LoadVectorNumber)                       | Gets or sets the LoadVectorNumber.                            |
| [`LoadedArea`](#Pressure.LoadedArea)                                   | Gets or sets the LoadedArea.                                  |
| [`Location`](#Pressure.Location)                                       | Gets or sets the Location.                                    |
| [`Magnitude`](#Pressure.Magnitude)                                     | Gets the Magnitude.                                           |
| [`MagnitudeImag`](#Pressure.MagnitudeImag)                             | Gets the MagnitudeImag.                                       |
| [`NonCyclicLoadingType`](#Pressure.NonCyclicLoadingType)               | Gets or sets the NonCyclicLoadingType.                        |
| [`NumberOfSegments`](#Pressure.NumberOfSegments)                       | Gets or sets the NumberOfSegments.                            |
| [`PhaseAngle`](#Pressure.PhaseAngle)                                   | Gets the PhaseAngle.                                          |
| [`Properties`](#Pressure.Properties)                                   | Gets the list of properties for this object.                  |
| [`RangeMaximum`](#Pressure.RangeMaximum)                               | Gets or sets the RangeMaximum.                                |
| [`RangeMinimum`](#Pressure.RangeMinimum)                               | Gets or sets the RangeMinimum.                                |
| [`ReadOnly`](#Pressure.ReadOnly)                                       | Gets or sets the ReadOnly.                                    |
| [`SectorNumber`](#Pressure.SectorNumber)                               | Gets or sets the SectorNumber.                                |
| [`SharedRefBody`](#Pressure.SharedRefBody)                             | Gets or sets the SharedRefBody.                               |
| [`Suppressed`](#Pressure.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TableAssignment`](#Pressure.TableAssignment)                                                                                                              | Gets or sets the TableAssignment.                             |
| [`VisibleProperties`](#Pressure.VisibleProperties)                     | Gets the list of properties that are visible for this object. |
| [`XComponent`](#Pressure.XComponent)                                   | Gets the XComponent.                                          |
| [`XComponentImag`](#Pressure.XComponentImag)                           | Gets the XComponentImag.                                      |
| [`XPhaseAngle`](#Pressure.XPhaseAngle)                                 | Gets the XPhaseAngle.                                         |
| [`XYZFunctionCoordinateSystem`](#Pressure.XYZFunctionCoordinateSystem) | Gets or sets the XYZFunctionCoordinateSystem.                 |
| [`YComponent`](#Pressure.YComponent)                                   | Gets the YComponent.                                          |
| [`YComponentImag`](#Pressure.YComponentImag)                           | Gets the YComponentImag.                                      |
| [`YPhaseAngle`](#Pressure.YPhaseAngle)                                 | Gets the YPhaseAngle.                                         |
| [`ZComponent`](#Pressure.ZComponent)                                   | Gets the ZComponent.                                          |
| [`ZComponentImag`](#Pressure.ZComponentImag)                           | Gets the ZComponentImag.                                      |
| [`ZPhaseAngle`](#Pressure.ZPhaseAngle)                                 | Gets the ZPhaseAngle.                                         |

<a id="property-detail"></a>

## Property detail

<a id="Pressure.AppliedBy"></a>

### *property* Pressure.AppliedBy *: [Ansys.Mechanical.DataModel.Enums.LoadAppliedBy](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadAppliedBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadAppliedBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AppliedBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Children"></a>

### *property* Pressure.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Comments"></a>

### *property* Pressure.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CoordinateSystem"></a>

### *property* Pressure.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DataModelObjectCategory"></a>

### *property* Pressure.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DefineBy"></a>

### *property* Pressure.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Direction"></a>

### *property* Pressure.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.DynamicRelaxationBehavior"></a>

### *property* Pressure.DynamicRelaxationBehavior *: [Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/DynamicRelaxationBehaviorType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DynamicRelaxationBehaviorType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DynamicRelaxationBehavior.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Figures"></a>

### *property* Pressure.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GraphControlsXAxis"></a>

### *property* Pressure.GraphControlsXAxis *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GraphControlsXAxis.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.HarmonicIndex"></a>

### *property* Pressure.HarmonicIndex *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the HarmonicIndex.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Images"></a>

### *property* Pressure.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.IndependentVariable"></a>

### *property* Pressure.IndependentVariable *: [Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVariableVariationType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVariableVariationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the IndependentVariable.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.InternalObject"></a>

### *property* Pressure.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSLoadAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorAssignment"></a>

### *property* Pressure.LoadVectorAssignment *: [Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadVectorAssignment.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadVectorAssignment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadVectorNumber"></a>

### *property* Pressure.LoadVectorNumber *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadVectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.LoadedArea"></a>

### *property* Pressure.LoadedArea *: [Ansys.Mechanical.DataModel.Enums.LoadedArea](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/LoadedArea.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.LoadedArea) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadedArea.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Location"></a>

### *property* Pressure.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Magnitude"></a>

### *property* Pressure.Magnitude *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.MagnitudeImag"></a>

### *property* Pressure.MagnitudeImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the MagnitudeImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NonCyclicLoadingType"></a>

### *property* Pressure.NonCyclicLoadingType *: [Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType](../../../../../../v242/Ansys/Mechanical/DataModel/Enums/NonCyclicLoadingType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NonCyclicLoadingType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonCyclicLoadingType.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.NumberOfSegments"></a>

### *property* Pressure.NumberOfSegments *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfSegments.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PhaseAngle"></a>

### *property* Pressure.PhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Properties"></a>

### *property* Pressure.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMaximum"></a>

### *property* Pressure.RangeMaximum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMaximum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RangeMinimum"></a>

### *property* Pressure.RangeMinimum *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeMinimum.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ReadOnly"></a>

### *property* Pressure.ReadOnly *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SectorNumber"></a>

### *property* Pressure.SectorNumber *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SectorNumber.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SharedRefBody"></a>

### *property* Pressure.SharedRefBody *: [Ansys.ACT.Automation.Mechanical.Body](../Body.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Body) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SharedRefBody.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Suppressed"></a>

### *property* Pressure.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.TableAssignment"></a>

### *property* Pressure.TableAssignment *: [Ansys.ACT.Automation.Mechanical.Table](../../../../../../v242/Ansys/ACT/Automation/Mechanical/Table.md#ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.Table) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TableAssignment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.VisibleProperties"></a>

### *property* Pressure.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponent"></a>

### *property* Pressure.XComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XComponentImag"></a>

### *property* Pressure.XComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XPhaseAngle"></a>

### *property* Pressure.XPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the XPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.XYZFunctionCoordinateSystem"></a>

### *property* Pressure.XYZFunctionCoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XYZFunctionCoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponent"></a>

### *property* Pressure.YComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YComponentImag"></a>

### *property* Pressure.YComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.YPhaseAngle"></a>

### *property* Pressure.YPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the YPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponent"></a>

### *property* Pressure.ZComponent *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZComponentImag"></a>

### *property* Pressure.ZComponentImag *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZComponentImag.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.ZPhaseAngle"></a>

### *property* Pressure.ZPhaseAngle *: [Ansys.ACT.Mechanical.Fields.Field](../../../../../../v242/Ansys/ACT/Mechanical/Fields/Field.md#ansys.mechanical.stubs.v242.Ansys.ACT.Mechanical.Fields.Field) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZPhaseAngle.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Pressure.Activate"></a>

### Pressure.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddComment"></a>

### Pressure.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddFigure"></a>

### Pressure.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.AddImage"></a>

### Pressure.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CopyTo"></a>

### Pressure.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.CreateParameter"></a>

### Pressure.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Delete"></a>

### Pressure.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.Duplicate"></a>

### Pressure.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetActivateAtLoadStep"></a>

### Pressure.GetActivateAtLoadStep(stepNumber: System.UInt32)

GetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetChildren"></a>

### Pressure.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetComponentActivateAtLoadStep"></a>

### Pressure.GetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32)

GetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GetParameter"></a>

### Pressure.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupAllSimilarChildren"></a>

### Pressure.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.GroupSimilarObjects"></a>

### Pressure.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PromoteToNamedSelection"></a>

### Pressure.PromoteToNamedSelection()

Run the PromoteToNamedSelection action.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByAPIName"></a>

### Pressure.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Pressure.PropertyByName"></a>

### Pressure.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.RemoveParameter"></a>

### Pressure.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetActivateAtLoadStep"></a>

### Pressure.SetActivateAtLoadStep(stepNumber: System.UInt32, bActive: System.Boolean)

SetActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

<a id="Pressure.SetComponentActivateAtLoadStep"></a>

### Pressure.SetComponentActivateAtLoadStep(component: System.String, stepNumber: System.UInt32, bActive: System.Boolean)

SetComponentActivateAtLoadStep method.

<!-- !! processed by numpydoc !! -->

