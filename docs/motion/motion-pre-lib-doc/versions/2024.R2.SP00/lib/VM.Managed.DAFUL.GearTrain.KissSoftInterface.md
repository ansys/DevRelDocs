# Class KissSoftInterface

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Kiss Soft Interface

```csharp
public class KissSoftInterface
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### KissSoftInterface\(\)

```csharp
public KissSoftInterface()
```

## Properties

### OutputDataForBuild

Gets or sets the output data for build.

```csharp
public static KissSoftInterface.OutputData OutputDataForBuild { get; set; }
```

#### Property Value

 [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[OutputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.OutputData.md)

## Methods

### ExecuteKissSoftInterface\(IDocument, InputData, bool, ref OutputData\)

Execute KissSoft interface

```csharp
public static bool ExecuteKissSoftInterface(IDocument doc, KissSoftInterface.InputData inputData, bool bIsInternal, ref KissSoftInterface.OutputData outputData)
```

#### Parameters

`doc` IDocument

The document

`inputData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[InputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.InputData.md)

The input data

`bIsInternal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The internal flag

`outputData` [KissSoftInterface](VM.Managed.DAFUL.GearTrain.KissSoftInterface.md).[OutputData](VM.Managed.DAFUL.GearTrain.KissSoftInterface.OutputData.md)

The output data

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


