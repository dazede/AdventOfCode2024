from file_reader import read_input
data = read_input("Day08\input.txt")
data_arr = []

for line in data:
    line = line.strip()
    data_arr.append(list(line))

cahced_coords = []
def check(row, index):
    global cahced_coords
    if 0 <= row < len(data_arr) and 0 <= index < len(data_arr[i]):
        if data_arr[row][index] == '.':
                data_arr[row][index] = '#'
        elif data_arr[row][index] != '#':
            cahced_coords.append((row, index))

def find_char(char, row, index):
    for i in range(row, len(data_arr)):
        for j in range(len(data_arr[i])):
            if data_arr[i][j] != char or (i == row and j == index):
                continue
            row_diff = abs(i - row)
            index_diff = abs(j - index)

            rowA = row + row_diff if row > i else row - row_diff
            rowB = i + row_diff if i > row else i - row_diff
            indexA = index + index_diff if index > j else index - index_diff
            indexB = j + index_diff if j > index else j - index_diff
            
            # change 2 values
            check(rowA, indexA)
            check(rowB, indexB)

chars = 0 
for i in range(len(data_arr)):
    for j in range(len(data_arr[i])):
        if data_arr[i][j] in {'.', '#'}:
            continue
        find_char(data_arr[i][j], i, j)

for coord in cahced_coords:
    data_arr[coord[0]][coord[1]] = '#'

ans = 0
for i in range(len(data_arr)):
    for j in range(len(data_arr[i])):
        if (data_arr[i][j] == '#'):
            ans+=1

print(ans)