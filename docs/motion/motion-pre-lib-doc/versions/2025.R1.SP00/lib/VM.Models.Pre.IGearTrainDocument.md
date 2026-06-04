#  Interface IGearTrainDocument

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

The gear train document interface

```csharp
public interface IGearTrainDocument : ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner
```

#### Implements

[ISubSystemDocument](VM.Models.Pre.ISubSystemDocument.md), 
[IDocumentAnalysis](VM.Models.Pre.IDocumentAnalysis.md), 
[IDocument3D](VM.Models.Pre.IDocument3D.md), 
[IHandledDocument](VM.Models.Pre.IHandledDocument.md), 
[IDocument](VM.Models.Pre.IDocument.md), 
[IObject](VM.Models.Pre.IObject.md), 
[IEventProvider](VM.Models.Pre.IEventProvider.md), 
[IContainer](VM.Models.Pre.IContainer.md), 
[ILinkContainer](VM.Models.Pre.ILinkContainer.md), 
[IOwned](VM.Models.Pre.IOwned.md), 
IHasID, 
[IDocumentOwner](VM.Models.Pre.IDocumentOwner.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[IDocumentExtensions.IsExistNameInDocument\(IDocument, string\)](VM.Models.Pre.IDocumentExtensions.md\#VM\_Models\_Pre\_IDocumentExtensions\_IsExistNameInDocument\_VM\_Models\_Pre\_IDocument\_System\_String\_)

## Properties

### <a id="VM_Models_Pre_IGearTrainDocument_VehicleSimulationDataSet"></a> VehicleSimulationDataSet

Vehicle Simulation DataSet

```csharp
string VehicleSimulationDataSet { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Pre_IGearTrainDocument_VehicleSimulatorProcessId"></a> VehicleSimulatorProcessId

Vehicle simulator process id

```csharp
int VehicleSimulatorProcessId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

