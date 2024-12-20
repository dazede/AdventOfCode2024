from file_reader import read_input
data = read_input("Day07\input.txt")
ans = 0

def check_item(item):
    import itertools
    combinations = list(itertools.product(['+', '*'], repeat=len(item[1]) - 1))
    combinations = [list(comb) for comb in combinations]
    for comb in combinations:
        if equation(comb, item):
            return True
    return False

def equation(symbols, item):
    local_ans = item[1][0]
    for i in range(len(symbols)):
        local_ans = str(eval(local_ans + symbols[i] + item[1][i + 1]))
    return local_ans == item[0]

for line in data:
    line = line.strip().split(':')
    line[1] = line[1].strip().split(' ')
    if (check_item(line)):
        ans += int(line[0])

print(ans)


