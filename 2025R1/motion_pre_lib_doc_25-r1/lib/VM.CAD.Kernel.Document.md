#  Class Document

Namespace: [VM.CAD.Kernel](VM.CAD.Kernel.md)  
Assembly: VM.CAD.Kernel.dll  

```csharp
public class Document : KernelObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KernelObject](VM.CAD.Kernel.KernelObject.md) ← 
[Document](VM.CAD.Kernel.Document.md)

#### Inherited Members

[KernelObject.VMK\_ARGUMENT\_NULL](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_ARGUMENT\_NULL), 
[KernelObject.VMK\_ARGUMENT\_TYPE](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_ARGUMENT\_TYPE), 
[KernelObject.VMK\_OK](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_VMK\_OK), 
[KernelObject.Dispose\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Dispose), 
[KernelObject.Execute\(Func<int\>\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Execute\_System\_Func\_System\_Int32\_\_), 
[KernelObject.GetFrom<TResult\>\(KernelObject.delGetFrom<TResult\>, bool\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_GetFrom\_\_1\_VM\_CAD\_Kernel\_KernelObject\_delGetFrom\_\_\_0\_\_System\_Boolean\_), 
[KernelObject.DisposeManagedResource\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_DisposeManagedResource), 
[KernelObject.DisposeUnmanagedResource\(\)](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_DisposeUnmanagedResource), 
[KernelObject.Key](VM.CAD.Kernel.KernelObject.md\#VM\_CAD\_Kernel\_KernelObject\_Key)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Kernel_Document__ctor_System_UIntPtr_"></a> Document\(UIntPtr\)

```csharp
public Document(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Properties

### <a id="VM_CAD_Kernel_Document_GeometryID"></a> GeometryID

```csharp
public Identifier GeometryID { get; set; }
```

#### Property Value

 Identifier

## Methods

### <a id="VM_CAD_Kernel_Document_DisplayTmpDirection_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> DisplayTmpDirection\(double, double, double, double, double, double, double\)

```csharp
public void DisplayTmpDirection(double dFromX, double dFromY, double dFromZ, double dToX, double dToY, double dToZ, double dIconSize)
```

#### Parameters

`dFromX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dFromY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dFromZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dToX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dToY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dToZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Kernel_Document_DisplayTmpOrientation_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> DisplayTmpOrientation\(double, double, double, double, double, double, double, double, double, double\)

```csharp
public void DisplayTmpOrientation(double dOriginX, double dOriginY, double dOriginZ, double dZPointX, double dZPointY, double dZPointZ, double dXPointX, double dXPointY, double dXPointZ, double dIconSize)
```

#### Parameters

`dOriginX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOriginY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOriginZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Kernel_Document_DisplayTmpTransform_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> DisplayTmpTransform\(double, double, double, double, double, double, double, double, double, double\)

```csharp
public void DisplayTmpTransform(double dOriginX, double dOriginY, double dOriginZ, double dZPointX, double dZPointY, double dZPointZ, double dXPointX, double dXPointY, double dXPointZ, double dIconSize)
```

#### Parameters

`dOriginX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOriginY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOriginZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dZPointZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointX` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointY` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dXPointZ` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

