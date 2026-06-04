# Method Dispose

Namespace: [Phoenix.ComponentAPI](Phoenix.ComponentAPI.md)  
Assembly: Phoenix.ComponentAPI.dll

## Dispose(bool)

Standard disposal.

```csharp
protected override void Dispose(bool disposing)

```

### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether this function is called from the normal
`Phoenix.DotNetUtils.AbstractDisposable.Dispose` function (true) or from the finalizer
(false).

### Remarks

The proper form for implementing this in a
derived class is:

```csharp
protected override void Dispose(bool disposing)
{
   try
   {
      if (disposing)
      {
         // dispose managed resources
      }
      // dispose unmanaged resources
   }
   finally
   {
      base.Dispose(disposing);
   }
}
```

Note that you don't strictly need the `try`-`finally` or the
`base.Dispose(disposing)` if you're just overriding this class,
since the base class implementation doesn't actually do anything.
