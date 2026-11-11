# `MeshCopy`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.MeshCopy(internalObject: Any)

<a id="MeshCopy"></a>

### *class* MeshCopy(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a MeshCopy.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#MeshCopy.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#MeshCopy.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#MeshCopy.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#MeshCopy.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#MeshCopy.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#MeshCopy.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#MeshCopy.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#MeshCopy.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#MeshCopy.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#MeshCopy.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#MeshCopy.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#MeshCopy.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#MeshCopy.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#MeshCopy.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#MeshCopy.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#MeshCopy.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#MeshCopy.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#MeshCopy.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#MeshCopy.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#MeshCopy.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#MeshCopy.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#MeshCopy.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#MeshCopy.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#MeshCopy.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#MeshCopy.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#MeshCopy.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#MeshCopy.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#MeshCopy.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#MeshCopy.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#MeshCopy.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#MeshCopy.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#MeshCopy.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#MeshCopy.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#MeshCopy.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#MeshCopy.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#MeshCopy.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#MeshCopy.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#MeshCopy.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#MeshCopy.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#MeshCopy.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#MeshCopy.AttachedRefs)                               | AttachedRefs property.                                        |
| [`Children`](#MeshCopy.Children)                                       | Gets the list of children.                                    |
| [`ClsId`](#MeshCopy.ClsId)                                             | ClsId property.                                               |
| [`Comments`](#MeshCopy.Comments)                                       | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#MeshCopy.DataModelObjectCategory)         | Gets the current DataModelObject's category.                  |
| [`Figures`](#MeshCopy.Figures)                                         | Gets the list of associated figures.                          |
| [`GroupingFolder`](#MeshCopy.GroupingFolder)                           | GroupingFolder property.                                      |
| [`IconName`](#MeshCopy.IconName)                                       | IconName property.                                            |
| [`Images`](#MeshCopy.Images)                                           | Gets the list of associated images.                           |
| [`InternalObject`](#MeshCopy.InternalObject)                           | Gets the internal object. For advanced usage only.            |
| [`Name`](#MeshCopy.Name)                                               | Name property.                                                |
| [`NodeMergeTolerance`](#MeshCopy.NodeMergeTolerance)                   | Gets or sets the NodeMergeTolerance.                          |
| [`NodeMergeToleranceOption`](#MeshCopy.NodeMergeToleranceOption)       | Gets or sets the NodeMergeToleranceOption.                    |
| [`ObjectId`](#MeshCopy.ObjectId)                                       | ObjectId property.                                            |
| [`ObjectState`](#MeshCopy.ObjectState)                                 | ObjectState property.                                         |
| [`ObjectTags`](#MeshCopy.ObjectTags)                                   | ObjectTags property.                                          |
| [`Parent`](#MeshCopy.Parent)                                           | Parent property.                                              |
| [`PercentageOfElementSize`](#MeshCopy.PercentageOfElementSize)         | Gets or sets the PercentageOfElementSize.                     |
| [`Properties`](#MeshCopy.Properties)                                   | Gets the list of properties for this object.                  |
| [`ScopingMethod`](#MeshCopy.ScopingMethod)                             | Gets or sets the ScopingMethod.                               |
| [`SourceAnchors`](#MeshCopy.SourceAnchors)                             | Gets or sets the SourceAnchors.                               |
| [`SourceAnchorsNamedSelection`](#MeshCopy.SourceAnchorsNamedSelection) | Gets or sets the SourceAnchorsNamedSelection.                 |
| [`State`](#MeshCopy.State)                                             | State property.                                               |
| [`Suppressed`](#MeshCopy.Suppressed)                                   | Gets or sets the Suppressed.                                  |
| [`TargetAnchors`](#MeshCopy.TargetAnchors)                             | Gets or sets the TargetAnchors.                               |
| [`TargetAnchorsNamedSelection`](#MeshCopy.TargetAnchorsNamedSelection) | Gets or sets the TargetAnchorsNamedSelection.                 |
| [`TargetScoping`](#MeshCopy.TargetScoping)                             | Gets or sets the TargetScoping.                               |
| [`VisibleProperties`](#MeshCopy.VisibleProperties)                     | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="MeshCopy.AttachedRefs"></a>

### *property* MeshCopy.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Children"></a>

### *property* MeshCopy.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ClsId"></a>

### *property* MeshCopy.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Comments"></a>

### *property* MeshCopy.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.DataModelObjectCategory"></a>

### *property* MeshCopy.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Figures"></a>

### *property* MeshCopy.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupingFolder"></a>

### *property* MeshCopy.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.IconName"></a>

### *property* MeshCopy.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Images"></a>

### *property* MeshCopy.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.InternalObject"></a>

### *property* MeshCopy.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Name"></a>

### *property* MeshCopy.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeTolerance"></a>

### *property* MeshCopy.NodeMergeTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeMergeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.NodeMergeToleranceOption"></a>

### *property* MeshCopy.NodeMergeToleranceOption *: [Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod](../../../../Mechanical/DataModel/Enums/NodeMergeToleranceMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.NodeMergeToleranceMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NodeMergeToleranceOption.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ObjectId"></a>

### *property* MeshCopy.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ObjectState"></a>

### *property* MeshCopy.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ObjectTags"></a>

### *property* MeshCopy.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Parent"></a>

### *property* MeshCopy.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PercentageOfElementSize"></a>

### *property* MeshCopy.PercentageOfElementSize *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PercentageOfElementSize.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Properties"></a>

### *property* MeshCopy.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.ScopingMethod"></a>

### *property* MeshCopy.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchors"></a>

### *property* MeshCopy.SourceAnchors *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.SourceAnchorsNamedSelection"></a>

### *property* MeshCopy.SourceAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SourceAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.State"></a>

### *property* MeshCopy.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Suppressed"></a>

### *property* MeshCopy.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchors"></a>

### *property* MeshCopy.TargetAnchors *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetAnchors.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetAnchorsNamedSelection"></a>

### *property* MeshCopy.TargetAnchorsNamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetAnchorsNamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.TargetScoping"></a>

### *property* MeshCopy.TargetScoping *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TargetScoping.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.VisibleProperties"></a>

### *property* MeshCopy.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="MeshCopy.Activate"></a>

### MeshCopy.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddComment"></a>

### MeshCopy.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddFigure"></a>

### MeshCopy.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.AddImage"></a>

### MeshCopy.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Copy"></a>

### MeshCopy.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CopyTo"></a>

### MeshCopy.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CreateObjRef"></a>

### MeshCopy.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.CreateParameter"></a>

### MeshCopy.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Cut"></a>

### MeshCopy.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Delete"></a>

### MeshCopy.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Duplicate"></a>

### MeshCopy.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Equals"></a>

### MeshCopy.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GenerateMesh"></a>

### MeshCopy.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetAPIName"></a>

### MeshCopy.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetAllProperties"></a>

### MeshCopy.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetChildren"></a>

### MeshCopy.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### MeshCopy.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetDetailsView"></a>

### MeshCopy.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetEnumName"></a>

### MeshCopy.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetHashCode"></a>

### MeshCopy.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetIconFile"></a>

### MeshCopy.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetLifetimeService"></a>

### MeshCopy.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetObjectData"></a>

### MeshCopy.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetParameter"></a>

### MeshCopy.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetPath"></a>

### MeshCopy.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetPropertyName"></a>

### MeshCopy.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetPropertyValue"></a>

### MeshCopy.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetVisibleProperties"></a>

### MeshCopy.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GetVisiblePropertyNames"></a>

### MeshCopy.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupAllSimilarChildren"></a>

### MeshCopy.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.GroupSimilarObjects"></a>

### MeshCopy.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.InitializeLifetimeService"></a>

### MeshCopy.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.IsPropertyEditable"></a>

### MeshCopy.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshCopy.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.IsPropertyVisible"></a>

### MeshCopy.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### MeshCopy.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.Paste"></a>

### MeshCopy.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByAPIName"></a>

### MeshCopy.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyById"></a>

### MeshCopy.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.PropertyByName"></a>

### MeshCopy.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RemoveFromGroup"></a>

### MeshCopy.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RemoveParameter"></a>

### MeshCopy.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="MeshCopy.RenameBasedOnDefinition"></a>

### MeshCopy.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

