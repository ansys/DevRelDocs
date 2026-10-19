# `ModelImport`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ModelImport"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ModelImport(internalObject: Any)

<a id="ModelImport"></a>

### *class* ModelImport(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ModelImport.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ModelImport.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#ModelImport.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ModelImport.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ModelImport.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ModelImport.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ModelImport.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ModelImport.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ModelImport.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ModelImport.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`DeleteAssociatedBodies`](#ModelImport.DeleteAssociatedBodies)       | DeleteAssociatedBodies method.                                                              |
| [`Duplicate`](#ModelImport.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ModelImport.Equals)                                       | Equals method.                                                                              |
| [`Generate`](#ModelImport.Generate)                                   | Generate method.                                                                            |
| [`GetAPIName`](#ModelImport.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ModelImport.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ModelImport.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ModelImport.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ModelImport.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ModelImport.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ModelImport.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ModelImport.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ModelImport.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ModelImport.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ModelImport.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ModelImport.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ModelImport.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ModelImport.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ModelImport.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ModelImport.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ModelImport.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`Import`](#ModelImport.Import)                                       | Import method.                                                                              |
| [`InitializeLifetimeService`](#ModelImport.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ModelImport.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ModelImport.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ModelImport.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ModelImport.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ModelImport.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ModelImport.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ModelImport.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ModelImport.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AnalysisTypeDimensionSetting`](#ModelImport.AnalysisTypeDimensionSetting)       | Gets or sets the AnalysisTypeDimensionSetting.                |
| [`ApplicationSourceSetting`](#ModelImport.ApplicationSourceSetting)               | Gets the ApplicationSourceSetting.                            |
| [`AttachedRefs`](#ModelImport.AttachedRefs)                                       | AttachedRefs property.                                        |
| [`BodyGroupByAnsysElmTypeNumber`](#ModelImport.BodyGroupByAnsysElmTypeNumber)     | Gets or sets the BodyGroupByAnsysElmTypeNumber.               |
| [`BodyGroupByMaterialNumber`](#ModelImport.BodyGroupByMaterialNumber)             | Gets or sets the BodyGroupByMaterialNumber.                   |
| [`BodyGroupByThickness`](#ModelImport.BodyGroupByThickness)                       | Gets or sets the BodyGroupByThickness.                        |
| [`Children`](#ModelImport.Children)                                               | Gets the list of children.                                    |
| [`ClsId`](#ModelImport.ClsId)                                                     | ClsId property.                                               |
| [`Comments`](#ModelImport.Comments)                                               | Gets the list of associated comments.                         |
| [`CreateGeometry`](#ModelImport.CreateGeometry)                                   | Gets or sets the CreateGeometry.                              |
| [`CreateGeometryEdgeComponents`](#ModelImport.CreateGeometryEdgeComponents)       | Gets or sets the CreateGeometryEdgeComponents.                |
| [`CreateGeometryFaceComponents`](#ModelImport.CreateGeometryFaceComponents)       | Gets or sets the CreateGeometryFaceComponents.                |
| [`CreateGeometryVertexComponent`](#ModelImport.CreateGeometryVertexComponent)     | Gets or sets the CreateGeometryVertexComponent.               |
| [`DataModelObjectCategory`](#ModelImport.DataModelObjectCategory)                 | Gets the current DataModelObject's category.                  |
| [`ElementComponentKey`](#ModelImport.ElementComponentKey)                         | Gets or sets the ElementComponentKey.                         |
| [`ElementOffset`](#ModelImport.ElementOffset)                                     | Gets or sets the ElementOffset.                               |
| [`FaceComponentKey`](#ModelImport.FaceComponentKey)                               | Gets or sets the FaceComponentKey.                            |
| [`Figures`](#ModelImport.Figures)                                                 | Gets the list of associated figures.                          |
| [`FilePath`](#ModelImport.FilePath)                                               | FilePath property.                                            |
| [`GeometryComponentKey`](#ModelImport.GeometryComponentKey)                       | Gets or sets the GeometryComponentKey.                        |
| [`GroupingFolder`](#ModelImport.GroupingFolder)                                   | GroupingFolder property.                                      |
| [`IconName`](#ModelImport.IconName)                                               | IconName property.                                            |
| [`Images`](#ModelImport.Images)                                                   | Gets the list of associated images.                           |
| [`ImportMaterials`](#ModelImport.ImportMaterials)                                 | Gets or sets the ImportMaterials.                             |
| [`InternalObject`](#ModelImport.InternalObject)                                   | Gets the internal object. For advanced usage only.            |
| [`MaterialConsolidation`](#ModelImport.MaterialConsolidation)                     | Gets or sets the MaterialConsolidation.                       |
| [`ModelImportSourceFilePath`](#ModelImport.ModelImportSourceFilePath)             | Gets or sets the ModelImportSourceFilePath.                   |
| [`Name`](#ModelImport.Name)                                                       | Name property.                                                |
| [`NodalComponentKey`](#ModelImport.NodalComponentKey)                             | Gets or sets the NodalComponentKey.                           |
| [`NodeAndElementRenumberingMethod`](#ModelImport.NodeAndElementRenumberingMethod) | Gets or sets the NodeAndElementRenumberingMethod.             |
| [`NodeOffset`](#ModelImport.NodeOffset)                                           | Gets or sets the NodeOffset.                                  |
| [`ObjectId`](#ModelImport.ObjectId)                                               | ObjectId property.                                            |
| [`ObjectState`](#ModelImport.ObjectState)                                         | ObjectState property.                                         |
| [`ObjectTags`](#ModelImport.ObjectTags)                                           | ObjectTags property.                                          |
| [`OriginX`](#ModelImport.OriginX)                                                 | Gets or sets the OriginX.                                     |
| [`OriginY`](#ModelImport.OriginY)                                                 | Gets or sets the OriginY.                                     |
| [`OriginZ`](#ModelImport.OriginZ)                                                 | Gets or sets the OriginZ.                                     |
| [`Parent`](#ModelImport.Parent)                                                   | Parent property.                                              |
| [`PostRemovalAction`](#ModelImport.PostRemovalAction)                             | PostRemovalAction property.                                   |
| [`PreRemovalAction`](#ModelImport.PreRemovalAction)                               | PreRemovalAction property.                                    |
| [`ProcessElementComponents`](#ModelImport.ProcessElementComponents)               | Gets or sets the ProcessElementComponents.                    |
| [`ProcessFaceComponents`](#ModelImport.ProcessFaceComponents)                     | Gets or sets the ProcessFaceComponents.                       |
| [`ProcessLineBodies`](#ModelImport.ProcessLineBodies)                             | Gets or sets the ProcessLineBodies.                           |
| [`ProcessMesh200Elms`](#ModelImport.ProcessMesh200Elms)                           | Gets or sets the ProcessMesh200Elms.                          |
| [`ProcessModelData`](#ModelImport.ProcessModelData)                               | Gets or sets the ProcessModelData.                            |
| [`ProcessNodalComponents`](#ModelImport.ProcessNodalComponents)                   | Gets or sets the ProcessNodalComponents.                      |
| [`ProcessValidBlockedCDBFile`](#ModelImport.ProcessValidBlockedCDBFile)           | Gets or sets the ProcessValidBlockedCDBFile.                  |
| [`Properties`](#ModelImport.Properties)                                           | Gets the list of properties for this object.                  |
| [`SourceIdentifier`](#ModelImport.SourceIdentifier)                               | Gets the SourceIdentifier.                                    |
| [`State`](#ModelImport.State)                                                     | State property.                                               |
| [`ThetaXY`](#ModelImport.ThetaXY)                                                 | Gets or sets the ThetaXY.                                     |
| [`ThetaYZ`](#ModelImport.ThetaYZ)                                                 | Gets or sets the ThetaYZ.                                     |
| [`ThetaZX`](#ModelImport.ThetaZX)                                                 | Gets or sets the ThetaZX.                                     |
| [`ToleranceAngle`](#ModelImport.ToleranceAngle)                                   | Gets or sets the ToleranceAngle.                              |
| [`UnitSystemTypeForImport`](#ModelImport.UnitSystemTypeForImport)                 | Gets or sets the UnitSystemTypeForImport.                     |
| [`VertexInsertionAngle`](#ModelImport.VertexInsertionAngle)                       | Gets or sets the VertexInsertionAngle.                        |
| [`VisibleProperties`](#ModelImport.VisibleProperties)                             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="ModelImport.AnalysisTypeDimensionSetting"></a>

### *property* ModelImport.AnalysisTypeDimensionSetting *: [Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum](../../../Mechanical/DataModel/Enums/AnalysisTypeDimensionEnum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AnalysisTypeDimensionEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AnalysisTypeDimensionSetting.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ApplicationSourceSetting"></a>

### *property* ModelImport.ApplicationSourceSetting *: [Ansys.Mechanical.DataModel.Enums.ApplicationSourceEnum](../../../Mechanical/DataModel/Enums/ApplicationSourceEnum.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ApplicationSourceEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the ApplicationSourceSetting.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AttachedRefs"></a>

### *property* ModelImport.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByAnsysElmTypeNumber"></a>

### *property* ModelImport.BodyGroupByAnsysElmTypeNumber *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BodyGroupByAnsysElmTypeNumber.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByMaterialNumber"></a>

### *property* ModelImport.BodyGroupByMaterialNumber *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BodyGroupByMaterialNumber.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.BodyGroupByThickness"></a>

### *property* ModelImport.BodyGroupByThickness *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BodyGroupByThickness.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Children"></a>

### *property* ModelImport.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ClsId"></a>

### *property* ModelImport.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Comments"></a>

### *property* ModelImport.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometry"></a>

### *property* ModelImport.CreateGeometry *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateGeometry.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryEdgeComponents"></a>

### *property* ModelImport.CreateGeometryEdgeComponents *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateGeometryEdgeComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryFaceComponents"></a>

### *property* ModelImport.CreateGeometryFaceComponents *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateGeometryFaceComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateGeometryVertexComponent"></a>

### *property* ModelImport.CreateGeometryVertexComponent *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CreateGeometryVertexComponent.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.DataModelObjectCategory"></a>

### *property* ModelImport.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ElementComponentKey"></a>

### *property* ModelImport.ElementComponentKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ElementOffset"></a>

### *property* ModelImport.ElementOffset *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ElementOffset.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.FaceComponentKey"></a>

### *property* ModelImport.FaceComponentKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FaceComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Figures"></a>

### *property* ModelImport.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.FilePath"></a>

### *property* ModelImport.FilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

FilePath property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GeometryComponentKey"></a>

### *property* ModelImport.GeometryComponentKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometryComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupingFolder"></a>

### *property* ModelImport.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.IconName"></a>

### *property* ModelImport.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Images"></a>

### *property* ModelImport.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ImportMaterials"></a>

### *property* ModelImport.ImportMaterials *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ImportMaterials.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.InternalObject"></a>

### *property* ModelImport.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSModelImportAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.MaterialConsolidation"></a>

### *property* ModelImport.MaterialConsolidation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MaterialConsolidation.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ModelImportSourceFilePath"></a>

### *property* ModelImport.ModelImportSourceFilePath *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ModelImportSourceFilePath.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Name"></a>

### *property* ModelImport.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodalComponentKey"></a>

### *property* ModelImport.NodalComponentKey *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodalComponentKey.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeAndElementRenumberingMethod"></a>

### *property* ModelImport.NodeAndElementRenumberingMethod *: [Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType](../../../Mechanical/DataModel/Enums/NodeAndElementRenumberingMethodType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NodeAndElementRenumberingMethodType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeAndElementRenumberingMethod.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.NodeOffset"></a>

### *property* ModelImport.NodeOffset *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeOffset.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ObjectId"></a>

### *property* ModelImport.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ObjectState"></a>

### *property* ModelImport.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ObjectTags"></a>

### *property* ModelImport.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.OriginX"></a>

### *property* ModelImport.OriginX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OriginX.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.OriginY"></a>

### *property* ModelImport.OriginY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OriginY.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.OriginZ"></a>

### *property* ModelImport.OriginZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the OriginZ.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Parent"></a>

### *property* ModelImport.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PostRemovalAction"></a>

### *property* ModelImport.PostRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PostRemovalAction property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PreRemovalAction"></a>

### *property* ModelImport.PreRemovalAction *: System.Action | [None](https://docs.python.org/3/builtins/constants.html#None)*

PreRemovalAction property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessElementComponents"></a>

### *property* ModelImport.ProcessElementComponents *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessElementComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessFaceComponents"></a>

### *property* ModelImport.ProcessFaceComponents *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessFaceComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessLineBodies"></a>

### *property* ModelImport.ProcessLineBodies *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessLineBodies.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessMesh200Elms"></a>

### *property* ModelImport.ProcessMesh200Elms *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessMesh200Elms.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessModelData"></a>

### *property* ModelImport.ProcessModelData *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessModelData.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessNodalComponents"></a>

### *property* ModelImport.ProcessNodalComponents *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessNodalComponents.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ProcessValidBlockedCDBFile"></a>

### *property* ModelImport.ProcessValidBlockedCDBFile *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProcessValidBlockedCDBFile.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Properties"></a>

### *property* ModelImport.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.SourceIdentifier"></a>

### *property* ModelImport.SourceIdentifier *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SourceIdentifier.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.State"></a>

### *property* ModelImport.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ThetaXY"></a>

### *property* ModelImport.ThetaXY *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaXY.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ThetaYZ"></a>

### *property* ModelImport.ThetaYZ *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaYZ.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ThetaZX"></a>

### *property* ModelImport.ThetaZX *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ThetaZX.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.ToleranceAngle"></a>

### *property* ModelImport.ToleranceAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.UnitSystemTypeForImport"></a>

### *property* ModelImport.UnitSystemTypeForImport *: [Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType](../../../Mechanical/DataModel/Enums/ModelImportUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ModelImportUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UnitSystemTypeForImport.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VertexInsertionAngle"></a>

### *property* ModelImport.VertexInsertionAngle *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the VertexInsertionAngle.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.VisibleProperties"></a>

### *property* ModelImport.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ModelImport.Activate"></a>

### ModelImport.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddComment"></a>

### ModelImport.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddFigure"></a>

### ModelImport.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.AddImage"></a>

### ModelImport.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Copy"></a>

### ModelImport.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CopyTo"></a>

### ModelImport.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateObjRef"></a>

### ModelImport.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.CreateParameter"></a>

### ModelImport.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Cut"></a>

### ModelImport.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.DeleteAssociatedBodies"></a>

### ModelImport.DeleteAssociatedBodies() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

DeleteAssociatedBodies method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Duplicate"></a>

### ModelImport.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Equals"></a>

### ModelImport.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Generate"></a>

### ModelImport.Generate() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Generate method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetAPIName"></a>

### ModelImport.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetAllProperties"></a>

### ModelImport.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetChildren"></a>

### ModelImport.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ModelImport.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetDetailsView"></a>

### ModelImport.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetEnumName"></a>

### ModelImport.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetHashCode"></a>

### ModelImport.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetIconFile"></a>

### ModelImport.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetLifetimeService"></a>

### ModelImport.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetObjectData"></a>

### ModelImport.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetParameter"></a>

### ModelImport.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetPath"></a>

### ModelImport.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetPropertyName"></a>

### ModelImport.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetPropertyValue"></a>

### ModelImport.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetVisibleProperties"></a>

### ModelImport.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GetVisiblePropertyNames"></a>

### ModelImport.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupAllSimilarChildren"></a>

### ModelImport.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.GroupSimilarObjects"></a>

### ModelImport.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Import"></a>

### ModelImport.Import() → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Import method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.InitializeLifetimeService"></a>

### ModelImport.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.IsPropertyEditable"></a>

### ModelImport.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ModelImport.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.IsPropertyVisible"></a>

### ModelImport.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ModelImport.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.Paste"></a>

### ModelImport.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByAPIName"></a>

### ModelImport.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyById"></a>

### ModelImport.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.PropertyByName"></a>

### ModelImport.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.RemoveFromGroup"></a>

### ModelImport.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ModelImport.RemoveParameter"></a>

### ModelImport.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

