# Protect

> ##### Summary
> 
> Protect your solution source code by obfuscating its source files.
<br/>

<a id="obfuscate-source-code"></a>

Obfuscating your solution source code involves converting a subset of files in a solution source tree into one of two file formats, depending on the type of file or the content of the `obfuscate.txt` file. Source files are converted into files with the following extensions:

| File type                         | File extension   |
|-----------------------------------|------------------|
| [Encrypted files](#encrypt-files) | `.encrypted`     |
| [Compiled files](#pyc-files)      | `.pyc`           |

<a id="encrypt-files"></a>

<a id="encrypted-files"></a>

## Encrypted files

Files with the `.encrypted` extension are the encrypted files for the application. You should encrypt any files that need to be sent to the Ansys solvers or opened by the Python script and edited or parsed.

Files are encrypted using the cryptography module of Python. The encryption process is automated via continuous integration (CI) processes.

Encrypted files are created with the same path as the original file with the `.encrypted` extension. For example, a file named `abc.py` is encrypted as `abc.py.encrypted`.

To indicate which files need to be encrypted, you need only to add them the `obfuscate.txt`
file (see [Decryption file list](#decryption-file-list)). However, you still must ensure that an encrypted file is decrypted in transaction methods before it is sent to the Ansys solvers. To decrypt files, you may either:

* Automate the process using the `AssetFileReference` or `AssetFileGroupReference`
  fields (strongly recommended), or
* Decrypt the files using GLOW’s `ansys.saf.glow.utilities.translator.decrypt_file` function.

<a id="pyc-files"></a>

<a id="compiled-files"></a>

## Compiled files

Files with the `.pyc` extension are the compiled files of the application, compiled from the `.py` files of the application.

In the compiling process, the source code is built into a `.whl` file, which is then deconstructed. Each file is compiled into a `.pyc` file and built back into a `.whl` file.
All Ansys inner-source modules are also converted into `.whl` files with the `.pyc` files.

#### NOTE
This is automated by the CI, so you do not need to worry about this step.

#### ATTENTION
All `.py` files are converted to either `.encrypted` or `.pyc` files. Any `.py` files not included in the `obfuscate.txt` file are not converted to `.encrypted`. Instead, they are converted to `.pyc` files by the CI, regardless of their location in the source tree.

This ensures that the solution application does not have any `.py` files that are left readable
in plain-text.

<a id="obfuscation-requirements"></a>

<a id="requirements"></a>

### Requirements

The obfuscation process requires:

* GLOW version **0.3.dev3** or higher
* The `build` reusable action from the [actions](https://github.com/Solution-Applications/actions) repository, with the `encrypt-wheel` input parameter set to `true`.
* The `package-solution` reusable action from [actions](https://github.com/Solution-Applications/actions) repository.

<!-- For details on using these actions, see :ref:`obfuscation-reusable-actions`. -->

<a id="obfuscation-implementation"></a>

<a id="implementation"></a>

### Implementation

The majority of the obfuscation process is implemented using CI workflows as composite actions.

For this, you must incorporate the ability to find and decrypt the\*\* `.encrypted` into the solution application. To simplify this process, you can use the `AssetFileReference` and `AssetFileGroupReference` classes (in addition to the `FileReference` and `FileGroupReference` classes).

If the solution uses the `subprocess` module to run any Python files not located in a `method_asset` directory, then add an `if` condition to check for the `.py` files. If the `.py` file is not found, then check for the `.pyc` file.

<a id="decryption-steps"></a>

<a id="id2"></a>

## Decryption steps

The goal is to ensure that `.encrypted` files are decrypted for the shortest duration possible,  while transaction methods are executed. To do this:

1. **Place all application method assets in a** `method_assets` **folder.**

   *Method assets* files are identified by their placement in a `method_assets` folder. These are the files to be encrypted in the CI and later decrypted in the application for use by transaction methods. They cannot be deleted or modified by the application.

   Transaction method code locates the `method_assets` folder relative to the step definition, so you may create it in the directory containing the step definition `.py` file, or in any parent directory up to (and including) the solution root. (For example, `src/ansys/solutions/<solution-name>/method_assets` assumes that the solution steps are contained in `src/ansys/solutions/<solution-name>`.) However, Ansys Solutions strongly recommends that you use a single `method_assets` folder at the root level for all the application’s method assets.
2. **Add the encryption passkey to the** `metadata.json` **file.**

   In each `method_assets` folder, add an encryption passkey to the `metadata.json` file.

   Always use a strong random passkey with a minimum of 20 characters. You may generate passkeys using online resources, such as [Bitwarden’s Password Generator](https://bitwarden.com/password-generator/) tool.
   ```json
   {
   "translator": "oLeTHVv8nEUy33CKKQZ3"
   }
   ```
3. **Import the** `AssetFileReference` **and/or** `AssetFileGroupReference`
   **classes from GLOW.**
   ```Python
   from ansys.saf.glow.solution import AssetFileGroupReference, AssetFileReference
   ```
4. **Add** `AssetFileReference` **or** `AssetFileGroupReference` **fields.**

   Do this for each step that needs to access a file or group of files requiring decryption. For the `encrypted` parameter, keep the default value of `True`.

   In the following examples, the `method_assets` directory is located in  `src/ansys/solutions/<solution-name>` and contains the directory and file structure:
   ```none
   ── path
      └── to
        └── file.py
   ```

   ```Python
   file_name = AssetFileReference(relative_path="path/to/file.py", encrypted=True)
   file_group = AssetFileGroupReference(relative_path="path/to/file_group/*.jou", encrypted=True)
   ```

   #### NOTE
   The relative path is the path to the file inside the `method_assets` folder. Do not include the `method_assets` folder in the relative path. For example, given the file in `src/ansys/solutions/<solution-name>/method_assets/path/to/file.py`, the relative path is `path/to/file.py`.
   * If you want to encrypt the file manually for testing, the steps are covered in a
     later section.
   * To test, you can add the unencrypted file to the `method_assets` folder in the
     `AssetFileReference` or `AssetFileGroupReference` object.

   #### NOTE
   The `AssetFileGroupReference` and `AssetFileReference` classes can also be used to access unencrypted asset files. *These classes allow a transaction method to access the asset files without any copy or download. Using asset files in this way is designed to be more efficient than using project files. Asset files are shared by all projects of a solution and should not be modified by solution code.*

   Both classes have an additional `encrypted` parameter (set to `True` by default) that specifies whether the asset file is to be decrypted before use. To access these classes, set the `encrypted` parameter to `False`. For example, this is useful in cases where the solution requires fast access to a read-only file that does not contain any ANSYS intellectual property.
5. **Use the** `download` **transaction annotation to decrypt the files.**
   ```Python
   @transaction(self=StepSpec(download=["file_name"]))
   def retrieve_encrypted_asset(self):
   ```
6. **Add the files to be encrypted to the list in the** `obfuscate.txt` **file.**

   For more information, see [Decryption file list](#decryption-file-list).

<a id="decryption-file-list"></a>

<a id="id3"></a>

## Decryption file list

A text file named `obfuscate.txt` is to be created and maintained in the root directory
of the project. This file contains the list of all the files that need to be encrypted to
the `.encrypted` format.

The `obfuscate.txt` file should contain the list of files to be encrypted, in the following format:

```text
.\src\ansys\solutions\solution-name\folder1\file1.py
.\src\ansys\solutions\solution-name\folder1\file2.jou
.\src\ansys\solutions\solution-name\folder2\file3.py
```

<a id="pyc-steps"></a>

<a id="steps-for-the-compiled-file"></a>

## Steps for the compiled file

If your application makes use of the `subprocess` module to run any other Python files for development, debugging,or error handling, use the GLOW API function `ansys.saf.glow.utilities.runtime_filesystem.get_runtime_file` to get the path to the Python file that can be executed (either compiled or source) that is contained in the solution package, given the location of the relevant Python `.py` source file.

The import of variables or methods from other Python files is not affected by the obfuscation into `.pyc` files.

<!-- .. _obfuscation-reusable-actions: -->
<!-- Obfuscation composite actions -->
<!-- ============================= -->
<!-- .. todo: -->
<!-- replace links here with links to the production actions -->
<!-- Reusable actions for the obfuscation process are available in the `actions repository <https://github.com/Solution-Applications/actions>`_. -->
<!-- .. note:: -->
<!-- The reusable actions are in development and are available as pre-release in -->
<!-- `here <https://github.com/Solution-Applications/actions/tree/thesct22/consolidate-developments>`_. -->

<a id="build-encrypted-action"></a>

<a id="build-action"></a>

## Build action

The build action with `encrypt-wheel` parameter set to `true` is used to convert the `.py`, `.jou`, and other files to `.encrypted` files and create a `.whl` file.

The action requires the password used to encrypt and decrypt the files as an input.

* This should be provided as a secret in the repository’s settings.
* This is the same password that is used in the decryption steps above.

To call the action, use the following syntax:

```yaml
build:
if: |
    github.event.pull_request.draft == false
  name: Build
  runs-on: windows-latest
  steps:
    - name: Build
      uses: Solution-Applications/actions/build@<version>
      with:
        artifact-name: wheel
        check-poetry: true
        check-poetry-lock: false
        dependencies-source: build-system
        encrypt-wheel: true
        gh-token: ${{ secrets.WORKFLOW_TOKEN }}
        modern-installation: true
        package-data-artifact: ""
        package-data-path: ""
        poetry-version: ${{ env.POETRY_VERSION }}
        python-version: ${{ env.MAIN_PYTHON_VERSION }}
        retention-days: ${{ env.RETENTION_DAYS }}
        scripts-version: "v0.4.1"
        working-directory: "."
```

A `.whl` file containing the `.encrypted` files is generated and then uploaded as an artifact with the name `obfuscated-wheel`.

<!-- .. _package-encrypted-action: -->
<!-- Package encrypted action -->
<!-- ------------------------ -->
<!-- The package encrypted action is used to form the ``.zip`` file that is distributed to the customers. -->
<!-- This actions compresses all the necessary files to be sent to the customers and creates a ``.zip`` file. It also transforms the closed source ``.whl`` files to replace all the ``.py`` files with ``.pyc`` files. -->
<!-- To call the action, use the following syntax: -->
<!-- .. code-block:: yaml -->
<!-- packages-solution: -->
<!-- if: | -->
<!-- github.event.pull_request.merged == true -->
<!-- name: Package Solution -->
<!-- needs: build -->
<!-- runs-on: windows-latest -->
<!-- steps: -->
<!-- - name: Build -->
<!-- uses: Solution-Applications/actions/package-solution@<version> -->
<!-- with: -->
<!-- desktop-utility-version: <desktop-utility-version> -->
<!-- display-console-window: false -->
<!-- gh-token: ${{ secrets.WORKFLOW_TOKEN }} -->
<!-- glow-entry-point-module: "ansys.saf.glow.desktop.orchestration.production_entry_point" -->
<!-- glow-package-name: "ansys-saf-glow" -->
<!-- obfuscate: false -->
<!-- poetry-version: <poetry-version> -->
<!-- python-version: <python-version> -->
<!-- retention-days: 7 -->
<!-- scripts-version: <scripts-version> -->
<!-- solution-display-name: <solution-display-name> -->
<!-- solution-entry-point: <solution-entry-point> -->
<!-- solution-name: <solution-name> -->
<!-- solution-pypi-token: ${{ secrets.SOLUTIONS_PRIVATE_PYPI_TOKEN }} -->
<!-- solution-ui-framework: dash -->
<!-- After this action is run, a ``.zip`` file is created and is uploaded as an artifact. -->
<!-- This ``.zip`` file is the one that is distributed to the customers. -->

<a id="testing-decryption-on-development"></a>

<a id="testing-decryption-during-development"></a>

### Testing decryption during development

You are advised to encrypt the files and then test the decryption steps on the development machine so you can be confident that the decryption steps will work as expected.

To create the encrypted file, use the `ansys.saf.glow.utilities.translator.encrypt_file` method in GLOW. Create a Python file with the following code:

```Python
import argparse
from pathlib import Path

from ansys.saf.glow.utilities.translator import encrypt_file


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("-f", "--file", type=str, help="File to encrypt")
    parser.add_argument("-p", "--password", type=str, help="Password to encrypt file")

    # Encrypt the file
    encrypt_file(Path(parser.parse_args().file), parser.parse_args().password)

if __name__ == "__main__":
    main()
```

To encrypt the file, run the following command, using the password in the previous decryption steps:

```bash
python encrypt_file.py -f <file_name> -p <password>
```

<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
