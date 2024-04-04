# InitialCondition

### *class* InitialCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a InitialCondition.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`AddCommandSnippet`](#InitialCondition.AddCommandSnippet)             | Creates a new child CommandSnippet.                                               |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Delete`](#InitialCondition.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                                  | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#InitialCondition.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#InitialCondition.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#InitialCondition.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#InitialCondition.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#InitialCondition.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#InitialCondition.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#InitialCondition.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#InitialCondition.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#InitialCondition.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#InitialCondition.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#InitialCondition.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#InitialCondition.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#InitialCondition.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`Direction`](#InitialCondition.Direction)                                                                          | Gets or sets the Direction.                                   |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`TotalMagnitude`](#InitialCondition.TotalMagnitude)                                                                | Gets or sets the Magnitude.                                   |
| [`InitialEnvironment`](#InitialCondition.InitialEnvironment)                                                        | Gets or sets the InitialEnvironment.                          |
| [`PreStressEnvironmentModalIC`](#InitialCondition.PreStressEnvironmentModalIC)                                      | Gets or sets the PreStressEnvironmentModalIC.                 |
| [`ModalEnvironmentRSIC`](#InitialCondition.ModalEnvironmentRSIC)                                                    | Gets or sets the ModalEnvironmentRSIC.                        |
| [`ModalEnvironmentPSDIC`](#InitialCondition.ModalEnvironmentPSDIC)                                                  | Gets or sets the ModalEnvironmentPSDIC.                       |
| [`PreStressEnvironmentHarmonicIC`](#InitialCondition.PreStressEnvironmentHarmonicIC)                                | Gets or sets the PreStressEnvironmentHarmonicIC.              |
| [`ModalEnvironmentHarmonicIC`](#InitialCondition.ModalEnvironmentHarmonicIC)                                        | Gets or sets the ModalEnvironmentHarmonicIC.                  |
| [`PreStressEnvironmentTransientIC`](#InitialCondition.PreStressEnvironmentTransientIC)                              | Gets or sets the PreStressEnvironmentTransientIC.             |
| [`ModalEnvironmentTransientMSUPIC`](#InitialCondition.ModalEnvironmentTransientMSUPIC)                              | Gets or sets the ModalEnvironmentTransientMSUPIC.             |
| [`ModalICEnvironment`](#InitialCondition.ModalICEnvironment)                                                        | Gets or sets the ModalICEnvironment.                          |
| [`PreStressICEnvironment`](#InitialCondition.PreStressICEnvironment)                                                | Gets or sets the PreStressICEnvironment.                      |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`ReportedLoadStep`](#InitialCondition.ReportedLoadStep)                                                            | Gets the ReportedLoadStep.                                    |
| [`ReportedSubStep`](#InitialCondition.ReportedSubStep)                                                              | Gets the ReportedSubStep.                                     |
| [`ReportedTime`](#InitialCondition.ReportedTime)                                                                    | Gets the ReportedTime.                                        |
| [`TimeStepFactor`](#InitialCondition.TimeStepFactor)                                                                | Gets or sets the TimeStepFactor.                              |
| [`PreStressLoadStep`](#InitialCondition.PreStressLoadStep)                                                          | Gets or sets the PreStressLoadStep.                           |
| [`DropHeight`](#InitialCondition.DropHeight)                                                                        | Gets or sets the DropHeight.                                  |
| [`ImpactVelocity`](#InitialCondition.ImpactVelocity)                                                                | Gets or sets the ImpactVelocity.                              |
| [`Time`](#InitialCondition.Time)                                                                                    | Gets or sets the Time.                                        |
| [`InitialTemperatureValue`](#InitialCondition.InitialTemperatureValue)                                              | Gets or sets the InitialTemperatureValue.                     |
| [`ExplicitPreStressTime`](#InitialCondition.ExplicitPreStressTime)                                                  | Gets or sets the ExplicitPreStressTime.                       |
| [`PreStressTime`](#InitialCondition.PreStressTime)                                                                  | Gets or sets the PreStressTime.                               |
| [`ReferenceTemperature`](#InitialCondition.ReferenceTemperature)                                                    | Gets or sets the ReferenceTemperature.                        |
| [`XComponent`](#InitialCondition.XComponent)                                                                        | Gets or sets the XComponent.                                  |
| [`YComponent`](#InitialCondition.YComponent)                                                                        | Gets or sets the YComponent.                                  |
| [`ZComponent`](#InitialCondition.ZComponent)                                                                        | Gets or sets the ZComponent.                                  |
| [`DropTestDefineBy`](../../../Mechanical/DataModel/Enums/DropTestDefineBy.md#DropTestDefineBy)                      | Gets or sets the DropTestDefineBy.                            |
| [`DropDirection`](../../../Mechanical/DataModel/Enums/DropDirection.md#DropDirection)                               | Gets or sets the DropDirection.                               |
| [`InitialTemperature`](#InitialCondition.InitialTemperature)                                                        | Gets or sets the InitialTemperature.                          |
| [`PressureInitialization`](#InitialCondition.PressureInitialization)                                                | Gets or sets the PressureInitialization.                      |
| [`ContactStatus`](Results/ContactToolResults/ContactStatus.md#ContactStatus)                                        | Gets or sets the ContactStatus.                               |
| [`LoadControl`](#InitialCondition.LoadControl)                                                                      | Gets or sets the LoadControl.                                 |
| [`Mode`](#InitialCondition.Mode)                                                                                    | Gets or sets the Mode.                                        |
| [`NewtonRaphsonOption`](#InitialCondition.NewtonRaphsonOption)                                                      | Gets the NewtonRaphsonOption.                                 |
| [`PreStressDefineBy`](#InitialCondition.PreStressDefineBy)                                                          | Gets or sets the PreStressDefineBy.                           |
| [`InputType`](#InitialCondition.InputType)                                                                          | Gets or sets the InputType.                                   |
| [`DefineBy`](#InitialCondition.DefineBy)                                                                            | Gets or sets the DefineBy.                                    |
| [`Suppressed`](#InitialCondition.Suppressed)                                                                        | Gets or sets the Suppressed.                                  |
| [`PreStressEnvironmentHarmonicMSUPModal`](#InitialCondition.PreStressEnvironmentHarmonicMSUPModal)                  | Gets the PreStressEnvironmentHarmonicMSUPModal.               |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | Gets or sets the CoordinateSystem.                            |
| [`PreStressEnvironmentTransientMSUPModal`](#InitialCondition.PreStressEnvironmentTransientMSUPModal)                | Gets the PreStressEnvironmentTransientMSUPModal.              |
| [`Location`](#InitialCondition.Location)                                                                            | Gets or sets the Location.                                    |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#InitialCondition.Children)                                                                            | Gets the list of children.                                    |
| [`Comments`](#InitialCondition.Comments)                                                                            | Gets the list of associated comments.                         |
| [`Figures`](#InitialCondition.Figures)                                                                              | Gets the list of associated figures.                          |
| [`Images`](#InitialCondition.Images)                                                                                | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#InitialCondition.Properties)                                                                        | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#InitialCondition.VisibleProperties)                                                          | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import InitialCondition
```

## Property detail

### *property* InitialCondition.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.TotalMagnitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InitialEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialEnvironment.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentModalIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentModalIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentRSIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentRSIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentPSDIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentPSDIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentTransientIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentTransientIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalEnvironmentTransientMSUPIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentTransientMSUPIC.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ModalICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalICEnvironment.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* InitialCondition.DropTestDefineBy *: [Ansys.Mechanical.DataModel.Enums.DropTestDefineBy](../../../Mechanical/DataModel/Enums/DropTestDefineBy.md#DropTestDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropTestDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DropDirection *: [Ansys.Mechanical.DataModel.Enums.DropDirection](../../../Mechanical/DataModel/Enums/DropDirection.md#DropDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropDirection.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InitialTemperature *: [Ansys.Mechanical.DataModel.Enums.InitialTemperatureType](../../../Mechanical/DataModel/Enums/InitialTemperatureType.md#InitialTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTemperature.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PressureInitialization *: [Ansys.Mechanical.DataModel.Enums.PressureInitializationType](../../../Mechanical/DataModel/Enums/PressureInitializationType.md#PressureInitializationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureInitialization.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.ContactStatus *: [Ansys.Mechanical.DataModel.Enums.PreStressContactStatus](../../../Mechanical/DataModel/Enums/PreStressContactStatus.md#PreStressContactStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStatus.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.LoadControl *: [Ansys.Mechanical.DataModel.Enums.PreStressLoadControl](../../../Mechanical/DataModel/Enums/PreStressLoadControl.md#PreStressLoadControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadControl.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Mode *: [Ansys.Mechanical.DataModel.Enums.PreStressMode](../../../Mechanical/DataModel/Enums/PreStressMode.md#PreStressMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressDefineBy *: [Ansys.Mechanical.DataModel.Enums.PreStressStateType](../../../Mechanical/DataModel/Enums/PreStressStateType.md#PreStressStateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressDefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.InputType *: [Ansys.Mechanical.DataModel.Enums.InitialConditionsType](../../../Mechanical/DataModel/Enums/InitialConditionsType.md#InitialConditionsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputType.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentHarmonicMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentHarmonicMSUPModal.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.PreStressEnvironmentTransientMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentTransientMSUPModal.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* InitialCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

### InitialCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### InitialCondition.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

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

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

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
