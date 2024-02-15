# ModelImport

### *class* ModelImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

> Defines a ModelImport.

> <!-- !! processed by numpydoc !! -->

## Overview

### Methods

| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](#ModelImport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ModelImport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ModelImport.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](#ModelImport.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](#ModelImport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](#ModelImport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](#ModelImport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ModelImport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](#ModelImport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](#ModelImport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](#ModelImport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](#ModelImport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](#ModelImport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`ElementComponentKey`](#ModelImport.ElementComponentKey)                                                           | Gets or sets the ElementComponentKey.                         |
| [`ElementOffset`](#ModelImport.ElementOffset)                                                                       | Gets or sets the ElementOffset.                               |
| [`FaceComponentKey`](#ModelImport.FaceComponentKey)                                                                 | Gets or sets the FaceComponentKey.                            |
| [`GeometryComponentKey`](#ModelImport.GeometryComponentKey)                                                         | Gets or sets the GeometryComponentKey.                        |
| [`ModelImportSourceFilePath`](#ModelImport.ModelImportSourceFilePath)                                               | Gets or sets the ModelImportSourceFilePath.                   |
| [`NodalComponentKey`](#ModelImport.NodalComponentKey)                                                               | Gets or sets the NodalComponentKey.                           |
| [`NodeOffset`](#ModelImport.NodeOffset)                                                                             | Gets or sets the NodeOffset.                                  |
| [`ToleranceAngle`](#ModelImport.ToleranceAngle)                                                                     | Gets or sets the ToleranceAngle.                              |
| [`VertexInsertionAngle`](#ModelImport.VertexInsertionAngle)                                                         | Gets or sets the VertexInsertionAngle.                        |
| [`AnalysisTypeDimensionSetting`](#ModelImport.AnalysisTypeDimensionSetting)                                         | Gets or sets the AnalysisTypeDimensionSetting.                |
| [`NodeAndElementRenumberingMethod`](#ModelImport.NodeAndElementRenumberingMethod)                                   | Gets or sets the NodeAndElementRenumberingMethod.             |
| [`UnitSystemTypeForImport`](#ModelImport.UnitSystemTypeForImport)                                                   | Gets or sets the UnitSystemTypeForImport.                     |
| [`BodyGroupByAnsysElmTypeNumber`](#ModelImport.BodyGroupByAnsysElmTypeNumber)                                       | Gets or sets the BodyGroupByAnsysElmTypeNumber.               |
| [`BodyGroupByMaterialNumber`](#ModelImport.BodyGroupByMaterialNumber)                                               | Gets or sets the BodyGroupByMaterialNumber.                   |
| [`BodyGroupByThickness`](#ModelImport.BodyGroupByThickness)                                                         | Gets or sets the BodyGroupByThickness.                        |
| [`CreateGeometry`](#ModelImport.CreateGeometry)                                                                     | Gets or sets the CreateGeometry.                              |
| [`CreateGeometryEdgeComponents`](#ModelImport.CreateGeometryEdgeComponents)                                         | Gets or sets the CreateGeometryEdgeComponents.                |
| [`CreateGeometryFaceComponents`](#ModelImport.CreateGeometryFaceComponents)                                         | Gets or sets the CreateGeometryFaceComponents.                |
| [`CreateGeometryVertexComponent`](#ModelImport.CreateGeometryVertexComponent)                                       | Gets or sets the CreateGeometryVertexComponent.               |
| [`ImportMaterials`](#ModelImport.ImportMaterials)                                                                   | Gets or sets the ImportMaterials.                             |
| [`ProcessElementComponents`](#ModelImport.ProcessElementComponents)                                                 | Gets or sets the ProcessElementComponents.                    |
| [`ProcessFaceComponents`](#ModelImport.ProcessFaceComponents)                                                       | Gets or sets the ProcessFaceComponents.                       |
| [`ProcessLineBodies`](#ModelImport.ProcessLineBodies)                                                               | Gets or sets the ProcessLineBodies.                           |
| [`ProcessMesh200Elms`](#ModelImport.ProcessMesh200Elms)                                                             | Gets or sets the ProcessMesh200Elms.                          |
| [`ProcessModelData`](#ModelImport.ProcessModelData)                                                                 | Gets or sets the ProcessModelData.                            |
| [`ProcessNodalComponents`](#ModelImport.ProcessNodalComponents)                                                     | Gets or sets the ProcessNodalComponents.                      |
| [`ProcessValidBlockedCDBFile`](#ModelImport.ProcessValidBlockedCDBFile)                                             | Gets or sets the ProcessValidBlockedCDBFile.                  |
| [`DataModelObjectCategory`](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | Gets the current DataModelObject’s category.                  |
| [`Children`](#ModelImport.Children)                                                                                 | Gets the list of children.                                    |
| [`Comments`](#ModelImport.Comments)                                                                                 | Gets the list of associated comments.                         |
| [`Figures`](#ModelImport.Figures)                                                                                   | Gets the list of associated figures.                          |
| [`Images`](#ModelImport.Images)                                                                                     | Gets the list of associated images.                           |
| [`InternalObject`](#id0)                                                                                            | Gets the internal object. For advanced usage only.            |
| [`Properties`](#ModelImport.Properties)                                                                             | Gets the list of properties for this object.                  |
| [`VisibleProperties`](#ModelImport.VisibleProperties)                                                               | Gets the list of properties that are visible for this object. |

## Import detail

```python
from ansys.mechanical.stubs.Ansys.ACT.Automation.Mechanical import ModelImport
```

## Property detail

### *property* ModelImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelImportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ElementComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementComponentKey.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ElementOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.FaceComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceComponentKey.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.GeometryComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryComponentKey.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ModelImportSourceFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelImportSourceFilePath.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.NodalComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalComponentKey.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ToleranceAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceAngle.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.VertexInsertionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexInsertionAngle.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.AnalysisTypeDimensionSetting *: [Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum](../../../Mechanical/DataModel/Enums/AnalysisTypeDimensionEnum.md#AnalysisTypeDimensionEnum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisTypeDimensionSetting.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.NodeAndElementRenumberingMethod *: [Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType](../../../Mechanical/DataModel/Enums/NodeAndElementRenumberingMethodType.md#NodeAndElementRenumberingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeAndElementRenumberingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.UnitSystemTypeForImport *: [Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType](../../../Mechanical/DataModel/Enums/ModelImportUnitSystemType.md#ModelImportUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitSystemTypeForImport.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.BodyGroupByAnsysElmTypeNumber *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByAnsysElmTypeNumber.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.BodyGroupByMaterialNumber *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByMaterialNumber.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.BodyGroupByThickness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByThickness.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.CreateGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometry.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.CreateGeometryEdgeComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryEdgeComponents.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.CreateGeometryFaceComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryFaceComponents.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.CreateGeometryVertexComponent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryVertexComponent.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ImportMaterials *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportMaterials.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessElementComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessElementComponents.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessFaceComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessFaceComponents.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessLineBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessLineBodies.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessMesh200Elms *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessMesh200Elms.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessModelData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessModelData.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessNodalComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessNodalComponents.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ProcessValidBlockedCDBFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessValidBlockedCDBFile.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

## Method detail

### ModelImport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ModelImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddImage(filePath: System.String)

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

### ModelImport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

### ModelImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

### ModelImport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

### ModelImport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

### ModelImport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

### ModelImport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

### ModelImport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

### ModelImport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

### ModelImport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

### ModelImport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->
