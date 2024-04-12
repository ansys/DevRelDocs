<a id="initialcondition"></a>

# InitialCondition

<a id="InitialCondition"></a>

### *class* InitialCondition

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a InitialCondition.

> <!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Summary |
|------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`AddCommandSnippet`](#InitialCondition.AddCommandSnippet)             | Creates a new child CommandSnippet.                                               |
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

| Name | Summary |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Direction`](#InitialCondition.Direction)                                                                          | Gets or sets the Direction.                                   |
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

<a id="import-detail"></a>

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import InitialCondition
```

<a id="property-detail"></a>

## Property detail

<a id="InitialCondition.Direction"></a>

### *property* InitialCondition.Direction *: Ansys.ACT.Math.Vector3D | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Direction.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.TotalMagnitude"></a>

### *property* InitialCondition.TotalMagnitude *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Magnitude.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.InitialEnvironment"></a>

### *property* InitialCondition.InitialEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialEnvironment.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressEnvironmentModalIC"></a>

### *property* InitialCondition.PreStressEnvironmentModalIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentModalIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ModalEnvironmentRSIC"></a>

### *property* InitialCondition.ModalEnvironmentRSIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentRSIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ModalEnvironmentPSDIC"></a>

### *property* InitialCondition.ModalEnvironmentPSDIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentPSDIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressEnvironmentHarmonicIC"></a>

### *property* InitialCondition.PreStressEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ModalEnvironmentHarmonicIC"></a>

### *property* InitialCondition.ModalEnvironmentHarmonicIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentHarmonicIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressEnvironmentTransientIC"></a>

### *property* InitialCondition.PreStressEnvironmentTransientIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressEnvironmentTransientIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ModalEnvironmentTransientMSUPIC"></a>

### *property* InitialCondition.ModalEnvironmentTransientMSUPIC *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalEnvironmentTransientMSUPIC.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ModalICEnvironment"></a>

### *property* InitialCondition.ModalICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModalICEnvironment.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressICEnvironment"></a>

### *property* InitialCondition.PreStressICEnvironment *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressICEnvironment.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.InternalObject"></a>

### *property* InitialCondition.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSInitialConditionsAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ReportedLoadStep"></a>

### *property* InitialCondition.ReportedLoadStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ReportedSubStep"></a>

### *property* InitialCondition.ReportedSubStep *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedSubStep.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ReportedTime"></a>

### *property* InitialCondition.ReportedTime *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ReportedTime.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.TimeStepFactor"></a>

### *property* InitialCondition.TimeStepFactor *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the TimeStepFactor.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressLoadStep"></a>

### *property* InitialCondition.PreStressLoadStep *: System.Double | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressLoadStep.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.DropHeight"></a>

### *property* InitialCondition.DropHeight *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropHeight.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ImpactVelocity"></a>

### *property* InitialCondition.ImpactVelocity *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImpactVelocity.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Time"></a>

### *property* InitialCondition.Time *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Time.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.InitialTemperatureValue"></a>

### *property* InitialCondition.InitialTemperatureValue *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTemperatureValue.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ExplicitPreStressTime"></a>

### *property* InitialCondition.ExplicitPreStressTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ExplicitPreStressTime.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressTime"></a>

### *property* InitialCondition.PreStressTime *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressTime.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ReferenceTemperature"></a>

### *property* InitialCondition.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.XComponent"></a>

### *property* InitialCondition.XComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the XComponent.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.YComponent"></a>

### *property* InitialCondition.YComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the YComponent.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ZComponent"></a>

### *property* InitialCondition.ZComponent *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ZComponent.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.DropTestDefineBy"></a>

### *property* InitialCondition.DropTestDefineBy *: [Ansys.Mechanical.DataModel.Enums.DropTestDefineBy](../../../Mechanical/DataModel/Enums/DropTestDefineBy.md#DropTestDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropTestDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.DropDirection"></a>

### *property* InitialCondition.DropDirection *: [Ansys.Mechanical.DataModel.Enums.DropDirection](../../../Mechanical/DataModel/Enums/DropDirection.md#DropDirection) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DropDirection.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.InitialTemperature"></a>

### *property* InitialCondition.InitialTemperature *: [Ansys.Mechanical.DataModel.Enums.InitialTemperatureType](../../../Mechanical/DataModel/Enums/InitialTemperatureType.md#InitialTemperatureType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InitialTemperature.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PressureInitialization"></a>

### *property* InitialCondition.PressureInitialization *: [Ansys.Mechanical.DataModel.Enums.PressureInitializationType](../../../Mechanical/DataModel/Enums/PressureInitializationType.md#PressureInitializationType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PressureInitialization.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.ContactStatus"></a>

### *property* InitialCondition.ContactStatus *: [Ansys.Mechanical.DataModel.Enums.PreStressContactStatus](../../../Mechanical/DataModel/Enums/PreStressContactStatus.md#PreStressContactStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ContactStatus.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.LoadControl"></a>

### *property* InitialCondition.LoadControl *: [Ansys.Mechanical.DataModel.Enums.PreStressLoadControl](../../../Mechanical/DataModel/Enums/PreStressLoadControl.md#PreStressLoadControl) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LoadControl.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Mode"></a>

### *property* InitialCondition.Mode *: [Ansys.Mechanical.DataModel.Enums.PreStressMode](../../../Mechanical/DataModel/Enums/PreStressMode.md#PreStressMode) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Mode.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.NewtonRaphsonOption"></a>

### *property* InitialCondition.NewtonRaphsonOption *: [Ansys.Mechanical.DataModel.Enums.NewtonRaphsonType](../../../Mechanical/DataModel/Enums/NewtonRaphsonType.md#NewtonRaphsonType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NewtonRaphsonOption.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressDefineBy"></a>

### *property* InitialCondition.PreStressDefineBy *: [Ansys.Mechanical.DataModel.Enums.PreStressStateType](../../../Mechanical/DataModel/Enums/PreStressStateType.md#PreStressStateType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PreStressDefineBy.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.InputType"></a>

### *property* InitialCondition.InputType *: [Ansys.Mechanical.DataModel.Enums.InitialConditionsType](../../../Mechanical/DataModel/Enums/InitialConditionsType.md#InitialConditionsType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InputType.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.DefineBy"></a>

### *property* InitialCondition.DefineBy *: [Ansys.Mechanical.DataModel.Enums.LoadDefineBy](../../../Mechanical/DataModel/Enums/LoadDefineBy.md#LoadDefineBy) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the DefineBy.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Suppressed"></a>

### *property* InitialCondition.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressEnvironmentHarmonicMSUPModal"></a>

### *property* InitialCondition.PreStressEnvironmentHarmonicMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentHarmonicMSUPModal.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.CoordinateSystem"></a>

### *property* InitialCondition.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PreStressEnvironmentTransientMSUPModal"></a>

### *property* InitialCondition.PreStressEnvironmentTransientMSUPModal *: [Ansys.ACT.Automation.Mechanical.Analysis](Analysis.md#Analysis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the PreStressEnvironmentTransientMSUPModal.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Location"></a>

### *property* InitialCondition.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.DataModelObjectCategory"></a>

### *property* InitialCondition.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Children"></a>

### *property* InitialCondition.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Comments"></a>

### *property* InitialCondition.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Figures"></a>

### *property* InitialCondition.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Images"></a>

### *property* InitialCondition.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* InitialCondition.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Properties"></a>

### *property* InitialCondition.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.VisibleProperties"></a>

### *property* InitialCondition.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="InitialCondition.AddCommandSnippet"></a>

### InitialCondition.AddCommandSnippet()

Creates a new child CommandSnippet.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Delete"></a>

### InitialCondition.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.GetChildren"></a>

### InitialCondition.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### InitialCondition.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.AddComment"></a>

### InitialCondition.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.AddFigure"></a>

### InitialCondition.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.AddImage"></a>

### InitialCondition.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Activate"></a>

### InitialCondition.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.CopyTo"></a>

### InitialCondition.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.Duplicate"></a>

### InitialCondition.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.GroupAllSimilarChildren"></a>

### InitialCondition.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.GroupSimilarObjects"></a>

### InitialCondition.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PropertyByName"></a>

### InitialCondition.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.PropertyByAPIName"></a>

### InitialCondition.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.CreateParameter"></a>

### InitialCondition.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.GetParameter"></a>

### InitialCondition.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="InitialCondition.RemoveParameter"></a>

### InitialCondition.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
