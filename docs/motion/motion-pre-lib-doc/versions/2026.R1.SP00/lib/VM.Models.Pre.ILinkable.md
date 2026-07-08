# Interface ILinkable
<a id="VM_Models_Pre_ILinkable"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface ILinkable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Pre_ILinkable_WhenNotifyDestroyed"></a> WhenNotifyDestroyed

```csharp
IObservable<object> WhenNotifyDestroyed { get; }
```

#### Property Value

 IObservable<object\>

### <a id="VM_Models_Pre_ILinkable_WhenRequestReplace"></a> WhenRequestReplace

```csharp
IObservable<object> WhenRequestReplace { get; }
```

#### Property Value

 IObservable<object\>

## Methods

### <a id="VM_Models_Pre_ILinkable_Destroyed_System_Object_"></a> Destroyed\(object\)

```csharp
void Destroyed(object caller)
```

#### Parameters

`caller` object

### <a id="VM_Models_Pre_ILinkable_Initialize"></a> Initialize\(\)

```csharp
void Initialize()
```

### <a id="VM_Models_Pre_ILinkable_RequestReplace_System_Object_"></a> RequestReplace\(object\)

```csharp
void RequestReplace(object newValue)
```

#### Parameters

`newValue` object

