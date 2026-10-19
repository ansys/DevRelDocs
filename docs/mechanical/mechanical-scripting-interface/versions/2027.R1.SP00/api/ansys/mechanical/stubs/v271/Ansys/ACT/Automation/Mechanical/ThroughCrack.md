# `ThroughCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.ThroughCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.ThroughCrack(internalObject: Any)

<a id="ThroughCrack"></a>

### *class* ThroughCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a ThroughCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#ThroughCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#ThroughCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#ThroughCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#ThroughCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#ThroughCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#ThroughCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#ThroughCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#ThroughCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#ThroughCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#ThroughCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#ThroughCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#ThroughCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#ThroughCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#ThroughCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#ThroughCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#ThroughCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#ThroughCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#ThroughCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#ThroughCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#ThroughCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#ThroughCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#ThroughCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#ThroughCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#ThroughCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#ThroughCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#ThroughCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#ThroughCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#ThroughCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#ThroughCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#ThroughCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#ThroughCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#ThroughCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#ThroughCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#ThroughCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#ThroughCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#ThroughCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#ThroughCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#ThroughCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#ThroughCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AttachedRefs`](#ThroughCrack.AttachedRefs)                                     | AttachedRefs property.                                                                                                                                                                       |
| [`BottomFaceNodes`](#ThroughCrack.BottomFaceNodes)                               | Gets or sets the BottomFaceNodes.                                                                                                                                                            |
| [`Children`](#ThroughCrack.Children)                                             | Gets the list of children.                                                                                                                                                                   |
| [`CircumferentialDivisions`](#ThroughCrack.CircumferentialDivisions)             | Gets or sets the CircumferentialDivisions.                                                                                                                                                   |
| [`ClsId`](#ThroughCrack.ClsId)                                                   | ClsId property.                                                                                                                                                                              |
| [`Comments`](#ThroughCrack.Comments)                                             | Gets the list of associated comments.                                                                                                                                                        |
| [`Contact1Nodes`](#ThroughCrack.Contact1Nodes)                                   | Gets or sets the Contact1Nodes.                                                                                                                                                              |
| [`ContactPairsNodes`](#ThroughCrack.ContactPairsNodes)                           | Gets or sets the ContactPairsNodes.                                                                                                                                                          |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                       | Gets or sets the CoordinateSystem.                                                                                                                                                           |
| [`CrackFacesNodes`](#ThroughCrack.CrackFacesNodes)                               | Gets or sets the CrackFacesNodes.                                                                                                                                                            |
| [`CrackFrontDivisions`](#ThroughCrack.CrackFrontDivisions)                       | Gets or sets the CrackFrontDivisions.                                                                                                                                                        |
| [`CrackFrontNodes`](#ThroughCrack.CrackFrontNodes)                               | Gets or sets the CrackFrontNodes.                                                                                                                                                            |
| [`CrackID`](#ThroughCrack.CrackID)                                               | Gets the CrackID.                                                                                                                                                                            |
| [`CrackMeshMethod`](#ThroughCrack.CrackMeshMethod)                               | Gets or sets the CrackMeshMethod.                                                                                                                                                            |
| [`CrackShape`](#ThroughCrack.CrackShape)                                         | Gets the CrackShape.                                                                                                                                                                         |
| [`CrackSourceType`](#ThroughCrack.CrackSourceType)                               | Gets the CrackSourceType.                                                                                                                                                                    |
| [`DataModelObjectCategory`](#ThroughCrack.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                                                                                                                 |
| [`Depth`](#ThroughCrack.Depth)                                                   | Gets or sets the Depth.                                                                                                                                                                      |
| [`EndWidth`](#ThroughCrack.EndWidth)                                             | Gets or sets the EndWidth.                                                                                                                                                                   |
| [`Figures`](#ThroughCrack.Figures)                                               | Gets the list of associated figures.                                                                                                                                                         |
| [`FractureAffectedZone`](#ThroughCrack.FractureAffectedZone)                     | Gets or sets the FractureAffectedZone.                                                                                                                                                       |
| [`FractureAffectedZoneHeight`](#ThroughCrack.FractureAffectedZoneHeight)         | Gets or sets the FractureAffectedZoneHeight.                                                                                                                                                 |
| [`FractureAffectedZoneTransition`](#ThroughCrack.FractureAffectedZoneTransition) | Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact |
| [`FrontElementSize`](#ThroughCrack.FrontElementSize)                             | Gets or sets the FrontElementSize.                                                                                                                                                           |
| [`GroupingFolder`](#ThroughCrack.GroupingFolder)                                 | GroupingFolder property.                                                                                                                                                                     |
| [`GrowthRate`](#ThroughCrack.GrowthRate)                                         | Gets or sets the GrowthRate.                                                                                                                                                                 |
| [`IconName`](#ThroughCrack.IconName)                                             | IconName property.                                                                                                                                                                           |
| [`Images`](#ThroughCrack.Images)                                                 | Gets the list of associated images.                                                                                                                                                          |
| [`ImportableObjectSourceId`](#ThroughCrack.ImportableObjectSourceId)             | ImportableObjectSourceId property.                                                                                                                                                           |
| [`InternalObject`](#ThroughCrack.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                                                                                                           |
| [`LargestContourRadius`](#ThroughCrack.LargestContourRadius)                     | Gets or sets the LargestContourRadius.                                                                                                                                                       |
| [`Location`](#ThroughCrack.Location)                                             | Gets or sets the Location.                                                                                                                                                                   |
| [`MeshContours`](#ThroughCrack.MeshContours)                                     | Gets or sets the MeshContours.                                                                                                                                                               |
| [`MidWidth`](#ThroughCrack.MidWidth)                                             | Gets or sets the MidWidth.                                                                                                                                                                   |
| [`Name`](#ThroughCrack.Name)                                                     | Name property.                                                                                                                                                                               |
| [`ObjectId`](#ThroughCrack.ObjectId)                                             | ObjectId property.                                                                                                                                                                           |
| [`ObjectState`](#ThroughCrack.ObjectState)                                       | ObjectState property.                                                                                                                                                                        |
| [`ObjectTags`](#ThroughCrack.ObjectTags)                                         | ObjectTags property.                                                                                                                                                                         |
| [`Parent`](#ThroughCrack.Parent)                                                 | Parent property.                                                                                                                                                                             |
| [`Properties`](#ThroughCrack.Properties)                                         | Gets the list of properties for this object.                                                                                                                                                 |
| [`ReadOnly`](#ThroughCrack.ReadOnly)                                             | Gets or sets the ReadOnly.                                                                                                                                                                   |
| [`SolutionContours`](#ThroughCrack.SolutionContours)                             | Gets or sets the SolutionContours.                                                                                                                                                           |
| [`StartWidth`](#ThroughCrack.StartWidth)                                         | Gets or sets the StartWidth.                                                                                                                                                                 |
| [`State`](#ThroughCrack.State)                                                   | State property.                                                                                                                                                                              |
| [`Suppressed`](#ThroughCrack.Suppressed)                                         | Gets or sets the Suppressed.                                                                                                                                                                 |
| [`Target1Nodes`](#ThroughCrack.Target1Nodes)                                     | Gets or sets the Target1Nodes.                                                                                                                                                               |
| [`TopFaceNodes`](#ThroughCrack.TopFaceNodes)                                     | Gets or sets the TopFaceNodes.                                                                                                                                                               |
| [`TransferableObjectId`](#ThroughCrack.TransferableObjectId)                     | TransferableObjectId property.                                                                                                                                                               |
| [`VisibleProperties`](#ThroughCrack.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                                                                                                                |
| [`XScaleFactor`](#ThroughCrack.XScaleFactor)                                     | Gets or sets the XScaleFactor.                                                                                                                                                               |
| [`YScaleFactor`](#ThroughCrack.YScaleFactor)                                     | Gets or sets the YScaleFactor.                                                                                                                                                               |
| [`ZScaleFactor`](#ThroughCrack.ZScaleFactor)                                     | Gets or sets the ZScaleFactor.                                                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="ThroughCrack.AttachedRefs"></a>

### *property* ThroughCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.BottomFaceNodes"></a>

### *property* ThroughCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Children"></a>

### *property* ThroughCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CircumferentialDivisions"></a>

### *property* ThroughCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ClsId"></a>

### *property* ThroughCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Comments"></a>

### *property* ThroughCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Contact1Nodes"></a>

### *property* ThroughCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ContactPairsNodes"></a>

### *property* ThroughCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CoordinateSystem"></a>

### *property* ThroughCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFacesNodes"></a>

### *property* ThroughCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontDivisions"></a>

### *property* ThroughCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackFrontNodes"></a>

### *property* ThroughCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackID"></a>

### *property* ThroughCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackMeshMethod"></a>

### *property* ThroughCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackShape"></a>

### *property* ThroughCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CrackSourceType"></a>

### *property* ThroughCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.DataModelObjectCategory"></a>

### *property* ThroughCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Depth"></a>

### *property* ThroughCrack.Depth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Depth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.EndWidth"></a>

### *property* ThroughCrack.EndWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the EndWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Figures"></a>

### *property* ThroughCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZone"></a>

### *property* ThroughCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZoneHeight"></a>

### *property* ThroughCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FractureAffectedZoneTransition"></a>

### *property* ThroughCrack.FractureAffectedZoneTransition *: [Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition](../../../Mechanical/DataModel/MechanicalEnums/Fracture/CrackFAZTransition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.FrontElementSize"></a>

### *property* ThroughCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupingFolder"></a>

### *property* ThroughCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GrowthRate"></a>

### *property* ThroughCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.IconName"></a>

### *property* ThroughCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Images"></a>

### *property* ThroughCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ImportableObjectSourceId"></a>

### *property* ThroughCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.InternalObject"></a>

### *property* ThroughCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.LargestContourRadius"></a>

### *property* ThroughCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Location"></a>

### *property* ThroughCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MeshContours"></a>

### *property* ThroughCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.MidWidth"></a>

### *property* ThroughCrack.MidWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MidWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Name"></a>

### *property* ThroughCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ObjectId"></a>

### *property* ThroughCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ObjectState"></a>

### *property* ThroughCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ObjectTags"></a>

### *property* ThroughCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Parent"></a>

### *property* ThroughCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Properties"></a>

### *property* ThroughCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ReadOnly"></a>

### *property* ThroughCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.SolutionContours"></a>

### *property* ThroughCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.StartWidth"></a>

### *property* ThroughCrack.StartWidth *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the StartWidth.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.State"></a>

### *property* ThroughCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Suppressed"></a>

### *property* ThroughCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Target1Nodes"></a>

### *property* ThroughCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.TopFaceNodes"></a>

### *property* ThroughCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.TransferableObjectId"></a>

### *property* ThroughCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.VisibleProperties"></a>

### *property* ThroughCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.XScaleFactor"></a>

### *property* ThroughCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.YScaleFactor"></a>

### *property* ThroughCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.ZScaleFactor"></a>

### *property* ThroughCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="ThroughCrack.Activate"></a>

### ThroughCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddCommandSnippet"></a>

### ThroughCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddComment"></a>

### ThroughCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddFigure"></a>

### ThroughCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.AddImage"></a>

### ThroughCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Copy"></a>

### ThroughCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CopyTo"></a>

### ThroughCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CreateObjRef"></a>

### ThroughCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.CreateParameter"></a>

### ThroughCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Cut"></a>

### ThroughCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Delete"></a>

### ThroughCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Duplicate"></a>

### ThroughCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Equals"></a>

### ThroughCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetAPIName"></a>

### ThroughCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetAllProperties"></a>

### ThroughCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetChildren"></a>

### ThroughCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### ThroughCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetDetailsView"></a>

### ThroughCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetEnumName"></a>

### ThroughCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetHashCode"></a>

### ThroughCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetIconFile"></a>

### ThroughCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetLifetimeService"></a>

### ThroughCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetObjectData"></a>

### ThroughCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetParameter"></a>

### ThroughCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetPath"></a>

### ThroughCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetPropertyName"></a>

### ThroughCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetPropertyValue"></a>

### ThroughCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetVisibleProperties"></a>

### ThroughCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GetVisiblePropertyNames"></a>

### ThroughCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupAllSimilarChildren"></a>

### ThroughCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.GroupSimilarObjects"></a>

### ThroughCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.InitializeLifetimeService"></a>

### ThroughCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.IsPropertyEditable"></a>

### ThroughCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThroughCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.IsPropertyVisible"></a>

### ThroughCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### ThroughCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.Paste"></a>

### ThroughCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByAPIName"></a>

### ThroughCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyById"></a>

### ThroughCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.PropertyByName"></a>

### ThroughCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.RemoveFromGroup"></a>

### ThroughCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="ThroughCrack.RemoveParameter"></a>

### ThroughCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

