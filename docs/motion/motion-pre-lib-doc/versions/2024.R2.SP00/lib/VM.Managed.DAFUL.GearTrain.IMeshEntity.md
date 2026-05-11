# Interface IMeshEntity

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Mesh Entity interface

```csharp
public interface IMeshEntity
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### Body

Gets or sets the body.

```csharp
InstanceContainer Body { get; set; }
```

#### Property Value

 InstanceContainer

### PropertyOfEntity

Gets the property of entity.

```csharp
Property PropertyOfEntity { get; }
```

#### Property Value

 Property

### Transformation

Gets or sets the transformation.

```csharp
TransformBase Transformation { get; set; }
```

#### Property Value

 TransformBase

### TypeOfCreate

Gets the type of create.

```csharp
CreateType TypeOfCreate { get; }
```

#### Property Value

 [CreateType](VM.Managed.DAFUL.GearTrain.CreateType.md)


