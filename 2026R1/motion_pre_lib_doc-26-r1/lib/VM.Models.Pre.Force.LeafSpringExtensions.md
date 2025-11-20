# Class LeafSpringExtensions
<a id="VM_Models_Pre_Force_LeafSpringExtensions"></a>

Namespace: [VM.Models.Pre.Force](VM.Models.Pre.Force.md)  
Assembly: VM.Models.Pre.Force.dll  

```csharp
public static class LeafSpringExtensions
```

#### Inheritance

object ← 
[LeafSpringExtensions](VM.Models.Pre.Force.LeafSpringExtensions.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetLeafBeamElementPositions_VM_Models_OutputReader_IOutputReader_System_Int32_System_Int32_System_ValueTuple_System_Int32_System_Int32__System_Double_"></a> GetLeafBeamElementPositions\(IOutputReader, int, int, \(int A, int B\), double\)

```csharp
public static Vector[] GetLeafBeamElementPositions(IOutputReader outputReader, int beamProfilesCount, int leafIndex, (int A, int B) loadIndex, double variation)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

`beamProfilesCount` int

`leafIndex` int

`loadIndex` \(int A, int B\)

`variation` double

#### Returns

 Vector\[\]

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetLoadIndex_System_ValueTuple_System_Double_System_Double____System_Double_"></a> GetLoadIndex\(\(double Time, double Force\)\[\], double\)

```csharp
public static (int A, int B) GetLoadIndex((double Time, double Force)[] loadResult, double designLoad)
```

#### Parameters

`loadResult` \(double Time, double Force\)\[\]

`designLoad` double

#### Returns

 \(int A, int B\)

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetLoadResult_VM_Models_OutputReader_IOutputReader_"></a> GetLoadResult\(IOutputReader\)

```csharp
public static (double Time, double Force)[] GetLoadResult(IOutputReader outputReader)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

#### Returns

 \(double Time, double Force\)\[\]

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetLoadVariation_VM_Models_OutputReader_IOutputReader_System_Double_System_ValueTuple_System_Int32_System_Int32__"></a> GetLoadVariation\(IOutputReader, double, \(int A, int B\)\)

```csharp
public static double GetLoadVariation(IOutputReader outputReader, double designLoad, (int A, int B) loadIndex)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

`designLoad` double

`loadIndex` \(int A, int B\)

#### Returns

 double

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetOutputReader_System_String_"></a> GetOutputReader\(string\)

```csharp
public static IOutputReader GetOutputReader(string resultPath)
```

#### Parameters

`resultPath` string

#### Returns

 [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetResult_VM_Models_OutputReader_IOutputReader_System_String_System_String___"></a> GetResult\(IOutputReader, string, params string\[\]\)

```csharp
public static (double Time, double Value)[] GetResult(IOutputReader outputReader, string target, params string[] paths)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

`target` string

`paths` string\[\]

#### Returns

 \(double Time, double Value\)\[\]

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_GetTransformMatrix_VM_Models_OutputReader_IOutputReader_System_String_System_ValueTuple_System_Int32_System_Int32__System_Double_System_Nullable_VM_TMatrix__"></a> GetTransformMatrix\(IOutputReader, string, \(int A, int B\), double, TMatrix?\)

```csharp
public static TMatrix GetTransformMatrix(IOutputReader outputReader, string targetName, (int A, int B) loadIndex, double variation, TMatrix? repositionMatrix = null)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

`targetName` string

`loadIndex` \(int A, int B\)

`variation` double

`repositionMatrix` TMatrix?

#### Returns

 TMatrix

### <a id="VM_Models_Pre_Force_LeafSpringExtensions_IsTestSimulationCompleted_VM_Models_OutputReader_IOutputReader_System_Double_"></a> IsTestSimulationCompleted\(IOutputReader, double\)

```csharp
public static bool IsTestSimulationCompleted(IOutputReader outputReader, double endTime)
```

#### Parameters

`outputReader` [IOutputReader](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VM.Models.OutputReader/Interfaces/IOutputReader.cs)

`endTime` double

#### Returns

 bool

