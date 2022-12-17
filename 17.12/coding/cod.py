dizgi ="TodAy is Saturday"
sesli="a,e,ı,i,o,ö,u,ü"

sesli_sayisi = 0
sabit_sayisi = 0
dizgiYeni = dizgi.replace(" ","").lower()
print(dizgiYeni)
for i in dizgiYeni:
  if i in sesli:
    sesli_sayisi += 1
  else:
    sabit_sayisi += 1

print(f"Dizgide {sesli_sayisi} tane sesli harf var.")
print(f"Dizgide {sabit_sayisi} tane sabit harf var.")



#------------------------------------------------


