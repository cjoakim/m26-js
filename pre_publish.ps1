
# PowerShell script to compile and unit-test this app.
#
# Chris Joakim, 2023

npm run build

npm run test

rm dist/*test*

npm pack > npm_pack.txt

cat npm_pack.txt
