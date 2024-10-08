# `ModelImport`

<a id="ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ModelImport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ModelImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ModelImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`Activate`](#ModelImport.Activate)                               | Activate the current object.                                                      |
| [`AddComment`](#ModelImport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](#ModelImport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](#ModelImport.AddImage)                               | Creates a new child Image.                                                        |
| [`CopyTo`](#ModelImport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`CreateParameter`](#ModelImport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`Duplicate`](#ModelImport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GetChildren`](#ModelImport.GetChildren)                         | Gets the list of children, filtered by type.                                      |
| [`GetParameter`](#ModelImport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`GroupAllSimilarChildren`](#ModelImport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](#ModelImport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByAPIName`](#ModelImport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`PropertyByName`](#ModelImport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`RemoveParameter`](#ModelImport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AnalysisTypeDimensionSetting`](#ModelImport.AnalysisTypeDimensionSetting)       | Gets or sets the AnalysisTypeDimensionSetting.                |
| [`BodyGroupByAnsysElmTypeNumber`](#ModelImport.BodyGroupByAnsysElmTypeNumber)     | Gets or sets the BodyGroupByAnsysElmTypeNumber.               |
| [`BodyGroupByMaterialNumber`](#ModelImport.BodyGroupByMaterialNumber)             | Gets or sets the BodyGroupByMaterialNumber.                   |
| [`BodyGroupByThickness`](#ModelImport.BodyGroupByThickness)                       | Gets or sets the BodyGroupByThickness.                        |
| [`Children`](#ModelImport.Children)                                               | Gets the list of children.                                    |
| [`Comments`](#ModelImport.Comments)                                               | Gets the list of associated comments.                         |
| [`CreateGeometry`](#ModelImport.CreateGeometry)                                   | Gets or sets the CreateGeometry.                              |
| [`CreateGeometryEdgeComponents`](#ModelImport.CreateGeometryEdgeComponents)       | Gets or sets the CreateGeometryEdgeComponents.                |
| [`CreateGeometryFaceComponents`](#ModelImport.CreateGeometryFaceComponents)       | Gets or sets the CreateGeometryFaceComponents.                |
| [`CreateGeometryVertexComponent`](#ModelImport.CreateGeometryVertexComponent)     | Gets or sets the CreateGeometryVertexComponent.               |
| [`DataModelObjectCategory`](#ModelImport.DataModelObjectCategory)                 | Gets the current DataModelObject’s category.                  |
| [`ElementComponentKey`](#ModelImport.ElementComponentKey)                         | Gets or sets the ElementComponentKey.                         |
| [`ElementOffset`](#ModelImport.ElementOffset)                                     | Gets or sets the ElementOffset.                               |
| [`FaceComponentKey`](#ModelImport.FaceComponentKey)                               | Gets or sets the FaceComponentKey.                            |
| [`Figures`](#ModelImport.Figures)                                                 | Gets the list of associated figures.                          |
| [`GeometryComponentKey`](#ModelImport.GeometryComponentKey)                       | Gets or sets the GeometryComponentKey.                        |
| [`Images`](#ModelImport.Images)                                                   | Gets the list of associated images.                           |
| [`ImportMaterials`](#ModelImport.ImportMaterials)                                 | Gets or sets the ImportMaterials.                             |
| [`InternalObject`](#ModelImport.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`ModelImportSourceFilePath`](#ModelImport.ModelImportSourceFilePath)             | Gets or sets the ModelImportSourceFilePath.                   |
| [`NodalComponentKey`](#ModelImport.NodalComponentKey)                             | Gets or sets the NodalComponentKey.                           |
| [`NodeAndElementRenumberingMethod`](#ModelImport.NodeAndElementRenumberingMethod) | Gets or sets the NodeAndElementRenumberingMethod.             |
| [`NodeOffset`](#ModelImport.NodeOffset)                                           | Gets or sets the NodeOffset.                                  |
| [`ProcessElementComponents`](#ModelImport.ProcessElementComponents)               | Gets or sets the ProcessElementComponents.                    |
| [`ProcessFaceComponents`](#ModelImport.ProcessFaceComponents)                     | Gets or sets the ProcessFaceComponents.                       |
| [`ProcessLineBodies`](#ModelImport.ProcessLineBodies)                             | Gets or sets the ProcessLineBodies.                           |
| [`ProcessMesh200Elms`](#ModelImport.ProcessMesh200Elms)                           | Gets or sets the ProcessMesh200Elms.                          |
| [`ProcessModelData`](#ModelImport.ProcessModelData)                               | Gets or sets the ProcessModelData.                            |
| [`ProcessNodalComponents`](#ModelImport.ProcessNodalComponents)                   | Gets or sets the ProcessNodalComponents.                      |
| [`ProcessValidBlockedCDBFile`](#ModelImport.ProcessValidBlockedCDBFile)           | Gets or sets the ProcessValidBlockedCDBFile.                  |
| [`Properties`](#ModelImport.Properties)                                           | Gets the list of properties for this object.                  |
| [`ToleranceAngle`](#ModelImport.ToleranceAngle)                                   | Gets or sets the ToleranceAngle.                              |
| [`UnitSystemTypeForImport`](#ModelImport.UnitSystemTypeForImport)                 | Gets or sets the UnitSystemTypeForImport.                     |
| [`VertexInsertionAngle`](#ModelImport.VertexInsertionAngle)                       | Gets or sets the VertexInsertionAngle.                        |
| [`VisibleProperties`](#ModelImport.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ModelImport.AnalysisTypeDimensionSetting"></a>

### *property* ModelImport.AnalysisTypeDimensionSetting *: [Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum](../../../../../v242/Ansys/Mechanical/DataModel/Enums/AnalysisTypeDimensionEnum.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisTypeDimensionSetting.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByAnsysElmTypeNumber"></a>

### *property* ModelImport.BodyGroupByAnsysElmTypeNumber *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByAnsysElmTypeNumber.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByMaterialNumber"></a>

### *property* ModelImport.BodyGroupByMaterialNumber *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByMaterialNumber.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByThickness"></a>

### *property* ModelImport.BodyGroupByThickness *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the BodyGroupByThickness.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Children"></a>

### *property* ModelImport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Comments"></a>

### *property* ModelImport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometry"></a>

### *property* ModelImport.CreateGeometry *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometry.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryEdgeComponents"></a>

### *property* ModelImport.CreateGeometryEdgeComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryEdgeComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryFaceComponents"></a>

### *property* ModelImport.CreateGeometryFaceComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryFaceComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryVertexComponent"></a>

### *property* ModelImport.CreateGeometryVertexComponent *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the CreateGeometryVertexComponent.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.DataModelObjectCategory"></a>

### *property* ModelImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v242/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject’s category.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ElementComponentKey"></a>

### *property* ModelImport.ElementComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ElementOffset"></a>

### *property* ModelImport.ElementOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.FaceComponentKey"></a>

### *property* ModelImport.FaceComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the FaceComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Figures"></a>

### *property* ModelImport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GeometryComponentKey"></a>

### *property* ModelImport.GeometryComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Images"></a>

### *property* ModelImport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ImportMaterials"></a>

### *property* ModelImport.ImportMaterials *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportMaterials.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.InternalObject"></a>

### *property* ModelImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelImportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ModelImportSourceFilePath"></a>

### *property* ModelImport.ModelImportSourceFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelImportSourceFilePath.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodalComponentKey"></a>

### *property* ModelImport.NodalComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeAndElementRenumberingMethod"></a>

### *property* ModelImport.NodeAndElementRenumberingMethod *: [Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/NodeAndElementRenumberingMethodType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeAndElementRenumberingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeOffset"></a>

### *property* ModelImport.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessElementComponents"></a>

### *property* ModelImport.ProcessElementComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessElementComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessFaceComponents"></a>

### *property* ModelImport.ProcessFaceComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessFaceComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessLineBodies"></a>

### *property* ModelImport.ProcessLineBodies *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessLineBodies.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessMesh200Elms"></a>

### *property* ModelImport.ProcessMesh200Elms *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessMesh200Elms.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessModelData"></a>

### *property* ModelImport.ProcessModelData *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessModelData.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessNodalComponents"></a>

### *property* ModelImport.ProcessNodalComponents *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessNodalComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessValidBlockedCDBFile"></a>

### *property* ModelImport.ProcessValidBlockedCDBFile *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ProcessValidBlockedCDBFile.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Properties"></a>

### *property* ModelImport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ToleranceAngle"></a>

### *property* ModelImport.ToleranceAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.UnitSystemTypeForImport"></a>

### *property* ModelImport.UnitSystemTypeForImport *: [Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType](../../../../../v242/Ansys/Mechanical/DataModel/Enums/ModelImportUnitSystemType.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitSystemTypeForImport.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VertexInsertionAngle"></a>

### *property* ModelImport.VertexInsertionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexInsertionAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VisibleProperties"></a>

### *property* ModelImport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelImport.Activate"></a>

### ModelImport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddComment"></a>

### ModelImport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddFigure"></a>

### ModelImport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddImage"></a>

### ModelImport.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CopyTo"></a>

### ModelImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateParameter"></a>

### ModelImport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Duplicate"></a>

### ModelImport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetChildren"></a>

### ModelImport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetParameter"></a>

### ModelImport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupAllSimilarChildren"></a>

### ModelImport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupSimilarObjects"></a>

### ModelImport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByAPIName"></a>

### ModelImport.PropertyByAPIName(name: System.String)

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByName"></a>

### ModelImport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.RemoveParameter"></a>

### ModelImport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

