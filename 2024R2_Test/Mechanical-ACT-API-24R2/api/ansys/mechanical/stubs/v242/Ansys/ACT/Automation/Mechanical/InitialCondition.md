# `InitialCondition`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.InitialCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a InitialCondition.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `AddCommandSnippet`       | Creates a new child CommandSnippet.                                               |
| `Delete`                  | Run the Delete action.                                                            |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|------------------------------------------|---------------------------------------------------------------|
| `Direction`                              | Gets or sets the Direction.                                   |
| `TotalMagnitude`                         | Gets or sets the Magnitude.                                   |
| `InitialEnvironment`                     | Gets or sets the InitialEnvironment.                          |
| `PreStressEnvironmentModalIC`            | Gets or sets the PreStressEnvironmentModalIC.                 |
| `ModalEnvironmentRSIC`                   | Gets or sets the ModalEnvironmentRSIC.                        |
| `ModalEnvironmentPSDIC`                  | Gets or sets the ModalEnvironmentPSDIC.                       |
| `PreStressEnvironmentHarmonicIC`         | Gets or sets the PreStressEnvironmentHarmonicIC.              |
| `ModalEnvironmentHarmonicIC`             | Gets or sets the ModalEnvironmentHarmonicIC.                  |
| `PreStressEnvironmentTransientIC`        | Gets or sets the PreStressEnvironmentTransientIC.             |
| `ModalEnvironmentTransientMSUPIC`        | Gets or sets the ModalEnvironmentTransientMSUPIC.             |
| `ModalICEnvironment`                     | Gets or sets the ModalICEnvironment.                          |
| `PreStressICEnvironment`                 | Gets or sets the PreStressICEnvironment.                      |
| `InternalObject`                         | Gets the internal object. For advanced usage only.            |
| `ReportedLoadStep`                       | Gets the ReportedLoadStep.                                    |
| `ReportedSubStep`                        | Gets the ReportedSubStep.                                     |
| `ReportedTime`                           | Gets the ReportedTime.                                        |
| `TimeStepFactor`                         | Gets or sets the TimeStepFactor.                              |
| `PreStressLoadStep`                      | Gets or sets the PreStressLoadStep.                           |
| `DropHeight`                             | Gets or sets the DropHeight.                                  |
| `ImpactVelocity`                         | Gets or sets the ImpactVelocity.                              |
| `Time`                                   | Gets or sets the Time.                                        |
| `InitialTemperatureValue`                | Gets or sets the InitialTemperatureValue.                     |
| `ExplicitPreStressTime`                  | Gets or sets the ExplicitPreStressTime.                       |
| `PreStressTime`                          | Gets or sets the PreStressTime.                               |
| `ReferenceTemperature`                   | Gets or sets the ReferenceTemperature.                        |
| `XComponent`                             | Gets or sets the XComponent.                                  |
| `YComponent`                             | Gets or sets the YComponent.                                  |
| `ZComponent`                             | Gets or sets the ZComponent.                                  |
| `DropTestDefineBy`                       | Gets or sets the DropTestDefineBy.                            |
| `DropDirection`                          | Gets or sets the DropDirection.                               |
| `InitialTemperature`                     | Gets or sets the InitialTemperature.                          |
| `PressureInitialization`                 | Gets or sets the PressureInitialization.                      |
| `ContactStatus`                          | Gets or sets the ContactStatus.                               |
| `LoadControl`                            | Gets or sets the LoadControl.                                 |
| `Mode`                                   | Gets or sets the Mode.                                        |
| `NewtonRaphsonOption`                    | Gets the NewtonRaphsonOption.                                 |
| `PreStressDefineBy`                      | Gets or sets the PreStressDefineBy.                           |
| `InputType`                              | Gets or sets the InputType.                                   |
| `DefineBy`                               | Gets or sets the DefineBy.                                    |
| `Suppressed`                             | Gets or sets the Suppressed.                                  |
| `PreStressEnvironmentHarmonicMSUPModal`  | Gets the PreStressEnvironmentHarmonicMSUPModal.               |
| `CoordinateSystem`                       | Gets or sets the CoordinateSystem.                            |
| `PreStressEnvironmentTransientMSUPModal` | Gets the PreStressEnvironmentTransientMSUPModal.              |
| `Location`                               | Gets or sets the Location.                                    |
| `DataModelObjectCategory`                | Gets the current DataModelObject's category.                  |
| `Children`                               | Gets the list of children.                                    |
| `Comments`                               | Gets the list of associated comments.                         |
| `Figures`                                | Gets the list of associated figures.                          |
| `Images`                                 | Gets the list of associated images.                           |
| `InternalObject`                         | Gets the internal object. For advanced usage only.            |
| `Properties`                             | Gets the list of properties for this object.                  |
| `VisibleProperties`                      | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

### *property* InitialCondition.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.TotalMagnitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InitialEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialEnvironment.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentModalIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentModalIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentRSIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentRSIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentPSDIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentPSDIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentTransientIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentTransientIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentTransientMSUPIC *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentTransientMSUPIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalICEnvironment.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressICEnvironment.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ReportedLoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ReportedSubStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedSubStep.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ReportedTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedTime.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.TimeStepFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepFactor.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressLoadStep *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressLoadStep.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DropHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropHeight.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ImpactVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImpactVelocity.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Time.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InitialTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTemperatureValue.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ExplicitPreStressTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExplicitPreStressTime.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressTime.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.XComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.YComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ZComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DropTestDefineBy *: [Ansys.Mechanical.DataModel.Enums.DropTestDefineBy](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DropTestDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DropTestDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropTestDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DropDirection *: [Ansys.Mechanical.DataModel.Enums.DropDirection](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DropDirection.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DropDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropDirection.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InitialTemperature *: [Ansys.Mechanical.DataModel.Enums.InitialTemperatureType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/InitialTemperatureType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InitialTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTemperature.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PressureInitialization *: [Ansys.Mechanical.DataModel.Enums.PressureInitializationType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PressureInitializationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PressureInitializationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureInitialization.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ContactStatus *: [Ansys.Mechanical.DataModel.Enums.PreStressContactStatus](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PreStressContactStatus.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PreStressContactStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStatus.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.LoadControl *: [Ansys.Mechanical.DataModel.Enums.PreStressLoadControl](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PreStressLoadControl.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PreStressLoadControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadControl.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Mode *: [Ansys.Mechanical.DataModel.Enums.PreStressMode](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PreStressMode.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PreStressMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/NewtonRaphsonType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressDefineBy *: [Ansys.Mechanical.DataModel.Enums.PreStressStateType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/PreStressStateType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PreStressStateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InputType *: [Ansys.Mechanical.DataModel.Enums.InitialConditionsType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/InitialConditionsType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.InitialConditionsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputType.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../../../v241/Ansys/Mechanical/DataModel/Enums/LoadDefineBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentHarmonicMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentHarmonicMSUPModal.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](../../../../../v241/Ansys/ACT/Automation/Mechanical/CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentTransientMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](../../../../../v241/Ansys/ACT/Automation/Mechanical/Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentTransientMSUPModal.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

### InitialCondition.AddCommandSnippet()

Creates a new child CommandSnippet.

<!-- !! processed by numpydoc !! -->

### InitialCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### InitialCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InitialCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

### InitialCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### InitialCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### InitialCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### InitialCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### InitialCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### InitialCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### InitialCondition.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

### InitialCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### InitialCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### InitialCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

