# `NamedSelection`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection"></a>

#### *class* Ansys.ACT.Automation.Mechanical.NamedSelection(internalObject: Any)

<a id="NamedSelection"></a>

### *class* NamedSelection(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a NamedSelection.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| [`Activate`](#NamedSelection.Activate)                                                     | Activate the current object.                                                                                     |
| [`AddComment`](#NamedSelection.AddComment)                                                 | Creates a new child Comment.                                                                                     |
| [`AddFigure`](#NamedSelection.AddFigure)                                                   | Creates a new child Figure.                                                                                      |
| [`AddImage`](#NamedSelection.AddImage)                                                     | Creates a new child Image.                                                                                       |
| [`Copy`](#NamedSelection.Copy)                                                             | Copies the current DataModelObject.                                                                              |
| [`CopyTo`](#NamedSelection.CopyTo)                                                         | Copies all visible properties from this object to another.                                                       |
| [`CreateNodalNamedSelection`](#NamedSelection.CreateNodalNamedSelection)                   | Creates a new Named Selection object containing all the nodes from the entities in the current named selection . |
| [`CreateObjRef`](#NamedSelection.CreateObjRef)                                             | CreateObjRef method.                                                                                             |
| [`CreateParameter`](#NamedSelection.CreateParameter)                                       | Creates a new parameter for a Property.                                                                          |
| [`CreateRadiatingFacesNamedSelection`](#NamedSelection.CreateRadiatingFacesNamedSelection) | CreateRadiatingFacesNamedSelection method.                                                                       |
| [`Cut`](#NamedSelection.Cut)                                                               | Cuts the current DataModelObject.                                                                                |
| [`Delete`](#NamedSelection.Delete)                                                         | Run the Delete action.                                                                                           |
| [`Duplicate`](#NamedSelection.Duplicate)                                                   | Creates a copy of the current DataModelObject.                                                                   |
| [`Equals`](#NamedSelection.Equals)                                                         | Equals method.                                                                                                   |
| [`ExportNamedSelectionToCDBFile`](#NamedSelection.ExportNamedSelectionToCDBFile)           | Export Named Selection to CDB file                                                                               |
| [`ExportToTextFile`](#NamedSelection.ExportToTextFile)                                     | ExportToTextFile method.                                                                                         |
| [`Generate`](#NamedSelection.Generate)                                                     | Generates the selection based on the generation criteria.                                                        |
| [`GetAPIName`](#NamedSelection.GetAPIName)                                                 | Property name bound to dispId.                                                                                   |
| [`GetAllProperties`](#NamedSelection.GetAllProperties)                                     | GetAllProperties method.                                                                                         |
| [`GetChildren`](#NamedSelection.GetChildren)                                               | Gets the list of children, filtered by type.                                                                     |
| [`GetDetailsView`](#NamedSelection.GetDetailsView)                                         | GetDetailsView method.                                                                                           |
| [`GetEnumName`](#NamedSelection.GetEnumName)                                               | Enum name bound to value                                                                                         |
| [`GetHashCode`](#NamedSelection.GetHashCode)                                               | GetHashCode method.                                                                                              |
| [`GetIconFile`](#NamedSelection.GetIconFile)                                               | GetIconFile method.                                                                                              |
| [`GetLifetimeService`](#NamedSelection.GetLifetimeService)                                 | GetLifetimeService method.                                                                                       |
| [`GetObjectData`](#NamedSelection.GetObjectData)                                           | GetObjectData method.                                                                                            |
| [`GetParameter`](#NamedSelection.GetParameter)                                             | Gets the parameter corresponding to the given property.                                                          |
| [`GetPath`](#NamedSelection.GetPath)                                                       | GetPath method.                                                                                                  |
| [`GetPropertyName`](#NamedSelection.GetPropertyName)                                       | GetPropertyName method.                                                                                          |
| [`GetPropertyValue`](#NamedSelection.GetPropertyValue)                                     | GetPropertyValue method.                                                                                         |
| [`GetVisibleProperties`](#NamedSelection.GetVisibleProperties)                             | GetVisibleProperties method.                                                                                     |
| [`GetVisiblePropertyNames`](#NamedSelection.GetVisiblePropertyNames)                       | GetVisiblePropertyNames method.                                                                                  |
| [`GroupAllSimilarChildren`](#NamedSelection.GroupAllSimilarChildren)                       | Run the GroupAllSimilarChildren action.                                                                          |
| [`GroupSimilarObjects`](#NamedSelection.GroupSimilarObjects)                               | Run the GroupSimilarObjects action.                                                                              |
| [`InitializeLifetimeService`](#NamedSelection.InitializeLifetimeService)                   | InitializeLifetimeService method.                                                                                |
| [`IsPropertyEditable`](#NamedSelection.IsPropertyEditable)                                 | IsPropertyEditable method.                                                                                       |
| [`IsPropertyVisible`](#NamedSelection.IsPropertyVisible)                                   | IsPropertyVisible method.                                                                                        |
| [`Paste`](#NamedSelection.Paste)                                                           | Pastes to the current DataModelObject context.                                                                   |
| [`PropertyByAPIName`](#NamedSelection.PropertyByAPIName)                                   | Get a property by its API name.                                                                                  |
| [`PropertyById`](#NamedSelection.PropertyById)                                             | PropertyById method.                                                                                             |
| [`PropertyByName`](#NamedSelection.PropertyByName)                                         | Get a property by its unique name.                                                                               |
| [`RemoveFromGroup`](#NamedSelection.RemoveFromGroup)                                       | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.                      |
| [`RemoveParameter`](#NamedSelection.RemoveParameter)                                       | Removes the parameter from the parameter set corresponding to the given property.                                |
| [`SendToMeshWorkflowByType`](#NamedSelection.SendToMeshWorkflowByType)                     | Creates a new MeshWorkflowGroup                                                                                  |

### Properties

| Name | Description |
|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#NamedSelection.AttachedRefs)                                           | AttachedRefs property.                                                                                                                 |
| [`Children`](#NamedSelection.Children)                                                   | Gets the list of children.                                                                                                             |
| [`ClsId`](#NamedSelection.ClsId)                                                         | ClsId property.                                                                                                                        |
| [`Comments`](#NamedSelection.Comments)                                                   | Gets the list of associated comments.                                                                                                  |
| [`CrackFrontNumber`](#NamedSelection.CrackFrontNumber)                                   | Gets the CrackFrontNumber.                                                                                                             |
| [`CreatedForCrack`](#NamedSelection.CreatedForCrack)                                     | Gets the CreatedForCrack.                                                                                                              |
| [`DataModelObjectCategory`](#NamedSelection.DataModelObjectCategory)                     | Gets the current DataModelObject's category.                                                                                           |
| [`ElementFaceIndices`](#NamedSelection.ElementFaceIndices)                               | ElementFaceIndices property.                                                                                                           |
| [`Entities`](#NamedSelection.Entities)                                                   | Entities property.                                                                                                                     |
| [`Figures`](#NamedSelection.Figures)                                                     | Gets the list of associated figures.                                                                                                   |
| [`GenerationCriteria`](#NamedSelection.GenerationCriteria)                               | Returns the generation criteria that is used to generate the selection.                                                                |
| [`GroupingFolder`](#NamedSelection.GroupingFolder)                                       | GroupingFolder property.                                                                                                               |
| [`IconName`](#NamedSelection.IconName)                                                   | IconName property.                                                                                                                     |
| [`Id`](#NamedSelection.Id)                                                               | Id property.                                                                                                                           |
| [`Ids`](#NamedSelection.Ids)                                                             | Ids property.                                                                                                                          |
| [`Images`](#NamedSelection.Images)                                                       | Gets the list of associated images.                                                                                                    |
| [`ImportableObjectSourceId`](#NamedSelection.ImportableObjectSourceId)                   | ImportableObjectSourceId property.                                                                                                     |
| [`IncludeProgramControlledInflation`](#NamedSelection.IncludeProgramControlledInflation) | Gets or sets the IncludeProgramControlledInflation.                                                                                    |
| [`InternalObject`](#NamedSelection.InternalObject)                                       | Gets the internal object. For advanced usage only.                                                                                     |
| [`IsValid`](#NamedSelection.IsValid)                                                     | IsValid property.                                                                                                                      |
| [`LSDynaUserId`](#NamedSelection.LSDynaUserId)                                           | Gets or sets the LSDynaUserId.                                                                                                         |
| [`Location`](#NamedSelection.Location)                                                   | Gets or sets the Location.                                                                                                             |
| [`Name`](#NamedSelection.Name)                                                           | Name property.                                                                                                                         |
| [`ObjectId`](#NamedSelection.ObjectId)                                                   | ObjectId property.                                                                                                                     |
| [`ObjectState`](#NamedSelection.ObjectState)                                             | ObjectState property.                                                                                                                  |
| [`ObjectTags`](#NamedSelection.ObjectTags)                                               | ObjectTags property.                                                                                                                   |
| [`Parent`](#NamedSelection.Parent)                                                       | Parent property.                                                                                                                       |
| [`PreserveDuringSolve`](#NamedSelection.PreserveDuringSolve)                             | Gets or sets the PreserveDuringSolve.                                                                                                  |
| [`Properties`](#NamedSelection.Properties)                                               | Gets the list of properties for this object.                                                                                           |
| [`Protected`](#NamedSelection.Protected)                                                 | Gets or sets how the corresponding contact entities (faces, edges or vertices) are protected while meshing. Default:Program Controlled |
| [`ReadOnly`](#NamedSelection.ReadOnly)                                                   | Gets or sets the ReadOnly.                                                                                                             |
| [`RelativeTolerance`](#NamedSelection.RelativeTolerance)                                 | Gets or sets the RelativeTolerance.                                                                                                    |
| [`ScopingMethod`](#NamedSelection.ScopingMethod)                                         | Gets or sets the ScopingMethod.                                                                                                        |
| [`SelectionType`](#NamedSelection.SelectionType)                                         | SelectionType property.                                                                                                                |
| [`SendAs`](#NamedSelection.SendAs)                                                       | Gets or sets the SendAs.                                                                                                               |
| [`SendToSolver`](#NamedSelection.SendToSolver)                                           | Gets or sets the SendToSolver.                                                                                                         |
| [`SolverName`](#NamedSelection.SolverName)                                               | SolverName property.                                                                                                                   |
| [`State`](#NamedSelection.State)                                                         | State property.                                                                                                                        |
| [`Suppressed`](#NamedSelection.Suppressed)                                               | Gets the Suppressed.                                                                                                                   |
| [`ToleranceType`](#NamedSelection.ToleranceType)                                         | Gets or sets the ToleranceType.                                                                                                        |
| [`TotalSelection`](#NamedSelection.TotalSelection)                                       | Gets the TotalSelection.                                                                                                               |
| [`TransferableObjectId`](#NamedSelection.TransferableObjectId)                           | TransferableObjectId property.                                                                                                         |
| [`Type`](#NamedSelection.Type)                                                           | Gets the Type.                                                                                                                         |
| [`UsedByMeshWorksheet`](#NamedSelection.UsedByMeshWorksheet)                             | Gets the UsedByMeshWorksheet.                                                                                                          |
| [`Visible`](#NamedSelection.Visible)                                                     | Gets or sets the Visible.                                                                                                              |
| [`VisibleProperties`](#NamedSelection.VisibleProperties)                                 | Gets the list of properties that are visible for this object.                                                                          |
| [`Worksheet`](#NamedSelection.Worksheet)                                                 | For testing compatibility, maintains old Location property/behavior                                                                    |
| [`ZeroTolerance`](#NamedSelection.ZeroTolerance)                                         | Gets or sets the ZeroTolerance.                                                                                                        |

<a id="property-detail"></a>

## Property detail

<a id="NamedSelection.AttachedRefs"></a>

### *property* NamedSelection.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Children"></a>

### *property* NamedSelection.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ClsId"></a>

### *property* NamedSelection.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Comments"></a>

### *property* NamedSelection.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CrackFrontNumber"></a>

### *property* NamedSelection.CrackFrontNumber *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackFrontNumber.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreatedForCrack"></a>

### *property* NamedSelection.CreatedForCrack *: [Ansys.ACT.Automation.Mechanical.GenericCrack](GenericCrack.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.GenericCrack) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CreatedForCrack.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.DataModelObjectCategory"></a>

### *property* NamedSelection.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ElementFaceIndices"></a>

### *property* NamedSelection.ElementFaceIndices *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ElementFaceIndices property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Entities"></a>

### *property* NamedSelection.Entities *: List[Ansys.ACT.Interfaces.Geometry.IGeoEntity] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Entities property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Figures"></a>

### *property* NamedSelection.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GenerationCriteria"></a>

### *property* NamedSelection.GenerationCriteria *: [Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria](NamedSelectionCriteria.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelectionCriteria) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Returns the generation criteria that is used to generate the selection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GroupingFolder"></a>

### *property* NamedSelection.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IconName"></a>

### *property* NamedSelection.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Id"></a>

### *property* NamedSelection.Id *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Id property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Ids"></a>

### *property* NamedSelection.Ids *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Ids property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Images"></a>

### *property* NamedSelection.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ImportableObjectSourceId"></a>

### *property* NamedSelection.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IncludeProgramControlledInflation"></a>

### *property* NamedSelection.IncludeProgramControlledInflation *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the IncludeProgramControlledInflation.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.InternalObject"></a>

### *property* NamedSelection.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSComponentAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IsValid"></a>

### *property* NamedSelection.IsValid *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IsValid property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.LSDynaUserId"></a>

### *property* NamedSelection.LSDynaUserId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LSDynaUserId.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Location"></a>

### *property* NamedSelection.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Name"></a>

### *property* NamedSelection.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ObjectId"></a>

### *property* NamedSelection.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ObjectState"></a>

### *property* NamedSelection.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ObjectTags"></a>

### *property* NamedSelection.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Parent"></a>

### *property* NamedSelection.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PreserveDuringSolve"></a>

### *property* NamedSelection.PreserveDuringSolve *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the PreserveDuringSolve.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Properties"></a>

### *property* NamedSelection.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Protected"></a>

### *property* NamedSelection.Protected *: [Ansys.Mechanical.DataModel.Enums.ComponentProtectedType](../../../Mechanical/DataModel/Enums/ComponentProtectedType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ComponentProtectedType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets how the corresponding contact entities (faces, edges or vertices) are protected while meshing. Default:Program Controlled

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ReadOnly"></a>

### *property* NamedSelection.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.RelativeTolerance"></a>

### *property* NamedSelection.RelativeTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the RelativeTolerance.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ScopingMethod"></a>

### *property* NamedSelection.ScopingMethod *: [Ansys.Mechanical.DataModel.Enums.GeometryDefineByType](../../../Mechanical/DataModel/Enums/GeometryDefineByType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.GeometryDefineByType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ScopingMethod.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SelectionType"></a>

### *property* NamedSelection.SelectionType *: [Ansys.ACT.Interfaces.Common.SelectionTypeEnum](../../Interfaces/Common/SelectionTypeEnum.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.SelectionTypeEnum) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SelectionType property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SendAs"></a>

### *property* NamedSelection.SendAs *: [Ansys.Mechanical.DataModel.Enums.SendAs](../../../Mechanical/DataModel/Enums/SendAs.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.SendAs) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SendAs.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SendToSolver"></a>

### *property* NamedSelection.SendToSolver *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SendToSolver.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SolverName"></a>

### *property* NamedSelection.SolverName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

SolverName property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.State"></a>

### *property* NamedSelection.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Suppressed"></a>

### *property* NamedSelection.Suppressed *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ToleranceType"></a>

### *property* NamedSelection.ToleranceType *: [Ansys.Mechanical.DataModel.Enums.ToleranceType](../../../Mechanical/DataModel/Enums/ToleranceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ToleranceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ToleranceType.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.TotalSelection"></a>

### *property* NamedSelection.TotalSelection *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the TotalSelection.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.TransferableObjectId"></a>

### *property* NamedSelection.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Type"></a>

### *property* NamedSelection.Type *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the Type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.UsedByMeshWorksheet"></a>

### *property* NamedSelection.UsedByMeshWorksheet *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the UsedByMeshWorksheet.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Visible"></a>

### *property* NamedSelection.Visible *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Visible.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.VisibleProperties"></a>

### *property* NamedSelection.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Worksheet"></a>

### *property* NamedSelection.Worksheet *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

For testing compatibility, maintains old Location property/behavior

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ZeroTolerance"></a>

### *property* NamedSelection.ZeroTolerance *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZeroTolerance.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="NamedSelection.Activate"></a>

### NamedSelection.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddComment"></a>

### NamedSelection.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddFigure"></a>

### NamedSelection.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.AddImage"></a>

### NamedSelection.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Copy"></a>

### NamedSelection.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CopyTo"></a>

### NamedSelection.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateNodalNamedSelection"></a>

### NamedSelection.CreateNodalNamedSelection() → [Ansys.ACT.Automation.Mechanical.NamedSelection](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

Creates a new Named Selection object containing all the nodes from the entities in the current named selection .

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateObjRef"></a>

### NamedSelection.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateParameter"></a>

### NamedSelection.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.CreateRadiatingFacesNamedSelection"></a>

### NamedSelection.CreateRadiatingFacesNamedSelection(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.NamedSelection](#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.NamedSelection)

CreateRadiatingFacesNamedSelection method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Cut"></a>

### NamedSelection.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Delete"></a>

### NamedSelection.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Duplicate"></a>

### NamedSelection.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Equals"></a>

### NamedSelection.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ExportNamedSelectionToCDBFile"></a>

### NamedSelection.ExportNamedSelectionToCDBFile(filepath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Export Named Selection to CDB file

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.ExportToTextFile"></a>

### NamedSelection.ExportToTextFile(bIgnoreExcelPreference: [bool](https://docs.python.org/3/builtins/functions.html#bool), filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

### NamedSelection.ExportToTextFile(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

ExportToTextFile method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Generate"></a>

### NamedSelection.Generate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Generates the selection based on the generation criteria.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetAPIName"></a>

### NamedSelection.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetAllProperties"></a>

### NamedSelection.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetChildren"></a>

### NamedSelection.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### NamedSelection.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetDetailsView"></a>

### NamedSelection.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetEnumName"></a>

### NamedSelection.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetHashCode"></a>

### NamedSelection.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetIconFile"></a>

### NamedSelection.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetLifetimeService"></a>

### NamedSelection.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetObjectData"></a>

### NamedSelection.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetParameter"></a>

### NamedSelection.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetPath"></a>

### NamedSelection.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetPropertyName"></a>

### NamedSelection.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetPropertyValue"></a>

### NamedSelection.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetVisibleProperties"></a>

### NamedSelection.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GetVisiblePropertyNames"></a>

### NamedSelection.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GroupAllSimilarChildren"></a>

### NamedSelection.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.GroupSimilarObjects"></a>

### NamedSelection.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.InitializeLifetimeService"></a>

### NamedSelection.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IsPropertyEditable"></a>

### NamedSelection.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NamedSelection.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.IsPropertyVisible"></a>

### NamedSelection.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### NamedSelection.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.Paste"></a>

### NamedSelection.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PropertyByAPIName"></a>

### NamedSelection.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PropertyById"></a>

### NamedSelection.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.PropertyByName"></a>

### NamedSelection.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.RemoveFromGroup"></a>

### NamedSelection.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.RemoveParameter"></a>

### NamedSelection.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="NamedSelection.SendToMeshWorkflowByType"></a>

### NamedSelection.SendToMeshWorkflowByType(type: [Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType](../../../Mechanical/DataModel/MechanicalEnums/MeshWorkflow/WorkflowType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.MeshWorkflow.WorkflowType)) → [Ansys.ACT.Automation.Mechanical.MeshWorkflow](MeshWorkflow.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.MeshWorkflow)

Creates a new MeshWorkflowGroup

<!-- !! processed by numpydoc !! -->

