# `FaceMeshing`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing"></a>

#### *class* Ansys.ACT.Automation.Mechanical.MeshControls.FaceMeshing(internalObject: Any)

<a id="FaceMeshing"></a>

### *class* FaceMeshing(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a FaceMeshing.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#FaceMeshing.Activate)                                   | Activate the current object.                                                                |
| [`AddComment`](#FaceMeshing.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#FaceMeshing.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#FaceMeshing.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#FaceMeshing.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#FaceMeshing.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#FaceMeshing.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#FaceMeshing.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#FaceMeshing.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#FaceMeshing.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#FaceMeshing.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#FaceMeshing.Equals)                                       | Equals method.                                                                              |
| [`GenerateMesh`](#FaceMeshing.GenerateMesh)                           | Generate the Mesh.                                                                          |
| [`GetAPIName`](#FaceMeshing.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#FaceMeshing.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#FaceMeshing.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#FaceMeshing.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#FaceMeshing.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#FaceMeshing.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#FaceMeshing.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#FaceMeshing.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#FaceMeshing.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#FaceMeshing.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#FaceMeshing.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#FaceMeshing.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#FaceMeshing.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#FaceMeshing.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#FaceMeshing.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#FaceMeshing.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#FaceMeshing.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#FaceMeshing.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#FaceMeshing.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#FaceMeshing.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#FaceMeshing.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#FaceMeshing.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#FaceMeshing.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#FaceMeshing.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#FaceMeshing.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#FaceMeshing.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |
| [`RenameBasedOnDefinition`](#FaceMeshing.RenameBasedOnDefinition)     | Run the RenameBasedOnDefinition action.                                                     |

### Properties

| Name | Description |
|-----------------------------------------------------------------------|------------------------------------------------------------------|
| [`Active`](#FaceMeshing.Active)                                       | Gets the Active.                                                 |
| [`AttachedRefs`](#FaceMeshing.AttachedRefs)                           | AttachedRefs property.                                           |
| [`Children`](#FaceMeshing.Children)                                   | Gets the list of children.                                       |
| [`ClsId`](#FaceMeshing.ClsId)                                         | ClsId property.                                                  |
| [`Comments`](#FaceMeshing.Comments)                                   | Gets the list of associated comments.                            |
| [`ConstrainBoundary`](#FaceMeshing.ConstrainBoundary)                 | Gets or sets the ConstrainBoundary.                              |
| [`DataModelObjectCategory`](#FaceMeshing.DataModelObjectCategory)     | Gets the current DataModelObject's category.                     |
| [`Figures`](#FaceMeshing.Figures)                                     | Gets the list of associated figures.                             |
| [`GroupingFolder`](#FaceMeshing.GroupingFolder)                       | GroupingFolder property.                                         |
| [`IconName`](#FaceMeshing.IconName)                                   | IconName property.                                               |
| [`Images`](#FaceMeshing.Images)                                       | Gets the list of associated images.                              |
| [`InternalNumberOfDivisions`](#FaceMeshing.InternalNumberOfDivisions) | Gets or sets the InternalNumberOfDivisions.                      |
| [`InternalObject`](#FaceMeshing.InternalObject)                       | Gets the internal object. For advanced usage only.               |
| [`Location`](#FaceMeshing.Location)                                   | Gets or sets the Location.                                       |
| [`MappedMesh`](#FaceMeshing.MappedMesh)                               | Gets or sets the MappedMesh.                                     |
| [`Method`](#FaceMeshing.Method)                                       | Gets or sets the Method.                                         |
| [`MultiZoneSemiStructured`](#FaceMeshing.MultiZoneSemiStructured)     | Gets or sets the Semi-Structured in MZ Face Meshing (Mapping).   |
| [`MultizoneFacePattern`](#FaceMeshing.MultizoneFacePattern)           | Gets or sets the multizone face pattern.                         |
| [`Name`](#FaceMeshing.Name)                                           | Name property.                                                   |
| [`NamedSelection`](#NamedSelection)               | Gets or sets the NamedSelection.                                 |
| [`ObjectId`](#FaceMeshing.ObjectId)                                   | ObjectId property.                                               |
| [`ObjectState`](#FaceMeshing.ObjectState)                             | ObjectState property.                                            |
| [`ObjectTags`](#FaceMeshing.ObjectTags)                               | ObjectTags property.                                             |
| [`Parent`](#FaceMeshing.Parent)                                       | Parent property.                                                 |
| [`Properties`](#FaceMeshing.Properties)                               | Gets the list of properties for this object.                     |
| [`ScopingMethod`](#FaceMeshing.ScopingMethod)                         | Gets or sets the ScopingMethod.                                  |
| [`SpecifiedCorners`](#FaceMeshing.SpecifiedCorners)                   | Gets or sets the SpecifiedCorners.                               |
| [`SpecifiedEnds`](#FaceMeshing.SpecifiedEnds)                         | Gets or sets the SpecifiedEnds.                                  |
| [`SpecifiedSides`](#FaceMeshing.SpecifiedSides)                       | Gets or sets the SpecifiedSides.                                 |
| [`State`](#FaceMeshing.State)                                         | State property.                                                  |
| [`Suppressed`](#FaceMeshing.Suppressed)                               | Gets or sets the Suppressed.                                     |
| [`TransitionType`](#FaceMeshing.TransitionType)                       | Gets or sets the TransitionType of MZ Face Meshing (Mapping)     |
| [`UseMultiZoneMapMeshing`](#FaceMeshing.UseMultiZoneMapMeshing)       | Gets or sets whether to use the MultiZone Map Meshing algorithm. |
| [`UseMultizoneMapMesh`](#FaceMeshing.UseMultizoneMapMesh)             | Gets or sets the UseMultizoneMapMesh.                            |
| [`VisibleProperties`](#FaceMeshing.VisibleProperties)                 | Gets the list of properties that are visible for this object.    |

<a id="property-detail"></a>

## Property detail

<a id="FaceMeshing.Active"></a>

### *property* FaceMeshing.Active *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Active.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AttachedRefs"></a>

### *property* FaceMeshing.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Children"></a>

### *property* FaceMeshing.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ClsId"></a>

### *property* FaceMeshing.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Comments"></a>

### *property* FaceMeshing.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ConstrainBoundary"></a>

### *property* FaceMeshing.ConstrainBoundary *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ConstrainBoundary.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.DataModelObjectCategory"></a>

### *property* FaceMeshing.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Figures"></a>

### *property* FaceMeshing.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupingFolder"></a>

### *property* FaceMeshing.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.IconName"></a>

### *property* FaceMeshing.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Images"></a>

### *property* FaceMeshing.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InternalNumberOfDivisions"></a>

### *property* FaceMeshing.InternalNumberOfDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the InternalNumberOfDivisions.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InternalObject"></a>

### *property* FaceMeshing.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSMeshControlAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Location"></a>

### *property* FaceMeshing.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.MappedMesh"></a>

### *property* FaceMeshing.MappedMesh *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MappedMesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Method"></a>

### *property* FaceMeshing.Method *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod](../../../../Mechanical/DataModel/Enums/FaceMeshingMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FaceMeshingMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.MultiZoneSemiStructured"></a>

### *property* FaceMeshing.MultiZoneSemiStructured *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Semi-Structured in MZ Face Meshing (Mapping).

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.MultizoneFacePattern"></a>

### *property* FaceMeshing.MultizoneFacePattern *: [Ansys.Mechanical.DataModel.Enums.FaceMeshingMultizoneFacePattern](../../../../Mechanical/DataModel/Enums/FaceMeshingMultizoneFacePattern.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FaceMeshingMultizoneFacePattern) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the multizone face pattern.
: If set to Manual then also set the SpecifiedSides, SpecifiedCorners and SpecifiedEnds properties.
  Note: if these three properties are not set, then Manual will behave similarly to OGrid. When these properties are set then it shows a similar behavior to HGrid following the manual specifications.
  Default: OGrid

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Name"></a>

### *property* FaceMeshing.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.NamedSelection"></a>

### *property* FaceMeshing.NamedSelection *: [Ansys.ACT.Automation.Mechanical.NamedSelection](../NamedSelection.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ObjectId"></a>

### *property* FaceMeshing.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ObjectState"></a>

### *property* FaceMeshing.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ObjectTags"></a>

### *property* FaceMeshing.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Parent"></a>

### *property* FaceMeshing.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Properties"></a>

### *property* FaceMeshing.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.ScopingMethod"></a>

### *property* FaceMeshing.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedCorners"></a>

### *property* FaceMeshing.SpecifiedCorners *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpecifiedCorners.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedEnds"></a>

### *property* FaceMeshing.SpecifiedEnds *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpecifiedEnds.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.SpecifiedSides"></a>

### *property* FaceMeshing.SpecifiedSides *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SpecifiedSides.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.State"></a>

### *property* FaceMeshing.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Suppressed"></a>

### *property* FaceMeshing.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.TransitionType"></a>

### *property* FaceMeshing.TransitionType *: [Ansys.Mechanical.DataModel.Enums.TransitionType](../../../../Mechanical/DataModel/Enums/TransitionType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.TransitionType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TransitionType of MZ Face Meshing (Mapping)

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.UseMultiZoneMapMeshing"></a>

### *property* FaceMeshing.UseMultiZoneMapMeshing *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets whether to use the MultiZone Map Meshing algorithm.
: Default: False

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.UseMultizoneMapMesh"></a>

### *property* FaceMeshing.UseMultizoneMapMesh *: [Ansys.Mechanical.DataModel.Enums.YesNoType](../../../../Mechanical/DataModel/Enums/YesNoType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.YesNoType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the UseMultizoneMapMesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.VisibleProperties"></a>

### *property* FaceMeshing.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="FaceMeshing.Activate"></a>

### FaceMeshing.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddComment"></a>

### FaceMeshing.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](../Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddFigure"></a>

### FaceMeshing.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](../Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.AddImage"></a>

### FaceMeshing.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](../Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Copy"></a>

### FaceMeshing.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CopyTo"></a>

### FaceMeshing.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CreateObjRef"></a>

### FaceMeshing.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.CreateParameter"></a>

### FaceMeshing.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Cut"></a>

### FaceMeshing.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Delete"></a>

### FaceMeshing.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Duplicate"></a>

### FaceMeshing.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Equals"></a>

### FaceMeshing.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GenerateMesh"></a>

### FaceMeshing.GenerateMesh() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generate the Mesh.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetAPIName"></a>

### FaceMeshing.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetAllProperties"></a>

### FaceMeshing.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetChildren"></a>

### FaceMeshing.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### FaceMeshing.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetDetailsView"></a>

### FaceMeshing.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetEnumName"></a>

### FaceMeshing.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetHashCode"></a>

### FaceMeshing.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetIconFile"></a>

### FaceMeshing.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetLifetimeService"></a>

### FaceMeshing.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetObjectData"></a>

### FaceMeshing.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetParameter"></a>

### FaceMeshing.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetPath"></a>

### FaceMeshing.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetPropertyName"></a>

### FaceMeshing.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetPropertyValue"></a>

### FaceMeshing.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetVisibleProperties"></a>

### FaceMeshing.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GetVisiblePropertyNames"></a>

### FaceMeshing.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupAllSimilarChildren"></a>

### FaceMeshing.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.GroupSimilarObjects"></a>

### FaceMeshing.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](../TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.InitializeLifetimeService"></a>

### FaceMeshing.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.IsPropertyEditable"></a>

### FaceMeshing.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FaceMeshing.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.IsPropertyVisible"></a>

### FaceMeshing.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### FaceMeshing.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.Paste"></a>

### FaceMeshing.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByAPIName"></a>

### FaceMeshing.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyById"></a>

### FaceMeshing.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.PropertyByName"></a>

### FaceMeshing.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RemoveFromGroup"></a>

### FaceMeshing.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RemoveParameter"></a>

### FaceMeshing.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="FaceMeshing.RenameBasedOnDefinition"></a>

### FaceMeshing.RenameBasedOnDefinition() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RenameBasedOnDefinition action.

<!-- !! processed by numpydoc !! -->

