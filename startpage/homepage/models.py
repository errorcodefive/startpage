from django.db import models

# Create your models here.
class Bookmarks(models.Model):
    bookmark_name = models.CharField(max_length = 50)
    bookmark_link = models.CharField(max_length = 200, help_text = "URL")
    bookmark_order = models.IntegerField(help_text = "Display Order")

    def __str__(self):
        return str(self.bookmark_name)