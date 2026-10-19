# `MorphingRegionWorksheetRow`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MorphingRegionWorksheetRow(row: Ansys.Common.Interop.DSObjectsAuto.IDSMorphFieldWorksheetRow)

<a id="MorphingRegionWorksheetRow"></a>

### *class* MorphingRegionWorksheetRow

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

This class will allow the definition of the variation of a selected published parameter from the selected Mesh Workflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|-----------------------------------------------------|
| [`GetQuantityName`](#MorphingRegionWorksheetRow.GetQuantityName)   | Gets the quantity name for the current parameter.   |

### Properties

| Name | Description |
|----------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`EndingValue`](#MorphingRegionWorksheetRow.EndingValue)             | Gets or sets the ending value for the selected parameter.                                                            |
| [`NumberOfDivisions`](#MorphingRegionWorksheetRow.NumberOfDivisions) | Gets or sets the number of divisions between starting and ending values.                                             |
| [`Parameter`](#MorphingRegionWorksheetRow.Parameter)                 | Gets or sets the published MeshWorkflows parameter. Additional properties on the row define the parameter variation. |
| [`StartingStep`](#MorphingRegionWorksheetRow.StartingStep)           | Gets or sets the analysis step at which the parameter variation starts.                                              |
| [`StartingValue`](#MorphingRegionWorksheetRow.StartingValue)         | Gets or sets the starting value for the selected parameter.                                                          |

<a id="property-detail"></a>

## Property detail

<a id="MorphingRegionWorksheetRow.EndingValue"></a>

### *property* MorphingRegionWorksheetRow.EndingValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ending value for the selected parameter.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheetRow.NumberOfDivisions"></a>

### *property* MorphingRegionWorksheetRow.NumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the number of divisions between starting and ending values.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheetRow.Parameter"></a>

### *property* MorphingRegionWorksheetRow.Parameter *: [Ansys.ACT.Automation.Mechanical.MorphingRegionParameter](MorphingRegionParameter.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MorphingRegionParameter) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the published MeshWorkflows parameter. Additional properties on the row define the parameter variation.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheetRow.StartingStep"></a>

### *property* MorphingRegionWorksheetRow.StartingStep *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the analysis step at which the parameter variation starts.

<!-- !! processed by numpydoc !! -->

<a id="MorphingRegionWorksheetRow.StartingValue"></a>

### *property* MorphingRegionWorksheetRow.StartingValue *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the starting value for the selected parameter.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MorphingRegionWorksheetRow.GetQuantityName"></a>

### MorphingRegionWorksheetRow.GetQuantityName() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Gets the quantity name for the current parameter.

<!-- !! processed by numpydoc !! -->

