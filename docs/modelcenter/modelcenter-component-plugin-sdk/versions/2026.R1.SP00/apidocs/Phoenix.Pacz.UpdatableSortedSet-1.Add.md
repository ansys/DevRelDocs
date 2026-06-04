# Method Add

Namespace: [Phoenix.Pacz](Phoenix.Pacz.md)  
Assembly: Phoenix.Pacz.dll

## Add(T)

Adds an element to the set and returns a value that indicates if it was successfully added.
If an item whose Comparator matches already exist in the set, that item will be removed and the new one added.

```csharp
public bool Add(T item)

```

### Parameters

`item` T

### Returns

[bool](https://learn.microsoft.com/dotnet/api/system.boolean)

true if the items is added, false otherwise
