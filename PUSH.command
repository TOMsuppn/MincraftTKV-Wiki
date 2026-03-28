#!/bin/bash

cd /Users/tomlol/MinecraftTKV-WIKI

git add .
git commit -m "auto $(date '+%Y-%m-%d %H:%M:%S')" || echo "no changes"
git push

echo "常规更新"
