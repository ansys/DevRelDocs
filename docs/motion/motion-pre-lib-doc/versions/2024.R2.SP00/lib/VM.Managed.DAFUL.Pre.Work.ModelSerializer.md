# Class Work.ModelSerializer

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to serializer for Model.

```csharp
public class Work.ModelSerializer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Work.ModelSerializer](VM.Managed.DAFUL.Pre.Work.ModelSerializer.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ModelSerializer\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work.ModelSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModelSerializer()
```

### ModelSerializer\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.Work.ModelSerializer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModelSerializer(string strModelPath)
```

#### Parameters

`strModelPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative path of model.

## Properties

### Path

Gets or sets the path.

```csharp
public string Path { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### implicit operator Model\(ModelSerializer\)

Performs an implicit conversion from <xref href="VM.Managed.DAFUL.Pre.Work.ModelSerializer" data-throw-if-not-resolved="false"></xref> to <xref href="VM.Managed.DAFUL.Pre.Model" data-throw-if-not-resolved="false"></xref>.
Open the model file in work.

```csharp
public static implicit operator Model(Work.ModelSerializer ser)
```

#### Parameters

`ser` [Work](VM.Managed.DAFUL.Pre.Work.md).[ModelSerializer](VM.Managed.DAFUL.Pre.Work.ModelSerializer.md)

The ModelSerializer.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

The result of the conversion.

### implicit operator ModelSerializer\(Model\)

Performs an implicit conversion from <xref href="VM.Managed.DAFUL.Pre.Model" data-throw-if-not-resolved="false"></xref> to <xref href="VM.Managed.DAFUL.Pre.Work.ModelSerializer" data-throw-if-not-resolved="false"></xref>.

```csharp
public static implicit operator Work.ModelSerializer(Model model)
```

#### Parameters

`model` [Model](VM.Managed.DAFUL.Pre.Model.md)

The model.

#### Returns

 [Work](VM.Managed.DAFUL.Pre.Work.md).[ModelSerializer](VM.Managed.DAFUL.Pre.Work.ModelSerializer.md)

The result of the conversion.


