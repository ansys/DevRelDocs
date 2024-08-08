# `MeshWorkflowStepGroup`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.MeshWorkflowStepGroup

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Object that wraps IDSEngineeringModelWorkflow.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AddStep`](#MeshWorkflowStepGroup.AddStep)                                                         | Add another operation to the sequence of steps to be executed for the mesh workflow.                                                                                                                                                                                                                                              |
| [`DeleteAllStepsAndClearGeneratedData`](#MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData) | Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained. |
| [`AddSettings`](#MeshWorkflowStepGroup.AddSettings)                                                 | Add the settings of the input SettingsType to the Steps node.                                                                                                                                                                                                                                                                     |
| [`PropagateSettings`](#MeshWorkflowStepGroup.PropagateSettings)                                     | Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.                                              |
| [`DeleteSettings`](#MeshWorkflowStepGroup.DeleteSettings)                                           | Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.                                                                                                                                                                              |
| [`ExecuteAllSteps`](#MeshWorkflowStepGroup.ExecuteAllSteps)                                         | Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).                                                                                                                                                                                                                                    |
| [`ExecuteNextStep`](#MeshWorkflowStepGroup.ExecuteNextStep)                                         | Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.                                                                                                                                                                                                                |
| [`ExecuteUpToStep`](#MeshWorkflowStepGroup.ExecuteUpToStep)                                         | Executes any not yet ready steps up to and including the specified step.                                                                                                                                                                                                                                                          |
| [`RevertToStep`](#MeshWorkflowStepGroup.RevertToStep)                                               | Revert to the specified step; if no checkpoint is available, then an exception will be raised.                                                                                                                                                                                                                                    |
| [`Delete`](#MeshWorkflowStepGroup.Delete)                                                           | Run the Delete action.                                                                                                                                                                                                                                                                                                            |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`GetChildren`](#id1)                                                                               | Gets the list of children, filtered by type.                                                                                                                                                                                                                                                                                      |
| [`AddFigure`](#MeshWorkflowStepGroup.AddFigure)                                                     | Creates a new child Figure.                                                                                                                                                                                                                                                                                                       |
| [`AddImage`](#MeshWorkflowStepGroup.AddImage)                                                       | Creates a new child Image.                                                                                                                                                                                                                                                                                                        |
| [`Activate`](#MeshWorkflowStepGroup.Activate)                                                       | Activate the current object.                                                                                                                                                                                                                                                                                                      |
| [`CopyTo`](#MeshWorkflowStepGroup.CopyTo)                                                           | Copies all visible properties from this object to another.                                                                                                                                                                                                                                                                        |
| [`Duplicate`](#MeshWorkflowStepGroup.Duplicate)                                                     | Creates a copy of the current DataModelObject.                                                                                                                                                                                                                                                                                    |
| [`GroupAllSimilarChildren`](#MeshWorkflowStepGroup.GroupAllSimilarChildren)                         | Run the GroupAllSimilarChildren action.                                                                                                                                                                                                                                                                                           |
| [`GroupSimilarObjects`](#MeshWorkflowStepGroup.GroupSimilarObjects)                                 | Run the GroupSimilarObjects action.                                                                                                                                                                                                                                                                                               |
| [`PropertyByName`](#MeshWorkflowStepGroup.PropertyByName)                                           | Get a property by its unique name.                                                                                                                                                                                                                                                                                                |
| [`PropertyByAPIName`](#MeshWorkflowStepGroup.PropertyByAPIName)                                     | Get a property by its API name.                                                                                                                                                                                                                                                                                                   |
| [`CreateParameter`](#MeshWorkflowStepGroup.CreateParameter)                                         | Creates a new parameter for a Property.                                                                                                                                                                                                                                                                                           |
| [`GetParameter`](#MeshWorkflowStepGroup.GetParameter)                                               | Gets the parameter corresponding to the given property.                                                                                                                                                                                                                                                                           |
| [`RemoveParameter`](#MeshWorkflowStepGroup.RemoveParameter)                                         | Removes the parameter from the parameter set corresponding to the given property.                                                                                                                                                                                                                                                 |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.                                                                                             |
| [`NumberOfAcousticLayers`](#MeshWorkflowStepGroup.NumberOfAcousticLayers)   | Gets the number of layers in the acoustic region. This value is determined based on whether quadratic elements are enabled (see                |
| [`NumberOfPMLs`](#MeshWorkflowStepGroup.NumberOfPMLs)                       | Gets the number of layers in the perfectly meshed layers region. This value is determined based on whether quadratic elements are enabled (see |
| [`NumberOfCores`](#MeshWorkflowStepGroup.NumberOfCores)                     | Defines how many CPU cores to be used in an operation (if supported by the operation).                                                         |
| [`AnalysisFrequency`](#MeshWorkflowStepGroup.AnalysisFrequency)             | Defines the analysis frequency of the acoustic scenario.                                                                                       |
| [`SpeedOfSound`](#MeshWorkflowStepGroup.SpeedOfSound)                       | Defines the speed of sound in the acoustic scenario.                                                                                           |
| [`MeshSize`](#MeshWorkflowStepGroup.MeshSize)                               | Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.                                                   |
| [`QuadraticElements`](#MeshWorkflowStepGroup.QuadraticElements)             | Defines if the quadratic elements are used for the mesh generation.                                                                            |
| [`DataModelObjectCategory`](#MeshWorkflowStepGroup.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                   |
| [`Children`](#MeshWorkflowStepGroup.Children)                               | Gets the list of children.                                                                                                                     |
| [`Figures`](#MeshWorkflowStepGroup.Figures)                                 | Gets the list of associated figures.                                                                                                           |
| [`Images`](#MeshWorkflowStepGroup.Images)                                   | Gets the list of associated images.                                                                                                            |
| [`InternalObject`](#id0)                                                    | Gets the internal object. For advanced usage only.                                                                                             |
| [`Properties`](#MeshWorkflowStepGroup.Properties)                           | Gets the list of properties for this object.                                                                                                   |
| [`VisibleProperties`](#MeshWorkflowStepGroup.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                                                  |

<a id="property-detail"></a>

## Property detail

<a id="MeshWorkflowStepGroup.InternalObject"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSEngineeringModelWorkflowAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfAcousticLayers"></a>

### *property* MeshWorkflowStepGroup.NumberOfAcousticLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of layers in the acoustic region. This value is determined based on whether quadratic elements are enabled (see

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfPMLs"></a>

### *property* MeshWorkflowStepGroup.NumberOfPMLs *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the number of layers in the perfectly meshed layers region. This value is determined based on whether quadratic elements are enabled (see

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.NumberOfCores"></a>

### *property* MeshWorkflowStepGroup.NumberOfCores *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Defines how many CPU cores to be used in an operation (if supported by the operation).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AnalysisFrequency"></a>

### *property* MeshWorkflowStepGroup.AnalysisFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the analysis frequency of the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.SpeedOfSound"></a>

### *property* MeshWorkflowStepGroup.SpeedOfSound *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the speed of sound in the acoustic scenario.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.MeshSize"></a>

### *property* MeshWorkflowStepGroup.MeshSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Defines the mesh size of the acoustic scenario based on the wave velocity and the frequency.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.QuadraticElements"></a>

### *property* MeshWorkflowStepGroup.QuadraticElements *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Defines if the quadratic elements are used for the mesh generation.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DataModelObjectCategory"></a>

### *property* MeshWorkflowStepGroup.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Children"></a>

### *property* MeshWorkflowStepGroup.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Figures"></a>

### *property* MeshWorkflowStepGroup.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Images"></a>

### *property* MeshWorkflowStepGroup.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshWorkflowStepGroup.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Properties"></a>

### *property* MeshWorkflowStepGroup.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.VisibleProperties"></a>

### *property* MeshWorkflowStepGroup.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshWorkflowStepGroup.AddStep"></a>

### MeshWorkflowStepGroup.AddStep(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType](../../../../../v241/Ansys/Mechanical/DataModel/MechanicalEnums/MeshWorkflow/OperationType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.OperationType))

Add another operation to the sequence of steps to be executed for the mesh workflow.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData"></a>

### MeshWorkflowStepGroup.DeleteAllStepsAndClearGeneratedData()

Deletes all steps and reset workflow type to undefined and also resets all inactive geometry parts/bodies to active again, clears the output data, and resets the state of the child objects (“Input”, “Steps”, “Output”) to the initial state. However, any user-defined settings such as the “Input” node scoping are retained.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddSettings"></a>

### MeshWorkflowStepGroup.AddSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Add the settings of the input SettingsType to the Steps node.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropagateSettings"></a>

### MeshWorkflowStepGroup.PropagateSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Propagate the settings of the input SettingsType to the attributes of the Step nodes. The meshing attributes of the Step nodes will then be automatically defined based on the physical parameters of the settings. Otherwise, the meshing attributes need to be manually specified.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.DeleteSettings"></a>

### MeshWorkflowStepGroup.DeleteSettings(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/SettingsType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.SettingsType))

Delete the settings of the input SettingsType from the Steps node. All the Settings specific entries are removed automatically to the Steps details.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteAllSteps"></a>

### MeshWorkflowStepGroup.ExecuteAllSteps()

Executes all steps defined under the “StepGroup” object (which is the “Steps” node in the UI).

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteNextStep"></a>

### MeshWorkflowStepGroup.ExecuteNextStep()

Executes the next step, i.e. the next operation which is ready to be executed under the parent “StepGroup” object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.ExecuteUpToStep"></a>

### MeshWorkflowStepGroup.ExecuteUpToStep(arg: System.Object)

Executes any not yet ready steps up to and including the specified step.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RevertToStep"></a>

### MeshWorkflowStepGroup.RevertToStep(arg: System.Object)

Revert to the specified step; if no checkpoint is available, then an exception will be raised.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Delete"></a>

### MeshWorkflowStepGroup.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetChildren"></a>

### MeshWorkflowStepGroup.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshWorkflowStepGroup.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddFigure"></a>

### MeshWorkflowStepGroup.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.AddImage"></a>

### MeshWorkflowStepGroup.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Activate"></a>

### MeshWorkflowStepGroup.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CopyTo"></a>

### MeshWorkflowStepGroup.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.Duplicate"></a>

### MeshWorkflowStepGroup.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupAllSimilarChildren"></a>

### MeshWorkflowStepGroup.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GroupSimilarObjects"></a>

### MeshWorkflowStepGroup.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByName"></a>

### MeshWorkflowStepGroup.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.PropertyByAPIName"></a>

### MeshWorkflowStepGroup.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.CreateParameter"></a>

### MeshWorkflowStepGroup.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.GetParameter"></a>

### MeshWorkflowStepGroup.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshWorkflowStepGroup.RemoveParameter"></a>

### MeshWorkflowStepGroup.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

