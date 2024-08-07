# `CondensedPart`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a CondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ExportCondensedPart`](#CondensedPart.ExportCondensedPart)                                                                                       | Run the Export Condensed Part action.                                             |
| [`DetectCondensedPartInterface`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.DetectCondensedPartInterface) | Run the DetectCondensedPartInterface action.                                      |
| [`GenerateCondensedParts`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GenerateCondensedParts)             | Run the GenerateCondensedParts action.                                            |
| [`AddCommandSnippet`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.AddCommandSnippet)                       | Creates a new CommandSnippet                                                      |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.ClearGeneratedData)                     | Run the ClearGeneratedData action.                                                |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Delete)                                             | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#id1)                                                         | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.AddComment)                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.AddFigure)                                       | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.AddImage)                                         | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Activate)                                         | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.CopyTo)                                             | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Duplicate)                                       | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.PropertyByName)                             | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.PropertyByAPIName)                       | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.CreateParameter)                           | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GetParameter)                                 | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`Interfaces`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Interfaces)                           | Returns the Interfaces of the condensed part                  |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`NumberOfModes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.NumberOfModes)                     | Gets or sets the NumberOfModes.                               |
| [`MaximumFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.MaximumFrequency)               | Gets or sets the MaximumFrequency.                            |
| [`MinimumFrequency`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.MinimumFrequency)               | Gets or sets the MinimumFrequency.                            |
| [`AttachmentMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.AttachmentMethod)               | Gets or sets the AttachmentMethod.                            |
| [`FutureExpansion`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.FutureExpansion)                 | Gets or sets the FutureExpansion.                             |
| [`FutureIntent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.FutureIntent)                       | Gets or sets the FutureIntent.                                |
| [`GenerateDampingMatrix`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GenerateDampingMatrix)     | Gets or sets the GenerateDampingMatrix.                       |
| [`InterfaceMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.InterfaceMethod)                 | Gets or sets the InterfaceMethod.                             |
| [`KeepFilesFor`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.KeepFilesFor)                       | Gets or sets the KeepFilesFor.                                |
| [`LumpedMassFormulation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.LumpedMassFormulation)     | Gets or sets the LumpedMassFormulation.                       |
| [`PointMassTreatment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.PointMassTreatment)           | Gets or sets the PointMassTreatment.                          |
| [`ReductionMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.ReductionMethod)                 | Gets or sets the ReductionMethod.                             |
| [`SolverType`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolverType)                           | Gets or sets the SolverType.                                  |
| [`StoreBasisResults`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.StoreBasisResults)             | Gets or sets the StoreBasisResults.                           |
| [`RangeSearch`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.RangeSearch)                         | Gets or sets the RangeSearch.                                 |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.DataModelObjectCategory) | Gets the current DataModelObjectâ€™s category.                  |
| [`NumberInterfaceEntries`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`SolutionName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolverFilesDirectory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`TemperatureUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`ReferenceTemperature`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`Physics`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Physics)                                 | Gets the Physics.                                             |
| [`SolverUnitSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolutionNameMode`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverUnits`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`GeometrySelection`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Children)                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Comments)                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Figures)                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#id0)                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.Properties)                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/CondensedPart.md#CondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedPart.Interfaces"></a>

### *property* CondensedPart.Interfaces *: [Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces](CondensedPartInterfaces.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CondensedPartInterfaces) | [None](https://docs.python.org/3/library/constants.html#None)*

Returns the Interfaces of the condensed part

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.InternalObject"></a>

### *property* CondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberOfModes"></a>

### *property* CondensedPart.NumberOfModes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NumberOfModes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.MaximumFrequency"></a>

### *property* CondensedPart.MaximumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaximumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.MinimumFrequency"></a>

### *property* CondensedPart.MinimumFrequency *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MinimumFrequency.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AttachmentMethod"></a>

### *property* CondensedPart.AttachmentMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod](../../../Mechanical/DataModel/Enums/CondensedPartCMSAttachmentMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartCMSAttachmentMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AttachmentMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.FutureExpansion"></a>

### *property* CondensedPart.FutureExpansion *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureExpansion.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.FutureIntent"></a>

### *property* CondensedPart.FutureIntent *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FutureIntent.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GenerateDampingMatrix"></a>

### *property* CondensedPart.GenerateDampingMatrix *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GenerateDampingMatrix.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.InterfaceMethod"></a>

### *property* CondensedPart.InterfaceMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod](../../../Mechanical/DataModel/Enums/CondensedPartInterfaceMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartInterfaceMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the InterfaceMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.KeepFilesFor"></a>

### *property* CondensedPart.KeepFilesFor *: [Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor](../../../Mechanical/DataModel/Enums/CondensedPartKeepFilesFor.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartKeepFilesFor) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the KeepFilesFor.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.LumpedMassFormulation"></a>

### *property* CondensedPart.LumpedMassFormulation *: [Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation](../../../Mechanical/DataModel/Enums/CondensedPartLumpedMassFormulation.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartLumpedMassFormulation) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LumpedMassFormulation.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PointMassTreatment"></a>

### *property* CondensedPart.PointMassTreatment *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment](../../../Mechanical/DataModel/Enums/CondensedPartPointMassTreatment.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPointMassTreatment) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PointMassTreatment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ReductionMethod"></a>

### *property* CondensedPart.ReductionMethod *: [Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod](../../../Mechanical/DataModel/Enums/CondensedPartReductionMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartReductionMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReductionMethod.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverType"></a>

### *property* CondensedPart.SolverType *: [Ansys.Mechanical.DataModel.Enums.SolverType](../../../Mechanical/DataModel/Enums/SolverType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverType.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.StoreBasisResults"></a>

### *property* CondensedPart.StoreBasisResults *: [Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled](../../../Mechanical/DataModel/Enums/YesNoProgrammedControlled.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.YesNoProgrammedControlled) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the StoreBasisResults.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.RangeSearch"></a>

### *property* CondensedPart.RangeSearch *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the RangeSearch.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.DataModelObjectCategory"></a>

### *property* CondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObjectâ€™s category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberInterfaceEntries"></a>

### *property* CondensedPart.NumberInterfaceEntries *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.NumberMasterNodes"></a>

### *property* CondensedPart.NumberMasterNodes *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolutionName"></a>

### *property* CondensedPart.SolutionName *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverFilesDirectory"></a>

### *property* CondensedPart.SolverFilesDirectory *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.TemperatureUnits"></a>

### *property* CondensedPart.TemperatureUnits *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ReferenceTemperature"></a>

### *property* CondensedPart.ReferenceTemperature *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Physics"></a>

### *property* CondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverUnitSystem"></a>

### *property* CondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolutionNameMode"></a>

### *property* CondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.SolverUnits"></a>

### *property* CondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Suppressed"></a>

### *property* CondensedPart.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GeometrySelection"></a>

### *property* CondensedPart.GeometrySelection *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Children"></a>

### *property* CondensedPart.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Comments"></a>

### *property* CondensedPart.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Figures"></a>

### *property* CondensedPart.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Images"></a>

### *property* CondensedPart.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* CondensedPart.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Properties"></a>

### *property* CondensedPart.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.VisibleProperties"></a>

### *property* CondensedPart.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPart.ExportCondensedPart"></a>

### CondensedPart.ExportCondensedPart(exportFileName: System.String)

Run the Export Condensed Part action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.DetectCondensedPartInterface"></a>

### CondensedPart.DetectCondensedPartInterface()

Run the DetectCondensedPartInterface action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GenerateCondensedParts"></a>

### CondensedPart.GenerateCondensedParts()

Run the GenerateCondensedParts action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddCommandSnippet"></a>

### CondensedPart.AddCommandSnippet()

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.ClearGeneratedData"></a>

### CondensedPart.ClearGeneratedData()

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Delete"></a>

### CondensedPart.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetChildren"></a>

### CondensedPart.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### CondensedPart.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddComment"></a>

### CondensedPart.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddFigure"></a>

### CondensedPart.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.AddImage"></a>

### CondensedPart.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Activate"></a>

### CondensedPart.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.CopyTo"></a>

### CondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.Duplicate"></a>

### CondensedPart.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GroupAllSimilarChildren"></a>

### CondensedPart.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GroupSimilarObjects"></a>

### CondensedPart.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PropertyByName"></a>

### CondensedPart.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.PropertyByAPIName"></a>

### CondensedPart.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.CreateParameter"></a>

### CondensedPart.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.GetParameter"></a>

### CondensedPart.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPart.RemoveParameter"></a>

### CondensedPart.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

