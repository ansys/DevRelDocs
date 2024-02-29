# <a id="VM_Models_Post_ObservableExtension"></a> Class ObservableExtension

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class ObservableExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableExtension](VM.Models.Post.ObservableExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_ObservableExtension_AutoRefreshOnObservableWithThread__3_System_IObservable_DynamicData_IChangeSet___0___1___System_Func___0_System_IObservable___2___"></a> AutoRefreshOnObservableWithThread<TObject, TKey, TAny\>\(IObservable<IChangeSet<TObject, TKey\>\>, Func<TObject, IObservable<TAny\>\>\)

```csharp
public static IObservable<IChangeSet<TObject, TKey>> AutoRefreshOnObservableWithThread<TObject, TKey, TAny>(this IObservable<IChangeSet<TObject, TKey>> source, Func<TObject, IObservable<TAny>> reevaluator)
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

`reevaluator` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TObject, [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<TAny\>\>

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

#### Type Parameters

`TObject` 

`TKey` 

`TAny` 

### <a id="VM_Models_Post_ObservableExtension_AutoRefreshWithThread__3_System_IObservable_DynamicData_IChangeSet___0___1___System_Linq_Expressions_Expression_System_Func___0___2___System_Nullable_System_TimeSpan__"></a> AutoRefreshWithThread<TObject, TKey, TProperty\>\(IObservable<IChangeSet<TObject, TKey\>\>, Expression<Func<TObject, TProperty\>\>, TimeSpan?\)

```csharp
public static IObservable<IChangeSet<TObject, TKey>> AutoRefreshWithThread<TObject, TKey, TProperty>(this IObservable<IChangeSet<TObject, TKey>> source, Expression<Func<TObject, TProperty>> propertyAccessor, TimeSpan? changeSetBuffer = null) where TObject : INotifyPropertyChanged where TKey : notnull
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

`propertyAccessor` [Expression](https://learn.microsoft.com/dotnet/api/system.linq.expressions.expression\-1)<[Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TObject, TProperty\>\>

`changeSetBuffer` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)?

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

#### Type Parameters

`TObject` 

`TKey` 

`TProperty` 

### <a id="VM_Models_Post_ObservableExtension_BatchIfWithThread__2_System_IObservable_DynamicData_IChangeSet___0___1___System_IObservable_System_Boolean__"></a> BatchIfWithThread<TObject, TKey\>\(IObservable<IChangeSet<TObject, TKey\>\>, IObservable<bool\>\)

```csharp
public static IObservable<IChangeSet<TObject, TKey>> BatchIfWithThread<TObject, TKey>(this IObservable<IChangeSet<TObject, TKey>> source, IObservable<bool> pauseIfTrueSelector) where TObject : notnull where TKey : notnull
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

`pauseIfTrueSelector` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

#### Type Parameters

`TObject` 

`TKey` 

### <a id="VM_Models_Post_ObservableExtension_DistinctUntilChanged__1_System_IObservable___0__System_TimeSpan_System_Reactive_Concurrency_IScheduler_"></a> DistinctUntilChanged<T\>\(IObservable<T\>, TimeSpan, IScheduler\)

```csharp
public static IObservable<T> DistinctUntilChanged<T>(this IObservable<T> source, TimeSpan duration, IScheduler scheduler = null)
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<T\>

`duration` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

`scheduler` IScheduler

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<T\>

#### Type Parameters

`T` 

### <a id="VM_Models_Post_ObservableExtension_FilterWithParallel__2_System_IObservable_DynamicData_IChangeSet___0___1___System_Func___0_System_Boolean__"></a> FilterWithParallel<TObject, TKey\>\(IObservable<IChangeSet<TObject, TKey\>\>, Func<TObject, bool\>\)

```csharp
public static IObservable<IChangeSet<TObject, TKey>> FilterWithParallel<TObject, TKey>(this IObservable<IChangeSet<TObject, TKey>> source, Func<TObject, bool> filter) where TObject : notnull where TKey : notnull
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

`filter` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TObject, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TObject, TKey\>\>

#### Type Parameters

`TObject` 

`TKey` 

### <a id="VM_Models_Post_ObservableExtension_ThrottleWithDefaultTime__1_System_IObservable___0__"></a> ThrottleWithDefaultTime<TSource\>\(IObservable<TSource\>\)

```csharp
public static IObservable<TSource> ThrottleWithDefaultTime<TSource>(this IObservable<TSource> source)
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<TSource\>

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<TSource\>

#### Type Parameters

`TSource` 

### <a id="VM_Models_Post_ObservableExtension_TransformWithParallel__3_System_IObservable_DynamicData_IChangeSet___1___2___System_Func___1___0__"></a> TransformWithParallel<TDestination, TSource, TKey\>\(IObservable<IChangeSet<TSource, TKey\>\>, Func<TSource, TDestination\>\)

```csharp
public static IObservable<IChangeSet<TDestination, TKey>> TransformWithParallel<TDestination, TSource, TKey>(this IObservable<IChangeSet<TSource, TKey>> source, Func<TSource, TDestination> transformFactory) where TDestination : notnull where TSource : notnull where TKey : notnull
```

#### Parameters

`source` [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TSource, TKey\>\>

`transformFactory` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TSource, TDestination\>

#### Returns

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<IChangeSet<TDestination, TKey\>\>

#### Type Parameters

`TDestination` 

`TSource` 

`TKey` 

