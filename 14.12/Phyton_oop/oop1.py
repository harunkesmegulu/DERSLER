
"""
port os
os.system('cls' if os.name == 'nt' else 'clear')

print("hello world")
print("-------------------------------------")

"""

#nesne tabanlı programlamanın faydaları nelerdir?
"""Nesne tabanlı programlama sayesinde programlar daha anlaşılır, düzenli ve bakımı kolay hale gelir. OOP sayesinde, kod tekrar kullanımı ve modüler hale gelir. Bu da programların geliştirilmesini ve bakımını kolaylaştırır. Ayrıca, OOP sayesinde kod paylaşımı ve işbirliği daha kolay hale gelir """


#! Everything in Python is class
"""
def print_types(data):
    for i in data:
        print (i, type(i))

test =[122, "victor", [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]
print_types(test)

"""
"""
#! defining class:
class Person:
    name = "victor"
    age =33

person1 = Person()  #creating object or instance
person2 = Person()

print(person1.name) #instamces inherites class atributes
print(person2.age)

print("-----------------clas'ta yapılan değişiklik diğerlerini instanceları etkiliyor--------------------")
Person.job = "developer"
print(person1.job)
print("-------------------------------------")
"""
"""
class Person:
    name = "victor"
    age = 33

person1 = Person()
person2 = Person()

person1.location = "turkey"
person2 de location bilgisi yoktur.
"""
"""
class Person:
    name = "victor"
    age = 33

    def test(self):  #hangi instance çalıştırılırsa gönderilmiş olan argumanı temsil ediyor.
        print("test")

person1 = Person()
person2 = Person()


person1.test()
person2.test()

"""
"""
class Person:
    company = "tsk"
    
    def test(self): 
        print("test")
    def get_details(self):
        print(f"{self.name} - {self.age}")

person1 = Person()
person2 = Person()


person1.name = "victor"
person1.age = 33
person1.get_details() 

person2.name = "henry"
person2.age = 33
person2.get_details() 

"""

"""
class Person:
    company = "tsk"
    
    def test(self): 
        print("test")

    def set_details(self, name, age):
        self.name = name
        self.age = age


    def get_details(self):
        print(f"{self.name} - {self.age}")

person1 = Person()
person2 = Person()


person1.name = "victor"
person1.age = 33
person1.get_details() 

person2.set_details("henry",15)
person2.get_details()

"""

class Person:
    company = "tsk"
    
    def test(self): 
        print("test")

    def set_details(self, name, age):
        self.name = name
        self.age = age


    def get_details(self):
        print(f"{self.name} - {self.age}")

    @staticmethod   #static methodlar self parametreleri almazlar
    def salute():
        print("Hi there")

person1 = Person()
person2 = Person()


person1.name = "victor"
person1.age = 33
person1.get_details() 

person2.set_details("henry",15)
person2.get_details()

person1.salute()
person2.salute()








print("---------------------------------------------------------")