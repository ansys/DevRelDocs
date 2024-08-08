# `ModelImport`



#### *class* ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.ModelImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ModelImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`GetChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#id1)                                             | Gets the list of children, filtered by type.                                      |
| [`AddComment`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.AddComment)                           | Creates a new child Comment.                                                      |
| [`AddFigure`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.AddFigure)                             | Creates a new child Figure.                                                       |
| [`AddImage`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.AddImage)                               | Creates a new child Image.                                                        |
| [`Activate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Activate)                               | Activate the current object.                                                      |
| [`CopyTo`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CopyTo)                                   | Copies all visible properties from this object to another.                        |
| [`Duplicate`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Duplicate)                             | Creates a copy of the current DataModelObject.                                    |
| [`GroupAllSimilarChildren`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.GroupAllSimilarChildren) | Run the GroupAllSimilarChildren action.                                           |
| [`GroupSimilarObjects`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.GroupSimilarObjects)         | Run the GroupSimilarObjects action.                                               |
| [`PropertyByName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.PropertyByName)                   | Get a property by its unique name.                                                |
| [`PropertyByAPIName`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.PropertyByAPIName)             | Get a property by its API name.                                                   |
| [`CreateParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CreateParameter)                 | Creates a new parameter for a Property.                                           |
| [`GetParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.GetParameter)                       | Gets the parameter corresponding to the given property.                           |
| [`RemoveParameter`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.RemoveParameter)                 | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`ElementComponentKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ElementComponentKey)                         | Gets or sets the ElementComponentKey.                         |
| [`ElementOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ElementOffset)                                     | Gets or sets the ElementOffset.                               |
| [`FaceComponentKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.FaceComponentKey)                               | Gets or sets the FaceComponentKey.                            |
| [`GeometryComponentKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.GeometryComponentKey)                       | Gets or sets the GeometryComponentKey.                        |
| [`ModelImportSourceFilePath`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ModelImportSourceFilePath)             | Gets or sets the ModelImportSourceFilePath.                   |
| [`NodalComponentKey`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.NodalComponentKey)                             | Gets or sets the NodalComponentKey.                           |
| [`NodeOffset`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.NodeOffset)                                           | Gets or sets the NodeOffset.                                  |
| [`ToleranceAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ToleranceAngle)                                   | Gets or sets the ToleranceAngle.                              |
| [`VertexInsertionAngle`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.VertexInsertionAngle)                       | Gets or sets the VertexInsertionAngle.                        |
| [`AnalysisTypeDimensionSetting`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.AnalysisTypeDimensionSetting)       | Gets or sets the AnalysisTypeDimensionSetting.                |
| [`NodeAndElementRenumberingMethod`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.NodeAndElementRenumberingMethod) | Gets or sets the NodeAndElementRenumberingMethod.             |
| [`UnitSystemTypeForImport`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.UnitSystemTypeForImport)                 | Gets or sets the UnitSystemTypeForImport.                     |
| [`BodyGroupByAnsysElmTypeNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.BodyGroupByAnsysElmTypeNumber)     | Gets or sets the BodyGroupByAnsysElmTypeNumber.               |
| [`BodyGroupByMaterialNumber`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.BodyGroupByMaterialNumber)             | Gets or sets the BodyGroupByMaterialNumber.                   |
| [`BodyGroupByThickness`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.BodyGroupByThickness)                       | Gets or sets the BodyGroupByThickness.                        |
| [`CreateGeometry`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CreateGeometry)                                   | Gets or sets the CreateGeometry.                              |
| [`CreateGeometryEdgeComponents`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CreateGeometryEdgeComponents)       | Gets or sets the CreateGeometryEdgeComponents.                |
| [`CreateGeometryFaceComponents`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CreateGeometryFaceComponents)       | Gets or sets the CreateGeometryFaceComponents.                |
| [`CreateGeometryVertexComponent`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.CreateGeometryVertexComponent)     | Gets or sets the CreateGeometryVertexComponent.               |
| [`ImportMaterials`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ImportMaterials)                                 | Gets or sets the ImportMaterials.                             |
| [`ProcessElementComponents`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessElementComponents)               | Gets or sets the ProcessElementComponents.                    |
| [`ProcessFaceComponents`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessFaceComponents)                     | Gets or sets the ProcessFaceComponents.                       |
| [`ProcessLineBodies`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessLineBodies)                             | Gets or sets the ProcessLineBodies.                           |
| [`ProcessMesh200Elms`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessMesh200Elms)                           | Gets or sets the ProcessMesh200Elms.                          |
| [`ProcessModelData`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessModelData)                               | Gets or sets the ProcessModelData.                            |
| [`ProcessNodalComponents`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessNodalComponents)                   | Gets or sets the ProcessNodalComponents.                      |
| [`ProcessValidBlockedCDBFile`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.ProcessValidBlockedCDBFile)           | Gets or sets the ProcessValidBlockedCDBFile.                  |
| [`DataModelObjectCategory`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`Children`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Children)                                               | Gets the list of children.                                    |
| [`Comments`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Comments)                                               | Gets the list of associated comments.                         |
| [`Figures`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Figures)                                                 | Gets the list of associated figures.                          |
| [`Images`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Images)                                                   | Gets the list of associated images.                           |
| [`InternalObject`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#id0)                                                          | Gets the internal object. For advanced usage only.            |
| [`Properties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.Properties)                                           | Gets the list of properties for this object.                  |
| [`VisibleProperties`](../../../../../v242/Ansys/ACT/Automation/Mechanical/ModelImport.md#ModelImport.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ModelImport.InternalObject"></a>

### *property* ModelImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelImportAuto | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

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

<a id="ModelImport.GeometryComponentKey"></a>

### *property* ModelImport.GeometryComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the GeometryComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ModelImportSourceFilePath"></a>

### *property* ModelImport.ModelImportSourceFilePath *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ModelImportSourceFilePath.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodalComponentKey"></a>

### *property* ModelImport.NodalComponentKey *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodalComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeOffset"></a>

### *property* ModelImport.NodeOffset *: System.UInt32 | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ToleranceAngle"></a>

### *property* ModelImport.ToleranceAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VertexInsertionAngle"></a>

### *property* ModelImport.VertexInsertionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexInsertionAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AnalysisTypeDimensionSetting"></a>

### *property* ModelImport.AnalysisTypeDimensionSetting *: [Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum](../../../Mechanical/DataModel/Enums/AnalysisTypeDimensionEnum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisTypeDimensionSetting.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeAndElementRenumberingMethod"></a>

### *property* ModelImport.NodeAndElementRenumberingMethod *: [Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType](../../../Mechanical/DataModel/Enums/NodeAndElementRenumberingMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeAndElementRenumberingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.UnitSystemTypeForImport"></a>

### *property* ModelImport.UnitSystemTypeForImport *: [Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType](../../../Mechanical/DataModel/Enums/ModelImportUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the UnitSystemTypeForImport.

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

<a id="ModelImport.ImportMaterials"></a>

### *property* ModelImport.ImportMaterials *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ImportMaterials.

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

<a id="ModelImport.DataModelObjectCategory"></a>

### *property* ModelImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Children"></a>

### *property* ModelImport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Comments"></a>

### *property* ModelImport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Figures"></a>

### *property* ModelImport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Images"></a>

### *property* ModelImport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="id0"></a>

### *property* ModelImport.InternalObject *: System.Object | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Properties"></a>

### *property* ModelImport.Properties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VisibleProperties"></a>

### *property* ModelImport.VisibleProperties *: System.Collections.Generic.IReadOnlyList[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelImport.GetChildren"></a>

### ModelImport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="id1"></a>

### ModelImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

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

Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Activate"></a>

### ModelImport.Activate()

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CopyTo"></a>

### ModelImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Duplicate"></a>

### ModelImport.Duplicate()

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupAllSimilarChildren"></a>

### ModelImport.GroupAllSimilarChildren()

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupSimilarObjects"></a>

### ModelImport.GroupSimilarObjects()

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByName"></a>

### ModelImport.PropertyByName(name: System.String)

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByAPIName"></a>

### ModelImport.PropertyByAPIName(name: System.String)

Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateParameter"></a>

### ModelImport.CreateParameter(propName: System.String)

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetParameter"></a>

### ModelImport.GetParameter(propName: System.String)

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.RemoveParameter"></a>

### ModelImport.RemoveParameter(propName: System.String)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

