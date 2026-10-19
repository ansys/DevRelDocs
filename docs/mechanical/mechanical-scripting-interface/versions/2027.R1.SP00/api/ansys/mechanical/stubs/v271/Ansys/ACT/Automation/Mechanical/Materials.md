# `Materials`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Materials"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Materials(internalObject: Any)

<a id="Materials"></a>

### *class* Materials(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Materials.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Materials.Activate)                                         | Activate the current object.                                                                |
| [`AddComment`](#Materials.AddComment)                                     | Creates a new child Comment.                                                                |
| [`AddFigure`](#Materials.AddFigure)                                       | Creates a new child Figure.                                                                 |
| [`AddImage`](#Materials.AddImage)                                         | Creates a new child Image.                                                                  |
| [`AddImportedTraceExternalData`](#Materials.AddImportedTraceExternalData) | Creates a new Imported Trace (External Data).                                               |
| [`AddMaterialAssignment`](#Materials.AddMaterialAssignment)               | Creates a new MaterialAssignment                                                            |
| [`AddMaterialCombination`](#Materials.AddMaterialCombination)             | Creates a new MaterialCombination                                                           |
| [`AddMaterialPlot`](#Materials.AddMaterialPlot)                           | Creates a new MaterialPlot                                                                  |
| [`Copy`](#Materials.Copy)                                                 | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Materials.CopyTo)                                             | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Materials.CreateObjRef)                                 | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Materials.CreateParameter)                           | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Materials.Cut)                                                   | Cuts the current DataModelObject.                                                           |
| [`Duplicate`](#Materials.Duplicate)                                       | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Materials.Equals)                                             | Equals method.                                                                              |
| [`GetAPIName`](#Materials.GetAPIName)                                     | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Materials.GetAllProperties)                         | GetAllProperties method.                                                                    |
| [`GetChildren`](#Materials.GetChildren)                                   | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Materials.GetDetailsView)                             | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Materials.GetEnumName)                                   | Enum name bound to value                                                                    |
| [`GetHashCode`](#Materials.GetHashCode)                                   | GetHashCode method.                                                                         |
| [`GetIconFile`](#Materials.GetIconFile)                                   | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Materials.GetLifetimeService)                     | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Materials.GetObjectData)                               | GetObjectData method.                                                                       |
| [`GetParameter`](#Materials.GetParameter)                                 | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Materials.GetPath)                                           | GetPath method.                                                                             |
| [`GetPropertyName`](#Materials.GetPropertyName)                           | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Materials.GetPropertyValue)                         | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Materials.GetVisibleProperties)                 | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Materials.GetVisiblePropertyNames)           | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Materials.GroupAllSimilarChildren)           | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Materials.GroupSimilarObjects)                   | Run the GroupSimilarObjects action.                                                         |
| [`Import`](#Materials.Import)                                             |                                                                                             |
| [`InitializeLifetimeService`](#Materials.InitializeLifetimeService)       | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Materials.IsPropertyEditable)                     | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Materials.IsPropertyVisible)                       | IsPropertyVisible method.                                                                   |
| [`Paste`](#Materials.Paste)                                               | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Materials.PropertyByAPIName)                       | Get a property by its API name.                                                             |
| [`PropertyById`](#Materials.PropertyById)                                 | PropertyById method.                                                                        |
| [`PropertyByName`](#Materials.PropertyByName)                             | Get a property by its unique name.                                                          |
| [`RefreshMaterials`](#Materials.RefreshMaterials)                         | Run the RefreshMaterials action.                                                            |
| [`RemoveFromGroup`](#Materials.RemoveFromGroup)                           | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Materials.RemoveParameter)                           | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Materials.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Children`](#Materials.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Materials.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Materials.Comments)                                 | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#Materials.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#Materials.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Materials.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Materials.IconName)                                 | IconName property.                                            |
| [`Images`](#Materials.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Materials.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Materials.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`MaterialAssignments`](#Materials.MaterialAssignments)           | Gets the MaterialAssignments.                                 |
| [`MaterialCount`](#Materials.MaterialCount)                       | Gets the MaterialCount.                                       |
| [`Name`](#Materials.Name)                                         | Name property.                                                |
| [`ObjectId`](#Materials.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Materials.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Materials.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Materials.Parent)                                     | Parent property.                                              |
| [`Properties`](#Materials.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Materials.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`State`](#Materials.State)                                       | State property.                                               |
| [`TransferableObjectId`](#Materials.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Materials.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Materials.AttachedRefs"></a>

### *property* Materials.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Children"></a>

### *property* Materials.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ClsId"></a>

### *property* Materials.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Comments"></a>

### *property* Materials.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.DataModelObjectCategory"></a>

### *property* Materials.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Figures"></a>

### *property* Materials.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupingFolder"></a>

### *property* Materials.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.IconName"></a>

### *property* Materials.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Images"></a>

### *property* Materials.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ImportableObjectSourceId"></a>

### *property* Materials.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.InternalObject"></a>

### *property* Materials.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMaterialGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialAssignments"></a>

### *property* Materials.MaterialAssignments *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaterialAssignments.

<!-- !! processed by numpydoc !! -->

<a id="Materials.MaterialCount"></a>

### *property* Materials.MaterialCount *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the MaterialCount.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Name"></a>

### *property* Materials.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ObjectId"></a>

### *property* Materials.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ObjectState"></a>

### *property* Materials.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ObjectTags"></a>

### *property* Materials.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Parent"></a>

### *property* Materials.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Properties"></a>

### *property* Materials.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.ReadOnly"></a>

### *property* Materials.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Materials.State"></a>

### *property* Materials.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.TransferableObjectId"></a>

### *property* Materials.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.VisibleProperties"></a>

### *property* Materials.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Materials.Activate"></a>

### Materials.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddComment"></a>

### Materials.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddFigure"></a>

### Materials.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImage"></a>

### Materials.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddImportedTraceExternalData"></a>

### Materials.AddImportedTraceExternalData() → Ansys.ACT.Automation.Mechanical.ImportedLoads.ImportedTraceGroup

Creates a new Imported Trace (External Data).

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialAssignment"></a>

### Materials.AddMaterialAssignment() → [Ansys.ACT.Automation.Mechanical.MaterialAssignment](MaterialAssignment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialAssignment)

Creates a new MaterialAssignment

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialCombination"></a>

### Materials.AddMaterialCombination() → [Ansys.ACT.Automation.Mechanical.MaterialCombination](MaterialCombination.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialCombination)

Creates a new MaterialCombination

<!-- !! processed by numpydoc !! -->

<a id="Materials.AddMaterialPlot"></a>

### Materials.AddMaterialPlot() → [Ansys.ACT.Automation.Mechanical.MaterialPlot](MaterialPlot.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MaterialPlot)

Creates a new MaterialPlot

<!-- !! processed by numpydoc !! -->

<a id="Materials.Copy"></a>

### Materials.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CopyTo"></a>

### Materials.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CreateObjRef"></a>

### Materials.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.CreateParameter"></a>

### Materials.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Cut"></a>

### Materials.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Duplicate"></a>

### Materials.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Equals"></a>

### Materials.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetAPIName"></a>

### Materials.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetAllProperties"></a>

### Materials.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetChildren"></a>

### Materials.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Materials.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetDetailsView"></a>

### Materials.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetEnumName"></a>

### Materials.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetHashCode"></a>

### Materials.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetIconFile"></a>

### Materials.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetLifetimeService"></a>

### Materials.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetObjectData"></a>

### Materials.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetParameter"></a>

### Materials.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetPath"></a>

### Materials.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetPropertyName"></a>

### Materials.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetPropertyValue"></a>

### Materials.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetVisibleProperties"></a>

### Materials.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GetVisiblePropertyNames"></a>

### Materials.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupAllSimilarChildren"></a>

### Materials.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.GroupSimilarObjects"></a>

### Materials.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Import"></a>

### Materials.Import(materialURI: [str](https://docs.python.org/3/builtins/stdtypes.html#str), format: [Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat](../../../Mechanical/DataModel/MechanicalEnums/Materials/ImportFormat.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Materials.ImportFormat), settings: [Ansys.Mechanical.Materials.ImportSettings](../../../Mechanical/Materials/ImportSettings.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.Materials.ImportSettings)) → Iterable[[Ansys.ACT.Automation.Mechanical.Material](Material.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Material)]

Import method

<!-- !! processed by numpydoc !! -->

<a id="Materials.InitializeLifetimeService"></a>

### Materials.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.IsPropertyEditable"></a>

### Materials.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Materials.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.IsPropertyVisible"></a>

### Materials.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Materials.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.Paste"></a>

### Materials.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByAPIName"></a>

### Materials.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyById"></a>

### Materials.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Materials.PropertyByName"></a>

### Materials.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RefreshMaterials"></a>

### Materials.RefreshMaterials() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RefreshMaterials action.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RemoveFromGroup"></a>

### Materials.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Materials.RemoveParameter"></a>

### Materials.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

