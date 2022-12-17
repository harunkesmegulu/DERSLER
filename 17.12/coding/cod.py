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
word=input("bir kelime giriniz")
Ayrac=input("bir ayrac giriniz")
Tekrar=int(input("tekrar sayısı giriniz"))

print(f"{(word+Ayrac)*(Tekrar-1)+ word}")


