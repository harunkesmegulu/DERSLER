# dizgi ="TodAy is Saturday"
# sesli="a,e,ı,i,o,ö,u,ü"

# sesli_sayisi = 0
# sabit_sayisi = 0
# dizgiYeni = dizgi.replace(" ","").lower()
# print(dizgiYeni)
# for i in dizgiYeni:
#   if i in sesli:
#     sesli_sayisi += 1
#   else:
#     sabit_sayisi += 1

# print(f"Dizgide {sesli_sayisi} tane sesli harf var.")
# print(f"Dizgide {sabit_sayisi} tane sabit harf var.")



#------------------------------------------------

# dict1 = {'Apple': 15, 'Orange': 35, 'Melon': 20, 'Banana': 50, 'Pear': 40}  

# for value in dict1:
#       dict1[value] *=2
# print(dict1) 
# print(dict1.items()) 
# #---------------
# print(dict1.keys())
# #--------------- 
# print(dict1.values()) 


#---------------------------------------------------
# word=input("bir kelime giriniz")
# Ayrac=input("bir ayrac giriniz")
# Tekrar=int(input("tekrar sayısı giriniz"))

# print(f"{(word+Ayrac)*(Tekrar-1)+ word}")

#------------------------------------

# cars = [{'make':'Ford', 'model':'F150 XLT','year':2018, 'color':'Gray'}, \
#         {'make':'Porsche', 'model':'Cayman GT4', 'year':2016, 'color':'Gold'}, \
#         {'make':'Audi', 'model': 'S7 Prestige', 'year':2017, 'color':'Blue'},\
#         {'make':'Mercedes', 'model': 'S550', 'year':2019, 'color':'Black'}]


# özkan = sorted(cars,key=lambda x:x["year"])
# özkan1 = sorted(cars,key=lambda x:x["make"])
# özkan2 = sorted(cars,key=lambda x:x["color"])


# print(özkan)
# print(özkan1)
# print(özkan2)

#--------------------------------------------------------
# import json

# # json_cars =  '{ "Make":"Mercedes", "Model":"E-200", "Year":2015 }'
# json_cars =  '2015'

# # json_cars = '[{"Make":"Mercedes","Model":"E-200","Year":2015}, {"Make":"Ford","Model":"F150","Year":2018}]'
# cars = json.loads(json_cars)

# print(type(cars))  # Output: <class 'list'>
# print(cars) 

 # Output: [{'Make': 'Mercedes', 'Model': 'E-200', 'Year': 2015}, {'Make': 'Ford', 'Model': 'F150', 'Year': 2018}]


 #-----------------------------------


# def numDecodings(s: str) -> int:
#     if len(s) == 0 or (len(s) == 1 and s[0] == '0'):
#         return 0
#     return numDecodingsHelper(s, len(s))
 
 
# def numDecodingsHelper(s: str, n: int) -> int:
#     if n == 0 or n == 1:
#         return 1
#     count = 0
#     if s[n-1] > "0":

#         count = numDecodingsHelper(s, n-1)

#     if (s[n - 2] == '1' or (s[n - 2] == '2'  and s[n - 1] < '7')):  #Alfabede 26 harf var. Eğer 27 den küçük veya 1 e eşitse

#         count += numDecodingsHelper(s, n - 2)

#     return count
 
 
# # Driver code
# digits = "111"
# print("Count is ", numDecodings(digits))


#------------------------------------------

# wordlist = ["dog", "deer", "deal","neyde"]

# def get_suggestions(wordlist, prefix):
#     return [word for word in wordlist if word[:len(prefix)] == prefix] 
# print(get_suggestions(wordlist,"de"))


#-----------------------------------


# def find_prefix(query, possible_queries):
 
#   result1 = [q for q in possible_queries if q.startswith(query)]
#   result2 = [q for q in possible_queries if q.endswith(query)]
#   result = set(result1 + result2)
#   return result


# queries = ["dog", "deer", "deal","deneyde"]
# print(find_prefix("de", queries))

#-----------------------------------


# def fib(n):
#     if n <= 1:
#         return n
#     return fib(n-1) + fib(n-2)
# def countWays(s):
#     return fib(s + 1  )

# sayi = 8
# print(countWays(sayi ))  # +1 buraya da yazabiliriz!

#------------------------------------------

# MAX_CHARS = 26
 
# # This function calculates number of unique characters
# # using a associative array count[]. Returns true if
# # no. of characters are less than required else returns
# # false.
# def isValid(count, k):
#     val = 0
#     for i in range(MAX_CHARS):
#         if count[i] > 0:
#             val += 1
 
#     # Return true if k is greater than or equal to val
#     return (k >= val)
 
# # Finds the maximum substring with exactly k unique characters
# def kUniques(s, k):
#     u = 0 # number of unique characters
#     n = len(s)
 
#     # Associative array to store the count
#     count = [0] * MAX_CHARS
 
#     # Traverse the string, fills the associative array
#     # count[] and count number of unique characters
#     for i in range(n):
#         if count[ord(s[i])-ord('a')] == 0:
#             u += 1
#         count[ord(s[i])-ord('a')] += 1
 
#     # If there are not enough unique characters, show
#     # an error message.
#     if u < k:
#         print ("Not enough unique characters")
#         return
 
#     # Otherwise take a window with first element in it.
#     # start and end variables.
#     curr_start = 0
#     curr_end = 0
 
#     # Also initialize values for result longest window
#     max_window_size = 1
#     max_window_start = 0
 
#     # Initialize associative array count[] with zero
#     count = [0] * len(count)
 
#     count[ord(s[0])-ord('a')] += 1 # put the first character
 
#     # Start from the second character and add
#     # characters in window according to above
#     # explanation
#     for i in range(1,n):
 
#         # Add the character 's[i]' to current window
#         count[ord(s[i])-ord('a')] += 1
#         curr_end+=1
 
#         # If there are more than k unique characters in
#         # current window, remove from left side
#         while not isValid(count, k):
#             count[ord(s[curr_start])-ord('a')] -= 1
#             curr_start += 1
 
#         # Update the max window size if required
#         if curr_end-curr_start+1 > max_window_size:
#             max_window_size = curr_end-curr_start+1
#             max_window_start = curr_start
 
#     print ("Max substring is : " + s[max_window_start:max_window_start  + max_window_size]
#     + " with length " + str(max_window_size))
 
# # Driver function
# s = "aabacbebebe"
# k = 3
# kUniques(s, k)


#----------------------------------------------------------


# def findStep(n):
#     if ( n == 0 ):
#         return 1
#     elif (n < 0):
#         return 0
#     else:
#         return findStep(n - 3) + findStep(n - 2) + findStep(n - 1)
# # Driver code
# n = 5
# print(findStep(n))