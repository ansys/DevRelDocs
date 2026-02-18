#!/usr/bin/env bash

################################################################################
# Copyright (C) 2026 PRONOVIX GROUP.
#
# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301,
# USA.
################################################################################

########################################
# Validates required environment variables.
#
# Globals:
#   BASE_URL - The base URL of the site instance.
#   CLIENT_ID - The OAuth client ID.
#   CLIENT_SECRET - The OAuth client secret.
# Arguments:
#   None.
# Outputs:
#   STDERR: Prints errors if variables are missing or invalid.
# Returns:
#   0 if all variables are present and valid.
#   Exits script with status 1 if any variables are missing or invalid.
########################################
validate_envs() {
  local _required_vars=("BASE_URL" "CLIENT_ID" "CLIENT_SECRET")
  local _error_count=0

  for ev_var in "${_required_vars[@]}"; do
    local _value="${!ev_var:-}"

    if [[ -z "${_value}" ]]; then
      echo "::error title=Missing variable::The required variable [${ev_var}] is not set." >&2
      ((_error_count++))
      continue
    fi
    if [[ "$ev_var" == "BASE_URL" && "${_value}" == */ ]]; then
      echo "::error title=Invalid BASE_URL::The BASE_URL must not end with a trailing slash." >&2
      ((_error_count++))
    fi
  done

  if [[ ${_error_count} -gt 0 ]]; then
    exit 1
  fi

  return 0;
}

########################################
# Detects product documentation changes and extracts metadata from docfx.json.
#
# Scans the Git diff to identify a unique product version directory. If found,
# it validates the presence of docfx.json and extracts specific metadata
# properties using jq, assigning them back to the caller's variables.
#
# Globals:
#   None (Uses local namerefs to modify caller variables).
# Arguments:
#   $1 - (Nameref) To be updated with the identified source path.
#   $2 - (Nameref) To be updated with 'doc_type' from metadata.
#   $3 - (Nameref) To be updated with 'title' from metadata.
#   $4 - (Nameref) To be updated with 'version' from metadata.
#   $5 - (Nameref) To be updated with 'physics' from metadata.
# Outputs:
#   STDERR: Prints error messages on any failure.
#   STDOUT: Prints status messages about the action steps.
# Returns:
#   0 if metadata is valid and successfully extracted.
#   1 if multiple product changes are detected, docfx.json is missing, or
#     metadata is invalid.
#   2 if no product documentation changes are detected.
########################################
extract_product_documentation_metadata() {
  local -n _ref_source_path=$1
  local -n _ref_doc_type=$2
  local -n _ref_title=$3
  local -n _ref_version=$4
  local -n _ref_physics=$5

  # Identify affected product version directories.
  local _version_dir_regex='^[^/]+/versions/[0-9]{4}\.R[0-9]{1}\.SP[0-9]{2}'
  local _version_dirs
  _version_dirs=$(git diff-tree --no-commit-id --name-only -r HEAD | grep -oP "${_version_dir_regex}" | sort -u || true)

  if [[ -z "${_version_dirs}" ]]; then
    echo "No product documentation changes detected. Exiting."
    return 2
  fi

  # Check how many version directories are found.
  local _version_dir_count
  _version_dir_count=$(echo "${_version_dirs}" | wc -l)
  if [ "${_version_dir_count}" -gt 1 ]; then
    local _version_dir_list
    _version_dir_list=$(echo "${_version_dirs}" | xargs -d '\n')
    echo "::error::Multiple product documentation changes detected: ${_version_dir_list}." >&2
    return 1
  fi

  # The product documentation's source path.
  _ref_source_path="${_version_dirs}"
  echo "Product documentation changes detected in ${_ref_source_path}"

  # Locate docfx.json.
  local _docfx_path="${_ref_source_path}/docfx.json"
  if [ ! -f "${_docfx_path}" ]; then
    echo "::error::No docfx.json file found in ${_docfx_path}." >&2
    return 1
  fi

  echo "Found docfx.json at ${_docfx_path}"
  echo "Validating metadata in ${_docfx_path}"

  # Validate and extract metadata properties from docfx.json.
  local _docfx_errors=()
  local _docfx_properties=("doc_type" "title" "version" "physics")
  for prop in "${_docfx_properties[@]}"; do
    local _value
    _value=$(jq -r ".build.globalMetadata.${prop} // empty" "${_docfx_path}")
    if [ -z "${_value}" ]; then
      _docfx_errors+=("'${prop}' is missing or empty")
    else
      # Create a reference to the target variable and assign the value.
      declare -n target_var="_ref_${prop}"
      target_var="${_value}"
      unset -n target_var
    fi
  done

  if [ ${#_docfx_errors[@]} -ne 0 ]; then
    local _error_msg
    _error_msg=$(IFS='; '; echo "${_docfx_errors[*]}")
    echo "::error::Metadata validation failed in ${_docfx_path}: ${_error_msg}" >&2
    return 1
  fi

  return 0
}

########################################
# Gets an access token from the Developer portal.
#
# Globals:
#   BASE_URL - The base URL of the site instance.
#   CLIENT_ID - The OAuth client ID.
#   CLIENT_SECRET - The OAuth client secret.
#   BASIC_AUTH_USERNAME - (Optional) Username for basic auth.
#   BASIC_AUTH_PASSWORD - (Optional) Password for basic auth.
# Arguments:
#   None.
# Outputs:
#   STDOUT: Prints the raw access_token string on success.
#   STDERR: Prints GitHub Action masks (::add-mask::) and errors.
# Returns:
#   0 on success.
#   1 if the HTTP status is not 200 or the token is missing from response.
########################################
get_access_token() {
  local _curl_opts=(
    --silent
    --location
    --connect-timeout 15
    --max-time 30
    --write-out "HTTPSTATUS:%{http_code}"
    --request POST "${BASE_URL}/oauth/token"
    --header 'Content-Type: application/x-www-form-urlencoded'
    --data-urlencode 'grant_type=client_credentials'
    --data-urlencode "client_id=${CLIENT_ID}"
    --data-urlencode "client_secret=${CLIENT_SECRET}"
    --data-urlencode 'scope=migration_job:create'
  )

  # Add basic authentication credentials if they are set.
  if [[ -n "${BASIC_AUTH_USERNAME}" && -n "${BASIC_AUTH_PASSWORD}" ]]; then
    _curl_opts+=(--user "${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}")
  fi

  local _response
  _response=$(curl "${_curl_opts[@]}")

  local _response_body _response_status
  _response_body=$(echo "${_response}" | sed -e 's/HTTPSTATUS\:.*//g')
  _response_status=$(echo "${_response}" | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')

  if [ "${_response_status}" -ne 200 ]; then
    echo "::error::Access token request failed (HTTP ${_response_status}). Response: ${_response_body}" >&2
    return 1
  fi

  local _access_token
  _access_token=$(echo "${_response_body}" | jq -r '.access_token')

  if [[ -z "${_access_token}" ]]; then
    echo "::error::Access token not found in response body. Response: ${_response_body}" >&2
    return 1
  fi

  # Mask the token before it even leaves the function.
  echo "::add-mask::${_access_token}" >&2
  echo "${_access_token}"

  return 0;
}

########################################
# Submits a create migration job request to the Developer portal.
#
# Globals:
#   BASE_URL - The base URL of the site instance.
#   GITHUB_REPOSITORY_OWNER - The owner of the current GitHub repository.
#   GITHUB_REPOSITORY - Used to derive the short repository name.
#   GITHUB_REF - Used to derive the git branch or tag name.
#   GITHUB_SHA - The commit hash triggering the migration.
#   BASIC_AUTH_USERNAME - (Optional) Username for basic auth.
#   BASIC_AUTH_PASSWORD - (Optional) Password for basic auth.
# Arguments:
#   $1 - Access token (bearer) for API authorization.
#   $2 - Migration type (extracted from docfx.json).
#   $3 - Source path of the product documentation files.
#   $4 - Name of the product being migrated.
#   $5 - Version of the product.
#   $6 - Physics tag.
# Outputs:
#    STDERR: Prints an error message if job creation fails.
# Returns:
#   0 on success (HTTP 201).
#   1 if the API returns a non-201 status code.
########################################
create_migration_job() {
  local _access_token="$1"
  local _doc_type="$2"
  local _source_path="$3"
  local _product_name="$4"
  local _product_version="$5"
  local _physics="$6"

  local _github_repository_name=${GITHUB_REPOSITORY#*/}

  local _json_payload
  _json_payload=$(jq -n \
    --arg mt "${_doc_type}" \
    --arg ro "${GITHUB_REPOSITORY_OWNER}" \
    --arg rn "${_github_repository_name}" \
    --arg sp "${_source_path}" \
    --arg gr "${GITHUB_REF##*/}" \
    --arg cs "${GITHUB_SHA}" \
    --arg pn "${_product_name}" \
    --arg pv "${_product_version}" \
    --arg pt "${_physics}" \
    '{
      migration_type: $mt,
      repository_owner: $ro,
      repository_name: $rn,
      source_path: $sp,
      git_ref: $gr,
      commit_sha: $cs,
      product_name: $pn,
      product_version: $pv,
      physics_tag: $pt
    }')

  local _curl_opts=(
    --silent
    --location
    --connect-timeout 15
    --max-time 30
    --write-out "HTTPSTATUS:%{http_code}"
    --request POST "${BASE_URL}/api/migration/jobs"
    --header "Content-Type: application/json"
    --header "X-OAuth-Authorization: Bearer ${_access_token}"
    --data "${_json_payload}"
  )

  # Add basic authentication credentials if they are set.
  if [[ -n "${BASIC_AUTH_USERNAME}" && -n "${BASIC_AUTH_PASSWORD}" ]]; then
    _curl_opts+=(--user "${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}")
  fi

  local _response
  _response=$(curl "${_curl_opts[@]}")

  local _response_status
  _response_status=$(echo "${_response}" | tr -d '\n' | sed -e 's/.*HTTPSTATUS://')

  if [ "${_response_status}" -ne 201 ]; then
    echo "::error::Request to create migration job failed (HTTP ${_response_status})." >&2
    return 1
  fi

  return 0;
}

########################################
# Orchestrates the migration job creation process.
#
# Workflow:
#  1. Validates required environment variables.
#  2. Extracts product documentation metadata from Git changes and docfx.json.
#  3. Requests an OAuth2 access token.
#  4. Submits a migration job to the Developer poral.
#
# Globals:
#   Expects various GITHUB_* and API configuration variables.
# Arguments:
#   $@ - Command line arguments passed to the script.
# Returns:
#   0 if the migration job creation is successful.
#   Exits with 0 if no product documentation changes are detected.
#   Exits with 1 on any validation or execution failure.
########################################
main() {
  set -euo pipefail

  echo "Validating environment variables..."
  validate_envs

  echo "Detecting product documentation changes..."
  local _return_code=0
  extract_product_documentation_metadata \
    _source_path \
    _doc_type \
    _product_name \
    _product_version \
    _physics || _return_code=$?

  if [[ ${_return_code} -eq 2 ]]; then
    # No changes detected.
    exit 0
  elif [[ ${_return_code} -ne 0 ]]; then
    # An error occurred.
    exit 1
  fi

  echo "::group::Product documentation metadata"
  echo "Source path: ${_source_path}"
  echo "Documentation type: ${_doc_type}"
  echo "Product name: ${_product_name}"
  echo "Product version: ${_product_version}"
  echo "Physics: ${_physics}"
  echo "::endgroup::"

  echo "Requesting access token..."
  local _access_token
  _access_token=$(get_access_token) || exit 1

  echo "Creating migration job..."
  create_migration_job \
    "${_access_token}" \
    "${_doc_type}" \
    "${_source_path}" \
    "${_product_name}" \
    "${_product_version}" \
    "${_physics}" || exit 1

  echo "Migration job has been created successfully."
  return 0
}

########################################
# Entry point.
########################################
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  main "$@"
fi
