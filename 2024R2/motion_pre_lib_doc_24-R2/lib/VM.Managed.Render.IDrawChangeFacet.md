# Interface IDrawChangeFacet

Namespace: [VM.Managed.Render](VM.Managed.Render.md)  
Assembly: VMAppCore.dll  

This interface is to represent the draw change facet.

```csharp
public interface IDrawChangeFacet
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### Drawble\(ObjectBase\)

Drawble.

```csharp
bool Drawble(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The target object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance is drawable; otherwise, <code>false</code>.

### ReDrawChangeFacet\(\)

Redraw change facet.

```csharp
void ReDrawChangeFacet()
```


