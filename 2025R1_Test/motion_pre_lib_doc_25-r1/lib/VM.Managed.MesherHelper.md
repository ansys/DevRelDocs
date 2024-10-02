#  Class MesherHelper

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the mesh helper

```csharp
public class MesherHelper
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MesherHelper](VM.Managed.MesherHelper.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_MesherHelper__ctor_System_String_"></a> MesherHelper\(string\)

Initializes a new instance of the <xref href="VM.Managed.MesherHelper" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MesherHelper(string strMesherPath)
```

#### Parameters

`strMesherPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string mesher path.

## Methods

### <a id="VM_Managed_MesherHelper_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_MesherHelper_Dispose"></a> Dispose\(\)

Finalizes an instance of the <xref href="VM.Managed.MesherHelper" data-throw-if-not-resolved="false"></xref> class.

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_MesherHelper_Finalize"></a> \~MesherHelper\(\)

!s the mesher helper.

```csharp
protected ~MesherHelper()
```

### <a id="VM_Managed_MesherHelper_GetTetraPosAndConn_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_System_UInt32__"></a> GetTetraPosAndConn\(List<VectorBase\>, List<uint\>\)

```csharp
public void GetTetraPosAndConn(List<VectorBase> lstPos, List<uint> lstConty)
```

#### Parameters

`lstPos` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`lstConty` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Managed_MesherHelper_GetTetraPosAndConn_std_vector__VM_VECTOR_std__allocator__VM_VECTOR_____std_vector_unsigned_int_std__allocator_unsigned_int_____"></a> GetTetraPosAndConn\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*\)

```csharp
public void GetTetraPosAndConn(vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* vecPos, vector<unsigned int,std::allocator<unsigned int> >* vecConty)
```

#### Parameters

`vecPos` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`vecConty` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

### <a id="VM_Managed_MesherHelper_MesherExecute_std_basic_string_wchar_t_std__char_traits_wchar_t__std__allocator_wchar_t_____std_vector__VM_VECTOR_std__allocator__VM_VECTOR_____std_vector_unsigned_int_std__allocator_unsigned_int_____System_Boolean_System_Boolean_std_basic_string_wchar_t_std__char_traits_wchar_t__std__allocator_wchar_t_____"></a> MesherExecute\(basic\_string<wchar\_t,std::char\_traits<wchar\_t\>,std::allocator<wchar\_t\> \>\*, vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*, bool, bool, basic\_string<wchar\_t,std::char\_traits<wchar\_t\>,std::allocator<wchar\_t\> \>\*\)

```csharp
public bool MesherExecute(basic_string<wchar_t,std::char_traits<wchar_t>,std::allocator<wchar_t> >* strNasPath, vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* arvPosition, vector<unsigned int,std::allocator<unsigned int> >* arConnectivities, bool bUseSurfRemesh, bool bMesher, basic_string<wchar_t,std::char_traits<wchar_t>,std::allocator<wchar_t> >* strOutputType)
```

#### Parameters

`strNasPath` [basic\_string<wchar\_t,std::char\_traits<wchar\_t\>,std::allocator<wchar\_t\> \>](std.basic\_string<wchar\_t,std.md)\*

`arvPosition` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`arConnectivities` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

`bUseSurfRemesh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bMesher` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`strOutputType` [basic\_string<wchar\_t,std::char\_traits<wchar\_t\>,std::allocator<wchar\_t\> \>](std.basic\_string<wchar\_t,std.md)\*

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_MesherHelper_MesherExecuteCLR_System_String_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_System_UInt32__System_Boolean_System_Boolean_System_String_"></a> MesherExecuteCLR\(string, List<VectorBase\>, List<uint\>, bool, bool, string\)

```csharp
public bool MesherExecuteCLR(string strNasPathCLR, List<VectorBase> lstPosition, List<uint> lstConnectivities, bool bUseSurfRemesh, bool bMesher, string strOutputTypeCLR)
```

#### Parameters

`strNasPathCLR` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstPosition` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`lstConnectivities` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

`bUseSurfRemesh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bMesher` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`strOutputTypeCLR` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_MesherHelper_RunTetraMesher_std_vector__VM_VECTOR_std__allocator__VM_VECTOR_____std_vector_unsigned_int_std__allocator_unsigned_int_____"></a> RunTetraMesher\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*\)

```csharp
public bool RunTetraMesher(vector<_VM_VECTOR,std::allocator<_VM_VECTOR> >* vecPosTria, vector<unsigned int,std::allocator<unsigned int> >* vecConnTria)
```

#### Parameters

`vecPosTria` [vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.vector<\_VM\_VECTOR,std.md)\*

`vecConnTria` [vector<unsigned int,std::allocator<unsigned int\> \>](std.vector<unsigned int,std.md)\*

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_MesherHelper_RunTetraMesherCLR_System_Collections_Generic_List_VM_Managed_VectorBase__System_Collections_Generic_List_System_UInt32__"></a> RunTetraMesherCLR\(List<VectorBase\>, List<uint\>\)

```csharp
public bool RunTetraMesherCLR(List<VectorBase> vecPosTria, List<uint> vecConnTria)
```

#### Parameters

`vecPosTria` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[VectorBase](VM.Managed.VectorBase.md)\>

`vecConnTria` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

