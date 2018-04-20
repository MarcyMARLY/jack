from django.shortcuts import get_object_or_404,render
from django.http import HttpResponse,HttpResponseRedirect, JsonResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from django.template import loader
from django.http import Http404
from .models import Organization,Card,Gather
from django.urls import reverse
from .serializers import OrganizationSerializer,CardSerializer,GatherSerializer

# Create your views here.
@csrf_exempt
def organizations(request):

@csrf_exempt
def organization_detail(request, or_id):

@csrf_exempt
def gathers(request):

@csrf_exempt
def gather_detail(request, or_id, g_id):

@csrf_exempt
def cards(request):

@csrf_exempt
def card_detail(request, or_id, g_id, c_id):
