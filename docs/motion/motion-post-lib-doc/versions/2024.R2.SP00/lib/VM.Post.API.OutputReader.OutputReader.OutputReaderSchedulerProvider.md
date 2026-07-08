# Class OutputReader.OutputReaderSchedulerProvider

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

## Constructors

### OutputReaderSchedulerProvider\(\)

```csharp
public OutputReaderSchedulerProvider()
```

## Properties

### CurrentThread

```csharp
public IScheduler CurrentThread { get; }
```

#### Property Value

 IScheduler

### Dispatcher

```csharp
public IScheduler Dispatcher { get; }
```

#### Property Value

 IScheduler

### Immediate

```csharp
public IScheduler Immediate { get; }
```

#### Property Value

 IScheduler

### NewThread

```csharp
public IScheduler NewThread { get; }
```

#### Property Value

 IScheduler

### TaskPool

```csharp
public IScheduler TaskPool { get; }
```

#### Property Value

 IScheduler

### ThreadPool

```csharp
public IScheduler ThreadPool { get; }
```

#### Property Value

 IScheduler


