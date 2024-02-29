# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry"></a> Class DataGeometry

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IDataGeometry))]
public class DataGeometry : DataGeometry, IDataGeometry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
DataGeometry ← 
[DataGeometry](VM.Models.Post.VisualizationImpl.UnstructGrid.DataGeometry.md)

#### Implements

IDataGeometry

#### Inherited Members

DataGeometry.getCPtr\(DataGeometry\), 
DataGeometry.Dispose\(\), 
DataGeometry.ToString\(\), 
DataGeometry.part\(uint\), 
DataGeometry.partIndex\(int\), 
DataGeometry.addPart\(DataPart\), 
DataGeometry.removeAllParts\(\), 
DataGeometry.removeEmptyParts\(\), 
DataGeometry.Id, 
DataGeometry.PartCount, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry__ctor"></a> DataGeometry\(\)

```csharp
public DataGeometry()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry_DataPartCount"></a> DataPartCount

```csharp
public uint DataPartCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry_DataParts"></a> DataParts

```csharp
public IList<IDataPart> DataParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IDataPart\>

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry_AddDataPart_VM_Models_Post_IDataPart_"></a> AddDataPart\(IDataPart\)

```csharp
public void AddDataPart(IDataPart datapart)
```

#### Parameters

`datapart` IDataPart

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataGeometry_GetDataPart_System_UInt32_"></a> GetDataPart\(uint\)

```csharp
public IDataPart GetDataPart(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 IDataPart

