# <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider"></a> Class OutputReader.OutputReaderSchedulerProvider

Namespace: [VM.Post.API.OutputReader](VM.Post.API.OutputReader.md)  
Assembly: VM.Post.API.OutputReader.dll  

```csharp
public sealed class OutputReader.OutputReaderSchedulerProvider : ISchedulerProvider
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OutputReader.OutputReaderSchedulerProvider](VM.Post.API.OutputReader.OutputReader.OutputReaderSchedulerProvider.md)

#### Implements

ISchedulerProvider

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider__ctor"></a> OutputReaderSchedulerProvider\(\)

```csharp
public OutputReaderSchedulerProvider()
```

## Properties

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_CurrentThread"></a> CurrentThread

```csharp
public IScheduler CurrentThread { get; }
```

#### Property Value

 IScheduler

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_Dispatcher"></a> Dispatcher

```csharp
public IScheduler Dispatcher { get; }
```

#### Property Value

 IScheduler

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_Immediate"></a> Immediate

```csharp
public IScheduler Immediate { get; }
```

#### Property Value

 IScheduler

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_NewThread"></a> NewThread

```csharp
public IScheduler NewThread { get; }
```

#### Property Value

 IScheduler

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_TaskPool"></a> TaskPool

```csharp
public IScheduler TaskPool { get; }
```

#### Property Value

 IScheduler

### <a id="VM_Post_API_OutputReader_OutputReader_OutputReaderSchedulerProvider_ThreadPool"></a> ThreadPool

```csharp
public IScheduler ThreadPool { get; }
```

#### Property Value

 IScheduler

