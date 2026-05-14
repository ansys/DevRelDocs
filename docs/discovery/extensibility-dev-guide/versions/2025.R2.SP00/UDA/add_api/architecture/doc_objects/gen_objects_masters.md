# General objects and masters

In general, a doc object is either an occurrence, or a *master*. When dealing with *general* doc objects \(doc objects that might be occurrences or masters\), interfaces are used, for example, IPart, IComponent, and IDesignBody. These all derive from IDocObject.

There are some methods and properties that for theoretical or practical reasons aren't presented by occurrences, and are therefore only presented by masters. When dealing with masters, classes are used, for example, Part, Component, and DesignBody. These all derived from DocObject, which implements IDocObject.

Part implements IPart, Component implements IComponent, and so on, so a master supports everything that a general object supports, and often more besides.

Note that although Part is always a root object, IPart may or may not be a root object. If the IPart happens to be a master, then it's a root object, but if it happens to be an occurrence, its parent will be an IComponent or an IDrawingView.


