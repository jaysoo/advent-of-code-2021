import sys

count = 0

filename = sys.argv[1] or "input.txt"
file = open(filename)
lines = file.readlines()
prev = None

for (idx, a) in enumerate(lines[:-2]):
    curr = int(a) + int(lines[idx + 1]) + int(lines[idx + 2])
    if prev != None and prev < curr:
        count = count + 1
    prev = curr

print("Answer is %d" % count)
