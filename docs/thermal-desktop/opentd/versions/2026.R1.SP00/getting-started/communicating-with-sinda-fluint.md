# Communicating with SINDA/FLUINT

OpenTD can be used to communicate with and control running SINDA/FLUINT (S/F) solutions using the classes in the OpenTD.*CoSolver* namespace:

- *SF_Launcher* is used to load and run a S/F model directly from an input file, such as an *inp* file created by the TD Case Set Manager. Once launched, the solution proceeds normally with no interaction from the SF_Launcher object.
- *SF_CoSolver* is like an SF_Launcher in that it launches a S/F model from an input file, but once launched it attempts to connect to and control it.
- *TDSF_CoSolver* launches a S/F model from within the TD Case Set Manager, then attempts to connect to and control it.

There is a demo of CoSolver usage available in the OpenTD 2023 R2 demos package. (See [Further reading section](further-reading.md))
