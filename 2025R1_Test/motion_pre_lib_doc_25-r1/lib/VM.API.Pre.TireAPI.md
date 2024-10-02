#  Class TireAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for tire.

```csharp
public static class TireAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TireAPI](VM.API.Pre.TireAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_TireAPI_CreateTire_VM_Managed_DAFUL_SubSystemDocument_System_String_System_String_VM_TMatrix_VM_Managed_DAFUL_Tire_WheelBodyBase_SideType_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateTire\(SubSystemDocument, string, string, TMatrix, SideType, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.Tire.Force.Tire" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[ExistFile(new string[] { "roadFile", "tirePropertyFile" })]
public static Obj CreateTire(this SubSystemDocument subSystemDocument, string roadFile, string tirePropertyFile, TMatrix transform, WheelBodyBase.SideType side = SideType.Left, string name = "", ExpressionValueVariable? cmOffset = null, ExpressionValueVariable? mass = null, ExpressionValueVariable? lxxlyy = null, ExpressionValueVariable? lzz = null, ExpressionValueVariable? wheelCenterOffset = null, ExpressionValueVariable? longitudinalVelocity = null, ExpressionValueVariable? spinVelocity = null, Color? color = null, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a  tire force.

`roadFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The road file of a tire force.

`tirePropertyFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tire property file of a tire force.

`transform` TMatrix

The transform of a tire force.

`side` WheelBodyBase.SideType

The side of a tire force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a leaf spring.

`cmOffset` ExpressionValueVariable?

The CM Offset of a tire force.

`mass` ExpressionValueVariable?

The mass of a tire force.

`lxxlyy` ExpressionValueVariable?

The lxxlyy of a tire force.

`lzz` ExpressionValueVariable?

The lzz of a tire force.

`wheelCenterOffset` ExpressionValueVariable?

The wheel center offset of a tire force.

`longitudinalVelocity` ExpressionValueVariable?

The longitudinal velocity of a tire force.

`spinVelocity` ExpressionValueVariable?

The spin velocity of a tire force.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of a tire force.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Tire.Force.Tire" data-throw-if-not-resolved="false"></xref>.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Tire.Force.Tire" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'roadFile', 'tirePropertyFile' file does not exist.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the extension of 'roadFile' is not 'rdf' or if the extension of 'tirePropertyFile' is not 'tir'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'transform' X, Y, Z is equal to 0.

### <a id="VM_API_Pre_TireAPI_Reload_VM_API_Pre_Obj_System_String_"></a> Reload\(Obj, string\)

Reload.

```csharp
[NotNull(new string[] { "wheelBodyBase" })]
[MatchTypeObj(new object[] { "wheelBodyBase", typeof(WheelBodyBase) })]
public static void Reload(this Obj wheelBodyBase, string strBodyInfo)
```

#### Parameters

`wheelBodyBase` [Obj](VM.API.Pre.Obj.md)

The <xref href="VM.Managed.DAFUL.Tire.WheelBodyBase" data-throw-if-not-resolved="false"></xref> to reload a wheel body info.

`strBodyInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string body information of a wheel.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'wheelBodyBase' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'wheelBodyBase' is not <xref href="VM.Managed.DAFUL.Tire.WheelBodyBase" data-throw-if-not-resolved="false"></xref>.

