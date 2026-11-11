# `Stage`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Stage"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Stage(internalObject: Any)

<a id="Stage"></a>

### *class* Stage(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Stage.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Stage.Activate)                                                           | Activate the current object.                                                                |
| [`AddComment`](#Stage.AddComment)                                                       | Creates a new child Comment.                                                                |
| [`AddFigure`](#Stage.AddFigure)                                                         | Creates a new child Figure.                                                                 |
| [`AddImage`](#Stage.AddImage)                                                           | Creates a new child Image.                                                                  |
| [`Copy`](#Stage.Copy)                                                                   | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Stage.CopyTo)                                                               | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Stage.CreateObjRef)                                                   | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Stage.CreateParameter)                                             | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Stage.Cut)                                                                     | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Stage.Delete)                                                               | Run the Delete action.                                                                      |
| [`Duplicate`](#Stage.Duplicate)                                                         | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Stage.Equals)                                                               | Equals method.                                                                              |
| [`GetAPIName`](#Stage.GetAPIName)                                                       | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Stage.GetAllProperties)                                           | GetAllProperties method.                                                                    |
| [`GetChildren`](#Stage.GetChildren)                                                     | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Stage.GetDetailsView)                                               | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Stage.GetEnumName)                                                     | Enum name bound to value                                                                    |
| [`GetHarmonicIndexForEnvironmentByIndex`](#Stage.GetHarmonicIndexForEnvironmentByIndex) | Gets the worksheet harmonic index for a given environment at index.                         |
| [`GetHarmonicIndexNumberForEnvironment`](#Stage.GetHarmonicIndexNumberForEnvironment)   | Gets the worksheet number of harmonic indexes for a given environment.                      |
| [`GetHashCode`](#Stage.GetHashCode)                                                     | GetHashCode method.                                                                         |
| [`GetIconFile`](#Stage.GetIconFile)                                                     | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Stage.GetLifetimeService)                                       | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Stage.GetObjectData)                                                 | GetObjectData method.                                                                       |
| [`GetParameter`](#Stage.GetParameter)                                                   | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Stage.GetPath)                                                             | GetPath method.                                                                             |
| [`GetPropertyName`](#Stage.GetPropertyName)                                             | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Stage.GetPropertyValue)                                           | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Stage.GetVisibleProperties)                                   | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Stage.GetVisiblePropertyNames)                             | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Stage.GroupAllSimilarChildren)                             | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Stage.GroupSimilarObjects)                                     | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Stage.InitializeLifetimeService)                         | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Stage.IsPropertyEditable)                                       | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Stage.IsPropertyVisible)                                         | IsPropertyVisible method.                                                                   |
| [`Paste`](#Stage.Paste)                                                                 | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Stage.PropertyByAPIName)                                         | Get a property by its API name.                                                             |
| [`PropertyById`](#Stage.PropertyById)                                                   | PropertyById method.                                                                        |
| [`PropertyByName`](#Stage.PropertyByName)                                               | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Stage.RemoveFromGroup)                                             | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Stage.RemoveParameter)                                             | Removes the parameter from the parameter set corresponding to the given property.           |
| [`SetHarmonicIndexForEnvironmentByIndex`](#Stage.SetHarmonicIndexForEnvironmentByIndex) | Sets the worksheet harmonic index for a given environment at index.                         |
| [`SetHarmonicIndexNumberForEnvironment`](#Stage.SetHarmonicIndexNumberForEnvironment)   | Sets the worksheet number of harmonic indexes for a given environment.                      |

### Properties

| Name | Description |
|---------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#Stage.AttachedRefs)                         | AttachedRefs property.                                        |
| [`Behavior`](#Stage.Behavior)                                 | Gets the Behavior.                                            |
| [`Children`](#Stage.Children)                                 | Gets the list of children.                                    |
| [`ClsId`](#Stage.ClsId)                                       | ClsId property.                                               |
| [`Comments`](#Stage.Comments)                                 | Gets the list of associated comments.                         |
| [`CyclicRegion`](CyclicRegion.md#CyclicRegion)                | Gets or sets the CyclicRegion.                                |
| [`DataModelObjectCategory`](#Stage.DataModelObjectCategory)   | Gets the current DataModelObject's category.                  |
| [`Figures`](#Stage.Figures)                                   | Gets the list of associated figures.                          |
| [`GroupingFolder`](#Stage.GroupingFolder)                     | GroupingFolder property.                                      |
| [`IconName`](#Stage.IconName)                                 | IconName property.                                            |
| [`Images`](#Stage.Images)                                     | Gets the list of associated images.                           |
| [`ImportableObjectSourceId`](#Stage.ImportableObjectSourceId) | ImportableObjectSourceId property.                            |
| [`InternalObject`](#Stage.InternalObject)                     | Gets the internal object. For advanced usage only.            |
| [`Location`](#Stage.Location)                                 | Gets or sets the Location.                                    |
| [`Name`](#Stage.Name)                                         | Name property.                                                |
| [`ObjectId`](#Stage.ObjectId)                                 | ObjectId property.                                            |
| [`ObjectState`](#Stage.ObjectState)                           | ObjectState property.                                         |
| [`ObjectTags`](#Stage.ObjectTags)                             | ObjectTags property.                                          |
| [`Parent`](#Stage.Parent)                                     | Parent property.                                              |
| [`Properties`](#Stage.Properties)                             | Gets the list of properties for this object.                  |
| [`ReadOnly`](#Stage.ReadOnly)                                 | Gets or sets the ReadOnly.                                    |
| [`StageName`](#Stage.StageName)                               | Gets the StageName.                                           |
| [`State`](#Stage.State)                                       | State property.                                               |
| [`Suppressed`](#Stage.Suppressed)                             | Gets or sets the Suppressed.                                  |
| [`TransferableObjectId`](#Stage.TransferableObjectId)         | TransferableObjectId property.                                |
| [`VisibleProperties`](#Stage.VisibleProperties)               | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="Stage.AttachedRefs"></a>

### *property* Stage.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Behavior"></a>

### *property* Stage.Behavior *: [Ansys.Mechanical.DataModel.Enums.StageBehavior](../../../Mechanical/DataModel/Enums/StageBehavior.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.StageBehavior) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Behavior.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Children"></a>

### *property* Stage.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ClsId"></a>

### *property* Stage.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Comments"></a>

### *property* Stage.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CyclicRegion"></a>

### *property* Stage.CyclicRegion *: [Ansys.ACT.Automation.Mechanical.SymmetryGeneral](SymmetryGeneral.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryGeneral) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CyclicRegion.

<!-- !! processed by numpydoc !! -->

<a id="Stage.DataModelObjectCategory"></a>

### *property* Stage.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Figures"></a>

### *property* Stage.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupingFolder"></a>

### *property* Stage.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.IconName"></a>

### *property* Stage.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Images"></a>

### *property* Stage.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ImportableObjectSourceId"></a>

### *property* Stage.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.InternalObject"></a>

### *property* Stage.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSStageAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Location"></a>

### *property* Stage.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Name"></a>

### *property* Stage.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ObjectId"></a>

### *property* Stage.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ObjectState"></a>

### *property* Stage.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ObjectTags"></a>

### *property* Stage.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Parent"></a>

### *property* Stage.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Properties"></a>

### *property* Stage.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.ReadOnly"></a>

### *property* Stage.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Stage.StageName"></a>

### *property* Stage.StageName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the StageName.

<!-- !! processed by numpydoc !! -->

<a id="Stage.State"></a>

### *property* Stage.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Suppressed"></a>

### *property* Stage.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="Stage.TransferableObjectId"></a>

### *property* Stage.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.VisibleProperties"></a>

### *property* Stage.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Stage.Activate"></a>

### Stage.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddComment"></a>

### Stage.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddFigure"></a>

### Stage.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Stage.AddImage"></a>

### Stage.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Stage.Copy"></a>

### Stage.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CopyTo"></a>

### Stage.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CreateObjRef"></a>

### Stage.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.CreateParameter"></a>

### Stage.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Cut"></a>

### Stage.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Delete"></a>

### Stage.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Duplicate"></a>

### Stage.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Equals"></a>

### Stage.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetAPIName"></a>

### Stage.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetAllProperties"></a>

### Stage.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetChildren"></a>

### Stage.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Stage.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetDetailsView"></a>

### Stage.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetEnumName"></a>

### Stage.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.GetHarmonicIndexForEnvironmentByIndex(envId: [int](https://docs.python.org/3/builtins/functions.html#int), index: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHarmonicIndexNumberForEnvironment"></a>

### Stage.GetHarmonicIndexNumberForEnvironment(envId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [int](https://docs.python.org/3/builtins/functions.html#int)

Gets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetHashCode"></a>

### Stage.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetIconFile"></a>

### Stage.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetLifetimeService"></a>

### Stage.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetObjectData"></a>

### Stage.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetParameter"></a>

### Stage.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetPath"></a>

### Stage.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetPropertyName"></a>

### Stage.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetPropertyValue"></a>

### Stage.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetVisibleProperties"></a>

### Stage.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GetVisiblePropertyNames"></a>

### Stage.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupAllSimilarChildren"></a>

### Stage.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.GroupSimilarObjects"></a>

### Stage.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Stage.InitializeLifetimeService"></a>

### Stage.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.IsPropertyEditable"></a>

### Stage.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Stage.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.IsPropertyVisible"></a>

### Stage.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Stage.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.Paste"></a>

### Stage.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByAPIName"></a>

### Stage.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyById"></a>

### Stage.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Stage.PropertyByName"></a>

### Stage.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Stage.RemoveFromGroup"></a>

### Stage.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Stage.RemoveParameter"></a>

### Stage.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexForEnvironmentByIndex"></a>

### Stage.SetHarmonicIndexForEnvironmentByIndex(envId: [int](https://docs.python.org/3/builtins/functions.html#int), index: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the worksheet harmonic index for a given environment at index.

<!-- !! processed by numpydoc !! -->

<a id="Stage.SetHarmonicIndexNumberForEnvironment"></a>

### Stage.SetHarmonicIndexNumberForEnvironment(envId: [int](https://docs.python.org/3/builtins/functions.html#int), newVal: [int](https://docs.python.org/3/builtins/functions.html#int)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Sets the worksheet number of harmonic indexes for a given environment.

<!-- !! processed by numpydoc !! -->

