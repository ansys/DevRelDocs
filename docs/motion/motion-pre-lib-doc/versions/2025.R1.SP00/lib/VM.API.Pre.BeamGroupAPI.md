#  Class BeamGroupAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for beam group.

```csharp
public static class BeamGroupAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BeamGroupAPI](VM.API.Pre.BeamGroupAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Vector_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, Vector, Vector, Vector, string, CrossSectionType, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[NotZeroMagnitude(new string[] { "directionY" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, Vector startPoint, Vector endPoint, Vector directionY, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`startPoint` Vector

The start point of a beam group.

`endPoint` Vector

The end point of a beam group.

`directionY` Vector

The Y-direction of a beam group.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a beam group.

`crossSection` CrossSectionType

The cross section of a beam group.

`crossSectionValueInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The cross section value info of a beam group.

`noOfElement` ExpressionValueVariable?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'directionY' is 0 and if the type of 'material' is not 'ISO'.

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_Vector__VM_Vector_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, IEnumerable<Vector\>, Vector, string, CrossSectionType, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "positions" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[NotZeroMagnitude(new string[] { "directionY" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, IEnumerable<Vector> positions, Vector directionY, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`positions` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Vector\>

The positions of a beam group.

`directionY` Vector

The Y-direction of a beam group.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a beam group.

`crossSection` CrossSectionType

The cross section of a beam group.

`crossSectionValueInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The cross section value info of a beam group.

`noOfElement` ExpressionValueVariable?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'directionY' is 0 and if the type of 'material' is not ISO.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the num of 'positions' is less than 2.

### <a id="VM_API_Pre_BeamGroupAPI_CreateBeamGroup_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_VM_Managed_DAFUL_Beam_CrossSectionType_VM_Vector_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateBeamGroup\(SubSystemDocument, string, string, CrossSectionType, Vector, IEnumerable<ExpressionValueVariable\>, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateBeamGroup(this SubSystemDocument subSystemDocument, string filePath, string name = "", CrossSectionType crossSection = CrossSectionType.CIRCULAR, Vector yDirection = default, IEnumerable<ExpressionValueVariable> crossSectionValueInfo = null, ExpressionValueVariable? noOfElement = null, Obj? material = null, Color? color = null)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a beam group.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path of a beam group.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a beam group.

`crossSection` CrossSectionType

The cross section of a beam group.

`yDirection` Vector

The Y Direction.

`crossSectionValueInfo` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ExpressionValueVariable\>

The cross section value info of a beam group.

`noOfElement` ExpressionValueVariable?

The num of element of a beam group.

`material` [Obj](VM.API.Pre.Obj.md)?

The material of a beam group.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of a beam group.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Beam.BeamGroup" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'material' is not 'ISO'.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'filePath' file is not exist.

