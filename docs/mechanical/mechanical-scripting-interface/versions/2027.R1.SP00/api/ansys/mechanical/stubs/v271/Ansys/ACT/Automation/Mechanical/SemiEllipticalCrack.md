# `SemiEllipticalCrack`

<a id="ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack"></a>

#### *class* Ansys.ACT.Automation.Mechanical.SemiEllipticalCrack(internalObject: Any)

<a id="SemiEllipticalCrack"></a>

### *class* SemiEllipticalCrack(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext)

Bases: [`object`](https://docs.python.org/3/builtins/functions.html#object)

Defines a SemiEllipticalCrack.

<!-- !! processed by numpydoc !! -->

<a id="overview"></a>

## Overview

### Methods

| Name | Description |
|-------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| [`Activate`](#SemiEllipticalCrack.Activate)                                   | Activate the current object.                                                                |
| [`AddCommandSnippet`](#SemiEllipticalCrack.AddCommandSnippet)                 | Creates a new CommandSnippet                                                                |
| [`AddComment`](#SemiEllipticalCrack.AddComment)                               | Creates a new child Comment.                                                                |
| [`AddFigure`](#SemiEllipticalCrack.AddFigure)                                 | Creates a new child Figure.                                                                 |
| [`AddImage`](#SemiEllipticalCrack.AddImage)                                   | Creates a new child Image.                                                                  |
| [`Copy`](#SemiEllipticalCrack.Copy)                                           | Copies the current DataModelObject.                                                         |
| [`CopyTo`](#SemiEllipticalCrack.CopyTo)                                       | Copies all visible properties from this object to another.                                  |
| [`CreateObjRef`](#SemiEllipticalCrack.CreateObjRef)                           | CreateObjRef method.                                                                        |
| [`CreateParameter`](#SemiEllipticalCrack.CreateParameter)                     | Creates a new parameter for a Property.                                                     |
| [`Cut`](#SemiEllipticalCrack.Cut)                                             | Cuts the current DataModelObject.                                                           |
| [`Delete`](#SemiEllipticalCrack.Delete)                                       | Run the Delete action.                                                                      |
| [`Duplicate`](#SemiEllipticalCrack.Duplicate)                                 | Creates a copy of the current DataModelObject.                                              |
| [`Equals`](#SemiEllipticalCrack.Equals)                                       | Equals method.                                                                              |
| [`GetAPIName`](#SemiEllipticalCrack.GetAPIName)                               | Property name bound to dispId.                                                              |
| [`GetAllProperties`](#SemiEllipticalCrack.GetAllProperties)                   | GetAllProperties method.                                                                    |
| [`GetChildren`](#SemiEllipticalCrack.GetChildren)                             | Gets the list of children, filtered by type.                                                |
| [`GetDetailsView`](#SemiEllipticalCrack.GetDetailsView)                       | GetDetailsView method.                                                                      |
| [`GetEnumName`](#SemiEllipticalCrack.GetEnumName)                             | Enum name bound to value                                                                    |
| [`GetHashCode`](#SemiEllipticalCrack.GetHashCode)                             | GetHashCode method.                                                                         |
| [`GetIconFile`](#SemiEllipticalCrack.GetIconFile)                             | GetIconFile method.                                                                         |
| [`GetLifetimeService`](#SemiEllipticalCrack.GetLifetimeService)               | GetLifetimeService method.                                                                  |
| [`GetObjectData`](#SemiEllipticalCrack.GetObjectData)                         | GetObjectData method.                                                                       |
| [`GetParameter`](#SemiEllipticalCrack.GetParameter)                           | Gets the parameter corresponding to the given property.                                     |
| [`GetPath`](#SemiEllipticalCrack.GetPath)                                     | GetPath method.                                                                             |
| [`GetPropertyName`](#SemiEllipticalCrack.GetPropertyName)                     | GetPropertyName method.                                                                     |
| [`GetPropertyValue`](#SemiEllipticalCrack.GetPropertyValue)                   | GetPropertyValue method.                                                                    |
| [`GetVisibleProperties`](#SemiEllipticalCrack.GetVisibleProperties)           | GetVisibleProperties method.                                                                |
| [`GetVisiblePropertyNames`](#SemiEllipticalCrack.GetVisiblePropertyNames)     | GetVisiblePropertyNames method.                                                             |
| [`GroupAllSimilarChildren`](#SemiEllipticalCrack.GroupAllSimilarChildren)     | Run the GroupAllSimilarChildren action.                                                     |
| [`GroupSimilarObjects`](#SemiEllipticalCrack.GroupSimilarObjects)             | Run the GroupSimilarObjects action.                                                         |
| [`InitializeLifetimeService`](#SemiEllipticalCrack.InitializeLifetimeService) | InitializeLifetimeService method.                                                           |
| [`IsPropertyEditable`](#SemiEllipticalCrack.IsPropertyEditable)               | IsPropertyEditable method.                                                                  |
| [`IsPropertyVisible`](#SemiEllipticalCrack.IsPropertyVisible)                 | IsPropertyVisible method.                                                                   |
| [`Paste`](#SemiEllipticalCrack.Paste)                                         | Pastes to the current DataModelObject context.                                              |
| [`PropertyByAPIName`](#SemiEllipticalCrack.PropertyByAPIName)                 | Get a property by its API name.                                                             |
| [`PropertyById`](#SemiEllipticalCrack.PropertyById)                           | PropertyById method.                                                                        |
| [`PropertyByName`](#SemiEllipticalCrack.PropertyByName)                       | Get a property by its unique name.                                                          |
| [`RemoveFromGroup`](#SemiEllipticalCrack.RemoveFromGroup)                     | Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder. |
| [`RemoveParameter`](#SemiEllipticalCrack.RemoveParameter)                     | Removes the parameter from the parameter set corresponding to the given property.           |

### Properties

| Name | Description |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AlignWithFaceNormal`](#SemiEllipticalCrack.AlignWithFaceNormal)                       | Gets or sets the AlignWithFaceNormal.                                                                                                                                                        |
| [`AttachedRefs`](#SemiEllipticalCrack.AttachedRefs)                                     | AttachedRefs property.                                                                                                                                                                       |
| [`BottomFaceNodes`](#SemiEllipticalCrack.BottomFaceNodes)                               | Gets or sets the BottomFaceNodes.                                                                                                                                                            |
| [`Children`](#SemiEllipticalCrack.Children)                                             | Gets the list of children.                                                                                                                                                                   |
| [`CircumferentialDivisions`](#SemiEllipticalCrack.CircumferentialDivisions)             | Gets or sets the CircumferentialDivisions.                                                                                                                                                   |
| [`ClsId`](#SemiEllipticalCrack.ClsId)                                                   | ClsId property.                                                                                                                                                                              |
| [`Comments`](#SemiEllipticalCrack.Comments)                                             | Gets the list of associated comments.                                                                                                                                                        |
| [`Contact1Nodes`](#SemiEllipticalCrack.Contact1Nodes)                                   | Gets or sets the Contact1Nodes.                                                                                                                                                              |
| [`ContactPairsNodes`](#SemiEllipticalCrack.ContactPairsNodes)                           | Gets or sets the ContactPairsNodes.                                                                                                                                                          |
| [`CoordinateSystem`](CoordinateSystem.md#CoordinateSystem)                              | Gets or sets the CoordinateSystem.                                                                                                                                                           |
| [`CrackFacesNodes`](#SemiEllipticalCrack.CrackFacesNodes)                               | Gets or sets the CrackFacesNodes.                                                                                                                                                            |
| [`CrackFrontDivisions`](#SemiEllipticalCrack.CrackFrontDivisions)                       | Gets or sets the CrackFrontDivisions.                                                                                                                                                        |
| [`CrackFrontNodes`](#SemiEllipticalCrack.CrackFrontNodes)                               | Gets or sets the CrackFrontNodes.                                                                                                                                                            |
| [`CrackID`](#SemiEllipticalCrack.CrackID)                                               | Gets the CrackID.                                                                                                                                                                            |
| [`CrackMeshMethod`](#SemiEllipticalCrack.CrackMeshMethod)                               | Gets or sets the CrackMeshMethod.                                                                                                                                                            |
| [`CrackShape`](#SemiEllipticalCrack.CrackShape)                                         | Gets the CrackShape.                                                                                                                                                                         |
| [`CrackSourceType`](#SemiEllipticalCrack.CrackSourceType)                               | Gets the CrackSourceType.                                                                                                                                                                    |
| [`DataModelObjectCategory`](#SemiEllipticalCrack.DataModelObjectCategory)               | Gets the current DataModelObject's category.                                                                                                                                                 |
| [`Figures`](#SemiEllipticalCrack.Figures)                                               | Gets the list of associated figures.                                                                                                                                                         |
| [`FractureAffectedZone`](#SemiEllipticalCrack.FractureAffectedZone)                     | Gets or sets the FractureAffectedZone.                                                                                                                                                       |
| [`FractureAffectedZoneHeight`](#SemiEllipticalCrack.FractureAffectedZoneHeight)         | Gets or sets the FractureAffectedZoneHeight.                                                                                                                                                 |
| [`FractureAffectedZoneTransition`](#SemiEllipticalCrack.FractureAffectedZoneTransition) | Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact |
| [`FrontElementSize`](#SemiEllipticalCrack.FrontElementSize)                             | Gets or sets the FrontElementSize.                                                                                                                                                           |
| [`GroupingFolder`](#SemiEllipticalCrack.GroupingFolder)                                 | GroupingFolder property.                                                                                                                                                                     |
| [`GrowthRate`](#SemiEllipticalCrack.GrowthRate)                                         | Gets or sets the GrowthRate.                                                                                                                                                                 |
| [`IconName`](#SemiEllipticalCrack.IconName)                                             | IconName property.                                                                                                                                                                           |
| [`Images`](#SemiEllipticalCrack.Images)                                                 | Gets the list of associated images.                                                                                                                                                          |
| [`ImportableObjectSourceId`](#SemiEllipticalCrack.ImportableObjectSourceId)             | ImportableObjectSourceId property.                                                                                                                                                           |
| [`InternalObject`](#SemiEllipticalCrack.InternalObject)                                 | Gets the internal object. For advanced usage only.                                                                                                                                           |
| [`LargestContourRadius`](#SemiEllipticalCrack.LargestContourRadius)                     | Gets or sets the LargestContourRadius.                                                                                                                                                       |
| [`Location`](#SemiEllipticalCrack.Location)                                             | Gets or sets the Location.                                                                                                                                                                   |
| [`MajorRadius`](#SemiEllipticalCrack.MajorRadius)                                       | Gets or sets the MajorRadius.                                                                                                                                                                |
| [`MeshContours`](#SemiEllipticalCrack.MeshContours)                                     | Gets or sets the MeshContours.                                                                                                                                                               |
| [`MinorRadius`](#SemiEllipticalCrack.MinorRadius)                                       | Gets or sets the MinorRadius.                                                                                                                                                                |
| [`Name`](#SemiEllipticalCrack.Name)                                                     | Name property.                                                                                                                                                                               |
| [`ObjectId`](#SemiEllipticalCrack.ObjectId)                                             | ObjectId property.                                                                                                                                                                           |
| [`ObjectState`](#SemiEllipticalCrack.ObjectState)                                       | ObjectState property.                                                                                                                                                                        |
| [`ObjectTags`](#SemiEllipticalCrack.ObjectTags)                                         | ObjectTags property.                                                                                                                                                                         |
| [`Parent`](#SemiEllipticalCrack.Parent)                                                 | Parent property.                                                                                                                                                                             |
| [`ProjectToNearestSurface`](#SemiEllipticalCrack.ProjectToNearestSurface)               | Gets or sets the ProjectToNearestSurface.                                                                                                                                                    |
| [`Properties`](#SemiEllipticalCrack.Properties)                                         | Gets the list of properties for this object.                                                                                                                                                 |
| [`ReadOnly`](#SemiEllipticalCrack.ReadOnly)                                             | Gets or sets the ReadOnly.                                                                                                                                                                   |
| [`SolutionContours`](#SemiEllipticalCrack.SolutionContours)                             | Gets or sets the SolutionContours.                                                                                                                                                           |
| [`State`](#SemiEllipticalCrack.State)                                                   | State property.                                                                                                                                                                              |
| [`Suppressed`](#SemiEllipticalCrack.Suppressed)                                         | Gets or sets the Suppressed.                                                                                                                                                                 |
| [`Target1Nodes`](#SemiEllipticalCrack.Target1Nodes)                                     | Gets or sets the Target1Nodes.                                                                                                                                                               |
| [`TopFaceNodes`](#SemiEllipticalCrack.TopFaceNodes)                                     | Gets or sets the TopFaceNodes.                                                                                                                                                               |
| [`TransferableObjectId`](#SemiEllipticalCrack.TransferableObjectId)                     | TransferableObjectId property.                                                                                                                                                               |
| [`VisibleProperties`](#SemiEllipticalCrack.VisibleProperties)                           | Gets the list of properties that are visible for this object.                                                                                                                                |
| [`XScaleFactor`](#SemiEllipticalCrack.XScaleFactor)                                     | Gets or sets the XScaleFactor.                                                                                                                                                               |
| [`YScaleFactor`](#SemiEllipticalCrack.YScaleFactor)                                     | Gets or sets the YScaleFactor.                                                                                                                                                               |
| [`ZScaleFactor`](#SemiEllipticalCrack.ZScaleFactor)                                     | Gets or sets the ZScaleFactor.                                                                                                                                                               |

<a id="property-detail"></a>

## Property detail

<a id="SemiEllipticalCrack.AlignWithFaceNormal"></a>

### *property* SemiEllipticalCrack.AlignWithFaceNormal *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the AlignWithFaceNormal.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AttachedRefs"></a>

### *property* SemiEllipticalCrack.AttachedRefs *: List[[int](https://docs.python.org/3/builtins/functions.html#int)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

AttachedRefs property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.BottomFaceNodes"></a>

### *property* SemiEllipticalCrack.BottomFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the BottomFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Children"></a>

### *property* SemiEllipticalCrack.Children *: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of children.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CircumferentialDivisions"></a>

### *property* SemiEllipticalCrack.CircumferentialDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CircumferentialDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ClsId"></a>

### *property* SemiEllipticalCrack.ClsId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ClsId property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Comments"></a>

### *property* SemiEllipticalCrack.Comments *: Iterable[[Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated comments.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Contact1Nodes"></a>

### *property* SemiEllipticalCrack.Contact1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Contact1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ContactPairsNodes"></a>

### *property* SemiEllipticalCrack.ContactPairsNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ContactPairsNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CoordinateSystem"></a>

### *property* SemiEllipticalCrack.CoordinateSystem *: [Ansys.ACT.Automation.Mechanical.CoordinateSystem](CoordinateSystem.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CoordinateSystem) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CoordinateSystem.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFacesNodes"></a>

### *property* SemiEllipticalCrack.CrackFacesNodes *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFacesNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontDivisions"></a>

### *property* SemiEllipticalCrack.CrackFrontDivisions *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontDivisions.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackFrontNodes"></a>

### *property* SemiEllipticalCrack.CrackFrontNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackFrontNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackID"></a>

### *property* SemiEllipticalCrack.CrackID *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackID.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackMeshMethod"></a>

### *property* SemiEllipticalCrack.CrackMeshMethod *: [Ansys.Mechanical.DataModel.Enums.CrackMeshMethod](../../../Mechanical/DataModel/Enums/CrackMeshMethod.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackMeshMethod) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the CrackMeshMethod.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackShape"></a>

### *property* SemiEllipticalCrack.CrackShape *: [Ansys.Mechanical.DataModel.Enums.CrackShapeType](../../../Mechanical/DataModel/Enums/CrackShapeType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackShapeType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackShape.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CrackSourceType"></a>

### *property* SemiEllipticalCrack.CrackSourceType *: [Ansys.Mechanical.DataModel.Enums.CrackSourceType](../../../Mechanical/DataModel/Enums/CrackSourceType.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.CrackSourceType) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the CrackSourceType.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.DataModelObjectCategory"></a>

### *property* SemiEllipticalCrack.DataModelObjectCategory *: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the current DataModelObject's category.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Figures"></a>

### *property* SemiEllipticalCrack.Figures *: Iterable[[Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated figures.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZone"></a>

### *property* SemiEllipticalCrack.FractureAffectedZone *: [Ansys.Mechanical.DataModel.Enums.FractureAffectedZone](../../../Mechanical/DataModel/Enums/FractureAffectedZone.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.FractureAffectedZone) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZone.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZoneHeight"></a>

### *property* SemiEllipticalCrack.FractureAffectedZoneHeight *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FractureAffectedZoneHeight.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FractureAffectedZoneTransition"></a>

### *property* SemiEllipticalCrack.FractureAffectedZoneTransition *: [Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition](../../../Mechanical/DataModel/MechanicalEnums/Fracture/CrackFAZTransition.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.MechanicalEnums.Fracture.CrackFAZTransition) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the type of transition between hex-dominant and tetrahedral meshes at the fracture affected zone interface only when the crack mesh method is Hex-Dominant. Default: MPCContact

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.FrontElementSize"></a>

### *property* SemiEllipticalCrack.FrontElementSize *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the FrontElementSize.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupingFolder"></a>

### *property* SemiEllipticalCrack.GroupingFolder *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

GroupingFolder property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GrowthRate"></a>

### *property* SemiEllipticalCrack.GrowthRate *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the GrowthRate.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.IconName"></a>

### *property* SemiEllipticalCrack.IconName *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

IconName property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Images"></a>

### *property* SemiEllipticalCrack.Images *: Iterable[[Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of associated images.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ImportableObjectSourceId"></a>

### *property* SemiEllipticalCrack.ImportableObjectSourceId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ImportableObjectSourceId property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.InternalObject"></a>

### *property* SemiEllipticalCrack.InternalObject *: Ansys.Common.Interop.DSObjectsAuto.IDSCrackAuto | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the internal object. For advanced usage only.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.LargestContourRadius"></a>

### *property* SemiEllipticalCrack.LargestContourRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the LargestContourRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Location"></a>

### *property* SemiEllipticalCrack.Location *: [Ansys.ACT.Interfaces.Common.ISelectionInfo](../../Interfaces/Common/ISelectionInfo.md#ansys.mechanical.stubs.v271.Ansys.ACT.Interfaces.Common.ISelectionInfo) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Location.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MajorRadius"></a>

### *property* SemiEllipticalCrack.MajorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MajorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MeshContours"></a>

### *property* SemiEllipticalCrack.MeshContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MeshContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.MinorRadius"></a>

### *property* SemiEllipticalCrack.MinorRadius *: [Ansys.Core.Units.Quantity](../../../Core/Units/Quantity.md#ansys.mechanical.stubs.v271.Ansys.Core.Units.Quantity) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the MinorRadius.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Name"></a>

### *property* SemiEllipticalCrack.Name *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Name property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ObjectId"></a>

### *property* SemiEllipticalCrack.ObjectId *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ObjectState"></a>

### *property* SemiEllipticalCrack.ObjectState *: [Ansys.Mechanical.DataModel.Enums.ObjectState](../../../Mechanical/DataModel/Enums/ObjectState.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.ObjectState) | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectState property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ObjectTags"></a>

### *property* SemiEllipticalCrack.ObjectTags *: Iterable[Ansys.Mechanical.DataModel.Interfaces.IObjectTag] | [None](https://docs.python.org/3/builtins/constants.html#None)*

ObjectTags property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Parent"></a>

### *property* SemiEllipticalCrack.Parent *: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Parent property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ProjectToNearestSurface"></a>

### *property* SemiEllipticalCrack.ProjectToNearestSurface *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ProjectToNearestSurface.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Properties"></a>

### *property* SemiEllipticalCrack.Properties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties for this object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ReadOnly"></a>

### *property* SemiEllipticalCrack.ReadOnly *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ReadOnly.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.SolutionContours"></a>

### *property* SemiEllipticalCrack.SolutionContours *: [int](https://docs.python.org/3/builtins/functions.html#int) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the SolutionContours.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.State"></a>

### *property* SemiEllipticalCrack.State *: Ansys.Mechanical.DataModel.Enums.Legacy.State | [None](https://docs.python.org/3/builtins/constants.html#None)*

State property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Suppressed"></a>

### *property* SemiEllipticalCrack.Suppressed *: [bool](https://docs.python.org/3/builtins/functions.html#bool) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Suppressed.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Target1Nodes"></a>

### *property* SemiEllipticalCrack.Target1Nodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the Target1Nodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.TopFaceNodes"></a>

### *property* SemiEllipticalCrack.TopFaceNodes *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the TopFaceNodes.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.TransferableObjectId"></a>

### *property* SemiEllipticalCrack.TransferableObjectId *: [str](https://docs.python.org/3/builtins/stdtypes.html#str) | [None](https://docs.python.org/3/builtins/constants.html#None)*

TransferableObjectId property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.VisibleProperties"></a>

### *property* SemiEllipticalCrack.VisibleProperties *: [tuple](https://docs.python.org/3/builtins/stdtypes.html#tuple)[Ansys.ACT.Automation.Mechanical.Property] | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets the list of properties that are visible for this object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.XScaleFactor"></a>

### *property* SemiEllipticalCrack.XScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the XScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.YScaleFactor"></a>

### *property* SemiEllipticalCrack.YScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the YScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.ZScaleFactor"></a>

### *property* SemiEllipticalCrack.ZScaleFactor *: [float](https://docs.python.org/3/builtins/functions.html#float) | [None](https://docs.python.org/3/builtins/constants.html#None)*

Gets or sets the ZScaleFactor.

<!-- !! processed by numpydoc !! -->

<a id="method-detail"></a>

## Method detail

<a id="SemiEllipticalCrack.Activate"></a>

### SemiEllipticalCrack.Activate() → [None](https://docs.python.org/3/builtins/constants.html#None)

Activate the current object.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddCommandSnippet"></a>

### SemiEllipticalCrack.AddCommandSnippet() → [Ansys.ACT.Automation.Mechanical.CommandSnippet](CommandSnippet.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.CommandSnippet)

Creates a new CommandSnippet

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddComment"></a>

### SemiEllipticalCrack.AddComment() → [Ansys.ACT.Automation.Mechanical.Comment](Comment.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Comment)

Creates a new child Comment.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddFigure"></a>

### SemiEllipticalCrack.AddFigure() → [Ansys.ACT.Automation.Mechanical.Figure](Figure.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Figure)

Creates a new child Figure.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.AddImage"></a>

### SemiEllipticalCrack.AddImage(filePath: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [Ansys.ACT.Automation.Mechanical.Image](Image.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.Image)

```text
Creates a new child Image.
If a filePath is provided, the image will be loaded from that file,
if not, the image will be a screen capture of the Geometry window.
```

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Copy"></a>

### SemiEllipticalCrack.Copy() → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CopyTo"></a>

### SemiEllipticalCrack.CopyTo(other: Ansys.ACT.Automation.Mechanical.DataModelObject) → [None](https://docs.python.org/3/builtins/constants.html#None)

Copies all visible properties from this object to another.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CreateObjRef"></a>

### SemiEllipticalCrack.CreateObjRef(requestedType: [type](https://docs.python.org/3/builtins/functions.html#type)) → System.Runtime.Remoting.ObjRef

CreateObjRef method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.CreateParameter"></a>

### SemiEllipticalCrack.CreateParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Creates a new parameter for a Property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Cut"></a>

### SemiEllipticalCrack.Cut() → [None](https://docs.python.org/3/builtins/constants.html#None)

Cuts the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Delete"></a>

### SemiEllipticalCrack.Delete() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the Delete action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Duplicate"></a>

### SemiEllipticalCrack.Duplicate() → [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)

Creates a copy of the current DataModelObject.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Equals"></a>

### SemiEllipticalCrack.Equals(other: [Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

Equals method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetAPIName"></a>

### SemiEllipticalCrack.GetAPIName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Property name bound to dispId.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetAllProperties"></a>

### SemiEllipticalCrack.GetAllProperties() → List[Ansys.ACT.Automation.Mechanical.AutomationPropertyWrapper]

GetAllProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetChildren"></a>

### SemiEllipticalCrack.GetChildren(recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[ChildrenType]) → List[ChildrenType]

### SemiEllipticalCrack.GetChildren(category: [Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory](../../../Mechanical/DataModel/Enums/DataModelObjectCategory.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Enums.DataModelObjectCategory), recurses: [bool](https://docs.python.org/3/builtins/functions.html#bool), children: List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]) → List[[Ansys.Mechanical.DataModel.Interfaces.IDataModelObject](../../../Mechanical/DataModel/Interfaces/IDataModelObject.md#ansys.mechanical.stubs.v271.Ansys.Mechanical.DataModel.Interfaces.IDataModelObject)]

Gets the list of children, filtered by type.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetDetailsView"></a>

### SemiEllipticalCrack.GetDetailsView() → Ansys.ACT.Automation.Mechanical.DetailsViewData

GetDetailsView method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetEnumName"></a>

### SemiEllipticalCrack.GetEnumName(enumType: [type](https://docs.python.org/3/builtins/functions.html#type), value: [int](https://docs.python.org/3/builtins/functions.html#int), dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

Enum name bound to value

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetHashCode"></a>

### SemiEllipticalCrack.GetHashCode() → [int](https://docs.python.org/3/builtins/functions.html#int)

GetHashCode method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetIconFile"></a>

### SemiEllipticalCrack.GetIconFile() → System.Byte

GetIconFile method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetLifetimeService"></a>

### SemiEllipticalCrack.GetLifetimeService() → Any

GetLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetObjectData"></a>

### SemiEllipticalCrack.GetObjectData(info: System.Runtime.Serialization.SerializationInfo, context: System.Runtime.Serialization.StreamingContext) → [None](https://docs.python.org/3/builtins/constants.html#None)

GetObjectData method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetParameter"></a>

### SemiEllipticalCrack.GetParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Interfaces.Mechanical.IParameter

Gets the parameter corresponding to the given property.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetPath"></a>

### SemiEllipticalCrack.GetPath() → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPath method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetPropertyName"></a>

### SemiEllipticalCrack.GetPropertyName(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [str](https://docs.python.org/3/builtins/stdtypes.html#str)

GetPropertyName method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetPropertyValue"></a>

### SemiEllipticalCrack.GetPropertyValue(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Any

GetPropertyValue method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetVisibleProperties"></a>

### SemiEllipticalCrack.GetVisibleProperties() → List[System.Reflection.PropertyInfo]

GetVisibleProperties method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GetVisiblePropertyNames"></a>

### SemiEllipticalCrack.GetVisiblePropertyNames() → List[[str](https://docs.python.org/3/builtins/stdtypes.html#str)]

GetVisiblePropertyNames method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupAllSimilarChildren"></a>

### SemiEllipticalCrack.GroupAllSimilarChildren() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the GroupAllSimilarChildren action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.GroupSimilarObjects"></a>

### SemiEllipticalCrack.GroupSimilarObjects() → [Ansys.ACT.Automation.Mechanical.TreeGroupingFolder](TreeGroupingFolder.md#ansys.mechanical.stubs.v271.Ansys.ACT.Automation.Mechanical.TreeGroupingFolder)

Run the GroupSimilarObjects action.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.InitializeLifetimeService"></a>

### SemiEllipticalCrack.InitializeLifetimeService() → Any

InitializeLifetimeService method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.IsPropertyEditable"></a>

### SemiEllipticalCrack.IsPropertyEditable(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SemiEllipticalCrack.IsPropertyEditable(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyEditable method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.IsPropertyVisible"></a>

### SemiEllipticalCrack.IsPropertyVisible(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

### SemiEllipticalCrack.IsPropertyVisible(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [bool](https://docs.python.org/3/builtins/functions.html#bool)

IsPropertyVisible method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.Paste"></a>

### SemiEllipticalCrack.Paste() → [None](https://docs.python.org/3/builtins/constants.html#None)

Pastes to the current DataModelObject context.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByAPIName"></a>

### SemiEllipticalCrack.PropertyByAPIName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

```text
Get a property by its API name.
If multiple properties have the same API Name, only the first property with that name will be returned.
```

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyById"></a>

### SemiEllipticalCrack.PropertyById(dispId: [int](https://docs.python.org/3/builtins/functions.html#int)) → Ansys.ACT.Automation.Mechanical.Property

PropertyById method.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.PropertyByName"></a>

### SemiEllipticalCrack.PropertyByName(name: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → Ansys.ACT.Automation.Mechanical.Property

Get a property by its unique name.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.RemoveFromGroup"></a>

### SemiEllipticalCrack.RemoveFromGroup() → [None](https://docs.python.org/3/builtins/constants.html#None)

Run the RemoveFromGroup action. Throws exception if the object is not in a grouping folder.

<!-- !! processed by numpydoc !! -->

<a id="SemiEllipticalCrack.RemoveParameter"></a>

### SemiEllipticalCrack.RemoveParameter(propName: [str](https://docs.python.org/3/builtins/stdtypes.html#str)) → [None](https://docs.python.org/3/builtins/constants.html#None)

Removes the parameter from the parameter set corresponding to the given property.

<!-- !! processed by numpydoc !! -->

