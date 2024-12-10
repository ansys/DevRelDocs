# Interface PHXDATAEXPLORERLib::IDataExplorerFacadeOwner

![][IDL]
![][private]

**Definition**: `LIBS/DataExplorer/PHXDataExplorer/PHXDataExplorer.odl` (line 445)



An interface that represents something that can own a facade DataExplorer. Implemented by the Legacy DE so that it can have a reference to the Mux DE. The Mux DE needs to call getKeepalive on the DE when it is visible.

## Members

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)