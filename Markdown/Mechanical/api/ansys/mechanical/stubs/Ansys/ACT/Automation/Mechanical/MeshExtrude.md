# MeshExtrude

### *class* MeshExtrude

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Pull method enables you to extrude or revolve element faces, topofaces or scoped bodies (only shell body) from a surface or solid mesh. Pull also allows to create surface coating on solid bodies, element faces and topofaces.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`Generate`](#MeshExtrude.Generate)                               | Generate selected mesh pull.                                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`ClearGeneratedData`](#MeshExtrude.ClearGeneratedData)           | Clear generated data.                                                             |
| [`Delete`](#MeshExtrude.Delete)                                   | Run the Delete action.                                                            |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#MeshExtrude.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#MeshExtrude.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#MeshExtrude.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#MeshExtrude.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#MeshExtrude.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#MeshExtrude.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#MeshExtrude.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#MeshExtrude.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#MeshExtrude.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#MeshExtrude.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#MeshExtrude.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#MeshExtrude.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#MeshExtrude.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`ScopingMethod`](#MeshExtrude.ScopingMethod)                                                                       | Defines what type of selection this object is scoped to.                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`Location`](#MeshExtrude.Location)                                                                                 | Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating. |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Material`](Material.md#Material)                                                                                  | To select the material of your choice. You can also select a different material from the parent body material.                                                              |
| [`NumberOfLayers`](#MeshExtrude.NumberOfLayers)                                                                     | To specify the number of layers to be used for Extrude and Revolve.                                                                                                         |
| [`Height`](#MeshExtrude.Height)                                                                                     | To specify the height for the volume of solid elements in the method of Extrude.                                                                                            |
| [`RevolutionAngle`](#MeshExtrude.RevolutionAngle)                                                                   | To specify angle of revolution for the solid elements in the method of Revolve.                                                                                             |
| [`FeatureAngle`](#MeshExtrude.FeatureAngle)                                                                         | To specify feature angle for splitting side faces.                                                                                                                          |
| [`Thickness`](Thickness.md#Thickness)                                                                               | To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.           |
| [`AxisOfRevolution`](#MeshExtrude.AxisOfRevolution)                                                                 | To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.                                          |
| [`ExtrudeBy`](../../../Mechanical/DataModel/Enums/ExtrudeBy.md#ExtrudeBy)                                           | To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.                                                                          |
| [`UseCoordinateSystem`](#MeshExtrude.UseCoordinateSystem)                                                           | The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.                                                                         |
| [`Method`](#MeshExtrude.Method)                                                                                     | To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.                                                                       |
| [`ElementOption`](#MeshExtrude.ElementOption)                                                                       | Gets or sets the ElementOption.                                                                                                                                             |
| [`StiffnessOption`](#MeshExtrude.StiffnessOption)                                                                   | To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.        |
| [`UpTo`](#MeshExtrude.UpTo)                                                                                         | To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.                              |
| [`MergeProfileNodes`](#MeshExtrude.MergeProfileNodes)                                                               | To merge nodes on the profile body and pull generated body.                                                                                                                 |
| [`NonlinearMaterialEffects`](#MeshExtrude.NonlinearMaterialEffects)                                                 | Gets or sets the NonlinearMaterialEffects.                                                                                                                                  |
| [`Suppressed`](#MeshExtrude.Suppressed)                                                                             | To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.                |
| [`ThermalStrainCalculation`](#MeshExtrude.ThermalStrainCalculation)                                                 | Gets or sets the ThermalStrainCalculation.                                                                                                                                  |
| [`UseFeatureAngle`](#MeshExtrude.UseFeatureAngle)                                                                   | To split side faces by speficied feature angle.                                                                                                                             |
| [`CoordinateSystem`](../../Common/CoordinateSystem.md#CoordinateSystem)                                             | To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.                                    |
| [`UpToTarget`](#MeshExtrude.UpToTarget)                                                                             | The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.                                                               |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                                                                                                                                |
| [`Children`](#MeshExtrude.Children)                                                                                 | Gets the list of children.                                                                                                                                                  |
| [`Comments`](#MeshExtrude.Comments)                                                                                 | Gets the list of associated comments.                                                                                                                                       |
| [`Figures`](#MeshExtrude.Figures)                                                                                   | Gets the list of associated figures.                                                                                                                                        |
| [`Images`](#MeshExtrude.Images)                                                                                     | Gets the list of associated images.                                                                                                                                         |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.                                                                                                                          |
| [`Properties`](#MeshExtrude.Properties)                                                                             | Gets the list of properties for this object.                                                                                                                                |
| [`VisibleProperties`](#MeshExtrude.VisibleProperties)                                                               | Gets the list of properties that are visible for this object.                                                                                                               |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import MeshExtrude
```

## Property detail

### *property* MeshExtrude.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#GeometryDefineByType) | [None](https://docs.python.org/3/library/constants.html#None)*

Defines what type of selection this object is scoped to.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Location *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

Allows you to scope elements, element faces, topofaces and sheet bodies for Extrude or Revolve. Also, scopes element faces, topofaces and solid bodies for Surface Coating.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshExtrudeAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Material *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

To select the material of your choice. You can also select a different material from the parent body material.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.NumberOfLayers *: System.Int32 | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the number of layers to be used for Extrude and Revolve.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Height *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the height for the volume of solid elements in the method of Extrude.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.RevolutionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify angle of revolution for the solid elements in the method of Revolve.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.FeatureAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify feature angle for splitting side faces.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Thickness *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the thickness for surface coating. The Thickness option is available only when the Stiffness Behavior is set to Membrane Only or Membrane and Bending.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.AxisOfRevolution *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the coordinate axis along which the selected elements can be revolved. The available options are X Axis, Y Axis, Z Axis.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.ExtrudeBy *: [Ansys.Mechanical.DataModel.Enums.ExtrudeBy](../../../Mechanical/DataModel/Enums/ExtrudeBy.md#ExtrudeBy) | [None](https://docs.python.org/3/library/constants.html#None)*

To specify the method of Extrude. The available options are Use Coordinate System and Face Normal.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.UseCoordinateSystem *: [Ansys.Mechanical.DataModel.Enums.CoordinateSystemAxisType](../../../Mechanical/DataModel/Enums/CoordinateSystemAxisType.md#CoordinateSystemAxisType) | [None](https://docs.python.org/3/library/constants.html#None)*

The Use Coordinate System allows to select any of the XYZ coordinate axis in the method of Extrude.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Method *: [Ansys.Mechanical.DataModel.Enums.PullMethod](../../../Mechanical/DataModel/Enums/PullMethod.md#PullMethod) | [None](https://docs.python.org/3/library/constants.html#None)*

To select the method of Pull. There are three methods. They are Extrude, Revolve and Surface Coating.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.ElementOption *: [Ansys.Mechanical.DataModel.Enums.SweepElementOptionType](../../../Mechanical/DataModel/Enums/SweepElementOptionType.md#SweepElementOptionType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOption.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.StiffnessOption *: [Ansys.Mechanical.DataModel.Enums.ShellElementStiffnessOption](../../../Mechanical/DataModel/Enums/ShellElementStiffnessOption.md#ShellElementStiffnessOption) | [None](https://docs.python.org/3/library/constants.html#None)*

To provide the stiffness option of the shell body created by surface coating. The available options are Stress Evaluation Only, Membrane Only, Membrane and Bending.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.UpTo *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements up to the specified target. The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.MergeProfileNodes *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To merge nodes on the profile body and pull generated body.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.NonlinearMaterialEffects *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NonlinearMaterialEffects.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Suppressed *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To suppress the selected entities. You can select Yes to suppress the selected entities and No to unsuppress the selected entities. The default value is No.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.ThermalStrainCalculation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ThermalStrainCalculation.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.UseFeatureAngle *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

To split side faces by speficied feature angle.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#CoordinateSystem) | [None](https://docs.python.org/3/library/constants.html#None)*

To generate elements in the specified coordinate system. The Coordinate System allows to select the Global Coordinate System by default.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.UpToTarget *: Ansys.ACT.Interfaces.Common.ISelectionInfo | [None](https://docs.python.org/3/library/constants.html#None)*

The target can be faces from solids or sheet bodies and multiple faces with sharing topoedge in Extrude UpTo.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* MeshExtrude.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### MeshExtrude.Generate()

Generate selected mesh pull.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.ClearGeneratedData()

Clear generated data.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.Delete()

Run the Delete action.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### MeshExtrude.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
