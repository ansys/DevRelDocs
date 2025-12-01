# Interface IConnector
<a id="VM_Managed_DAFUL_IConnector"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This interface is to represent the connector object.

```csharp
public interface IConnector : IEntityRelation, IGenerable
```

#### Implements

IEntityRelation, 
IGenerable

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_IConnector_ActionMarker"></a> ActionMarker

Gets or sets the action marker.

```csharp
Marker ActionMarker { get; set; }
```

#### Property Value

 [Marker](VM.Managed.DAFUL.Marker.md)

### <a id="VM_Managed_DAFUL_IConnector_ActionMarkerParent"></a> ActionMarkerParent

Gets the parent connector of action marker.

```csharp
INamed ActionMarkerParent { get; }
```

#### Property Value

 INamed

### <a id="VM_Managed_DAFUL_IConnector_BaseMarker"></a> BaseMarker

Gets or sets the base marker.

```csharp
Marker BaseMarker { get; set; }
```

#### Property Value

 [Marker](VM.Managed.DAFUL.Marker.md)

### <a id="VM_Managed_DAFUL_IConnector_BaseMarkerParent"></a> BaseMarkerParent

Gets the parent connector of base marker.

```csharp
INamed BaseMarkerParent { get; }
```

#### Property Value

 INamed

### <a id="VM_Managed_DAFUL_IConnector_ConnectorReferenceMarker"></a> ConnectorReferenceMarker

Gets or sets the reference marker.

```csharp
IMarker ConnectorReferenceMarker { get; }
```

#### Property Value

 IMarker

### <a id="VM_Managed_DAFUL_IConnector_PreventDuplicatedRBE"></a> PreventDuplicatedRBE

Gets a value whether this instance prevent duplicated RBE.

```csharp
bool PreventDuplicatedRBE { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_IConnector_Property"></a> Property

Gets or sets the property.

```csharp
Property Property { get; set; }
```

#### Property Value

 [Property](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/Property.cs)

