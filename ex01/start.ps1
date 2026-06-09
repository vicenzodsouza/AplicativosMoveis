$ErrorActionPreference = 'Stop'

$nodeDir = Join-Path $PSScriptRoot '.tools\node-v24.15.0-win-x64'
$env:Path = "$nodeDir;$env:Path"

& (Join-Path $nodeDir 'npm.cmd') start
