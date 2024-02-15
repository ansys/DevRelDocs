# AMProcess

### *class* AMProcess

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a AMProcess.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetSequence`](#AMProcess.GetSequence)                           | Gets the support removal sequence for a given environment.                        |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ResetAllSequences`](#AMProcess.ResetAllSequences)               | Resets the sequence for all analyses                                              |
| [`AddCartesianMesh`](#AMProcess.AddCartesianMesh)                 | AddCartesianMesh method.                                                          |
| [`CreateBuildToBaseContact`](#AMProcess.CreateBuildToBaseContact) | Run the CreateBuildToBaseContact action.                                          |
| [`CreateAMBondConnections`](#AMProcess.CreateAMBondConnections)   | Run the CreateAMBondConnections action.                                           |
| [`GenerateAMStrains`](#AMProcess.GenerateAMStrains)               | Run the GenerateAMStrains action.                                                 |
| [`CleanAMStrains`](#AMProcess.CleanAMStrains)                     | Run the CleanAMStrains action.                                                    |
| [`HasAMStrains`](#AMProcess.HasAMStrains)                         | Get the HasAMStrains property.                                                    |
| [`AddSupportGroup`](#AMProcess.AddSupportGroup)                   | Creates a new AMSupportGroup                                                      |
| [`AddGeneratedAMSupport`](#AMProcess.AddGeneratedAMSupport)       | Creates a new GeneratedAMSupport                                                  |
| [`AddPredefinedAMSupport`](#AMProcess.AddPredefinedAMSupport)     | Creates a new PredefinedAMSupport                                                 |
| [`AddSTLAMSupport`](#AMProcess.AddSTLAMSupport)                   | Creates a new STLAMSupport                                                        |
| [`Delete`](#AMProcess.Delete)                                     | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#AMProcess.AddComment)                             | Creates a new child Comment.                                                      |
| [`AddFigure`](#AMProcess.AddFigure)                               | Creates a new child Figure.                                                       |
| [`AddImage`](#AMProcess.AddImage)                                 | Creates a new child Image.                                                        |
| [`Activate`](#AMProcess.Activate)                                 | Activate the current object.                                                      |
| [`CopyTo`](#AMProcess.CopyTo)                                     | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#AMProcess.Duplicate)                               | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#AMProcess.GroupAllSimilarChildren)   | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#AMProcess.GroupSimilarObjects)           | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#AMProcess.PropertyByName)                     | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#AMProcess.PropertyByAPIName)               | Get a property by its API name.                                                   |
| [`CreateParameter`](#AMProcess.CreateParameter)                   | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#AMProcess.GetParameter)                         | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#AMProcess.RemoveParameter)                   | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`BuildGeometry`](#AMProcess.BuildGeometry)                                                                            | Gets or sets the PartGeometry using the deprecated BuildGeometry method.   |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                         |
| [`SubsampleRate`](#AMProcess.SubsampleRate)                                                                            | Gets or sets the SubsampleRate.                                            |
| [`ZLocationAtTopOfBase`](#AMProcess.ZLocationAtTopOfBase)                                                              | Gets the ZLocationAtTopOfBase.                                             |
| [`ElementSize`](#AMProcess.ElementSize)                                                                                | Gets or sets the ElementSize.                                              |
| [`WallThickness`](#AMProcess.WallThickness)                                                                            | Gets or sets the WallThickness.                                            |
| [`LengthUnits`](#AMProcess.LengthUnits)                                                                                | Gets or sets the LengthUnits.                                              |
| [`NonlinearEffects`](#AMProcess.NonlinearEffects)                                                                      | Gets or sets the NonlinearEffects.                                         |
| [`MeshUsingVoxelization`](#AMProcess.MeshUsingVoxelization)                                                            | Gets or sets the MeshUsingVoxelization.                                    |
| [`BaseGeometry`](#AMProcess.BaseGeometry)                                                                              | Gets or sets the BaseGeometry.                                             |
| [`PartGeometry`](#AMProcess.PartGeometry)                                                                              | Gets or sets the PartGeometry.                                             |
| [`DataModelObjectCategory`](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                               |
| [`Children`](#AMProcess.Children)                                                                                      | Gets the list of children.                                                 |
| [`Comments`](#AMProcess.Comments)                                                                                      | Gets the list of associated comments.                                      |
| [`Figures`](#AMProcess.Figures)                                                                                        | Gets the list of associated figures.                                       |
| [`Images`](#AMProcess.Images)                                                                                          | Gets the list of associated images.                                        |
| [`InternalObject`](#id0)                                                                                               | Gets the internal object. For advanced usage only.                         |
| [`Properties`](#AMProcess.Properties)                                                                                  | Gets the list of properties for this object.                               |
| [`VisibleProperties`](#AMProcess.VisibleProperties)                                                                    | Gets the list of properties that are visible for this object.              |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical.AdditiveManufacturing import AMProcess
```

## Property detail

### *property* AMProcess.BuildGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry using the deprecated BuildGeometry method.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSAMProcessSimulationAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.SubsampleRate *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the SubsampleRate.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.ZLocationAtTopOfBase *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ZLocationAtTopOfBase.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.ElementSize *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementSize.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.WallThickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the WallThickness.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.LengthUnits *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#WBUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the LengthUnits.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.NonlinearEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearEffects.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.MeshUsingVoxelization *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MeshUsingVoxelization.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.BaseGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BaseGeometry.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.PartGeometry *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the PartGeometry.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* AMProcess.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### AMProcess.GetSequence(analysis: [Ansys.ACT.Automation.Mechanical.Analysis](../Analysis.md#Analysis))

Gets the support removal sequence for a given environment.

<!-- !! processed by numpydoc !! -->

### AMProcess.ResetAllSequences()

Resets the sequence for all analyses

<!-- !! processed by numpydoc !! -->

### AMProcess.AddCartesianMesh()

AddCartesianMesh method.

<!-- !! processed by numpydoc !! -->

### AMProcess.CreateBuildToBaseContact()

Run the CreateBuildToBaseContact action.

<!-- !! processed by numpydoc !! -->

### AMProcess.CreateAMBondConnections()

Run the CreateAMBondConnections action.

<!-- !! processed by numpydoc !! -->

### AMProcess.GenerateAMStrains()

Run the GenerateAMStrains action.

<!-- !! processed by numpydoc !! -->

### AMProcess.CleanAMStrains()

Run the CleanAMStrains action.

<!-- !! processed by numpydoc !! -->

### AMProcess.HasAMStrains()

Get the HasAMStrains property.

<!-- !! processed by numpydoc !! -->

### AMProcess.AddSupportGroup()

Creates a new AMSupportGroup

<!-- !! processed by numpydoc !! -->

### AMProcess.AddGeneratedAMSupport()

Creates a new GeneratedAMSupport

<!-- !! processed by numpydoc !! -->

### AMProcess.AddPredefinedAMSupport()

Creates a new PredefinedAMSupport

<!-- !! processed by numpydoc !! -->

### AMProcess.AddSTLAMSupport()

Creates a new STLAMSupport

<!-- !! processed by numpydoc !! -->

### AMProcess.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### AMProcess.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMProcess.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### AMProcess.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### AMProcess.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### AMProcess.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### AMProcess.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### AMProcess.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### AMProcess.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### AMProcess.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### AMProcess.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### AMProcess.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### AMProcess.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### AMProcess.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### AMProcess.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### AMProcess.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
