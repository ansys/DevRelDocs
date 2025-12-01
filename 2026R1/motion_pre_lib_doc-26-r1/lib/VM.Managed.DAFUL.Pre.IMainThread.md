# Interface IMainThread
<a id="VM_Managed_DAFUL_Pre_IMainThread"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent main thread

```csharp
public interface IMainThread
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Managed_DAFUL_Pre_IMainThread_InvokeRequired"></a> InvokeRequired

Gets the invoke required status

```csharp
bool InvokeRequired { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_Pre_IMainThread_InvokeMainThread_System_Action_"></a> InvokeMainThread\(Action\)

Invoke <xref href="System.Action" data-throw-if-not-resolved="false"></xref> to the main <xref href="System.Threading.Thread" data-throw-if-not-resolved="false"></xref>

```csharp
void InvokeMainThread(Action action)
```

#### Parameters

`action` Action

The <xref href="System.Action" data-throw-if-not-resolved="false"></xref> to invoke.

