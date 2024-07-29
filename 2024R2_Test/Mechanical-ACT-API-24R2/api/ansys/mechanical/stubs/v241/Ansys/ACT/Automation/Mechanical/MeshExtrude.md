# `MeshExtrude`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.MeshExtrude

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Pull method enables you to extrude or revolve element faces, topofaces or scoped bodies (only shell body) from a surface or solid mesh. Pull also allows to create surface coating on solid bodies, element faces and topofaces.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Generate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Generate)                               | Generate selected mesh pull.                                                      |
| [`ClearGeneratedData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.ClearGeneratedData)           | Clear generated data.                                                             |
| [`Delete`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`ScopingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.ScopingMethod)                       | Defines what type of selection this object is scoped to.                                                                                                                    |
| [`Location`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Location)                                 | Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating. |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#id0)                                            | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Material`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Material)                                 | To select the material of your choice. You can also select a different material from the parent body material.                                                              |
| [`NumberOfLayers`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.NumberOfLayers)                     | To specify the number of layers to be used for Extrude and Revolve.                                                                                                         |
| [`Height`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Height)                                     | To specify the height for the volume of solid elements in the method of Extrude.                                                                                            |
| [`RevolutionAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.RevolutionAngle)                   | To specify angle of revolution for the solid elements in the method of Revolve.                                                                                             |
| [`FeatureAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.FeatureAngle)                         | To specify feature angle for splitting side faces.                                                                                                                          |
| [`Thickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Thickness)                               | To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.           |
| [`AxisOfRevolution`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.AxisOfRevolution)                 | To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.                                          |
| [`ExtrudeBy`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.ExtrudeBy)                               | To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.                                                                          |
| [`UseCoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.UseCoordinateSystem)           | The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.                                                                         |
| [`Method`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Method)                                     | To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.                                                                       |
| [`ElementOption`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.ElementOption)                       | Gets or sets the ElementOption.                                                                                                                                             |
| [`StiffnessOption`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.StiffnessOption)                   | To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.        |
| [`UpTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.UpTo)                                         | To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.                              |
| [`MergeProfileNodes`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.MergeProfileNodes)               | To merge nodes on the profile body and pull generated body.                                                                                                                 |
| [`NonlinearMaterialEffects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.NonlinearMaterialEffects) | Gets or sets the NonlinearMaterialEffects.                                                                                                                                  |
| [`Suppressed`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Suppressed)                             | To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.                |
| [`ThermalStrainCalculation`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.ThermalStrainCalculation) | Gets or sets the ThermalStrainCalculation.                                                                                                                                  |
| [`UseFeatureAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.UseFeatureAngle)                   | To split side faces by speficied feature angle.                                                                                                                             |
| [`CoordinateSystem`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.CoordinateSystem)                 | To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.                                    |
| [`UpToTarget`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.UpToTarget)                             | The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.                                                               |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                                                                                                                |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Children)                                 | Gets the list of children.                                                                                                                                                  |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Comments)                                 | Gets the list of associated comments.                                                                                                                                       |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Figures)                                   | Gets the list of associated figures.                                                                                                                                        |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Images)                                     | Gets the list of associated images.                                                                                                                                         |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#id0)                                            | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.Properties)                             | Gets the list of properties for this object.                                                                                                                                |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/MeshExtrude.md#MeshExtrude.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="MeshExtrude.ScopingMethod"></a>

### *property* MeshExtrude.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines what type of selection this object is scoped to.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Location"></a>

### *property* MeshExtrude.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.InternalObject"></a>

### *property* MeshExtrude.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshExtrudeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Material"></a>

### *property* MeshExtrude.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

To select the material of your choice. You can also select a different material from the parent body material.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NumberOfLayers"></a>

### *property* MeshExtrude.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the number of layers to be used for Extrude and Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Height"></a>

### *property* MeshExtrude.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the height for the volume of solid elements in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RevolutionAngle"></a>

### *property* MeshExtrude.RevolutionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify angle of revolution for the solid elements in the method of Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.FeatureAngle"></a>

### *property* MeshExtrude.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify feature angle for splitting side faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Thickness"></a>

### *property* MeshExtrude.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AxisOfRevolution"></a>

### *property* MeshExtrude.AxisOfRevolution *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ExtrudeBy"></a>

### *property* MeshExtrude.ExtrudeBy *: [Ansys.Mechanical.DataModel.Enums.ExtrudeBy](../../../Mechanical/DataModel/Enums/ExtrudeBy.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ExtrudeBy) | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseCoordinateSystem"></a>

### *property* MeshExtrude.UseCoordinateSystem *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Method"></a>

### *property* MeshExtrude.Method *: [Ansys.Mechanical.DataModel.Enums.PullMethod](../../../Mechanical/DataModel/Enums/PullMethod.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.PullMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ElementOption"></a>

### *property* MeshExtrude.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.StiffnessOption"></a>

### *property* MeshExtrude.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpTo"></a>

### *property* MeshExtrude.UpTo *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.MergeProfileNodes"></a>

### *property* MeshExtrude.MergeProfileNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To merge nodes on the profile body and pull generated body.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NonlinearMaterialEffects"></a>

### *property* MeshExtrude.NonlinearMaterialEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearMaterialEffects.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Suppressed"></a>

### *property* MeshExtrude.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ThermalStrainCalculation"></a>

### *property* MeshExtrude.ThermalStrainCalculation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainCalculation.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseFeatureAngle"></a>

### *property* MeshExtrude.UseFeatureAngle *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To split side faces by speficied feature angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CoordinateSystem"></a>

### *property* MeshExtrude.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpToTarget"></a>

### *property* MeshExtrude.UpToTarget *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.DataModelObjectCategory"></a>

### *property* MeshExtrude.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Children"></a>

### *property* MeshExtrude.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Comments"></a>

### *property* MeshExtrude.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Figures"></a>

### *property* MeshExtrude.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Images"></a>

### *property* MeshExtrude.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* MeshExtrude.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Properties"></a>

### *property* MeshExtrude.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.VisibleProperties"></a>

### *property* MeshExtrude.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshExtrude.Generate"></a>

### MeshExtrude.Generate()

Generate selected mesh pull.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ClearGeneratedData"></a>

### MeshExtrude.ClearGeneratedData()

Clear generated data.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Delete"></a>

### MeshExtrude.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetChildren"></a>

### MeshExtrude.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### MeshExtrude.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddComment"></a>

### MeshExtrude.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddFigure"></a>

### MeshExtrude.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.AddImage"></a>

### MeshExtrude.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Activate"></a>

### MeshExtrude.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CopyTo"></a>

### MeshExtrude.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Duplicate"></a>

### MeshExtrude.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupAllSimilarChildren"></a>

### MeshExtrude.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupSimilarObjects"></a>

### MeshExtrude.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByName"></a>

### MeshExtrude.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByAPIName"></a>

### MeshExtrude.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CreateParameter"></a>

### MeshExtrude.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetParameter"></a>

### MeshExtrude.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RemoveParameter"></a>

### MeshExtrude.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

