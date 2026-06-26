# Class UpdatableSortedSet<T>

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

Represents a collection of objects that is maintained in sorted order.
Adding an item whose sort order matches an item already in the set will replace the existing item.

```csharp
public class UpdatableSortedSet<T> : IUpdatableSet<T>, ISet<T>, ICollection<T>, IEnumerable<T>, IEnumerable

```

#### Type Parameters

`T`

The type of elements in the set.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ←
[UpdatableSortedSet<T>](Phoenix.Pacz.UpdatableSortedSet-1.md)

#### Implements

[IUpdatableSet<T>](Phoenix.PaczAPI.IUpdatableSet-1.md),
[ISet<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.iset-1),
[ICollection<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1),
[IEnumerable<T>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1),
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)),
[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)),
[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode),
[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype),
[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone),
[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals),
[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

[UpdatableSortedSet()](Phoenix.Pacz.UpdatableSortedSet-1.-ctor.md#Phoenix_Pacz_UpdatableSortedSet_1__ctor)

Constructor

[UpdatableSortedSet(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.-ctor.md#Phoenix_Pacz_UpdatableSortedSet_1__ctor_System_Collections_Generic_IEnumerable__0__)

Constructor

## Properties

[Count](Phoenix.Pacz.UpdatableSortedSet-1.Count.md#Phoenix_Pacz_UpdatableSortedSet_1_Count)

[IsReadOnly](Phoenix.Pacz.UpdatableSortedSet-1.IsReadOnly.md#Phoenix_Pacz_UpdatableSortedSet_1_IsReadOnly)

## Methods

[Add(T)](Phoenix.Pacz.UpdatableSortedSet-1.Add.md#Phoenix_Pacz_UpdatableSortedSet_1_Add__0_)

Adds an element to the set and returns a value that indicates if it was successfully added.
If an item whose Comparator matches already exist in the set, that item will be removed and the new one added.

[Clear()](Phoenix.Pacz.UpdatableSortedSet-1.Clear.md#Phoenix_Pacz_UpdatableSortedSet_1_Clear)

[Contains(T)](Phoenix.Pacz.UpdatableSortedSet-1.Contains.md#Phoenix_Pacz_UpdatableSortedSet_1_Contains__0_)

[CopyTo(T[], int)](Phoenix.Pacz.UpdatableSortedSet-1.CopyTo.md#Phoenix_Pacz_UpdatableSortedSet_1_CopyTo__0___System_Int32_)

[ExceptWith(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.ExceptWith.md#Phoenix_Pacz_UpdatableSortedSet_1_ExceptWith_System_Collections_Generic_IEnumerable__0__)

[GetEnumerator()](Phoenix.Pacz.UpdatableSortedSet-1.GetEnumerator.md#Phoenix_Pacz_UpdatableSortedSet_1_GetEnumerator)

[IntersectWith(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.IntersectWith.md#Phoenix_Pacz_UpdatableSortedSet_1_IntersectWith_System_Collections_Generic_IEnumerable__0__)

[IsProperSubsetOf(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.IsProperSubsetOf.md#Phoenix_Pacz_UpdatableSortedSet_1_IsProperSubsetOf_System_Collections_Generic_IEnumerable__0__)

[IsProperSupersetOf(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.IsProperSupersetOf.md#Phoenix_Pacz_UpdatableSortedSet_1_IsProperSupersetOf_System_Collections_Generic_IEnumerable__0__)

[IsSubsetOf(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.IsSubsetOf.md#Phoenix_Pacz_UpdatableSortedSet_1_IsSubsetOf_System_Collections_Generic_IEnumerable__0__)

[IsSupersetOf(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.IsSupersetOf.md#Phoenix_Pacz_UpdatableSortedSet_1_IsSupersetOf_System_Collections_Generic_IEnumerable__0__)

[Overlaps(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.Overlaps.md#Phoenix_Pacz_UpdatableSortedSet_1_Overlaps_System_Collections_Generic_IEnumerable__0__)

[Remove(T)](Phoenix.Pacz.UpdatableSortedSet-1.Remove.md#Phoenix_Pacz_UpdatableSortedSet_1_Remove__0_)

[SetEquals(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.SetEquals.md#Phoenix_Pacz_UpdatableSortedSet_1_SetEquals_System_Collections_Generic_IEnumerable__0__)

[SymmetricExceptWith(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.SymmetricExceptWith.md#Phoenix_Pacz_UpdatableSortedSet_1_SymmetricExceptWith_System_Collections_Generic_IEnumerable__0__)

[UnionWith(IEnumerable<T>)](Phoenix.Pacz.UpdatableSortedSet-1.UnionWith.md#Phoenix_Pacz_UpdatableSortedSet_1_UnionWith_System_Collections_Generic_IEnumerable__0__)
