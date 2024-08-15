# `ModelImport`



#### *class* ansys.mechanical.stubs.v242.Ansys.ACT.Automation.Mechanical.ModelImport

Bases: [`object`](https://docs.python.org/3/library/functions.html#object)

Defines a ModelImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------|-----------------------------------------------------------------------------------|
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `GetChildren`             | Gets the list of children, filtered by type.                                      |
| `AddComment`              | Creates a new child Comment.                                                      |
| `AddFigure`               | Creates a new child Figure.                                                       |
| `AddImage`                | Creates a new child Image.                                                        |
| `Activate`                | Activate the current object.                                                      |
| `CopyTo`                  | Copies all visible properties from this object to another.                        |
| `Duplicate`               | Creates a copy of the current DataModelObject.                                    |
| `GroupAllSimilarChildren` | Run the GroupAllSimilarChildren action.                                           |
| `GroupSimilarObjects`     | Run the GroupSimilarObjects action.                                               |
| `PropertyByName`          | Get a property by its unique name.                                                |
| `PropertyByAPIName`       | Get a property by its API name.                                                   |
| `CreateParameter`         | Creates a new parameter for a Property.                                           |
| `GetParameter`            | Gets the parameter corresponding to the given property.                           |
| `RemoveParameter`         | Removes the parameter from the parameter set corresponding to the given property. |

### Properties

| Name | Description |
|-----------------------------------|---------------------------------------------------------------|
| `InternalObject`                  | Gets the internal object. For advanced usage only.            |
| `ElementComponentKey`             | Gets or sets the ElementComponentKey.                         |
| `ElementOffset`                   | Gets or sets the ElementOffset.                               |
| `FaceComponentKey`                | Gets or sets the FaceComponentKey.                            |
| `GeometryComponentKey`            | Gets or sets the GeometryComponentKey.                        |
| `ModelImportSourceFilePath`       | Gets or sets the ModelImportSourceFilePath.                   |
| `NodalComponentKey`               | Gets or sets the NodalComponentKey.                           |
| `NodeOffset`                      | Gets or sets the NodeOffset.                                  |
| `SourceIdentifier`                | Gets the SourceIdentifier.                                    |
| `ToleranceAngle`                  | Gets or sets the ToleranceAngle.                              |
| `VertexInsertionAngle`            | Gets or sets the VertexInsertionAngle.                        |
| `AnalysisTypeDimensionSetting`    | Gets or sets the AnalysisTypeDimensionSetting.                |
| `ApplicationSourceSetting`        | Gets the ApplicationSourceSetting.                            |
| `NodeAndElementRenumberingMethod` | Gets or sets the NodeAndElementRenumberingMethod.             |
| `UnitSystemTypeForImport`         | Gets or sets the UnitSystemTypeForImport.                     |
| `BodyGroupByAnsysElmTypeNumber`   | Gets or sets the BodyGroupByAnsysElmTypeNumber.               |
| `BodyGroupByMaterialNumber`       | Gets or sets the BodyGroupByMaterialNumber.                   |
| `BodyGroupByThickness`            | Gets or sets the BodyGroupByThickness.                        |
| `CreateGeometry`                  | Gets or sets the CreateGeometry.                              |
| `CreateGeometryEdgeComponents`    | Gets or sets the CreateGeometryEdgeComponents.                |
| `CreateGeometryFaceComponents`    | Gets or sets the CreateGeometryFaceComponents.                |
| `CreateGeometryVertexComponent`   | Gets or sets the CreateGeometryVertexComponent.               |
| `ImportMaterials`                 | Gets or sets the ImportMaterials.                             |
| `MaterialConsolidation`           | Gets or sets the MaterialConsolidation.                       |
| `ProcessElementComponents`        | Gets or sets the ProcessElementComponents.                    |
| `ProcessFaceComponents`           | Gets or sets the ProcessFaceComponents.                       |
| `ProcessLineBodies`               | Gets or sets the ProcessLineBodies.                           |
| `ProcessMesh200Elms`              | Gets or sets the ProcessMesh200Elms.                          |
| `ProcessModelData`                | Gets or sets the ProcessModelData.                            |
| `ProcessNodalComponents`          | Gets or sets the ProcessNodalComponents.                      |
| `ProcessValidBlockedCDBFile`      | Gets or sets the ProcessValidBlockedCDBFile.                  |
| `DataModelObjectCategory`         | Gets the current DataModelObject's category.                  |
| `Children`                        | Gets the list of children.                                    |
| `Comments`                        | Gets the list of associated comments.                         |
| `Figures`                         | Gets the list of associated figures.                          |
| `Images`                          | Gets the list of associated images.                           |
| `InternalObject`                  | Gets the internal object. For advanced usage only.            |
| `Properties`                      | Gets the list of properties for this object.                  |
| `VisibleProperties`               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

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

### *property* ModelImport.SourceIdentifier *: System.String | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the SourceIdentifier.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ToleranceAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the ToleranceAngle.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.VertexInsertionAngle *: Ansys.Core.Units.Quantity | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the VertexInsertionAngle.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.AnalysisTypeDimensionSetting *: [Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum](../../../../../v241/Ansys/Mechanical/DataModel/Enums/AnalysisTypeDimensionEnum.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the AnalysisTypeDimensionSetting.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.ApplicationSourceSetting *: [Ansys.Mechanical.DataModel.Enums.ApplicationSourceEnum](../../../Mechanical/DataModel/Enums/ApplicationSourceEnum.md#ansys.mechanical.stubs.v242.Ansys.Mechanical.DataModel.Enums.ApplicationSourceEnum) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the ApplicationSourceSetting.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.NodeAndElementRenumberingMethod *: [Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/NodeAndElementRenumberingMethodType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the NodeAndElementRenumberingMethod.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.UnitSystemTypeForImport *: [Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType](../../../../../v241/Ansys/Mechanical/DataModel/Enums/ModelImportUnitSystemType.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType) | [None](https://docs.python.org/3/library/constants.html#None)*

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

### *property* ModelImport.MaterialConsolidation *: System.Boolean | [None](https://docs.python.org/3/library/constants.html#None)*

Gets or sets the MaterialConsolidation.

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

### *property* ModelImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Children *: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Comments *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Comment](../../../../../v241/Ansys/ACT/Automation/Mechanical/Comment.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Figures *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Figure](../../../../../v241/Ansys/ACT/Automation/Mechanical/Figure.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/library/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

### *property* ModelImport.Images *: System.Collections.Generic.IEnumerable[[Ansys.ACT.Automation.Mechanical.Image](../../../../../v241/Ansys/ACT/Automation/Mechanical/Image.md#ansys.mechanical.stubs.v241.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/library/constants.html#None)*

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

<a id="method-detail"></a>

## Method detail

### ModelImport.GetChildren(recurses: System.Boolean, children: System.Collections.Generic.IList[ChildrenType])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ModelImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../../v241/Ansys/Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v241.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: System.Boolean, children: System.Collections.Generic.IList[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject])

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddComment()

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddFigure()

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

### ModelImport.AddImage(filePath: System.String)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

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

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

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

