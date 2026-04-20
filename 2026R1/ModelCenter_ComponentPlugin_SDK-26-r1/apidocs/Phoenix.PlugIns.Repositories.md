# Namespace Phoenix.PlugIns.Repositories

### Classes

[CombiningRepository](Phoenix.PlugIns.Repositories.CombiningRepository.md)

This IPlugInRepository combines multiple inner repositories, making them appear
as if they are intersected together. Sub-repositories are combined. If a repository
contains conflicting plug-ins, a warning is logged and one is chosen randomly.

[DirectoryRepository](Phoenix.PlugIns.Repositories.DirectoryRepository.md)

A repository backed by a directory on the local computer.
