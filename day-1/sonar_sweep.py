import sys

count = 0

filename = sys.argv[1] or "input.txt"
file = open(filename)
lines = file.readlines()
prev = int(lines[0])

for l in lines[1:]:
    curr = int(l)
    if curr > prev:
        count = count + 1
    prev = curr

print("Answer is %d" % count)
