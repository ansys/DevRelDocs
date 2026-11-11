# `Symmetry`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Symmetry"></a>

#### *class* Ansys.ACT.Automation.Mechanical.Symmetry(internalObject: Any)

<a id="Symmetry"></a>

### *class* Symmetry(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a Symmetry.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#Symmetry.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#Symmetry.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddCyclicRegion`](#Symmetry.AddCyclicRegion)                     | Creates a new CyclicRegion                                                                  |
| [`AddFigure`](#Symmetry.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddGeneralAxisymmetric`](#Symmetry.AddGeneralAxisymmetric)       | Creates a new GeneralAxisymmetric                                                           |
| [`AddImage`](#Symmetry.AddImage)                                   | Creates a new child Image.                                                                  |
| [`AddLinearPeriodicRegion`](#Symmetry.AddLinearPeriodicRegion)     | Creates a new SymmetryRegion                                                                |
| [`AddPeriodicRegion`](#Symmetry.AddPeriodicRegion)                 | Creates a new PeriodicRegion                                                                |
| [`AddPreMeshedCyclicRegion`](#Symmetry.AddPreMeshedCyclicRegion)   | Creates a new PreMeshedCyclicRegion                                                         |
| [`AddStage`](#Symmetry.AddStage)                                   | Creates a new Stage                                                                         |
| [`AddSymmetryRegion`](#Symmetry.AddSymmetryRegion)                 | Creates a new SymmetryRegion                                                                |
| [`Copy`](#Symmetry.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#Symmetry.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#Symmetry.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#Symmetry.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#Symmetry.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#Symmetry.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#Symmetry.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#Symmetry.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#Symmetry.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#Symmetry.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#Symmetry.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#Symmetry.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#Symmetry.GetEnumName)                             |                                                                                             |
| [`GetHashCode`](#Symmetry.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#Symmetry.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#Symmetry.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#Symmetry.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#Symmetry.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#Symmetry.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#Symmetry.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#Symmetry.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#Symmetry.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#Symmetry.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#Symmetry.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#Symmetry.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#Symmetry.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#Symmetry.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#Symmetry.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#Symmetry.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#Symmetry.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#Symmetry.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#Symmetry.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#Symmetry.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#Symmetry.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#Symmetry.AttachedRefs)                         | AttachedRefs property.                                                                           |
| [`Children`](#Symmetry.Children)                                 | Gets the list of children.                                                                       |
| [`ClsId`](#Symmetry.ClsId)                                       | ClsId property.                                                                                  |
| [`Comments`](#Symmetry.Comments)                                 | Gets the list of associated comments.                                                            |
| [`CyclicProcedure`](#Symmetry.CyclicProcedure)                   | Gets or Sets the CyclicProcedure which controls the solver procedure used to solve the analysis. |
| [`DataModelObjectCategory`](#Symmetry.DataModelObjectCategory)   | Gets the current DataModelObject's category.                                                     |
| [`Figures`](#Symmetry.Figures)                                   | Gets the list of associated figures.                                                             |
| [`GroupingFolder`](#Symmetry.GroupingFolder)                     | GroupingFolder property.                                                                         |
| [`IconName`](#Symmetry.IconName)                                 | IconName property.                                                                               |
| [`Images`](#Symmetry.Images)                                     | Gets the list of associated images.                                                              |
| [`ImportableObjectSourceId`](#Symmetry.ImportableObjectSourceId) | ImportableObjectSourceId property.                                                               |
| [`InternalObject`](#Symmetry.InternalObject)                     | Gets the internal object. For advanced usage only.                                               |
| [`Name`](#Symmetry.Name)                                         | Name property.                                                                                   |
| [`ObjectId`](#Symmetry.ObjectId)                                 | ObjectId property.                                                                               |
| [`ObjectState`](#Symmetry.ObjectState)                           | ObjectState property.                                                                            |
| [`ObjectTags`](#Symmetry.ObjectTags)                             | ObjectTags property.                                                                             |
| [`Parent`](#Symmetry.Parent)                                     | Parent property.                                                                                 |
| [`Properties`](#Symmetry.Properties)                             | Gets the list of properties for this object.                                                     |
| [`ReadOnly`](#Symmetry.ReadOnly)                                 | Gets or sets the ReadOnly.                                                                       |
| [`SendPremeshedBoundaries`](#Symmetry.SendPremeshedBoundaries)   | Gets or sets the SendPremeshedBoundaries.                                                        |
| [`State`](#Symmetry.State)                                       | State property.                                                                                  |
| [`TransferableObjectId`](#Symmetry.TransferableObjectId)         | TransferableObjectId property.                                                                   |
| [`VisibleProperties`](#Symmetry.VisibleProperties)               | Gets the list of properties that are visible for this object.                                    |

<a id="property-detail"></a>

## Property detail

<a id="Symmetry.AttachedRefs"></a>

### *property* Symmetry.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Children"></a>

### *property* Symmetry.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ClsId"></a>

### *property* Symmetry.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Comments"></a>

### *property* Symmetry.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CyclicProcedure"></a>

### *property* Symmetry.CyclicProcedure *: [Ansys.Mechanical.DataModel.MechanicalEnums.Symmetry.CyclicProcedureType](../../../Mechanical/DataModel/MechanicalEnums/Symmetry/CyclicProcedureType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Symmetry.CyclicProcedureType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or Sets the CyclicProcedure which controls the solver procedure used to solve the analysis.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.DataModelObjectCategory"></a>

### *property* Symmetry.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Figures"></a>

### *property* Symmetry.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupingFolder"></a>

### *property* Symmetry.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.IconName"></a>

### *property* Symmetry.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Images"></a>

### *property* Symmetry.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ImportableObjectSourceId"></a>

### *property* Symmetry.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.InternalObject"></a>

### *property* Symmetry.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSSymmetryGroupAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Name"></a>

### *property* Symmetry.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ObjectId"></a>

### *property* Symmetry.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ObjectState"></a>

### *property* Symmetry.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ObjectTags"></a>

### *property* Symmetry.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Parent"></a>

### *property* Symmetry.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Properties"></a>

### *property* Symmetry.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.ReadOnly"></a>

### *property* Symmetry.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.SendPremeshedBoundaries"></a>

### *property* Symmetry.SendPremeshedBoundaries *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SendPremeshedBoundaries.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.State"></a>

### *property* Symmetry.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.TransferableObjectId"></a>

### *property* Symmetry.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.VisibleProperties"></a>

### *property* Symmetry.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="Symmetry.Activate"></a>

### Symmetry.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddComment"></a>

### Symmetry.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddCyclicRegion"></a>

### Symmetry.AddCyclicRegion() → [Ansys.ACT.Automation.Mechanical.CyclicRegion](CyclicRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CyclicRegion)

Creates a new CyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddFigure"></a>

### Symmetry.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddGeneralAxisymmetric"></a>

### Symmetry.AddGeneralAxisymmetric() → [Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric](GeneralAxisymmetric.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GeneralAxisymmetric)

Creates a new GeneralAxisymmetric

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddImage"></a>

### Symmetry.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddLinearPeriodicRegion"></a>

### Symmetry.AddLinearPeriodicRegion() → [Ansys.ACT.Automation.Mechanical.SymmetryRegion](SymmetryRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryRegion)

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPeriodicRegion"></a>

### Symmetry.AddPeriodicRegion() → [Ansys.ACT.Automation.Mechanical.PeriodicRegion](PeriodicRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PeriodicRegion)

Creates a new PeriodicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddPreMeshedCyclicRegion"></a>

### Symmetry.AddPreMeshedCyclicRegion() → [Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion](PreMeshedCyclicRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.PreMeshedCyclicRegion)

Creates a new PreMeshedCyclicRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddStage"></a>

### Symmetry.AddStage() → [Ansys.ACT.Automation.Mechanical.Stage](Stage.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Stage)

Creates a new Stage

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.AddSymmetryRegion"></a>

### Symmetry.AddSymmetryRegion() → [Ansys.ACT.Automation.Mechanical.SymmetryRegion](SymmetryRegion.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SymmetryRegion)

Creates a new SymmetryRegion

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Copy"></a>

### Symmetry.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CopyTo"></a>

### Symmetry.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CreateObjRef"></a>

### Symmetry.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.CreateParameter"></a>

### Symmetry.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Cut"></a>

### Symmetry.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Delete"></a>

### Symmetry.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Duplicate"></a>

### Symmetry.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Equals"></a>

### Symmetry.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetAPIName"></a>

### Symmetry.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetAllProperties"></a>

### Symmetry.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetChildren"></a>

### Symmetry.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### Symmetry.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetDetailsView"></a>

### Symmetry.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetEnumName"></a>

### Symmetry.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

<a id="Symmetry.GetHashCode"></a>

### Symmetry.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetIconFile"></a>

### Symmetry.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetLifetimeService"></a>

### Symmetry.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetObjectData"></a>

### Symmetry.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetParameter"></a>

### Symmetry.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetPath"></a>

### Symmetry.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetPropertyName"></a>

### Symmetry.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetPropertyValue"></a>

### Symmetry.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetVisibleProperties"></a>

### Symmetry.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GetVisiblePropertyNames"></a>

### Symmetry.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupAllSimilarChildren"></a>

### Symmetry.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.GroupSimilarObjects"></a>

### Symmetry.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.InitializeLifetimeService"></a>

### Symmetry.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.IsPropertyEditable"></a>

### Symmetry.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Symmetry.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.IsPropertyVisible"></a>

### Symmetry.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### Symmetry.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.Paste"></a>

### Symmetry.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByAPIName"></a>

### Symmetry.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyById"></a>

### Symmetry.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.PropertyByName"></a>

### Symmetry.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.RemoveFromGroup"></a>

### Symmetry.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="Symmetry.RemoveParameter"></a>

### Symmetry.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

