# `AMProcess`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing.AMProcess

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a AMProcess.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetSequence`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.GetSequence)                           | Gets the support removal sequence for a given environment.                        |
| [`ResetAllSequences`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.ResetAllSequences)               | Resets the sequence for all analyses                                              |
| [`AddCartesianMesh`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddCartesianMesh)                 | AddCartesianMesh method.                                                          |
| [`CreateBuildToBaseContact`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.CreateBuildToBaseContact) | Run the CreateBuildToBaseContact action.                                          |
| [`CreateAMBondConnections`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.CreateAMBondConnections)   | Run the CreateAMBondConnections action.                                           |
| [`GenerateAMStrains`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.GenerateAMStrains)               | Run the GenerateAMStrains action.                                                 |
| [`CleanAMStrains`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.CleanAMStrains)                     | Run the CleanAMStrains action.                                                    |
| [`HasAMStrains`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.HasAMStrains)                         | Get the HasAMStrains property.                                                    |
| [`AddSupportGroup`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddSupportGroup)                   | Creates a new AMSupportGroup                                                      |
| [`AddGeneratedAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddGeneratedAMSupport)       | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddPredefinedAMSupport)     | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddSTLAMSupport)                   | Creates a new STLAMSupport                                                        |
| [`Delete`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`BuildGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.BuildGeometry)                     | Gets or sets the PartGeometry using the deprecated BuildGeometry method.   |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#id0)                                        | Gets the internal object. For advanced usage only.                         |
| [`SubsampleRate`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.SubsampleRate)                     | Gets or sets the SubsampleRate.                                            |
| [`ZLocationAtTopOfBase`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.ZLocationAtTopOfBase)       | Gets the ZLocationAtTopOfBase.                                             |
| [`ElementSize`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.ElementSize)                         | Gets or sets the ElementSize.                                              |
| [`WallThickness`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.WallThickness)                     | Gets or sets the WallThickness.                                            |
| [`LengthUnits`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.LengthUnits)                         | Gets or sets the LengthUnits.                                              |
| [`NonlinearEffects`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.NonlinearEffects)               | Gets or sets the NonlinearEffects.                                         |
| [`MeshUsingVoxelization`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.MeshUsingVoxelization)     | Gets or sets the MeshUsingVoxelization.                                    |
| [`BaseGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.BaseGeometry)                       | Gets or sets the BaseGeometry.                                             |
| [`PartGeometry`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.PartGeometry)                       | Gets or sets the PartGeometry.                                             |
| [`DataModelObjectCategory`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.DataModelObjectCategory) | Gets the current DataModelObject’s category.                               |
| [`Children`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Children)                               | Gets the list of children.                                                 |
| [`Comments`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Comments)                               | Gets the list of associated comments.                                      |
| [`Figures`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Figures)                                 | Gets the list of associated figures.                                       |
| [`Images`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Images)                                   | Gets the list of associated images.                                        |
| [`InternalObject`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#id0)                                        | Gets the internal object. For advanced usage only.                         |
| [`Properties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.Properties)                           | Gets the list of properties for this object.                               |
| [`VisibleProperties`](../../../../../../v242/Ansys/ACT/Automation/Mechanical/AdditiveManufacturing/AMProcess.md#AMProcess.VisibleProperties)             | Gets the list of properties that are visible for this object.              |

<a id="property-detail"></a>

## Property detail

<a id="AMProcess.BuildGeometry"></a>

### *property* AMProcess.BuildGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry using the deprecated BuildGeometry method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.InternalObject"></a>

### *property* AMProcess.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSimulationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.SubsampleRate"></a>

### *property* AMProcess.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ZLocationAtTopOfBase"></a>

### *property* AMProcess.ZLocationAtTopOfBase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZLocationAtTopOfBase.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ElementSize"></a>

### *property* AMProcess.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.WallThickness"></a>

### *property* AMProcess.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.LengthUnits"></a>

### *property* AMProcess.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.NonlinearEffects"></a>

### *property* AMProcess.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.MeshUsingVoxelization"></a>

### *property* AMProcess.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.BaseGeometry"></a>

### *property* AMProcess.BaseGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PartGeometry"></a>

### *property* AMProcess.PartGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.DataModelObjectCategory"></a>

### *property* AMProcess.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Children"></a>

### *property* AMProcess.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Comments"></a>

### *property* AMProcess.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Figures"></a>

### *property* AMProcess.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Images"></a>

### *property* AMProcess.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* AMProcess.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Properties"></a>

### *property* AMProcess.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.VisibleProperties"></a>

### *property* AMProcess.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="AMProcess.GetSequence"></a>

### AMProcess.GetSequence(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Analysis))

Gets the support removal sequence for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.ResetAllSequences"></a>

### AMProcess.ResetAllSequences()

Resets the sequence for all analyses

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddCartesianMesh"></a>

### AMProcess.AddCartesianMesh()

AddCartesianMesh method.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateBuildToBaseContact"></a>

### AMProcess.CreateBuildToBaseContact()

Run the CreateBuildToBaseContact action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateAMBondConnections"></a>

### AMProcess.CreateAMBondConnections()

Run the CreateAMBondConnections action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GenerateAMStrains"></a>

### AMProcess.GenerateAMStrains()

Run the GenerateAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CleanAMStrains"></a>

### AMProcess.CleanAMStrains()

Run the CleanAMStrains action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.HasAMStrains"></a>

### AMProcess.HasAMStrains()

Get the HasAMStrains property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSupportGroup"></a>

### AMProcess.AddSupportGroup()

Creates a new AMSupportGroup

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddGeneratedAMSupport"></a>

### AMProcess.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddPredefinedAMSupport"></a>

### AMProcess.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddSTLAMSupport"></a>

### AMProcess.AddSTLAMSupport()

Creates a new STLAMSupport

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Delete"></a>

### AMProcess.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetChildren"></a>

### AMProcess.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### AMProcess.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddComment"></a>

### AMProcess.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddFigure"></a>

### AMProcess.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.AddImage"></a>

### AMProcess.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Activate"></a>

### AMProcess.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CopyTo"></a>

### AMProcess.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.Duplicate"></a>

### AMProcess.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupAllSimilarChildren"></a>

### AMProcess.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GroupSimilarObjects"></a>

### AMProcess.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByName"></a>

### AMProcess.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.PropertyByAPIName"></a>

### AMProcess.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.CreateParameter"></a>

### AMProcess.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.GetParameter"></a>

### AMProcess.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="AMProcess.RemoveParameter"></a>

### AMProcess.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

