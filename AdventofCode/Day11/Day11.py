from file_reader import read_input
data = read_input("Day11\input.txt")
data = list(map(int, data[0].strip().split()))

def even_nums(num):
    num = str(num)
    mid = len(num) // 2
    first = num[:mid]
    second = num[mid:]
    return [int(first), int(second)]

blinks = 0
while (blinks < 25):
    i = 0
    while i < len(data):
        #If number == 0, it is replaced with the number 1
        if data[i] == 0:
            data[i] = 1
            i += 1
            continue
        #If number has an even number of digits, it is replaced by two nums. 
        #The left half of the4 digits, and the right half of the digits. 
        #The new numbers don't keep extra leading zeroes: 1000 would become stones 10 and 0
        if (len(str(data[i])) % 2 == 0):
            new_nums = even_nums(data[i])
            data.pop(i)
            data.insert(i, new_nums[0])
            data.insert(i + 1, new_nums[1])
            skip_next = True
            i += 2
            continue

        #else, number is multiplied by 2024
        data[i] = data[i] * 2024
        i += 1
    blinks += 1

print(len(data))
