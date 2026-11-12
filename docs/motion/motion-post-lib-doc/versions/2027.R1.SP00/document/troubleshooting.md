# Troubleshooting
<div align="right"><a href="/document/troubleshooting.md" download="troubleshooting.md" title="Download this page as Markdown" aria-label="Download this page as Markdown"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor"/><path transform="translate(4.8 4.8) scale(0.6)" fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg></a></div>

## Issues with using the Standard Library in the Operation API

- When using the Operation API, there is an issue where the Standard Library cannot be accessed. To resolve this, follow the steps below. This solution applies to Motion version 25R1 and later.
- Issue Resolution Steps :

1. Navigate to [IronPython 2.7.12 release](https://github.com/IronLanguages/ironpython2/releases/tag/ipy-2.7.12)
2. Download the IronPython.StdLib.2.7.12.zip file.
3. Go to the Motion installation directory (e.g., v251\Motion\bin)
4. In this directory, create a folder named Lib.
5. Extract the downloaded zip file and place its contents into the Lib folder.

## Issues when using Operation API and Result File Reader API together

- When using the Operation API and Result File Reader API simultaneously, some modules cannot be accessed in the Operation API.
- Since the Operation API uses the IronPython engine, the default modules used when using the Result File Reader API cannot be accessed.
- For example, commonly used modules such as `import os` cannot be used in the Operation API.
- To use additional modules, see the [Issues with using the Standard Library in the Operation API](#issues-with-using-the-standard-library-in-the-operation-api) section in Troubleshooting.
