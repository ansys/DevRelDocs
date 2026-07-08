# `AMProcess`

<a id="ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess"></a>

#### *class* Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#AMProcess.Activate)                                 | Activate the current object.                                                      |
| [`AddCartesianMesh`](#AMProcess.AddCartesianMesh)                 | AddCartesianMesh method.                                                          |
| [`AddComment`](#AMProcess.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMProcess.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddGeneratedAMSupport`](#AMProcess.AddGeneratedAMSupport)       | Creates a new GeneratedAMSupport                                                  |
| [`AddImage`](#AMProcess.AddImage)                                 | Creates a new child Image.                                                        |
| [`AddPredefinedAMSupport`](#AMProcess.AddPredefinedAMSupport)     | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#AMProcess.AddSTLAMSupport)                   | Creates a new STLAMSupport                                                        |
| [`AddSupportGroup`](#AMProcess.AddSupportGroup)                   | Creates a new AMSupportGroup                                                      |
| [`CleanAMStrains`](#AMProcess.CleanAMStrains)                     | Run the CleanAMStrains action.                                                    |
| [`CopyTo`](#AMProcess.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`CreateAMBondConnections`](#AMProcess.CreateAMBondConnections)   | Run the CreateAMBondConnections action.                                           |
| [`CreateBuildToBaseContact`](#AMProcess.CreateBuildToBaseContact) | Run the CreateBuildToBaseContact action.                                          |
| [`CreateParameter`](#AMProcess.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`Delete`](#AMProcess.Delete)                                     | Run the Delete action.                                                            |
| [`Duplicate`](#AMProcess.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GenerateAMStrains`](#AMProcess.GenerateAMStrains)               | Run the GenerateAMStrains action.                                                 |
| [`GetChildren`](#AMProcess.GetChildren)                           | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#AMProcess.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`GetSequence`](#AMProcess.GetSequence)                           | Gets the support removal sequence for a given environment.                        |
| [`GroupAllSimilarChildren`](#AMProcess.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMProcess.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`HasAMStrains`](#AMProcess.HasAMStrains)                         | Get the HasAMStrains property.                                                    |
| [`PropertyByAPIName`](#AMProcess.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`PropertyByName`](#AMProcess.PropertyByName)                     | Get a property by its unique name.                                                |
| [`RemoveParameter`](#AMProcess.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |
| [`ResetAllSequences`](#AMProcess.ResetAllSequences)               | Resets the sequence for all analyses                                              |

### Properties

| Name | Description |
|-----------------------------------------------------------------|--------------------------------------------------------------------------|
| [`BaseGeometry`](#AMProcess.BaseGeometry)                       | Gets or sets the BaseGeometry.                                           |
| [`BuildGeometry`](#AMProcess.BuildGeometry)                     | Gets or sets the PartGeometry using the deprecated BuildGeometry method. |
| [`Children`](#AMProcess.Children)                               | Gets the list of children.                                               |
| [`Comments`](#AMProcess.Comments)                               | Gets the list of associated comments.                                    |
| [`DataModelObjectCategory`](#AMProcess.DataModelObjectCategory) | Gets the current DataModelObject’s category.                             |
| [`ElementSize`](#AMProcess.ElementSize)                         | Gets or sets the ElementSize.                                            |
| [`Figures`](#AMProcess.Figures)                                 | Gets the list of associated figures.                                     |
| [`Images`](#AMProcess.Images)                                   | Gets the list of associated images.                                      |
| [`InternalObject`](#AMProcess.InternalObject)                   | Gets the internal object. For advanced usage only.                       |
| [`LayerHeight`](#AMProcess.LayerHeight)                         | Gets the element layer height used for the AM build step.                |
| [`LengthUnits`](#AMProcess.LengthUnits)                         | Gets or sets the LengthUnits.                                            |
| [`MeshUsingVoxelization`](#AMProcess.MeshUsingVoxelization)     | Gets or sets the MeshUsingVoxelization.                                  |
| [`NonlinearEffects`](#AMProcess.NonlinearEffects)               | Gets or sets the NonlinearEffects.                                       |
| [`PartGeometry`](#AMProcess.PartGeometry)                       | Gets or sets the PartGeometry.                                           |
| [`Properties`](#AMProcess.Properties)                           | Gets the list of properties for this object.                             |
| [`SubsampleRate`](#AMProcess.SubsampleRate)                     | Gets or sets the SubsampleRate.                                          |
| [`VisibleProperties`](#AMProcess.VisibleProperties)             | Gets the list of properties that are visible for this object.            |
| [`WallThickness`](#AMProcess.WallThickness)                     | Gets or sets the WallThickness.                                          |
| [`ZLocationAtTopOfBase`](#AMProcess.ZLocationAtTopOfBase)       | Gets the ZLocationAtTopOfBase.                                           |

<a id="property-detail"></a>

## Property detail

<a id="AMProcess.BaseGeometry"></a>

### *property* AMProcess.BaseGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.BuildGeometry"></a>

### *property* AMProcess.BuildGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry using the deprecated BuildGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Children"></a>

### *property* AMProcess.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Comments"></a>

### *property* AMProcess.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.DataModelObjectCategory"></a>

### *property* AMProcess.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ElementSize"></a>

### *property* AMProcess.ElementSize *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Figures"></a>

### *property* AMProcess.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Images"></a>

### *property* AMProcess.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.InternalObject"></a>

### *property* AMProcess.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSimulationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.LayerHeight"></a>

### *property* AMProcess.LayerHeight *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the element layer height used for the AM build step.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.LengthUnits"></a>

### *property* AMProcess.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.MeshUsingVoxelization"></a>

### *property* AMProcess.MeshUsingVoxelization *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.NonlinearEffects"></a>

### *property* AMProcess.NonlinearEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PartGeometry"></a>

### *property* AMProcess.PartGeometry *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v252.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Properties"></a>

### *property* AMProcess.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.SubsampleRate"></a>

### *property* AMProcess.SubsampleRate *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.VisibleProperties"></a>

### *property* AMProcess.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.WallThickness"></a>

### *property* AMProcess.WallThickness *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ZLocationAtTopOfBase"></a>

### *property* AMProcess.ZLocationAtTopOfBase *: [Ansys.Core.Units.Quantity](../../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v252.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZLocationAtTopOfBase.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMProcess.Activate"></a>

### AMProcess.Activate() → [None](https://docs.python.org/3/library/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddCartesianMesh"></a>

### AMProcess.AddCartesianMesh() → [Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod](../MeshControls/AutomaticMethod.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.MeshControls.AutomaticMethod)

AddCartesianMesh method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddComment"></a>

### AMProcess.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddFigure"></a>

### AMProcess.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddGeneratedAMSupport"></a>

### AMProcess.AddGeneratedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport](GeneratedAMSupport.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.GeneratedAMSupport)

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddImage"></a>

### AMProcess.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddPredefinedAMSupport"></a>

### AMProcess.AddPredefinedAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport](PredefinedAMSupport.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.PredefinedAMSupport)

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSTLAMSupport"></a>

### AMProcess.AddSTLAMSupport() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport](STLAMSupport.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.STLAMSupport)

Creates a new STLAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSupportGroup"></a>

### AMProcess.AddSupportGroup() → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup](AMSupportGroup.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportGroup)

Creates a new AMSupportGroup

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CleanAMStrains"></a>

### AMProcess.CleanAMStrains() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CleanAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CopyTo"></a>

### AMProcess.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/library/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateAMBondConnections"></a>

### AMProcess.CreateAMBondConnections() → [None](https://docs.python.org/3/library/constants.html#None)

Run the CreateAMBondConnections action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateBuildToBaseContact"></a>

### AMProcess.CreateBuildToBaseContact() → [Ansys.ACT.Automation.Mechanical.Connections.ContactRegion](../Connections/ContactRegion.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Connections.ContactRegion)

Run the CreateBuildToBaseContact action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateParameter"></a>

### AMProcess.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Delete"></a>

### AMProcess.Delete() → [None](https://docs.python.org/3/library/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Duplicate"></a>

### AMProcess.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v252.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GenerateAMStrains"></a>

### AMProcess.GenerateAMStrains() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GenerateAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetChildren"></a>

### AMProcess.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetParameter"></a>

### AMProcess.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetSequence"></a>

### AMProcess.GetSequence(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.Analysis)) → [Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence](AMSupportRemovalSequence.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMSupportRemovalSequence)

Gets the support removal sequence for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupAllSimilarChildren"></a>

### AMProcess.GroupAllSimilarChildren() → [None](https://docs.python.org/3/library/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupSimilarObjects"></a>

### AMProcess.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v252.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.HasAMStrains"></a>

### AMProcess.HasAMStrains() → [bool](https://docs.python.org/3/library/functions.html#bool)

Get the HasAMStrains property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByAPIName"></a>

### AMProcess.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByName"></a>

### AMProcess.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.RemoveParameter"></a>

### AMProcess.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str)) → [None](https://docs.python.org/3/library/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ResetAllSequences"></a>

### AMProcess.ResetAllSequences() → [None](https://docs.python.org/3/library/constants.html#None)

Resets the sequence for all analyses

<!-- !! processed by numpydoc !! -->

