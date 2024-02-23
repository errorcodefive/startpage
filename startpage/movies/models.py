from django.db import models

# Create your models here.
class MovieModel(models.Model):

    movie_title = models.CharField(max_length = 100, help_text ="Movie Title")
    movie_release_year = models.IntegerField(help_text = "Release Year")

    def __str__(self):
        return (str(self.movie_title) & " " & str(self.movie_release_year))