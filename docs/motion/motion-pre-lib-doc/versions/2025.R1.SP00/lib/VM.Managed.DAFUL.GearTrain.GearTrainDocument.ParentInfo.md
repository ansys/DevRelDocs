#  Class GearTrainDocument.ParentInfo

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Parent Info class

```csharp
public class GearTrainDocument.ParentInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GearTrainDocument.ParentInfo](VM.Managed.DAFUL.GearTrain.GearTrainDocument.ParentInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_GearTrainDocument_ParentInfo__ctor_VM_Managed_DAFUL_GearTrain_IOpenDesignerForGearTrain_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_"></a> ParentInfo\(IOpenDesignerForGearTrain, GeometryInfoBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument.ParentInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ParentInfo(IOpenDesignerForGearTrain open, GeometryInfoBase info)
```

#### Parameters

`open` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The open.

`info` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The information.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_GearTrainDocument_ParentInfo_ExtraInfo"></a> ExtraInfo

Gets or sets the extra information.

```csharp
public GeometryInfoBase ExtraInfo { get; set; }
```

#### Property Value

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

### <a id="VM_Managed_DAFUL_GearTrain_GearTrainDocument_ParentInfo_OpenDesigner"></a> OpenDesigner

Gets or sets the open designer.

```csharp
public IOpenDesignerForGearTrain OpenDesigner { get; set; }
```

#### Property Value

 [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

