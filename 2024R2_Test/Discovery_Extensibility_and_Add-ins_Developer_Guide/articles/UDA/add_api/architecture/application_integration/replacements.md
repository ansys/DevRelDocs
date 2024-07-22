# Replacements

If the doc object has been deleted, Resolve returns null to indicate that the object was not found. Sometimes doc objects can get replaced during a command. For example, if a design face is split during a modeling operation, it will be replaced by two new design faces. Perhaps one of these new design faces gets split itself, or perhaps one of them gets deleted.

Behind the scenes, replacements are recorded, and when Resolve is called, if the object has been replaced, the moniker automatically returns one of the survivors, or null if there are no survivors.

-   If it is important to know whether the object is a survivor, rather than the original object, you can compare its moniker with the moniker you already have, using the == operator. If the object is a survivor, it will have a different moniker.
-   If it is important to obtain all survivors, ResolveSurvivors can be used instead. Note that this method only returns surviving replacements, so if the object hasn't been replaced at all, no survivors are returned.


