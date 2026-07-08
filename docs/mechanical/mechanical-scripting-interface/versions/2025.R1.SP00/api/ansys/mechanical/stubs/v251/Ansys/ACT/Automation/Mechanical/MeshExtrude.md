# `MeshExtrude`

<a id="ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.MeshExtrude"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshExtrude

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Pull method enables you to extrude or revolve element faces, topofaces or scoped bodies (only shell body) from a surface or solid mesh. Pull also allows to create surface coating on solid bodies, element faces and topofaces.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#MeshExtrude.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#MeshExtrude.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshExtrude.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshExtrude.AddImage)                               | Creates a new child Image.                                                        |
| [`ClearGeneratedData`](#MeshExtrude.ClearGeneratedData)           | Clear generated data.                                                             |
| [`CopyTo`](#MeshExtrude.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#MeshExtrude.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Delete`](#MeshExtrude.Delete)                                   | Run the Delete action.                                                            |
| [`Duplicate`](#MeshExtrude.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`Generate`](#MeshExtrude.Generate)                               | Generate selected mesh pull.                                                      |
| [`GetChildren`](#MeshExtrude.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#MeshExtrude.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#MeshExtrude.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshExtrude.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#MeshExtrude.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#MeshExtrude.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#MeshExtrude.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AxisOfRevolution`](#MeshExtrude.AxisOfRevolution)                 | To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.                                          |
| [`Children`](#MeshExtrude.Children)                                 | Gets the list of children.                                                                                                                                                  |
| [`Comments`](#MeshExtrude.Comments)                                 | Gets the list of associated comments.                                                                                                                                       |
| [`CoordinateSystem`](#MeshExtrude.CoordinateSystem)                 | To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.                                    |
| [`DataModelObjectCategory`](#MeshExtrude.DataModelObjectCategory)   | Gets the current DataModelObject’s category.                                                                                                                                |
| [`ElementOption`](#MeshExtrude.ElementOption)                       | Gets or sets the ElementOption.                                                                                                                                             |
| [`ExtrudeBy`](#MeshExtrude.ExtrudeBy)                               | To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.                                                                          |
| [`FeatureAngle`](#MeshExtrude.FeatureAngle)                         | To specify feature angle for splitting side faces.                                                                                                                          |
| [`Figures`](#MeshExtrude.Figures)                                   | Gets the list of associated figures.                                                                                                                                        |
| [`Height`](#MeshExtrude.Height)                                     | To specify the height for the volume of solid elements in the method of Extrude.                                                                                            |
| [`Images`](#MeshExtrude.Images)                                     | Gets the list of associated images.                                                                                                                                         |
| [`InternalObject`](#MeshExtrude.InternalObject)                     | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Location`](#MeshExtrude.Location)                                 | Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating. |
| [`Material`](#MeshExtrude.Material)                                 | To select the material of your choice. You can also select a different material from the parent body material.                                                              |
| [`MergeProfileNodes`](#MeshExtrude.MergeProfileNodes)               | To merge nodes on the profile body and pull generated body.                                                                                                                 |
| [`Method`](#MeshExtrude.Method)                                     | To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.                                                                       |
| [`NonlinearMaterialEffects`](#MeshExtrude.NonlinearMaterialEffects) | Gets or sets the NonlinearMaterialEffects.                                                                                                                                  |
| [`NumberOfLayers`](#MeshExtrude.NumberOfLayers)                     | To specify the number of layers to be used for Extrude and Revolve.                                                                                                         |
| [`Properties`](#MeshExtrude.Properties)                             | Gets the list of properties for this object.                                                                                                                                |
| [`RevolutionAngle`](#MeshExtrude.RevolutionAngle)                   | To specify angle of revolution for the solid elements in the method of Revolve.                                                                                             |
| [`ScopingMethod`](#MeshExtrude.ScopingMethod)                       | Defines what type of selection this object is scoped to.                                                                                                                    |
| [`StiffnessOption`](#MeshExtrude.StiffnessOption)                   | To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.        |
| [`Suppressed`](#MeshExtrude.Suppressed)                             | To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.                |
| [`ThermalStrainCalculation`](#MeshExtrude.ThermalStrainCalculation) | Gets or sets the ThermalStrainCalculation.                                                                                                                                  |
| [`Thickness`](#MeshExtrude.Thickness)                               | To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.           |
| [`UpTo`](#MeshExtrude.UpTo)                                         | To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.                              |
| [`UpToTarget`](#MeshExtrude.UpToTarget)                             | The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.                                                               |
| [`UseCoordinateSystem`](#MeshExtrude.UseCoordinateSystem)           | The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.                                                                         |
| [`UseFeatureAngle`](#MeshExtrude.UseFeatureAngle)                   | To split side faces by speficied feature angle.                                                                                                                             |
| [`VisibleProperties`](#MeshExtrude.VisibleProperties)               | Gets the list of properties that are visible for this object.                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="MeshExtrude.AxisOfRevolution"></a>

### *property* MeshExtrude.AxisOfRevolution *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Children"></a>

### *property* MeshExtrude.Children *: List[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Comments"></a>

### *property* MeshExtrude.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CoordinateSystem"></a>

### *property* MeshExtrude.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.DataModelObjectCategory"></a>

### *property* MeshExtrude.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ElementOption"></a>

### *property* MeshExtrude.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ExtrudeBy"></a>

### *property* MeshExtrude.ExtrudeBy *: [Ansys.Mechanical.DataModel.Enums.ExtrudeBy](../../../Mechanical/DataModel/Enums/ExtrudeBy.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ExtrudeBy) | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.FeatureAngle"></a>

### *property* MeshExtrude.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify feature angle for splitting side faces.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Figures"></a>

### *property* MeshExtrude.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Height"></a>

### *property* MeshExtrude.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the height for the volume of solid elements in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Images"></a>

### *property* MeshExtrude.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v251.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.InternalObject"></a>

### *property* MeshExtrude.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshExtrudeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Location"></a>

### *property* MeshExtrude.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Material"></a>

### *property* MeshExtrude.Material *: [str](https://docs.python.org/3/library/stdtypes.html#str) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the material of your choice. You can also select a different material from the parent body material.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.MergeProfileNodes"></a>

### *property* MeshExtrude.MergeProfileNodes *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

To merge nodes on the profile body and pull generated body.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Method"></a>

### *property* MeshExtrude.Method *: [Ansys.Mechanical.DataModel.Enums.PullMethod](../../../Mechanical/DataModel/Enums/PullMethod.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.PullMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NonlinearMaterialEffects"></a>

### *property* MeshExtrude.NonlinearMaterialEffects *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearMaterialEffects.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.NumberOfLayers"></a>

### *property* MeshExtrude.NumberOfLayers *: [int](https://docs.python.org/3/library/functions.html#int) | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the number of layers to be used for Extrude and Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Properties"></a>

### *property* MeshExtrude.Properties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RevolutionAngle"></a>

### *property* MeshExtrude.RevolutionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify angle of revolution for the solid elements in the method of Revolve.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ScopingMethod"></a>

### *property* MeshExtrude.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines what type of selection this object is scoped to.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.StiffnessOption"></a>

### *property* MeshExtrude.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Suppressed"></a>

### *property* MeshExtrude.Suppressed *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ThermalStrainCalculation"></a>

### *property* MeshExtrude.ThermalStrainCalculation *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainCalculation.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Thickness"></a>

### *property* MeshExtrude.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpTo"></a>

### *property* MeshExtrude.UpTo *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UpToTarget"></a>

### *property* MeshExtrude.UpToTarget *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseCoordinateSystem"></a>

### *property* MeshExtrude.UseCoordinateSystem *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#ansys.mechanical.stubs.v251.Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.UseFeatureAngle"></a>

### *property* MeshExtrude.UseFeatureAngle *: [bool](https://docs.python.org/3/library/functions.html#bool) | [None](https://docs.python.org/3/library/constants.html#None)*

To split side faces by speficied feature angle.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.VisibleProperties"></a>

### *property* MeshExtrude.VisibleProperties *: [tuple](https://docs.python.org/3/library/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshExtrude.Activate"></a>

### MeshExtrude.Activate()

Activate the current object.

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

### MeshExtrude.AddImage(filePath: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.ClearGeneratedData"></a>

### MeshExtrude.ClearGeneratedData()

Clear generated data.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CopyTo"></a>

### MeshExtrude.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.CreateParameter"></a>

### MeshExtrude.CreateParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Delete"></a>

### MeshExtrude.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Duplicate"></a>

### MeshExtrude.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.Generate"></a>

### MeshExtrude.Generate()

Generate selected mesh pull.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetChildren"></a>

### MeshExtrude.GetChildren(recurses: [bool](https://docs.python.org/3/library/functions.html#bool), children: List[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GetParameter"></a>

### MeshExtrude.GetParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupAllSimilarChildren"></a>

### MeshExtrude.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.GroupSimilarObjects"></a>

### MeshExtrude.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByAPIName"></a>

### MeshExtrude.PropertyByAPIName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.PropertyByName"></a>

### MeshExtrude.PropertyByName(name: [str](https://docs.python.org/3/library/stdtypes.html#str))

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshExtrude.RemoveParameter"></a>

### MeshExtrude.RemoveParameter(propName: [str](https://docs.python.org/3/library/stdtypes.html#str))

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

