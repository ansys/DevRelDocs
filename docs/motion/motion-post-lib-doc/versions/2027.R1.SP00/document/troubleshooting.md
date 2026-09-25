# Troubleshooting

## Issues with using the Standard Library in the Operation API

- When using the Operation API, there is an issue where the Standard Library cannot be accessed. To resolve this, follow the steps below. This solution applies to Motion version 25R1 and later.
- Issue Resolution Steps :

1. Navigate to [python.net](https://github.com/IronLanguages/ironpython2/releases/tag/ipy-2.7.12)
2. Download the IronPython.StdLib.2.7.12.zip file.
3. Go to the Motion installation directory (e.g., v251\Motion\bin)
4. In this directory, create a folder named Lib.
5. Extract the downloaded zip file and place its contents into the Lib folder.

## Issues when using Operation API and Result File Reader API together

- When using the Operation API and Result File Reader API simultaneously, the following error may occur.
- Since the Operation API uses the IronPython engine, the default modules used when using the Result File Reader API cannot be accessed.
- For example, commonly used modules such as `import os` cannot be used in the Operation API.
- If you wish to use additional modules, please refer to the [Issues with using the Standard Library in the Operation API](#issues-with-using-the-standard-library-in-the-operation-api) section in Troubleshooting.