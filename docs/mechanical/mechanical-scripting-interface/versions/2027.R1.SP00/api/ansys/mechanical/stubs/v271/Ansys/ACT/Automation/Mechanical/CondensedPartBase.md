# `CondensedPartBase`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CondensedPartBase"></a>

#### *class* Ansys.ACT.Automation.Mechanical.CondensedPartBase(internalObject: Any)

<a id="CondensedPartBase"></a>

### *class* CondensedPartBase(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a CondensedPartBase.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#CondensedPartBase.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#CondensedPartBase.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#CondensedPartBase.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#CondensedPartBase.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#CondensedPartBase.AddImage)                                   | Creates a new child Image.                                                                  |
| [`ClearGeneratedData`](#CondensedPartBase.ClearGeneratedData)               | Run the ClearGeneratedData action.                                                          |
| [`Copy`](#CondensedPartBase.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#CondensedPartBase.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#CondensedPartBase.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#CondensedPartBase.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#CondensedPartBase.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#CondensedPartBase.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#CondensedPartBase.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#CondensedPartBase.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#CondensedPartBase.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#CondensedPartBase.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#CondensedPartBase.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#CondensedPartBase.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#CondensedPartBase.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#CondensedPartBase.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#CondensedPartBase.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#CondensedPartBase.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#CondensedPartBase.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#CondensedPartBase.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#CondensedPartBase.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#CondensedPartBase.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#CondensedPartBase.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#CondensedPartBase.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#CondensedPartBase.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#CondensedPartBase.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#CondensedPartBase.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#CondensedPartBase.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#CondensedPartBase.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#CondensedPartBase.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#CondensedPartBase.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#CondensedPartBase.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#CondensedPartBase.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#CondensedPartBase.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#CondensedPartBase.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#CondensedPartBase.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [`AttachedRefs`](#CondensedPartBase.AttachedRefs)                       | AttachedRefs property.                                        |
| [`Children`](#CondensedPartBase.Children)                               | Gets the list of children.                                    |
| [`ClsId`](#CondensedPartBase.ClsId)                                     | ClsId property.                                               |
| [`Comments`](#CondensedPartBase.Comments)                               | Gets the list of associated comments.                         |
| [`DataModelObjectCategory`](#CondensedPartBase.DataModelObjectCategory) | Gets the current DataModelObject's category.                  |
| [`Figures`](#CondensedPartBase.Figures)                                 | Gets the list of associated figures.                          |
| [`GeometrySelection`](#CondensedPartBase.GeometrySelection)             | Gets or sets the GeometrySelection.                           |
| [`GroupingFolder`](#CondensedPartBase.GroupingFolder)                   | GroupingFolder property.                                      |
| [`IconName`](#CondensedPartBase.IconName)                               | IconName property.                                            |
| [`Images`](#CondensedPartBase.Images)                                   | Gets the list of associated images.                           |
| [`InternalObject`](#CondensedPartBase.InternalObject)                   | Gets the internal object. For advanced usage only.            |
| [`Name`](#CondensedPartBase.Name)                                       | Name property.                                                |
| [`NumberInterfaceEntries`](#CondensedPartBase.NumberInterfaceEntries)   | Gets the NumberInterfaceEntries.                              |
| [`NumberMasterNodes`](#CondensedPartBase.NumberMasterNodes)             | Gets the NumberMasterNodes.                                   |
| [`ObjectId`](#CondensedPartBase.ObjectId)                               | ObjectId property.                                            |
| [`ObjectState`](#CondensedPartBase.ObjectState)                         | ObjectState property.                                         |
| [`ObjectTags`](#CondensedPartBase.ObjectTags)                           | ObjectTags property.                                          |
| [`Parent`](#CondensedPartBase.Parent)                                   | Parent property.                                              |
| [`Physics`](#CondensedPartBase.Physics)                                 | Gets the Physics.                                             |
| [`Properties`](#CondensedPartBase.Properties)                           | Gets the list of properties for this object.                  |
| [`ReferenceTemperature`](#CondensedPartBase.ReferenceTemperature)       | Gets or sets the ReferenceTemperature.                        |
| [`SolutionName`](#CondensedPartBase.SolutionName)                       | Gets or sets the SolutionName.                                |
| [`SolutionNameMode`](#CondensedPartBase.SolutionNameMode)               | Gets or sets the SolutionNameMode.                            |
| [`SolverFilesDirectory`](#CondensedPartBase.SolverFilesDirectory)       | Gets the SolverFilesDirectory.                                |
| [`SolverUnitSystem`](#CondensedPartBase.SolverUnitSystem)               | Gets or sets the SolverUnitSystem.                            |
| [`SolverUnits`](#CondensedPartBase.SolverUnits)                         | Gets or sets the SolverUnits.                                 |
| [`State`](#CondensedPartBase.State)                                     | State property.                                               |
| [`Suppressed`](#CondensedPartBase.Suppressed)                           | Gets or sets the Suppressed.                                  |
| [`TemperatureUnits`](#CondensedPartBase.TemperatureUnits)               | Gets the TemperatureUnits.                                    |
| [`VisibleProperties`](#CondensedPartBase.VisibleProperties)             | Gets the list of properties that are visible for this object. |

<a id="property-detail"></a>

## Property detail

<a id="CondensedPartBase.AttachedRefs"></a>

### *property* CondensedPartBase.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Children"></a>

### *property* CondensedPartBase.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ClsId"></a>

### *property* CondensedPartBase.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Comments"></a>

### *property* CondensedPartBase.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.DataModelObjectCategory"></a>

### *property* CondensedPartBase.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Figures"></a>

### *property* CondensedPartBase.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GeometrySelection"></a>

### *property* CondensedPartBase.GeometrySelection *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GeometrySelection.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupingFolder"></a>

### *property* CondensedPartBase.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.IconName"></a>

### *property* CondensedPartBase.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Images"></a>

### *property* CondensedPartBase.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.InternalObject"></a>

### *property* CondensedPartBase.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCondensedPartAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Name"></a>

### *property* CondensedPartBase.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberInterfaceEntries"></a>

### *property* CondensedPartBase.NumberInterfaceEntries *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberInterfaceEntries.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.NumberMasterNodes"></a>

### *property* CondensedPartBase.NumberMasterNodes *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the NumberMasterNodes.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ObjectId"></a>

### *property* CondensedPartBase.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ObjectState"></a>

### *property* CondensedPartBase.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ObjectTags"></a>

### *property* CondensedPartBase.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Parent"></a>

### *property* CondensedPartBase.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Physics"></a>

### *property* CondensedPartBase.Physics *: [Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics](../../../Mechanical/DataModel/Enums/CondensedPartPhysics.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CondensedPartPhysics) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Physics.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Properties"></a>

### *property* CondensedPartBase.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ReferenceTemperature"></a>

### *property* CondensedPartBase.ReferenceTemperature *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReferenceTemperature.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionName"></a>

### *property* CondensedPartBase.SolutionName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionName.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolutionNameMode"></a>

### *property* CondensedPartBase.SolutionNameMode *: [Ansys.Mechanical.DataModel.Enums.AutomaticOrManual](../../../Mechanical/DataModel/Enums/AutomaticOrManual.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.AutomaticOrManual) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionNameMode.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverFilesDirectory"></a>

### *property* CondensedPartBase.SolverFilesDirectory *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the SolverFilesDirectory.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnitSystem"></a>

### *property* CondensedPartBase.SolverUnitSystem *: [Ansys.Mechanical.DataModel.Enums.WBUnitSystemType](../../../Mechanical/DataModel/Enums/WBUnitSystemType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.WBUnitSystemType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnitSystem.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.SolverUnits"></a>

### *property* CondensedPartBase.SolverUnits *: [Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType](../../../Mechanical/DataModel/Enums/SolverUnitsControlType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SolverUnitsControlType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolverUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.State"></a>

### *property* CondensedPartBase.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Suppressed"></a>

### *property* CondensedPartBase.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.TemperatureUnits"></a>

### *property* CondensedPartBase.TemperatureUnits *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TemperatureUnits.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.VisibleProperties"></a>

### *property* CondensedPartBase.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="CondensedPartBase.Activate"></a>

### CondensedPartBase.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddCommandSnippet"></a>

### CondensedPartBase.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddComment"></a>

### CondensedPartBase.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddFigure"></a>

### CondensedPartBase.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.AddImage"></a>

### CondensedPartBase.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.ClearGeneratedData"></a>

### CondensedPartBase.ClearGeneratedData() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the ClearGeneratedData action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Copy"></a>

### CondensedPartBase.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CopyTo"></a>

### CondensedPartBase.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CreateObjRef"></a>

### CondensedPartBase.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.CreateParameter"></a>

### CondensedPartBase.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Cut"></a>

### CondensedPartBase.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Delete"></a>

### CondensedPartBase.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Duplicate"></a>

### CondensedPartBase.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Equals"></a>

### CondensedPartBase.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetAPIName"></a>

### CondensedPartBase.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetAllProperties"></a>

### CondensedPartBase.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetChildren"></a>

### CondensedPartBase.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### CondensedPartBase.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetDetailsView"></a>

### CondensedPartBase.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetEnumName"></a>

### CondensedPartBase.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetHashCode"></a>

### CondensedPartBase.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetIconFile"></a>

### CondensedPartBase.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetLifetimeService"></a>

### CondensedPartBase.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetObjectData"></a>

### CondensedPartBase.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetParameter"></a>

### CondensedPartBase.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetPath"></a>

### CondensedPartBase.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetPropertyName"></a>

### CondensedPartBase.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetPropertyValue"></a>

### CondensedPartBase.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetVisibleProperties"></a>

### CondensedPartBase.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GetVisiblePropertyNames"></a>

### CondensedPartBase.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupAllSimilarChildren"></a>

### CondensedPartBase.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.GroupSimilarObjects"></a>

### CondensedPartBase.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.InitializeLifetimeService"></a>

### CondensedPartBase.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.IsPropertyEditable"></a>

### CondensedPartBase.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedPartBase.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.IsPropertyVisible"></a>

### CondensedPartBase.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### CondensedPartBase.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.Paste"></a>

### CondensedPartBase.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByAPIName"></a>

### CondensedPartBase.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyById"></a>

### CondensedPartBase.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.PropertyByName"></a>

### CondensedPartBase.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.RemoveFromGroup"></a>

### CondensedPartBase.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="CondensedPartBase.RemoveParameter"></a>

### CondensedPartBase.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

