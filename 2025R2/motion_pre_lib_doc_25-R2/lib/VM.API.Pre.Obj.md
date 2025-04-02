#  Struct Obj

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct implements Obj.

```csharp
public struct Obj
```

#### Extension Methods

[GroupAPI.ApplyGroup\(Obj, IEnumerable<Obj\>\)](VM.API.Pre.GroupAPI.md\#VM\_API\_Pre\_GroupAPI\_ApplyGroup\_VM\_API\_Pre\_Obj\_System\_Collections\_Generic\_IEnumerable\_VM\_API\_Pre\_Obj\_\_), 
[OperationAPI.ChangeEnableState\(Obj, bool\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_ChangeEnableState\_VM\_API\_Pre\_Obj\_System\_Boolean\_), 
[OperationAPI.ChangeInterface\(Obj, bool\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_ChangeInterface\_VM\_API\_Pre\_Obj\_System\_Boolean\_), 
[SolidBodyAPI.ChangeSolidBodyAnalysisSetting\(Obj, BodyAnalysisType\)](VM.API.Pre.SolidBodyAPI.md\#VM\_API\_Pre\_SolidBodyAPI\_ChangeSolidBodyAnalysisSetting\_VM\_API\_Pre\_Obj\_VM\_Managed\_DAFUL\_BodyAnalysisType\_), 
[OperationAPI.ChangeVisibleState\(Obj, bool\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_ChangeVisibleState\_VM\_API\_Pre\_Obj\_System\_Boolean\_), 
[SolidBodyAPI.CreateMarker\(Obj, TMatrix, string, SymmetricType\)](VM.API.Pre.SolidBodyAPI.md\#VM\_API\_Pre\_SolidBodyAPI\_CreateMarker\_VM\_API\_Pre\_Obj\_VM\_TMatrix\_System\_String\_VM\_Managed\_SymmetricType\_), 
[SolidBodyAPI.CreateMeshFile\(Obj, string, string, bool, bool, bool, string, FacetParameters?\)](VM.API.Pre.SolidBodyAPI.md\#VM\_API\_Pre\_SolidBodyAPI\_CreateMeshFile\_VM\_API\_Pre\_Obj\_System\_String\_System\_String\_System\_Boolean\_System\_Boolean\_System\_Boolean\_System\_String\_System\_Nullable\_VM\_API\_Pre\_FacetParameters\_\_), 
[BodyAPI.CreateMeshFileInPart\(Obj, string, bool, FacetParameters?\)](VM.API.Pre.BodyAPI.md\#VM\_API\_Pre\_BodyAPI\_CreateMeshFileInPart\_VM\_API\_Pre\_Obj\_System\_String\_System\_Boolean\_System\_Nullable\_VM\_API\_Pre\_FacetParameters\_\_), 
[MaterialAPI.CreateSplineForMaterial\(Obj, IEnumerable<SplineData.Point\>\)](VM.API.Pre.MaterialAPI.md\#VM\_API\_Pre\_MaterialAPI\_CreateSplineForMaterial\_VM\_API\_Pre\_Obj\_System\_Collections\_Generic\_IEnumerable\_VM\_Managed\_DAFUL\_SplineData\_Point\_\_), 
[OperationAPI.Delete\(Obj\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_Delete\_VM\_API\_Pre\_Obj\_), 
[OperationAPI.Duplicate\(Obj\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_Duplicate\_VM\_API\_Pre\_Obj\_), 
[OperationAPI.Flip\(Obj\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_Flip\_VM\_API\_Pre\_Obj\_), 
[TireAPI.Reload\(Obj, string\)](VM.API.Pre.TireAPI.md\#VM\_API\_Pre\_TireAPI\_Reload\_VM\_API\_Pre\_Obj\_System\_String\_), 
[OperationAPI.SetTransparency\(Obj, ExpressionValueVariable\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_SetTransparency\_VM\_API\_Pre\_Obj\_VM\_Models\_Pre\_ExpressionValueVariable\_), 
[SolidBodyAPI.UpdateBody\(Obj\)](VM.API.Pre.SolidBodyAPI.md\#VM\_API\_Pre\_SolidBodyAPI\_UpdateBody\_VM\_API\_Pre\_Obj\_), 
[OperationAPI.UpdateCADName\(Obj, string\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_UpdateCADName\_VM\_API\_Pre\_Obj\_System\_String\_), 
[OperationAPI.UpdateName\(Obj, string\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_UpdateName\_VM\_API\_Pre\_Obj\_System\_String\_), 
[OperationAPI.UpdateSymmetric\(Obj, bool\)](VM.API.Pre.OperationAPI.md\#VM\_API\_Pre\_OperationAPI\_UpdateSymmetric\_VM\_API\_Pre\_Obj\_System\_Boolean\_)

## Constructors

### <a id="VM_API_Pre_Obj__ctor_System_String_"></a> Obj\(string\)

Initializes a new instance of the <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Obj(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of object.

### <a id="VM_API_Pre_Obj__ctor_System_String_VM_Models_Pre_IContainer_"></a> Obj\(string, IContainer\)

Initializes a new instance of the <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Obj(string name, IContainer container)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the object.

`container` IContainer

The container of the object.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'name' or 'container' arguments are empty.

### <a id="VM_API_Pre_Obj__ctor_System_UIntPtr_"></a> Obj\(UIntPtr\)

Initializes a new instance of the <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Obj(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key of the object.

### <a id="VM_API_Pre_Obj__ctor_VM_Managed_ObjectBase_ConvertKey_"></a> Obj\(ConvertKey\)

Initializes a new instance of the <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Obj(ObjectBase.ConvertKey key)
```

#### Parameters

`key` ObjectBase.ConvertKey

The key of the object.

## Properties

### <a id="VM_API_Pre_Obj_NullObj"></a> NullObj

The null object.

```csharp
public static Obj NullObj { get; }
```

#### Property Value

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_Obj_Object"></a> Object

The object.

```csharp
public ObjectBase Object { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_API_Pre_Obj_Destroy"></a> Destroy\(\)

Destroy object and remove from document

```csharp
public void Destroy()
```

## Operators

### <a id="VM_API_Pre_Obj_op_Implicit_System_UIntPtr__VM_API_Pre_Obj"></a> implicit operator Obj\(UIntPtr\)

```csharp
public static implicit operator Obj(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_Obj_op_Implicit_VM_Managed_ObjectBase_ConvertKey__VM_API_Pre_Obj"></a> implicit operator Obj\(ConvertKey\)

```csharp
public static implicit operator Obj(ObjectBase.ConvertKey key)
```

#### Parameters

`key` ObjectBase.ConvertKey

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_Obj_op_Implicit_System_String__VM_API_Pre_Obj"></a> implicit operator Obj\(string\)

```csharp
public static implicit operator Obj(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

