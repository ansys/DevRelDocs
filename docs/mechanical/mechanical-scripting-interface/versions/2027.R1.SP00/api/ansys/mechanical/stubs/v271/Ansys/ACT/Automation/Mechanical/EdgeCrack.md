# `EdgeCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.EdgeCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.EdgeCrack(internalObject: Any)

<a id="EdgeCrack"></a>

### *class* EdgeCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a EdgeCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#EdgeCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#EdgeCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#EdgeCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#EdgeCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#EdgeCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#EdgeCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#EdgeCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#EdgeCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#EdgeCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#EdgeCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#EdgeCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#EdgeCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#EdgeCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#EdgeCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#EdgeCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#EdgeCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#EdgeCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#EdgeCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#EdgeCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#EdgeCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#EdgeCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#EdgeCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#EdgeCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#EdgeCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#EdgeCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#EdgeCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#EdgeCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#EdgeCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#EdgeCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#EdgeCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#EdgeCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#EdgeCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#EdgeCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#EdgeCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#EdgeCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#EdgeCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#EdgeCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#EdgeCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#EdgeCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#EdgeCrack.AttachedRefs)                                     | AttachedRefs property.                                                                                                                                                                       |
| [`BottomFaceNodes`](#EdgeCrack.BottomFaceNodes)                               | Gets or sets the BottomFaceNodes.                                                                                                                                                            |
| [`Children`](#EdgeCrack.Children)                                             | Gets the list of children.                                                                                                                                                                   |
| [`CircumferentialDivisions`](#EdgeCrack.CircumferentialDivisions)             | Gets or sets the CircumferentialDivisions.                                                                                                                                                   |
| [`ClsId`](#EdgeCrack.ClsId)                                                   | ClsId property.                                                                                                                                                                              |
| [`Comments`](#EdgeCrack.Comments)                                             | Gets the list of associated comments.                                                                                                                                                        |
| [`Contact1Nodes`](#EdgeCrack.Contact1Nodes)                                   | Gets or sets the Contact1Nodes.                                                                                                                                                              |
| [`ContactPairsNodes`](#EdgeCrack.ContactPairsNodes)                           | Gets or sets the ContactPairsNodes.                                                                                                                                                          |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                    | Gets or sets the CoordinateSystem.                                                                                                                                                           |
| [`CrackFacesNodes`](#EdgeCrack.CrackFacesNodes)                               | Gets or sets the CrackFacesNodes.                                                                                                                                                            |
| [`CrackFrontDivisions`](#EdgeCrack.CrackFrontDivisions)                       | Gets or sets the CrackFrontDivisions.                                                                                                                                                        |
| [`CrackFrontNodes`](#EdgeCrack.CrackFrontNodes)                               | Gets or sets the CrackFrontNodes.                                                                                                                                                            |
| [`CrackID`](#EdgeCrack.CrackID)                                               | Gets the CrackID.                                                                                                                                                                            |
| [`CrackMeshMethod`](#EdgeCrack.CrackMeshMethod)                               | Gets or sets the CrackMeshMethod.                                                                                                                                                            |
| [`CrackShape`](#EdgeCrack.CrackShape)                                         | Gets the CrackShape.                                                                                                                                                                         |
| [`CrackSourceType`](#EdgeCrack.CrackSourceType)                               | Gets the CrackSourceType.                                                                                                                                                                    |
| [`DataModelObjectCategory`](#EdgeCrack.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                                                                                                                 |
| [`Depth`](#EdgeCrack.Depth)                                                   | Gets or sets the Depth.                                                                                                                                                                      |
| [`EndWidth`](#EdgeCrack.EndWidth)                                             | Gets or sets the EndWidth.                                                                                                                                                                   |
| [`Figures`](#EdgeCrack.Figures)                                               | Gets the list of associated figures.                                                                                                                                                         |
| [`FractureAffectedZone`](#EdgeCrack.FractureAffectedZone)                     | Gets or sets the FractureAffectedZone.                                                                                                                                                       |
| [`FractureAffectedZoneHeight`](#EdgeCrack.FractureAffectedZoneHeight)         | Gets or sets the FractureAffectedZoneHeight.                                                                                                                                                 |
| [`FractureAffectedZoneTransition`](#EdgeCrack.FractureAffectedZoneTransition) | Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact |
| [`FrontElementSize`](#EdgeCrack.FrontElementSize)                             | Gets or sets the FrontElementSize.                                                                                                                                                           |
| [`GroupingFolder`](#EdgeCrack.GroupingFolder)                                 | GroupingFolder property.                                                                                                                                                                     |
| [`GrowthRate`](#EdgeCrack.GrowthRate)                                         | Gets or sets the GrowthRate.                                                                                                                                                                 |
| [`IconName`](#EdgeCrack.IconName)                                             | IconName property.                                                                                                                                                                           |
| [`Images`](#EdgeCrack.Images)                                                 | Gets the list of associated images.                                                                                                                                                          |
| [`ImportableObjectSourceId`](#EdgeCrack.ImportableObjectSourceId)             | ImportableObjectSourceId property.                                                                                                                                                           |
| [`InternalObject`](#EdgeCrack.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                                                                                                           |
| [`LargestContourRadius`](#EdgeCrack.LargestContourRadius)                     | Gets or sets the LargestContourRadius.                                                                                                                                                       |
| [`Location`](#EdgeCrack.Location)                                             | Gets or sets the Location.                                                                                                                                                                   |
| [`MeshContours`](#EdgeCrack.MeshContours)                                     | Gets or sets the MeshContours.                                                                                                                                                               |
| [`MidWidth`](#EdgeCrack.MidWidth)                                             | Gets or sets the MidWidth.                                                                                                                                                                   |
| [`Name`](#EdgeCrack.Name)                                                     | Name property.                                                                                                                                                                               |
| [`ObjectId`](#EdgeCrack.ObjectId)                                             | ObjectId property.                                                                                                                                                                           |
| [`ObjectState`](#EdgeCrack.ObjectState)                                       | ObjectState property.                                                                                                                                                                        |
| [`ObjectTags`](#EdgeCrack.ObjectTags)                                         | ObjectTags property.                                                                                                                                                                         |
| [`Parent`](#EdgeCrack.Parent)                                                 | Parent property.                                                                                                                                                                             |
| [`Properties`](#EdgeCrack.Properties)                                         | Gets the list of properties for this object.                                                                                                                                                 |
| [`ReadOnly`](#EdgeCrack.ReadOnly)                                             | Gets or sets the ReadOnly.                                                                                                                                                                   |
| [`SolutionContours`](#EdgeCrack.SolutionContours)                             | Gets or sets the SolutionContours.                                                                                                                                                           |
| [`StartWidth`](#EdgeCrack.StartWidth)                                         | Gets or sets the StartWidth.                                                                                                                                                                 |
| [`State`](#EdgeCrack.State)                                                   | State property.                                                                                                                                                                              |
| [`Suppressed`](#EdgeCrack.Suppressed)                                         | Gets or sets the Suppressed.                                                                                                                                                                 |
| [`Target1Nodes`](#EdgeCrack.Target1Nodes)                                     | Gets or sets the Target1Nodes.                                                                                                                                                               |
| [`TopFaceNodes`](#EdgeCrack.TopFaceNodes)                                     | Gets or sets the TopFaceNodes.                                                                                                                                                               |
| [`TransferableObjectId`](#EdgeCrack.TransferableObjectId)                     | TransferableObjectId property.                                                                                                                                                               |
| [`VisibleProperties`](#EdgeCrack.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                                                                                                                |
| [`XScaleFactor`](#EdgeCrack.XScaleFactor)                                     | Gets or sets the XScaleFactor.                                                                                                                                                               |
| [`YScaleFactor`](#EdgeCrack.YScaleFactor)                                     | Gets or sets the YScaleFactor.                                                                                                                                                               |
| [`ZScaleFactor`](#EdgeCrack.ZScaleFactor)                                     | Gets or sets the ZScaleFactor.                                                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="EdgeCrack.AttachedRefs"></a>

### *property* EdgeCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.BottomFaceNodes"></a>

### *property* EdgeCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Children"></a>

### *property* EdgeCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CircumferentialDivisions"></a>

### *property* EdgeCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ClsId"></a>

### *property* EdgeCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Comments"></a>

### *property* EdgeCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Contact1Nodes"></a>

### *property* EdgeCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ContactPairsNodes"></a>

### *property* EdgeCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CoordinateSystem"></a>

### *property* EdgeCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFacesNodes"></a>

### *property* EdgeCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFrontDivisions"></a>

### *property* EdgeCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackFrontNodes"></a>

### *property* EdgeCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackID"></a>

### *property* EdgeCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackMeshMethod"></a>

### *property* EdgeCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackShape"></a>

### *property* EdgeCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CrackSourceType"></a>

### *property* EdgeCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.DataModelObjectCategory"></a>

### *property* EdgeCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Depth"></a>

### *property* EdgeCrack.Depth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.EndWidth"></a>

### *property* EdgeCrack.EndWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Figures"></a>

### *property* EdgeCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FractureAffectedZone"></a>

### *property* EdgeCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FractureAffectedZoneHeight"></a>

### *property* EdgeCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FractureAffectedZoneTransition"></a>

### *property* EdgeCrack.FractureAffectedZoneTransition *: [Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition](../../../Mechanical/DataModel/MechanicalEnums/Fracture/CrackFAZTransition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.FrontElementSize"></a>

### *property* EdgeCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GroupingFolder"></a>

### *property* EdgeCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GrowthRate"></a>

### *property* EdgeCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.IconName"></a>

### *property* EdgeCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Images"></a>

### *property* EdgeCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ImportableObjectSourceId"></a>

### *property* EdgeCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.InternalObject"></a>

### *property* EdgeCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.LargestContourRadius"></a>

### *property* EdgeCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Location"></a>

### *property* EdgeCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.MeshContours"></a>

### *property* EdgeCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.MidWidth"></a>

### *property* EdgeCrack.MidWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Name"></a>

### *property* EdgeCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ObjectId"></a>

### *property* EdgeCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ObjectState"></a>

### *property* EdgeCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ObjectTags"></a>

### *property* EdgeCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Parent"></a>

### *property* EdgeCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Properties"></a>

### *property* EdgeCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ReadOnly"></a>

### *property* EdgeCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.SolutionContours"></a>

### *property* EdgeCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.StartWidth"></a>

### *property* EdgeCrack.StartWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.State"></a>

### *property* EdgeCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Suppressed"></a>

### *property* EdgeCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Target1Nodes"></a>

### *property* EdgeCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.TopFaceNodes"></a>

### *property* EdgeCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.TransferableObjectId"></a>

### *property* EdgeCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.VisibleProperties"></a>

### *property* EdgeCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.XScaleFactor"></a>

### *property* EdgeCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.YScaleFactor"></a>

### *property* EdgeCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.ZScaleFactor"></a>

### *property* EdgeCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="EdgeCrack.Activate"></a>

### EdgeCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddCommandSnippet"></a>

### EdgeCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddComment"></a>

### EdgeCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddFigure"></a>

### EdgeCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.AddImage"></a>

### EdgeCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Copy"></a>

### EdgeCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CopyTo"></a>

### EdgeCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CreateObjRef"></a>

### EdgeCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.CreateParameter"></a>

### EdgeCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Cut"></a>

### EdgeCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Delete"></a>

### EdgeCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Duplicate"></a>

### EdgeCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Equals"></a>

### EdgeCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetAPIName"></a>

### EdgeCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetAllProperties"></a>

### EdgeCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetChildren"></a>

### EdgeCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### EdgeCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetDetailsView"></a>

### EdgeCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetEnumName"></a>

### EdgeCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetHashCode"></a>

### EdgeCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetIconFile"></a>

### EdgeCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetLifetimeService"></a>

### EdgeCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetObjectData"></a>

### EdgeCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetParameter"></a>

### EdgeCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetPath"></a>

### EdgeCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetPropertyName"></a>

### EdgeCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetPropertyValue"></a>

### EdgeCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetVisibleProperties"></a>

### EdgeCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GetVisiblePropertyNames"></a>

### EdgeCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GroupAllSimilarChildren"></a>

### EdgeCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.GroupSimilarObjects"></a>

### EdgeCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.InitializeLifetimeService"></a>

### EdgeCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.IsPropertyEditable"></a>

### EdgeCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EdgeCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.IsPropertyVisible"></a>

### EdgeCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### EdgeCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.Paste"></a>

### EdgeCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.PropertyByAPIName"></a>

### EdgeCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.PropertyById"></a>

### EdgeCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.PropertyByName"></a>

### EdgeCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.RemoveFromGroup"></a>

### EdgeCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="EdgeCrack.RemoveParameter"></a>

### EdgeCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

