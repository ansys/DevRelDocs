# `AMBuildSequenceStep`

<a id="ansys.mechanical.stubs.v261.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequenceStep"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMBuildSequenceStep

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

An AM build sequence step contains properties such as step type (Heat or Dwell), step time, machine settings for the step, etc.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|--------------------------------------------------------------|
| [`Absorptivity`](#AMBuildSequenceStep.Absorptivity)                         | Gets or sets the build sequence step absorptivity.           |
| [`ActiveArea`](#AMBuildSequenceStep.ActiveArea)                             | Gets or sets the build sequence active area.                 |
| [`BeamPower`](#AMBuildSequenceStep.BeamPower)                               | Gets or sets the build sequence step beam power.             |
| [`DepositionThickness`](#AMBuildSequenceStep.DepositionThickness)           | Gets or sets the build sequence step deposition thickness.   |
| [`Geometry`](#AMBuildSequenceStep.Geometry)                                 | Gets or sets the build sequence step geometry.               |
| [`HatchSpacing`](#AMBuildSequenceStep.HatchSpacing)                         | >Gets or sets the build sequence step hatch spacing.         |
| [`HeatingMethod`](#AMBuildSequenceStep.HeatingMethod)                       | Gets or sets the build sequence step heating method.         |
| [`HeatingTemperature`](#AMBuildSequenceStep.HeatingTemperature)             | Gets or sets the build sequence step heating temperature.    |
| [`ScanSpeed`](#AMBuildSequenceStep.ScanSpeed)                               | Gets or sets the build sequence step scan speed.             |
| [`StepTime`](#AMBuildSequenceStep.StepTime)                                 | Gets or sets the build sequence step duration.               |
| [`StepTimeBasis`](#AMBuildSequenceStep.StepTimeBasis)                       | Gets or sets the build sequence step time basis.             |
| [`StepTimeVolumeAdjustment`](#AMBuildSequenceStep.StepTimeVolumeAdjustment) | Gets or sets the build sequence step time volume adjustment. |
| [`StepType`](#AMBuildSequenceStep.StepType)                                 | Gets or sets the build sequence step type.                   |

<a id="property-detail"></a>

## Property detail

<a id="AMBuildSequenceStep.Absorptivity"></a>

### *property* AMBuildSequenceStep.Absorptivity *: [float](https://docs.python.org/3/library/functions.html#float) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step absorptivity.

> An exception is thrown if the current step type is not Heat. An exception is also thrown
> if the HeatingMethod property is not Power. An exception is also thrown if the value is
> less than 0 or greater than 1.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.ActiveArea"></a>

### *property* AMBuildSequenceStep.ActiveArea *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence active area.

> An exception is thrown if the supplied value is less than 0.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.BeamPower"></a>

### *property* AMBuildSequenceStep.BeamPower *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step beam power.

> An exception is thrown if the value is less than or equal to 0. An exception is also
> thrown if the HeatingMethod property is not Power or the StepType is not Heat.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.DepositionThickness"></a>

### *property* AMBuildSequenceStep.DepositionThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step deposition thickness.

An exception is thrown if the value is less than or equal to 0. An exception
is also thrown if the following is not satisfied:

StepTimeBasis property = Time (with StepTimeVolumeAdjustment = Modified).
StepTimeBasis property = Layer.
StepTimeBasis property = Area (with StepTimeVolumeAdjustment = True or Modified).
StepTimeBasis property = Volume (with StepTimeVolumeAdjustment = Modified).
StepTimeBasis property = MachineSettings.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.Geometry"></a>

### *property* AMBuildSequenceStep.Geometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v261.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step geometry.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.HatchSpacing"></a>

### *property* AMBuildSequenceStep.HatchSpacing *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

>Gets or sets the build sequence step hatch spacing.

> An exception is thrown if the value is less than or equal to 0. An exception is also
> thrown if the StepTimeBasis property is not MachineSettings.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.HeatingMethod"></a>

### *property* AMBuildSequenceStep.HeatingMethod *: [Ansys.Mechanical.DataModel.Enums.AMHeatingMethod](../../../../Mechanical/DataModel/Enums/AMHeatingMethod.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.AMHeatingMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step heating method.

> An exception is thrown if the current heat step type is not Heat.  An exception
> is also thrown if the value is not AMHeatingMethod.Power or AMHeatingMethod.Temperature.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.HeatingTemperature"></a>

### *property* AMBuildSequenceStep.HeatingTemperature *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step heating temperature.

> An exception is thrown if the current heat step type is not Heat. An exception is thrown if the
> HeatingMethod property is not Temperature. An exception is also thrown if the value is less than 0.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.ScanSpeed"></a>

### *property* AMBuildSequenceStep.ScanSpeed *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step scan speed.

> An exception is thrown if the value is less than or equal to 0. An exception is also
> thrown if the StepTimeBasis property is not MachineSettings.
<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.StepTime"></a>

### *property* AMBuildSequenceStep.StepTime *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v261.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step duration.

An exception is thrown if the supplied value is less than or equal to 0.  An exception is also
thrown if this is called with the StepTimeBasis equal to MachineSettings.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.StepTimeBasis"></a>

### *property* AMBuildSequenceStep.StepTimeBasis *: [Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepTimeBasis](../../../../Mechanical/DataModel/Enums/AMBuildSequenceStepTimeBasis.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepTimeBasis) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step time basis.

All build sequence steps require a StepTimeBasis. The default is AMBuildSequenceStepTimeBasis.Time

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.StepTimeVolumeAdjustment"></a>

### *property* AMBuildSequenceStep.StepTimeVolumeAdjustment *: [Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepTimeVolumeAdjustment](../../../../Mechanical/DataModel/Enums/AMBuildSequenceStepTimeVolumeAdjustment.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepTimeVolumeAdjustment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step time volume adjustment.

<!-- !! processed by numpydoc !! -->

<a id="AMBuildSequenceStep.StepType"></a>

### *property* AMBuildSequenceStep.StepType *: [Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepType](../../../../Mechanical/DataModel/Enums/AMBuildSequenceStepType.md#ansys.mechanical.stubs.v261.Ansys.Mechanical.DataModel.Enums.AMBuildSequenceStepType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the build sequence step type.

An exception is thrown if the step type is set on the first or last steps since these steps
must be Heat and Dwell, respectively.

<!-- !! processed by numpydoc !! -->

