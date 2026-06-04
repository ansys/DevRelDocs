# Interface IUpdatableSet<T>

Namespace: [Phoenix.PaczAPI](Phoenix.PaczAPI.md)  
Assembly: Phoenix.PaczAPI.dll

Represents a set whose items will be updated by an add if the item already exist based on the comparator.
This allows types that use only part of their contents in their comparator to be updated by calling the add methods.

```csharp
public interface IUpdatableSet<T> : ISet<T>, ICollection<T>, IEnumerable<T>, IEnumerable

```

#### Type Parameters

`T`

The type of elements in the set.

#### Implements

[ISet<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.iset-1),
[ICollection<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1),
[IEnumerable<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1),
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)
