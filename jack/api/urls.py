from django.urls import path
from api import views

app_name = 'api'
urlpatterns = [
    # path('admin/', ),
    path('users/',views.users),
    path('users/checks/', views.checkuser),
    path('organizations/', views.organizations),
    path('organizations/<int:or_id>/',views.organization_detail),
    path('organizations/<int:or_id>/gathers/',views.gathers),
    path('organizations/<int:or_id>/gathers/<int:g_id>',views.gather_detail),
    path('organizations/<int:or_id>/gathers/<int:g_id>/cards',views.cards),
    path('organizations/<int:or_id>/gathers/<int:g_id>/cards/<int:c_id>',views.card_detail),

]
