# 1. 
# def Collatz(num):
#     while num != 1:
#         if num % 2 == 0:
#             num /= 2 
#         else: 
#             num = (num * 3) + 1
        
#         print(num)

# Collatz(69)


# 2. 
def Pallo():
    while True:
        pallo_holder = 0
        for x in range(100, 1000):
            for y in range(100, 1000):
                pallo_worker = x * y
                if (str(pallo_worker)) == ((str(pallo_worker))[::-1]):
                    if pallo_worker > pallo_holder:
                        pallo_holder = pallo_worker
        print(pallo_holder)
        break

Pallo()

#3. Smallest Divisible by all 1-20
def smallest():
    while True:
        num_check = 0
        while True:
            for i in range (1,21):
                if num_check % i != 0:
                    pass
                else:
                    print(num_check)
                    break
                num_check += 1
smallest()
