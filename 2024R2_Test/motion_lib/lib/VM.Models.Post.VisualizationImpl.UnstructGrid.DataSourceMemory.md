# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataSourceMemory"></a> Class DataSourceMemory

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class DataSourceMemory : DataSourceMemory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
DataSource ← 
DataSourceMemory ← 
[DataSourceMemory](VM.Models.Post.VisualizationImpl.UnstructGrid.DataSourceMemory.md)

#### Inherited Members

DataSourceMemory.getCPtr\(DataSourceMemory\), 
DataSourceMemory.Dispose\(\), 
DataSourceMemory.ToString\(\), 
DataSourceMemory.updateDerivedResult\(ResultType, int\), 
DataSourceMemory.updateAllDerivedResults\(\), 
DataSourceMemory.addState\(DataState\), 
DataSourceMemory.removeAllStates\(\), 
DataSourceMemory.updateDirectoryFromStates\(\), 
DataSourceMemory.castFromBaseClass\(DataSource\), 
DataSource.getCPtr\(DataSource\), 
DataSource.Dispose\(\), 
DataSource.ToString\(\), 
DataSource.stateIndex\(int\), 
DataSource.state\(uint\), 
DataSource.currentState\(UnstructGridModel\), 
DataSource.directory\(\), 
DataSource.elementSet\(uint\), 
DataSource.elementSetCount\(\), 
DataSource.elementSetIndex\(int\), 
DataSource.addElementSet\(DataElementSet\), 
DataSource.removeElementSet\(DataElementSet\), 
DataSource.removeAllElementSets\(\), 
DataSource.isDataSourceValid\(Str\), 
DataSource.computeCustomResults\(int, DataStateSpec\), 
DataSource.Id, 
DataSource.StateCount, 
DataSource.GeometryCountPerState, 
DataSource.DefaultDispacementResultId, 
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

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataSourceMemory__ctor_System_Int32_System_UInt32_"></a> DataSourceMemory\(int, uint\)

```csharp
public DataSourceMemory(int dataSourceId, uint geometryCountPerState)
```

#### Parameters

`dataSourceId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`geometryCountPerState` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

