# Interface IStatusBar
<a id="VM_Managed_DAFUL_Pre_IStatusBar"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This interface is to represent the status bar.

```csharp
public interface IStatusBar
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Pre_IStatusBar_SetValue_System_String_"></a> SetValue\(string\)

Sets the value.

```csharp
void SetValue(string strStatus)
```

#### Parameters

`strStatus` string

The status.

### <a id="VM_Managed_DAFUL_Pre_IStatusBar_SetValue_System_String_System_Boolean_"></a> SetValue\(string, bool\)

Sets the value.

```csharp
void SetValue(string strStatus, bool bLazy)
```

#### Parameters

`strStatus` string

The status.

`bLazy` bool

if set to <code>true</code> [lazy].

