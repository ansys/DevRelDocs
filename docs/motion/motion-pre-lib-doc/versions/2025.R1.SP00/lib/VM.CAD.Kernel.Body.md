#  Class Body

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public sealed class Body : Entity, IHasID, IFacetable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Entity](VM.CAD.Kernel.Entity.md) ← 
[Body](VM.CAD.Kernel.Body.md)

#### Implements

IHasID, 
[IFacetable](VM.CAD.Kernel.IFacetable.md)

#### Inherited Members

[Entity.PID](VM.CAD.Kernel.Entity.md\#VM\_CAD\_Kernel\_Entity\_PID), 
[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[IFacetableExtension.SetGeometryOption\(IFacetable, string, string, double\)](VM.CAD.Kernel.IFacetableExtension.md\#VM\_CAD\_Kernel\_IFacetableExtension\_SetGeometryOption\_VM\_CAD\_Kernel\_IFacetable\_System\_String\_System\_String\_System\_Double\_)

## Constructors

### <a id="VM_CAD_Kernel_Body__ctor_System_UIntPtr_"></a> Body\(UIntPtr\)

```csharp
public Body(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_CAD_Kernel_Body_ClearFacetDictionary"></a> ClearFacetDictionary\(\)

```csharp
public void ClearFacetDictionary()
```

### <a id="VM_CAD_Kernel_Body_GetEdgeKernelProxy_VM_Identifier_System_UIntPtr__"></a> GetEdgeKernelProxy\(Identifier, out UIntPtr\)

```csharp
public void GetEdgeKernelProxy(Identifier pid, out UIntPtr edgeProxy)
```

#### Parameters

`pid` Identifier

`edgeProxy` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_CAD_Kernel_Body_GetFaceKernelProxy_VM_Identifier_System_UIntPtr__"></a> GetFaceKernelProxy\(Identifier, out UIntPtr\)

```csharp
public void GetFaceKernelProxy(Identifier nPID, out UIntPtr faceProxy)
```

#### Parameters

`nPID` Identifier

`faceProxy` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### <a id="VM_CAD_Kernel_Body_GetGeomInfo_System_Double_VM_Vector____System_UInt32____System_Boolean_"></a> GetGeomInfo\(double, out Vector\[\], out uint\[\], bool\)

```csharp
public bool GetGeomInfo(double lengthFactor, out Vector[] position, out uint[] connectivities, bool bCreateFacetDictionary)
```

#### Parameters

`lengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`position` Vector\[\]

`connectivities` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`bCreateFacetDictionary` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_CAD_Kernel_Body_GetVoidCount"></a> GetVoidCount\(\)

```csharp
public uint GetVoidCount()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_CAD_Kernel_Body_GetVoidPoints_System_Double_System_UInt32__"></a> GetVoidPoints\(double, out uint\)

```csharp
public Vector[] GetVoidPoints(double offset, out uint countFailed)
```

#### Parameters

`offset` [double](https://learn.microsoft.com/dotnet/api/system.double)

`countFailed` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 Vector\[\]

### <a id="VM_CAD_Kernel_Body_HasDefect_System_Action_System_String__System_Boolean_"></a> HasDefect\(Action<string\>, bool\)

```csharp
public int HasDefect(Action<string> actWriteMessage, bool bDetailedInformation = false)
```

#### Parameters

`actWriteMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`bDetailedInformation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_CAD_Kernel_Body_RemoveUnusedPoints_VM_Vector___System_UInt32___"></a> RemoveUnusedPoints\(Vector\[\], uint\[\]\)

```csharp
public void RemoveUnusedPoints(Vector[] aryPosTria, uint[] aryConTria)
```

#### Parameters

`aryPosTria` Vector\[\]

`aryConTria` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_CAD_Kernel_Body_Repair_VM_CAD_Kernel_SimplifyOption_VM_CAD_Kernel_SimplifyOption_System_Double_System_Action_System_String__System_Boolean_"></a> Repair\(SimplifyOption, SimplifyOption, double, Action<string\>, bool\)

```csharp
public int Repair(SimplifyOption simplifySurface = SimplifyOption.ForceSimplify, SimplifyOption simplifyCurve = SimplifyOption.ForceSimplify, double dDesiredGap = -1, Action<string> actWriteMessage = null, bool bDetailedInformation = false)
```

#### Parameters

`simplifySurface` [SimplifyOption](VM.CAD.Kernel.SimplifyOption.md)

`simplifyCurve` [SimplifyOption](VM.CAD.Kernel.SimplifyOption.md)

`dDesiredGap` [double](https://learn.microsoft.com/dotnet/api/system.double)

`actWriteMessage` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

`bDetailedInformation` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_CAD_Kernel_Body_UpdateDisplay"></a> UpdateDisplay\(\)

```csharp
public void UpdateDisplay()
```

