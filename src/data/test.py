l = []
with open('/Users/milessigel/Projects/pub_purity_test/src/data/raw.txt', 'r') as file:
    lines = file.readlines()
    for line in lines:
        if "(1)" in line:
            l.append(line.strip().removesuffix("(1)"))
            print(line.strip().removesuffix("(1)"))
print(l)