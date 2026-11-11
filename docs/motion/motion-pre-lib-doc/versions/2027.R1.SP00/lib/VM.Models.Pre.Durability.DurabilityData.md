# Class DurabilityData
<a id="VM_Models_Pre_Durability_DurabilityData"></a>

Namespace: [VM.Models.Pre.Durability](VM.Models.Pre.Durability.md)  
Assembly: VM.Models.Pre.Durability.dll  

```csharp
public class DurabilityData
```

#### Inheritance

object ← 
[DurabilityData](VM.Models.Pre.Durability.DurabilityData.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_Durability_DurabilityData__ctor_System_String_VM_Models_Pre_Durability_DurabilityData_BodyType_VM_TMatrix_System_UInt32_System_String_System_String_System_String_VM_Models_Pre_Durability_DurabilityData_ConnectorInfo___VM_Models_Pre_Durability_DurabilityData_ContactInfo___System_Boolean_VM_Models_Pre_Durability_DurabilityData_FatigueStressType_System_UInt32_"></a> DurabilityData\(string, BodyType, TMatrix, uint, string, string, string, ConnectorInfo\[\], ContactInfo\[\], bool, FatigueStressType, uint\)

```csharp
public DurabilityData(string strBodyName, DurabilityData.BodyType typeOfBody, TMatrix matCenter, uint nEFLevel, string strFatigueMaterialName, string strDTEntityName, string strPostReaderName, DurabilityData.ConnectorInfo[] connectorInfos, DurabilityData.ContactInfo[] contactInfos, bool bUseFatigue, DurabilityData.FatigueStressType typeOfFatigueStress, uint nDynamicSimulationStep)
```

#### Parameters

`strBodyName` string

`typeOfBody` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[BodyType](VM.Models.Pre.Durability.DurabilityData.BodyType.md)

`matCenter` TMatrix

`nEFLevel` uint

`strFatigueMaterialName` string

`strDTEntityName` string

`strPostReaderName` string

`connectorInfos` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ConnectorInfo](VM.Models.Pre.Durability.DurabilityData.ConnectorInfo.md)\[\]

`contactInfos` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ContactInfo](VM.Models.Pre.Durability.DurabilityData.ContactInfo.md)\[\]

`bUseFatigue` bool

`typeOfFatigueStress` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[FatigueStressType](VM.Models.Pre.Durability.DurabilityData.FatigueStressType.md)

`nDynamicSimulationStep` uint

### <a id="VM_Models_Pre_Durability_DurabilityData__ctor_System_String_VM_TMatrix_System_UInt32_System_String_System_String_System_String_VM_Models_Pre_Durability_DurabilityData_ConnectorInfo___VM_Models_Pre_Durability_DurabilityData_ContactInfo___VM_Models_Pre_Durability_DurabilityData_ContourStressType_System_UInt32_"></a> DurabilityData\(string, TMatrix, uint, string, string, string, ConnectorInfo\[\], ContactInfo\[\], ContourStressType, uint\)

```csharp
public DurabilityData(string strBodyName, TMatrix matCenter, uint nEFLevel, string strFatigueMaterialName, string strDTEntityName, string strPostReaderName, DurabilityData.ConnectorInfo[] connectorInfos, DurabilityData.ContactInfo[] contactInfos, DurabilityData.ContourStressType typeOfStress, uint nDynamicSimulationStep)
```

#### Parameters

`strBodyName` string

`matCenter` TMatrix

`nEFLevel` uint

`strFatigueMaterialName` string

`strDTEntityName` string

`strPostReaderName` string

`connectorInfos` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ConnectorInfo](VM.Models.Pre.Durability.DurabilityData.ConnectorInfo.md)\[\]

`contactInfos` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ContactInfo](VM.Models.Pre.Durability.DurabilityData.ContactInfo.md)\[\]

`typeOfStress` [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ContourStressType](VM.Models.Pre.Durability.DurabilityData.ContourStressType.md)

`nDynamicSimulationStep` uint

## Properties

### <a id="VM_Models_Pre_Durability_DurabilityData_BodyName"></a> BodyName

```csharp
public string BodyName { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Durability_DurabilityData_Center"></a> Center

```csharp
public TMatrix Center { get; set; }
```

#### Property Value

 TMatrix

### <a id="VM_Models_Pre_Durability_DurabilityData_ConnectorInformation"></a> ConnectorInformation

```csharp
public DurabilityData.ConnectorInfo[] ConnectorInformation { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ConnectorInfo](VM.Models.Pre.Durability.DurabilityData.ConnectorInfo.md)\[\]

### <a id="VM_Models_Pre_Durability_DurabilityData_ContactInformation"></a> ContactInformation

```csharp
public DurabilityData.ContactInfo[] ContactInformation { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ContactInfo](VM.Models.Pre.Durability.DurabilityData.ContactInfo.md)\[\]

### <a id="VM_Models_Pre_Durability_DurabilityData_DTEntityName"></a> DTEntityName

```csharp
public string DTEntityName { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Durability_DurabilityData_DynamicSimulationStep"></a> DynamicSimulationStep

```csharp
public uint DynamicSimulationStep { get; set; }
```

#### Property Value

 uint

### <a id="VM_Models_Pre_Durability_DurabilityData_EFLevel"></a> EFLevel

```csharp
public uint EFLevel { get; set; }
```

#### Property Value

 uint

### <a id="VM_Models_Pre_Durability_DurabilityData_FatigueMaterialName"></a> FatigueMaterialName

```csharp
public string FatigueMaterialName { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Durability_DurabilityData_FlankStress"></a> FlankStress

```csharp
public double FlankStress { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Durability_DurabilityData_PostReaderName"></a> PostReaderName

```csharp
public string PostReaderName { get; set; }
```

#### Property Value

 string

### <a id="VM_Models_Pre_Durability_DurabilityData_RootStress"></a> RootStress

```csharp
public double RootStress { get; set; }
```

#### Property Value

 double

### <a id="VM_Models_Pre_Durability_DurabilityData_TypeOfBody"></a> TypeOfBody

```csharp
public DurabilityData.BodyType TypeOfBody { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[BodyType](VM.Models.Pre.Durability.DurabilityData.BodyType.md)

### <a id="VM_Models_Pre_Durability_DurabilityData_TypeOfContourStress"></a> TypeOfContourStress

```csharp
public DurabilityData.ContourStressType TypeOfContourStress { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[ContourStressType](VM.Models.Pre.Durability.DurabilityData.ContourStressType.md)

### <a id="VM_Models_Pre_Durability_DurabilityData_TypeOfDurability"></a> TypeOfDurability

```csharp
public DurabilityData.DurabilityType TypeOfDurability { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[DurabilityType](VM.Models.Pre.Durability.DurabilityData.DurabilityType.md)

### <a id="VM_Models_Pre_Durability_DurabilityData_TypeOfFatigueStress"></a> TypeOfFatigueStress

```csharp
public DurabilityData.FatigueStressType TypeOfFatigueStress { get; set; }
```

#### Property Value

 [DurabilityData](VM.Models.Pre.Durability.DurabilityData.md).[FatigueStressType](VM.Models.Pre.Durability.DurabilityData.FatigueStressType.md)

### <a id="VM_Models_Pre_Durability_DurabilityData_UseFatigue"></a> UseFatigue

```csharp
public bool UseFatigue { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Durability_DurabilityData_UseFlankStress"></a> UseFlankStress

```csharp
public bool UseFlankStress { get; set; }
```

#### Property Value

 bool

### <a id="VM_Models_Pre_Durability_DurabilityData_UseRootStress"></a> UseRootStress

```csharp
public bool UseRootStress { get; set; }
```

#### Property Value

 bool

