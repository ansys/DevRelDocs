# `ImportedCondensedPart`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.ImportedCondensedPart"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ImportedCondensedPart

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ImportedCondensedPart.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ImportedCondensedPart.Activate)                                                         | Activate the current object.                                                      |
| [`AddCommandSnippet`](#ImportedCondensedPart.AddCommandSnippet)                                       | Creates a new CommandSnippet                                                      |
| [`AddComment`](#ImportedCondensedPart.AddComment)                                                     | Creates a new child Comment.                                                      |
| [`AddFigure`](#ImportedCondensedPart.AddFigure)                                                       | Creates a new child Figure.                                                       |
| [`AddImage`](#ImportedCondensedPart.AddImage)                                                         | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#ImportedCondensedPart.ClearGeneratedData)                                     | Run the ClearGeneratedData action.                                                |
| [`CopyTo`](#ImportedCondensedPart.CopyTo)                                                             | Copies all visible properties from this object to another.                        |
| [`CreateContactFromNodeIds`](#ImportedCondensedPart.CreateContactFromNodeIds)                         | CreateContactFromNodeIds method.                                                  |
| [`CreateContacts`](#ImportedCondensedPart.CreateContacts)                                             | CreateContacts method.                                                            |
| [`CreateJointFromNodeIds`](#ImportedCondensedPart.CreateJointFromNodeIds)                             | CreateJointFromNodeIds method.                                                    |
| [`CreateJoints`](#ImportedCondensedPart.CreateJoints)                                                 | CreateJoints method.                                                              |
| [`CreateNodalNamedSelectionFromNodeIds`](#ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds) | CreateNodalNamedSelectionFromNodeIds method.                                      |
| [`CreateNodalNamedSelections`](#ImportedCondensedPart.CreateNodalNamedSelections)                     | CreateNodalNamedSelections method.                                                |
| [`CreateParameter`](#ImportedCondensedPart.CreateParameter)                                           | Creates a new parameter for a Property.                                           |
| [`CreateRemotePointFromNodeIds`](#ImportedCondensedPart.CreateRemotePointFromNodeIds)                 | CreateRemotePointFromNodeIds method.                                              |
| [`CreateRemotePoints`](#ImportedCondensedPart.CreateRemotePoints)                                     | CreateRemotePoints method.                                                        |
| [`Delete`](#ImportedCondensedPart.Delete)                                                             | Run the Delete action.                                                            |
| [`Duplicate`](#ImportedCondensedPart.Duplicate)                                                       | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ImportedCondensedPart.GetChildren)                                                   | Gets the list of children, filtered by type.                                      |
| [`GetOriginalNodeCoordinates`](#ImportedCondensedPart.GetOriginalNodeCoordinates)                     | Get all the Node Locations of the Original Interfaces Data table.                 |
| [`GetParameter`](#ImportedCondensedPart.GetParameter)                                                 | Gets the parameter corresponding to the given property.                           |
| [`GetTransformedNodeCoordinates`](#ImportedCondensedPart.GetTransformedNodeCoordinates)               | Get all the Node Locations of the Transformed Interfaces Data table.              |
| [`GroupAllSimilarChildren`](#ImportedCondensedPart.GroupAllSimilarChildren)                           | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ImportedCondensedPart.GroupSimilarObjects)                                   | Run the GroupSimilarObjects action.                                               |
| [`ImportCondensedPart`](#ImportedCondensedPart.ImportCondensedPart)                                   | Run the Import Condensed Part action.                                             |
| [`PropertyByAPIName`](#ImportedCondensedPart.PropertyByAPIName)                                       | Get a property by its API name.                                                   |
| [`PropertyByName`](#ImportedCondensedPart.PropertyByName)                                             | Get a property by its unique name.                                                |
| [`ReadInterfaceData`](#ImportedCondensedPart.ReadInterfaceData)                                       | Run the Read Interface Data action.                                               |
| [`RemoveParameter`](#ImportedCondensedPart.RemoveParameter)                                           | Removes the parameter from the parameter set corresponding to the given property. |
| [`UpdateNodeLocation`](#ImportedCondensedPart.UpdateNodeLocation)                                     | Update Node Location of Original Interfaces Data view table.                      |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| [`ActualNodeOffset`](#ImportedCondensedPart.ActualNodeOffset)               | Gets the ActualNodeOffset.                                                                                           |
| [`Children`](#ImportedCondensedPart.Children)                               | Gets the list of children.                                                                                           |
| [`Comments`](#ImportedCondensedPart.Comments)                               | Gets the list of associated comments.                                                                                |
| [`CondensedPartFileName`](#ImportedCondensedPart.CondensedPartFileName)     | Gets or sets the CondensedPartFileName.                                                                              |
| [`CondensedPartUnitSystem`](#ImportedCondensedPart.CondensedPartUnitSystem) | Gets or sets the CondensedPartUnitSystem.                                                                            |
| [`CoordinateSystem`](#ImportedCondensedPart.CoordinateSystem)               | Gets or sets the CoordinateSystem.                                                                                   |
| [`DataModelObjectCategory`](#ImportedCondensedPart.DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                         |
| [`ExpansionStatus`](#ImportedCondensedPart.ExpansionStatus)                 | “ExpansionStatus” property defines if results can be expanded of the imported condensed part or not.                 |
| [`Figures`](#ImportedCondensedPart.Figures)                                 | Gets the list of associated figures.                                                                                 |
| [`FutureIntent`](#ImportedCondensedPart.FutureIntent)                       | “FutureIntent” property defines the type of solver supported to perform a use pass with the imported condensed part. |
| [`GeometrySelection`](#ImportedCondensedPart.GeometrySelection)             | Gets or sets the GeometrySelection.                                                                                  |
| [`Images`](#ImportedCondensedPart.Images)                                   | Gets the list of associated images.                                                                                  |
| [`ImportFileFormat`](#ImportedCondensedPart.ImportFileFormat)               | Gets or sets the ImportFileFormat.                                                                                   |
| [`ImportStatus`](#ImportedCondensedPart.ImportStatus)                       | Gets the ImportStatus.                                                                                               |
| [`InternalObject`](#ImportedCondensedPart.InternalObject)                   | Gets the internal object. For advanced usage only.                                                                   |
| [`NodeOffset`](#ImportedCondensedPart.NodeOffset)                           | Gets or sets the NodeOffset.                                                                                         |
| [`NumberInterfaceEntries`](#ImportedCondensedPart.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                                                                                     |
| [`NumberMasterNodes`](#ImportedCondensedPart.NumberMasterNodes)             | Gets the NumberMasterNodes.                                                                                          |
| [`Physics`](#ImportedCondensedPart.Physics)                                 | Gets the Physics.                                                                                                    |
| [`Properties`](#ImportedCondensedPart.Properties)                           | Gets the list of properties for this object.                                                                         |
| [`ReferenceTemperature`](#ImportedCondensedPart.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                                                                               |
| [`SolutionName`](#ImportedCondensedPart.SolutionName)                       | Gets or sets the SolutionName.                                                                                       |
| [`SolutionNameMode`](#ImportedCondensedPart.SolutionNameMode)               | Gets or sets the SolutionNameMode.                                                                                   |
| [`SolverFilesDirectory`](#ImportedCondensedPart.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                                                                       |
| [`SolverUnitSystem`](#ImportedCondensedPart.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                                                                                   |
| [`SolverUnits`](#ImportedCondensedPart.SolverUnits)                         | Gets or sets the SolverUnits.                                                                                        |
| [`Source`](#ImportedCondensedPart.Source)                                   | Gets the Source Substructure analysis information of the Imported Condensed Part.                                    |
| [`Suppressed`](#ImportedCondensedPart.Suppressed)                           | Gets or sets the Suppressed.                                                                                         |
| [`TemperatureUnits`](#ImportedCondensedPart.TemperatureUnits)               | Gets the TemperatureUnits.                                                                                           |
| [`VisibleProperties`](#ImportedCondensedPart.VisibleProperties)             | Gets the list of properties that are visible for this object.                                                        |

<a id="property-detail"></a>

## Property detail

<a id="ImportedCondensedPart.ActualNodeOffset"></a>

### *property* ImportedCondensedPart.ActualNodeOffset *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ActualNodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Children"></a>

### *property* ImportedCondensedPart.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Comments"></a>

### *property* ImportedCondensedPart.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CondensedPartFileName"></a>

### *property* ImportedCondensedPart.CondensedPartFileName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartFileName.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CondensedPartUnitSystem"></a>

### *property* ImportedCondensedPart.CondensedPartUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CondensedPartUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CoordinateSystem"></a>

### *property* ImportedCondensedPart.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.DataModelObjectCategory"></a>

### *property* ImportedCondensedPart.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ExpansionStatus"></a>

### *property* ImportedCondensedPart.ExpansionStatus *: [Ansys.Mechanical.DataModel.Enums.ExpansionStatus](../../../Mechanical/DataModel/Enums/ExpansionStatus.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ExpansionStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

“ExpansionStatus” property defines if results can be expanded of the imported condensed part or not.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Figures"></a>

### *property* ImportedCondensedPart.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.FutureIntent"></a>

### *property* ImportedCondensedPart.FutureIntent *: [Ansys.Mechanical.DataModel.Enums.FutureIntentType](../../../Mechanical/DataModel/Enums/FutureIntentType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.FutureIntentType) | [None](https://docs.python.org/3/library/constants.html#None)*

“FutureIntent” property defines the type of solver supported to perform a use pass with the imported condensed part.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GeometrySelection"></a>

### *property* ImportedCondensedPart.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Images"></a>

### *property* ImportedCondensedPart.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportFileFormat"></a>

### *property* ImportedCondensedPart.ImportFileFormat *: [Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat](../../../Mechanical/DataModel/Enums/CondensedPartFileFormat.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CondensedPartFileFormat) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportFileFormat.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportStatus"></a>

### *property* ImportedCondensedPart.ImportStatus *: [Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus](../../../Mechanical/DataModel/Enums/ImportedCondensedPartStatus.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.ImportedCondensedPartStatus) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ImportStatus.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.InternalObject"></a>

### *property* ImportedCondensedPart.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NodeOffset"></a>

### *property* ImportedCondensedPart.NodeOffset *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NumberInterfaceEntries"></a>

### *property* ImportedCondensedPart.NumberInterfaceEntries *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.NumberMasterNodes"></a>

### *property* ImportedCondensedPart.NumberMasterNodes *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Physics"></a>

### *property* ImportedCondensedPart.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Properties"></a>

### *property* ImportedCondensedPart.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ReferenceTemperature"></a>

### *property* ImportedCondensedPart.ReferenceTemperature *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolutionName"></a>

### *property* ImportedCondensedPart.SolutionName *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolutionNameMode"></a>

### *property* ImportedCondensedPart.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverFilesDirectory"></a>

### *property* ImportedCondensedPart.SolverFilesDirectory *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnitSystem"></a>

### *property* ImportedCondensedPart.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.SolverUnits"></a>

### *property* ImportedCondensedPart.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Source"></a>

### *property* ImportedCondensedPart.Source *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the Source Substructure analysis information of the Imported Condensed Part.
An exception will be thrown if there is no linked Substructure analysis in the upstream.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Suppressed"></a>

### *property* ImportedCondensedPart.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.TemperatureUnits"></a>

### *property* ImportedCondensedPart.TemperatureUnits *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.VisibleProperties"></a>

### *property* ImportedCondensedPart.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ImportedCondensedPart.Activate"></a>

### ImportedCondensedPart.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddCommandSnippet"></a>

### ImportedCondensedPart.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddComment"></a>

### ImportedCondensedPart.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddFigure"></a>

### ImportedCondensedPart.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.AddImage"></a>

### ImportedCondensedPart.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ClearGeneratedData"></a>

### ImportedCondensedPart.ClearGeneratedData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CopyTo"></a>

### ImportedCondensedPart.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateContactFromNodeIds"></a>

### ImportedCondensedPart.CreateContactFromNodeIds(selectedNodeIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Ansys.ACT.Automation.Mechanical.DataModelObject

CreateContactFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateContacts"></a>

### ImportedCondensedPart.CreateContacts(selectedInterfaceIDNumbers: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Iterable[Ansys.ACT.Automation.Mechanical.DataModelObject]

CreateContacts method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateJointFromNodeIds"></a>

### ImportedCondensedPart.CreateJointFromNodeIds(selectedNodeIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Ansys.ACT.Automation.Mechanical.DataModelObject

CreateJointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateJoints"></a>

### ImportedCondensedPart.CreateJoints(selectedInterfaceIDNumbers: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Iterable[Ansys.ACT.Automation.Mechanical.DataModelObject]

CreateJoints method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds"></a>

### ImportedCondensedPart.CreateNodalNamedSelectionFromNodeIds(selectedNodeIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Ansys.ACT.Automation.Mechanical.DataModelObject

CreateNodalNamedSelectionFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateNodalNamedSelections"></a>

### ImportedCondensedPart.CreateNodalNamedSelections(selectedInterfaceIDNumbers: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Iterable[Ansys.ACT.Automation.Mechanical.DataModelObject]

CreateNodalNamedSelections method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateParameter"></a>

### ImportedCondensedPart.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateRemotePointFromNodeIds"></a>

### ImportedCondensedPart.CreateRemotePointFromNodeIds(selectedNodeIds: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Ansys.ACT.Automation.Mechanical.DataModelObject

CreateRemotePointFromNodeIds method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.CreateRemotePoints"></a>

### ImportedCondensedPart.CreateRemotePoints(selectedInterfaceIDNumbers: Iterable[[int](https://docs.python.org/3/library/functions.html#int)]) → Iterable[Ansys.ACT.Automation.Mechanical.DataModelObject]

CreateRemotePoints method.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Delete"></a>

### ImportedCondensedPart.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.Duplicate"></a>

### ImportedCondensedPart.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetChildren"></a>

### ImportedCondensedPart.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetOriginalNodeCoordinates"></a>

### ImportedCondensedPart.GetOriginalNodeCoordinates() → Iterable[[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[int](https://docs.python.org/3/library/functions.html#int), Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)]]]

Get all the Node Locations of the Original Interfaces Data table.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetParameter"></a>

### ImportedCondensedPart.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GetTransformedNodeCoordinates"></a>

### ImportedCondensedPart.GetTransformedNodeCoordinates() → Iterable[[dict](https://docs.python.org/3/library/stdtypes.html#dict)[[int](https://docs.python.org/3/library/functions.html#int), Iterable[[Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)]]]

Get all the Node Locations of the Transformed Interfaces Data table.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GroupAllSimilarChildren"></a>

### ImportedCondensedPart.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.GroupSimilarObjects"></a>

### ImportedCondensedPart.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ImportCondensedPart"></a>

### ImportedCondensedPart.ImportCondensedPart() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Import Condensed Part action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.PropertyByAPIName"></a>

### ImportedCondensedPart.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.PropertyByName"></a>

### ImportedCondensedPart.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.ReadInterfaceData"></a>

### ImportedCondensedPart.ReadInterfaceData() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Read Interface Data action.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.RemoveParameter"></a>

### ImportedCondensedPart.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ImportedCondensedPart.UpdateNodeLocation"></a>

### ImportedCondensedPart.UpdateNodeLocation(iNodeID: [int](https://docs.python.org/3/library/functions.html#int), locX: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), locY: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), locZ: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), rotX: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), rotY: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity), rotZ: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity)) → [None](https://docs.python.org/3/library/constants.html#None)

Update Node Location of Original Interfaces Data view table.

<!-- !! processed by numpydoc !! -->

