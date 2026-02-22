# Interface IDbIterator

Namespace: [OpenTD](OpenTD.md)  
Assembly: OpenTD.dll  

Use to iterate through the AutoCAD database, getting entities
such as nodes, conics, etc.

```csharp
public interface IDbIterator
```

## Methods

### DbObject\(\)

Returns the object at the current database position.

```csharp
dynamic DbObject()
```

#### Returns

 dynamic

### Done\(\)

Returns true at the end of the database.

```csharp
bool Done()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Step\(\)

Steps the pointer to the next position in the database.

```csharp
void Step()
```


