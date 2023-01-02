from django.db import models

# Create your models here.
class Profile(models.Model):
    username= models.CharField(max_length=50)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    age = models.IntegerField(blank=True, null=True)
    bio= models.TextField(blank=True)
    register_date= models.DateTimeField(blank=True, null=True) 
    # path = models.ForeignKey(Path, related_name)  

    def __str__(self):return self.username + ' ' +self.first_name +' '+ self.last_name