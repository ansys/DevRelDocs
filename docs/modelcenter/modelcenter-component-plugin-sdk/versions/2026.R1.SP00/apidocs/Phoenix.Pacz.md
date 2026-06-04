# Namespace Phoenix.Pacz

### Namespaces

[Phoenix.Pacz.Impl](Phoenix.Pacz.Impl.md)

### Classes

[Compatibility](Phoenix.Pacz.Compatibility.md)

Compatibility warning for files being loaded by older software versions.

[ComponentConfig](Phoenix.Pacz.ComponentConfig.md)

A concrete implementation of IComponentConfig.

This class implements IComponentConfig and adds the ability to change it after it
has been created.

This class is not thread safe.

[DefaultExternalMetadata](Phoenix.Pacz.DefaultExternalMetadata.md)

Generic implementation of `Phoenix.PaczAPI.IExternalMetadata` that stores, reads, and writes external metadata.

[ExternalFile](Phoenix.Pacz.ExternalFile.md)

External file a component references.

[IconMissingException](Phoenix.Pacz.IconMissingException.md)

Exception thrown when a PACZ configuration indicates that the component has an icon but the icon file is missing.

[InstanceFile](Phoenix.Pacz.InstanceFile.md)

Instance file within a component.

[PaczFactory](Phoenix.Pacz.PaczFactory.md)

The factory class for the Pacz library that can be used to
configure dependency injection.

[RuntimeVariable](Phoenix.Pacz.RuntimeVariable.md)

A concrete implementation of IRuntimeVariable.

This class implements IRuntimeVariable and adds the ability to change it after it
has been created.

This class is not thread safe.

[SchemaCompatibilityException](Phoenix.Pacz.SchemaCompatibilityException.md)

Exception thrown when a file with an unsupported version is opened.

[UpdatableSortedSet<T>](Phoenix.Pacz.UpdatableSortedSet-1.md)

Represents a collection of objects that is maintained in sorted order.
Adding an item whose sort order matches an item already in the set will replace the existing item.
