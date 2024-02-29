# <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl"></a> Class VisualizationComponentImpl

Namespace: [VM.Models.Post.VisualizationImpl](VM.Models.Post.VisualizationImpl.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IVisComponent))]
public class VisualizationComponentImpl : IVisComponent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VisualizationComponentImpl](VM.Models.Post.VisualizationImpl.VisualizationComponentImpl.md)

#### Implements

IVisComponent

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl__ctor"></a> VisualizationComponentImpl\(\)

```csharp
public VisualizationComponentImpl()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl_Masterviewer"></a> Masterviewer

```csharp
public static ViewerWin32 Masterviewer { get; set; }
```

#### Property Value

 ViewerWin32

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl_OpenGLContextGroup"></a> OpenGLContextGroup

```csharp
public static OpenGLContextGroup OpenGLContextGroup { get; set; }
```

#### Property Value

 OpenGLContextGroup

## Methods

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl_Finalize"></a> \~VisualizationComponentImpl\(\)

```csharp
protected ~VisualizationComponentImpl()
```

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl_Initialize_System_Boolean_"></a> Initialize\(bool\)

```csharp
public void Initialize(bool initializeMasterview = true)
```

#### Parameters

`initializeMasterview` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_VisualizationComponentImpl_Release"></a> Release\(\)

```csharp
public void Release()
```

