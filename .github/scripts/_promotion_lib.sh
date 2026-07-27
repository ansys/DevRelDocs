#!/usr/bin/env bash

################################################################################
# Shared helpers for sandbox-to-main documentation promotion workflows.
################################################################################

set -euo pipefail

readonly READY_LABEL="ready-for-prod"
readonly DONE_LABEL="promoted-to-main"
readonly FAILED_LABEL="promotion-failed"
readonly PRODUCT_VERSION_DIR_REGEX='docs/([^/]+/){1,}versions/[0-9]{4}\.R[0-9]\.SP[0-9]{2}'

log_info() {
  echo "$*"
}

log_error() {
  echo "::error::$*" >&2
}

validate_dependencies() {
  local _missing=0
  for _cmd in git gh jq; do
    if ! command -v "${_cmd}" >/dev/null 2>&1; then
      log_error "Required command not found: ${_cmd}"
      _missing=1
    fi
  done

  if [[ ${_missing} -ne 0 ]]; then
    exit 1
  fi
}

get_commit_files() {
  local _commit="$1"
  git diff-tree --no-commit-id --name-only -r "${_commit}"
}

get_product_version_dir() {
  local _commit="$1"
  local _changed_files _product_dirs _dir_count

  _changed_files=$(get_commit_files "${_commit}")
  if [[ -z "${_changed_files}" ]]; then
    log_error "Commit ${_commit} does not contain any file changes."
    return 1
  fi

  if echo "${_changed_files}" | grep -qv '^docs/'; then
    log_error "Commit ${_commit} changes files outside docs/. Only documentation paths are allowed."
    return 1
  fi

  _product_dirs=$(echo "${_changed_files}" | grep -oE "${PRODUCT_VERSION_DIR_REGEX}" | sort -u || true)
  if [[ -z "${_product_dirs}" ]]; then
    log_error "Commit ${_commit} does not change a recognized product version directory."
    return 1
  fi

  _dir_count=$(echo "${_product_dirs}" | wc -l)
  if [[ "${_dir_count}" -gt 1 ]]; then
    log_error "Commit ${_commit} changes multiple product version directories: $(echo "${_product_dirs}" | xargs)."
    return 1
  fi

  echo "${_product_dirs}"
  return 0
}

commit_on_branch() {
  local _commit="$1"
  local _branch="$2"
  git merge-base --is-ancestor "${_commit}" "origin/${_branch}"
}

set_pr_labels() {
  local _pr_number="$1"
  shift
  gh pr edit "${_pr_number}" --add-label "$(IFS=,; echo "$*")" >/dev/null
}
